/**
 * requestFormHot.js
 * - 하나의 파일에서:
 *   1) 작업자 Handsontable (workerHot)
 *   2) 작업내역 Handsontable (detailHot)
 * - 최종 등록(saveRequest) 시, 두 목록 + 상단 입력값을 합쳐 서버 전송
 */

let workerHot = null;   // 작업자 목록
let detailHot = null;   // 작업내역 목록

$(document).ready(function(){
    initWorkerHot();
    initDetailHot();
});

/** ================== [1. 작업자 목록] ================== */

/** 작업자 Handsontable 초기화 */
function initWorkerHot(){
    const container = document.getElementById("workerParentHot");
    workerHot = new Handsontable(container, {
        data: [],  // 초기 빈 배열
        rowHeaders: true,
        colHeaders: ["회사명","직책","성명","연락처","삭제"],
        colWidths: [120, 100, 100, 120, 80],
        columns: [
            { data: "companyName", type: "text" },
            { data: "jobTitle",    type: "text" },
            { data: "workerName",  type: "text" },
            { data: "contact",     type: "text" },
            {
                data: "",
                renderer: workerDeleteButtonRenderer,
                readOnly: true
            }
        ],
        width: "100%",
        height: 200,
        licenseKey: "non-commercial-and-evaluation"
    });
}

/** 작업자 테이블 "삭제" 버튼 커스텀 렌더러 */
function workerDeleteButtonRenderer(instance, td, row, col, prop, value, cellProps){
    Handsontable.dom.empty(td);
    const btn = document.createElement("button");
    btn.innerText = "삭제";
    btn.className = "btn btn-sm btn-danger";
    btn.onclick = function(){
        instance.alter("remove_row", row);
    };
    td.appendChild(btn);
}

/** 모달(작업자검색)에서 선택된 작업자들 추가 */
function addSelectedWorkers(modalRows){
    // modalRows = [{checked, companyName, jobTitle, workerName, contact, workerId}, ...]
    let currentData = workerHot.getSourceData();
    for(let i=0; i<modalRows.length; i++){
        let row = modalRows[i];
        if(row.checked){
            currentData.push({
                companyName: row.companyName,
                jobTitle:   row.jobTitle,
                workerName: row.workerName,
                contact:    row.contact,
                workerId:   row.workerId // PK
            });
        }
    }
    workerHot.loadData(currentData);
}

/** 부모창에서 현재 작업자들 ID Set을 반환 (모달에서 체크 유지용) */
function getSelectedWorkerIdSet(){
    let data = workerHot.getSourceData();
    let idSet = new Set();
    data.forEach(row => {
        if(row.workerId){
            idSet.add(row.workerId);
        }
    });
    return idSet;
}

/** ================== [2. 작업내역 목록] ================== */

/** 작업내역 Handsontable 초기화 */
function initDetailHot(){
    const container = document.getElementById("detailParentHot");
    detailHot = new Handsontable(container, {
        data: [],
        rowHeaders: true,
        colHeaders: [
            "타입","색상","길이","START좌표","END좌표","비고",
            "자산ID(START)","구성ID(START)","업무명(START)","포트(START)",
            "자산ID(END)","구성ID(END)","업무명(END)","포트(END)",
            "삭제"
        ],
        colWidths: [
            100,   // 타입
            100,   // 색상
            100,   // 길이
            120,   // START좌표
            120,   // END좌표
            60,   // 비고
            150,  // 자산ID(START)
            150,  // 구성ID(START)
            150,  // 업무명(START)
            100,   // 포트(START)
            150,  // 자산ID(END)
            150,  // 구성ID(END)
            150,  // 업무명(END)
            100,   // 포트(END)
            80   // 삭제
        ],

        columns: [
            { data:"cableType",   type:"text"},
            { data:"cableColor",  type:"text"},
            { data:"cableLength", type:"text"},
            { data:"startLabel",  type:"text"},
            { data:"endLabel",    type:"text"},
            { data:"remark",      type:"text"},

            { data:"startAssetId",  type:"text"},
            { data:"startConfigId", type:"text"},
            { data:"startEqpName",  type:"text"},
            { data:"startPort",     type:"text"},

            { data:"endAssetId",    type:"text"},
            { data:"endConfigId",   type:"text"},
            { data:"endEqpName",    type:"text"},
            { data:"endPort",       type:"text"},

            {
                data: "",
                renderer: detailDeleteButtonRenderer,
                readOnly: true
            }
        ],
        width: "100%",
        height: 200,
        licenseKey: "non-commercial-and-evaluation"
    });
}

/** 작업내역 "삭제" 버튼 렌더러 */
function detailDeleteButtonRenderer(instance, td, row, col, prop, value, cellProps){
    Handsontable.dom.empty(td);
    const btn = document.createElement("button");
    btn.innerText = "삭제";
    btn.className = "btn btn-sm btn-danger";
    btn.onclick = function(){
        instance.alter("remove_row", row);
    };
    td.appendChild(btn);
}

/** 모달(작업내역추가)에서 1행 추가 */
function addDetailRows(rowObj){
    // rowObj = {
    //   cableType, cableColor, cableLength,
    //   startLabel, endLabel, remark,
    //   startAssetId, startConfigId, startEqpName, startPort,
    //   endAssetId,   endConfigId,   endEqpName,   endPort
    // }
    let currentData = detailHot.getSourceData();
    currentData.push(rowObj);
    detailHot.loadData(currentData);
}

/** ================== [3. 최종 등록] ================== */

/** 최종 등록(서버 전송) */
function saveRequest(){
    // 1) 상단 폼 정보(기관명, 직급, 주무관, 연락처, 부서명, 작업목적, 날짜 등)
    //    -> id값이나 name값으로 가져오기 (아래는 예시)
    let orgName       = $("#orgNameSelect").val();    // 기관명
    let positionTitle = $("#positionTitle").val();    // 직급(직책)
    let jumugwan      = $("#jumugwan").val();         // 주무관
    let contact       = $("#contact").val();          // 연락처
    let deptName      = $("#deptName").val();         // 부서명
    let workPurpose   = $("#workPurpose").val();      // 작업목적
    let workDateType  = $("input[name=radio-group]:checked").val(); // 금일/금월/기간선택
    let workStartDate = $("#startDate").val();  // 기간선택 시
    let workEndDate   = $("#endDate").val();    // 기간선택 시
    // 등등

    // 2) 작업자 목록
    let workerData = workerHot.getSourceData();

    // 3) 작업내역 목록
    let detailData = detailHot.getSourceData();

    // 4) Ajax param
    let param = {
        requestInfo: {
            orgName: orgName,
            positionTitle: positionTitle,
            jumugwan: jumugwan,
            contact: contact,
            deptName: deptName,
            workPurpose: workPurpose,
            workDateType: workDateType,
            workStartDate: workStartDate,
            workEndDate: workEndDate,
            // etc...
        },
        workerList: workerData,
        detailList: detailData
    };

    // 5) 컨트롤러: CableRequestController.saveRequest (POST)
    $.ajax({
        url: "/cable/request/save",  // ex
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(param),
        success: function(res){
            if(res.result === "SUCCESS"){
                // 1) 신청완료 팝업
                alert("신청이 완료되었습니다.");

                // 2) /cable/manage/list 로 이동
                window.location.href = "/cable/manage/list";
            } else {
                alert("오류 발생: " + res.message);
            }
        }
    });
}
