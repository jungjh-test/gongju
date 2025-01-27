/**
 * 포설신청 목록 화면 JS
 */
$(document).ready(function() {

    // 검색 버튼 클릭
    $("#btnSearch").on("click", function() {
        loadRequestList();
    });

    // 처음 로드시 목록 조회
    loadRequestList();
});

/**
 * 목록을 불러와 테이블에 출력
 */
function loadRequestList() {
    const param = {
        orgName: $("#orgName").val(),
        approvalStatus: $("#approvalStatus").val()
    };

    $.ajax({
        url: "/cable/request/getList",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(param),
        success: function(data) {
            // data: List<Map<String,Object>>
            drawTable(data);
        }
    });
}

/**
 * 테이블 그리기
 */
function drawTable(list) {
    let html = "";
    if(list && list.length > 0) {
        for(let i=0; i<list.length; i++){
            let row = list[i];
            html += "<tr>";
            html += "<td>" + (i+1) + "</td>";
            html += "<td>" + row.ORG_NAME + "</td>";
            html += "<td>" + row.DEPT_NAME + "</td>";
            html += "<td>" + row.WORK_PURPOSE + "</td>";
            // 작업일자
            let workDate = (row.WORK_START_DATE || '') + "~" + (row.WORK_END_DATE || '');
            html += "<td>" + workDate + "</td>";
            html += "<td>" + row.APPROVAL_STATUS + "</td>";
            html += "<td>" + row.REG_DT + "</td>";
            // 신청서 버튼
            html += "<td><button type='button' onclick='goForm("+ row.REQUEST_ID +")'>신청서</button></td>";
            html += "</tr>";
        }
    } else {
        html += "<tr><td colspan='8'>No data.</td></tr>";
    }

    $("#requestTbody").html(html);
}

/**
 * 신청서 페이지로 이동
 */
function goForm(requestId) {
    location.href = "/cable/request/form?requestId=" + requestId;
}
