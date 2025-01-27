/**
 * 작업자 검색 팝업 JS
 */
$(document).ready(function(){
    // 검색 버튼
    $("#btnWorkerSearch").on("click", function(){
        searchWorker();
    });
});

/**
 * 작업자 목록 조회
 */
function searchWorker() {
    const param = {
        companyName: $("#companyName").val(),
        workerName: $("#workerName").val()
    };

    $.ajax({
        url: "/cable/request/getWorkerList",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(param),
        success: function(data) {
            drawWorkerTable(data);
        }
    });
}

/**
 * 테이블 그리기
 */
function drawWorkerTable(list) {
    let html = "";
    if(list && list.length > 0) {
        for(let i=0; i<list.length; i++){
            let w = list[i];
            html += "<tr>";
            html += "<td><input type='checkbox' class='chkWorker' data-worker='"
                  + JSON.stringify(w) + "'/></td>";
            html += "<td>" + w.COMPANY_NAME + "</td>";
            html += "<td>" + w.JOB_TITLE + "</td>";
            html += "<td>" + w.WORKER_NAME + "</td>";
            html += "<td>" + w.CONTACT + "</td>";
            html += "</tr>";
        }
    } else {
        html += "<tr><td colspan='5'>No data.</td></tr>";
    }
    $("#popupWorkerTbody").html(html);
}

/**
 * 선택된 작업자 등록 -> 부모창의 함수 호출
 */
$("#btnRegisterSelected").on("click", function() {
    const selected = [];
    $(".chkWorker:checked").each(function(){
        let jsonStr = $(this).attr("data-worker");
        let obj = JSON.parse(jsonStr);
        selected.push(obj);
    });

    if(selected.length === 0) {
        alert("작업자를 선택하세요.");
        return;
    }

    // 부모창 함수 호출
    if(window.opener && window.opener.addWorkerRow) {
        for(let i=0; i<selected.length; i++){
            window.opener.addWorkerRow(selected[i]);
        }
    }
    window.close();
});
