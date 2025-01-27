
let handsonData = [
    {
        category : "2F4 (별관 2층)",
        location : "1F4",
        os2_total_quantity : "",
        os2_usage : "",
        os2_usage_rate : "",
        os2_remaining_quantity : "",
        os1_total_quantity : "",
        os1_usage : "",
        os1_usage_rate : "",
        os1_remaining_quantity : "",
        om1_total_quantity : "",
        om1_usage : "",
        om1_usage_rate : "",
        om1_remaining_quantity : "",
        om3_total_quantity : "24",
        om3_usage : "2",
        om3_usage_rate : "8.3",
        om3_remaining_quantity : "",
        om4_total_quantity : "",
        om4_usage : "",
        om4_usage_rate : "",
        om4_remaining_quantity : "",
        utp_total_quantity : "24",
        utp_usage : "1",
        utp_usage_rate : "4.2",
    },
    {
        category : "소계",
        location : "",
        os2_total_quantity : "",
        os2_usage : "",
        os2_usage_rate : "",
        os2_remaining_quantity : "",
        os1_total_quantity : "",
        os1_usage : "",
        os1_usage_rate : "",
        os1_remaining_quantity : "",
        om1_total_quantity : "",
        om1_usage : "",
        om1_usage_rate : "",
        om1_remaining_quantity : "",
        om3_total_quantity : "24",
        om3_usage : "2",
        om3_usage_rate : "8.3",
        om3_remaining_quantity : "",
        om4_total_quantity : "",
        om4_usage : "",
        om4_usage_rate : "",
        om4_remaining_quantity : "",
        utp_total_quantity : "24",
        utp_usage : "1",
        utp_usage_rate : "4.2",
    },
];

$(function() {

    $('input[name="datetimes"]').daterangepicker({
        startDate: moment().subtract(1, 'years'), // 1년 전 날짜
        endDate: moment(), // 현재 날짜
        locale: {
            format: 'YYYY-MM-DD' // 날짜 형식을 'yyyy-mm-dd'로 설정
        },
    }, function (start, end) {
        // 사용자 정의 날짜를 입력 필드에 표시
        $('input[name="datetimes"]').val(start.format('YYYY-MM-DD') + ' ~ ' + end.format('YYYY-MM-DD'));
    });

    let handsonColumns = [
        createHandsonColumn('NO', 'NO'),
        createHandsonColumn('category', '구분'),
        createHandsonColumn('location', '위치'),
        /* OS2 */
        createHandsonColumn('os2_total_quantity', '총수량'),
        createHandsonColumn('os2_usage', '사용량'),
        createHandsonColumn('os2_usage_rate', '사용율(%)'),
        createHandsonColumn('os2_remaining_quantity', '총수량'),
        /* OS1 */
        createHandsonColumn('os1_total_quantity', '총수량'),
        createHandsonColumn('os1_usage', '사용량'),
        createHandsonColumn('os1_usage_rate', '사용율(%)'),
        createHandsonColumn('os1_remaining_quantity', '총수량'),
        /* OM1 */
        createHandsonColumn('om1_total_quantity', '총수량'),
        createHandsonColumn('om1_usage', '사용량'),
        createHandsonColumn('om1_usage_rate', '사용율(%)'),
        createHandsonColumn('om1_remaining_quantity', '총수량'),
        /* OM3 */
        createHandsonColumn('om3_total_quantity', '총수량'),
        createHandsonColumn('om3_usage', '사용량'),
        createHandsonColumn('om3_usage_rate', '사용율(%)'),
        createHandsonColumn('om3_remaining_quantity', '총수량'),
        /* OM4 */
        createHandsonColumn('om4_total_quantity', '총수량'),
        createHandsonColumn('om4_usage', '사용량'),
        createHandsonColumn('om4_usage_rate', '사용율(%)'),
        createHandsonColumn('om4_remaining_quantity', '총수량'),
        /* UTP */
        createHandsonColumn('utp_total_quantity', '총수량'),
        createHandsonColumn('utp_usage', '사용량'),
        createHandsonColumn('utp_usage_rate', '사용율(%)'),
    ];

    let container = document.getElementById('handsontable-container');
    let hot = new Handsontable(container, {
        data: handsonData,
        columns: handsonColumns,
        colHeaders: true,            // 열 헤더 표시
        rowHeaders: false,            // 행 번호 표시
        contextMenu: true,           // 마우스 오른쪽 클릭 메뉴 활성화
        autoRowSize: true,           // 행 높이 자동 조정
        autoColumnSize: true,        // 열 높이 자동 조정
        columnSorting: true,
        width: '100%',
        height: 500,                 // 테이블 높이 설정
        stretchH: 'all',         // 열이 부모 크기에 맞게 늘어남
        overflow: 'hidden',
    });

});