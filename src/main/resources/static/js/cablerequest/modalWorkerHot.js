/**
 * workerModalHot.js
 * - 모달 내부 Handsontable
 * - 전체 작업자 목록 로드 + 체크박스 열
 * - 선택된 행을 부모창에 전달
 */
let modalHot = null;
let modalData = [];

// 전역 or 상위 스코프에서 가져올 Set
window.selectedWorkerIdSet = new Set();
// ↑ 실제로는 부모창의 getSelectedWorkerIdSet() 결과를 여기에 복사


$(document).ready(function(){
    initModalHot();

    // 모달 열릴 때 -> 전체 작업자 목록 로드
    /*$('#workerModal').on('show.bs.modal', function(){
        loadAllWorkers();
    });*/

    $('#workerModal').on('shown.bs.modal', function(){
        window.selectedWorkerIdSet = getSelectedWorkerIdSet();
        loadAllWorkers();
        setTimeout(function(){
            modalHot.render();
        },0);
    });

    // "선택한 작업자 추가" 버튼
    $("#btnAddSelected").on("click", function(){
        addSelectedRowsToParent();
    });

    // [검색] 버튼
    $("#btnSearchWorker").on("click", function(){
        // 회사명/직책/성명/연락처 입력값 가져옴
        let param = {
            companyName: $("#searchCompanyName").val(),
            jobTitle:    $("#searchJobTitle").val(),
            workerName:  $("#searchWorkerName").val(),
            contact:     $("#searchContact").val()
        };

        // 필드가 하나도 없으면 전체 목록과 동일하지만,
        // 여기서는 검색조건이 있는 경우 LIKE 검색
        loadSearchWorkers(param);
    });

    // "작업자 등록" 버튼
    $("#btnCreateWorker").on("click", function(){
        createWorker();
    });

    // [선택한 작업자 삭제] -> 모달 테이블 내에서 행 삭제
    $("#btnDeleteSelected").on("click", function(){
        deleteSelectedRows();
    });
});

/**
 * 모달 Handsontable 초기화
 */
function initModalHot(){
    const container = document.getElementById("workerModalHot");
    modalHot = new Handsontable(container, {
        data: modalData,
        rowHeaders: true,
        colHeaders: ["선택","회사명","직책","성명","연락처"],
        columns: [
            { data: "checked", type: "checkbox" },
            { data: "companyName", type: "text", readOnly: true },
            { data: "jobTitle", type: "text", readOnly: true },
            { data: "workerName", type: "text", readOnly: true },
            { data: "contact", type: "text", readOnly: true },
        ],
        width: "100%",
        height: 300,
        licenseKey: "non-commercial-and-evaluation"
    });
}

/**
 * 전체 작업자 목록 로드 (예: /worker/getListAll)
 */
/*function loadAllWorkers(){
    $.ajax({
        url: "/worker/getListAll",
        type: "GET",
        success: function(data){
            // data = [{WORKER_ID, COMPANY_NAME, JOB_TITLE, WORKER_NAME, CONTACT}, ...]
            modalData = (data || []).map(item => ({
                // checked = true if workerId is in parent's set
                checked: idSet.has(item.WORKER_ID),
                companyName: item.COMPANY_NAME,
                jobTitle: item.JOB_TITLE,
                workerName: item.WORKER_NAME,
                contact: item.CONTACT
            }));
            modalHot.loadData(modalData);
        }
    });
}*/

/** 전체 작업자 목록 로드 */
function loadAllWorkers(){
    $.ajax({
        url: "/worker/getListAll",
        type: "GET",
        success: function(data){
            // data => [{WORKER_ID, COMPANY_NAME, JOB_TITLE, WORKER_NAME, CONTACT}, ...]
            const idSet = window.selectedWorkerIdSet || new Set();
            modalData = (data || []).map(item => {
                return {
                    // checked = true if workerId is in parent's set
                    checked: idSet.has(item.WORKER_ID),
                    companyName: item.COMPANY_NAME,
                    jobTitle: item.JOB_TITLE,
                    workerName: item.WORKER_NAME,
                    contact: item.CONTACT,
                    workerId: item.WORKER_ID
                };
            });
            modalHot.loadData(modalData);
            modalHot.render();
        }
    });
}



/** 검색 목록 로드 (조건 LIKE) */
function loadSearchWorkers(param){
    // param = {companyName, jobTitle, workerName, contact}
    $.ajax({
        url: "/worker/search",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(param),
        success: function(data){
            const idSet = window.selectedWorkerIdSet || new Set();
            modalData = (data || []).map(item => ({
                checked: idSet.has(item.WORKER_ID),
                companyName: item.COMPANY_NAME,
                jobTitle: item.JOB_TITLE,
                workerName: item.WORKER_NAME,
                contact: item.CONTACT
            }));
            modalHot.loadData(modalData);
            modalHot.render();
        }
    });
}


/**
 * 선택된 행(checked=true) -> 부모창
 */
function addSelectedRowsToParent(){
    let currentData = modalHot.getSourceData();
    // 그대로 parent function에 넘긴다
    if(window.addSelectedWorkers){
        window.addSelectedWorkers(currentData);
    }
    // 모달 닫기
    $("#workerModal").modal("hide");
}

/** 새 작업자 등록 -> DB Insert 후 목록 갱신 */
function createWorker(){
    let param = {
        companyName: $("#newCompanyName").val(),
        jobTitle: $("#newJobTitle").val(),
        workerName: $("#newWorkerName").val(),
        contact: $("#newContact").val()
    };

    // 유효성 검사
    if(!param.workerName){
        alert("성명을 입력해주세요");
        return;
    }
    // Ajax Insert
    $.ajax({
        url: "/worker/create",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(param),
        success: function(res){
            if(res.result === "SUCCESS"){
                alert("작업자 등록 완료");
                // 등록 폼 리셋
                $("#newCompanyName").val("");
                $("#newJobTitle").val("");
                $("#newWorkerName").val("");
                $("#newContact").val("");
                // 목록 재조회
                loadAllWorkers();
            } else {
                alert("등록 실패");
            }
        }
    });
}

/**
 * [새로 추가] 선택된 행(checked=true) 모달 내에서 삭제
 */
function deleteSelectedRows(){
    let data = modalHot.getSourceData();
    // 체크된(checked=true) 항목 제외하고 나머지만 남김
    let newData = data.filter(row => row.checked !== true);

    // 변경된 데이터로 로드
    modalHot.loadData(newData);
    modalHot.render();
}