/**
 * 포설신청 작성/수정 화면 JS
 */
$(document).ready(function() {

    // 저장 버튼
    $("#btnSave").on("click", function() {
        saveRequest();
    });

    // 작업자 추가 버튼 -> 팝업 열기
    $("#btnAddWorker").on("click", function() {
        openWorkerPopup();
    });

    // 작업내역 추가 버튼
    $("#btnAddDetail").on("click", function(){
        addDetailRow();
    });

});

/**
 * 포설 신청 저장
 */
function saveRequest() {
    const param = {
        requestId: $("#requestId").val(),
        orgName: $("#orgName").val(),
        deptName: $("#deptName").val(),
        positionTitle: $("#positionTitle").val(),
        workPurpose: $("#workPurpose").val(),
        workDateType: $("#workDateType").val(),
        workStartDate: $("#workStartDate").val(),
        workEndDate: $("#workEndDate").val(),
        // 작업자 리스트
        workerList: getWorkerListFromTable(),
        // 작업내역 리스트
        detailList: getDetailListFromTable(),
        // 로그인사용자 등 필요정보
        loginUserId: "testUser"
    };

    $.ajax({
        url: "/cable/request/saveRequest",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(param),
        success: function(res) {
            if(res.result === "SUCCESS") {
                alert("저장되었습니다.");
                // 목록으로 이동
                location.href = "/cable/request/list";
            } else {
                alert("오류가 발생했습니다.");
            }
        }
    });
}

/**
 * 테이블에서 작업자 리스트 추출
 */
function getWorkerListFromTable() {
    let arr = [];
    $("#workerTbody tr").each(function() {
        let companyName = $(this).find(".td-companyName").text();
        let jobTitle = $(this).find(".td-jobTitle").text();
        let workerName = $(this).find(".td-workerName").text();
        let contact = $(this).find(".td-contact").text();
        // 실제로는 workerId를 숨겨두고 가져오는 식 필요
        arr.push({
            companyName: companyName,
            jobTitle: jobTitle,
            workerName: workerName,
            contact: contact
        });
    });
    return arr;
}

/**
 * 테이블에서 작업내역 리스트 추출
 */
function getDetailListFromTable() {
    let arr = [];
    $("#detailTbody tr").each(function(){
        let cableType = $(this).find(".input-cableType").val();
        let cableColor = $(this).find(".input-cableColor").val();
        let cableLength = $(this).find(".input-cableLength").val();
        let startPort = $(this).find(".input-startPort").val();
        let endPort = $(this).find(".input-endPort").val();
        let remarks = $(this).find(".input-remarks").val();
        arr.push({
            cableType: cableType,
            cableColor: cableColor,
            cableLength: cableLength,
            startPort: startPort,
            endPort: endPort,
            remarks: remarks
        });
    });
    return arr;
}

/**
 * 작업자 팝업 열기
 */
function openWorkerPopup() {
    let url = "/cable/request/workerPopup";
    let option = "width=800,height=600,resizable=no,scrollbars=yes";
    window.open(url, "workerPopup", option);
}

/**
 * 팝업에서 선택된 작업자를 추가하는 함수(예시)
 * 실제로는 팝업 -> 부모창 호출 window.opener.xxxx(...) 방식으로 처리
 */
function addWorkerRow(workerObj){
    let html = "<tr>";
    html += "<td class='td-companyName'>" + workerObj.companyName + "</td>";
    html += "<td class='td-jobTitle'>" + workerObj.jobTitle + "</td>";
    html += "<td class='td-workerName'>" + workerObj.workerName + "</td>";
    html += "<td class='td-contact'>" + workerObj.contact + "</td>";
    html += "<td><button type='button' onclick='$(this).closest(\"tr\").remove();'>삭제</button></td>";
    html += "</tr>";
    $("#workerTbody").append(html);
}

/**
 * 작업내역 행 추가
 */
function addDetailRow() {
    let html = "<tr>";
    html += "<td><input type='text' class='input-cableType' placeholder='UTP'></td>";
    html += "<td><input type='text' class='input-cableColor' placeholder='적색'></td>";
    html += "<td><input type='number' class='input-cableLength' placeholder='길이(m)'></td>";
    html += "<td><input type='text' class='input-startPort' placeholder='장비/포트'></td>";
    html += "<td><input type='text' class='input-endPort' placeholder='장비/포트'></td>";
    html += "<td><input type='text' class='input-remarks' placeholder='비고'></td>";
    html += "<td><button type='button' onclick='$(this).closest(\"tr\").remove();'>삭제</button></td>";
    html += "</tr>";
    $("#detailTbody").append(html);
}
