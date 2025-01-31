/**
 * requestFormHot.js
 * - 부모창(포설신청) Handsontable 초기화
 * - 최종 등록(saveRequest) 시 데이터 전송
 */
let parentHot = null;  // 부모창 Handsontable 인스턴스

$(document).ready(function(){
    initParentHot();
});

/**
 * 부모창 Handsontable 초기화
 */
function initParentHot(){
    const container = document.getElementById("workerParentHot");

    parentHot = new Handsontable(container, {
        data: [],  // 초기 빈 배열
        rowHeaders: true,
        colHeaders: ["회사명","직책","성명","연락처","삭제"],
        columns: [
            { data: "companyName", type: "text" },
            { data: "jobTitle", type: "text" },
            { data: "workerName", type: "text" },
            { data: "contact", type: "text" },
            {
                data: "",
                renderer: deleteButtonRenderer,
                readOnly: true
            }
        ],
        width: "100%",
        height: 300,
        licenseKey: "non-commercial-and-evaluation"
    });
}

/**
 * 삭제 버튼 커스텀 렌더러
 */
function deleteButtonRenderer(instance, td, row, col, prop, value, cellProps){
    Handsontable.dom.empty(td);
    const btn = document.createElement("button");
    btn.innerText = "삭제";
    btn.className = "btn btn-sm btn-danger";
    btn.onclick = function(){
        instance.alter("remove_row", row);
    };
    td.appendChild(btn);
}

/**
 * 모달에서 선택된 작업자들을 추가
 * (workerArr = [{companyName, jobTitle, workerName, contact, checked}, ...])
 */
/*
function addSelectedWorkers(workerArr){
    // 기존 데이터
    let currentData = parentHot.getSourceData();
    // checked==true 인 항목만 push
    for(let i=0; i<workerArr.length; i++){
        let w = workerArr[i];
        if(w.checked === true){
            currentData.push({
                companyName: w.companyName,
                jobTitle: w.jobTitle,
                workerName: w.workerName,
                contact: w.contact
            });
        }
    }
    parentHot.loadData(currentData);
}
*/


/**
 * 모달에서 '체크된 작업자'를 추가할 때 호출
 */
function addSelectedWorkers(modalRows){
    // modalRows = [{checked, companyName, jobTitle, workerName, contact, workerId}, ...]
    let currentData = parentHot.getSourceData();
    for(let i=0; i<modalRows.length; i++){
        let row = modalRows[i];
        if(row.checked){
            // 이미 부모창에 있는 workerId면 중복 추가 막을 수도 있음
            // 여기서는 그냥 push
            currentData.push({
                companyName: row.companyName,
                jobTitle: row.jobTitle,
                workerName: row.workerName,
                contact: row.contact,
                workerId: row.workerId
            });
        }
    }
    parentHot.loadData(currentData);
}

/**
 * 최종 등록(서버 전송)
 */
function saveRequest(){
    // Handsontable -> SourceData
    let workerData = parentHot.getSourceData();
    // 예: [{companyName, jobTitle, workerName, contact}, ...]

    // 화면의 다른 폼 값도 수집(기관명, 작업목적 등) - 생략
    let param = {
        // orgName: ...
        workerList: workerData
    };

    $.ajax({
        url: "/cable/request/save",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(param),
        success: function(res){
            if(res === "SUCCESS"){
                alert("등록되었습니다.");
            } else {
                alert("오류 발생");
            }
        }
    });
}

/**
 * 부모창에서, 현재 선택된 작업자들의 ID를 Set으로 반환
 * 모달 열 때 사용
 */
function getSelectedWorkerIdSet(){
    let data = parentHot.getSourceData();
    let idSet = new Set();
    data.forEach(row => {
        if(row.workerId){
            idSet.add(row.workerId);
        }
    });
    return idSet;
}
