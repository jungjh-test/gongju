
let handsonDataLine = [
    {
        division : "광",
        vertical : "643",
        horizontal : "954",
        vertical_horizontal : "1,396",
        direct_connection : "44,829",
        total : "47,822",
    },
    {
        division : "UTP",
        vertical : "207",
        horizontal : "509",
        vertical_horizontal : "1",
        direct_connection : "20,681",
        total : "21,398",
    },
    {
        division : "합계",
        vertical : "850",
        horizontal : "1,463",
        vertical_horizontal : "1,397",
        direct_connection : "65,510",
        total : "69,220",
    },
];

let handsonDataType = [
    {
        cable_type : "LC-LC",
        total_lines : "46,263",
        vertical : "609",
        horizontal : "952",
        vertical_horizontal : "1,396",
        direct_connection : "43,306",
    },
    {
        cable_type : "LC-SC",
        total_lines : "62",
        vertical : "16",
        horizontal : "2",
        vertical_horizontal : "0",
        direct_connection : "44",
    },
    {
        cable_type : "MPO",
        total_lines : "1,435",
        vertical : "0",
        horizontal : "0",
        vertical_horizontal : "0",
        direct_connection : "1,435",
    },
    {
        cable_type : "MTRJ-LC",
        total_lines : "12",
        vertical : "0",
        horizontal : "0",
        vertical_horizontal : "0",
        direct_connection : "12",
    },
];

let handsonDataWork = [
    {
        organization_name : "",
        division : "",
        start : "",
        end : "",
        purpose : "",
        worker : "",
        target : "",
        line_count : "",
        requester : "",
        contact : "",
        position : "",
        department_name : "",
        request_date : "",
        application : "",
    },
];

$(function() {

    let handsonColumnsLine = [
        createHandsonColumn('NO', 'NO'),
        createHandsonColumn('division', '구분'),
        createHandsonColumn('vertical', '수직'),
        createHandsonColumn('horizontal', '수평'),
        createHandsonColumn('vertical_horizontal', '수직ㆍ수평'),
        createHandsonColumn('direct_connection', '직접연결'),
        createHandsonColumn('total', '합계'),
    ];

    let handsonColumnsType = [
        createHandsonColumn('NO', 'NO'),
        createHandsonColumn('cable_type', '케이블 타입'),
        createHandsonColumn('total_lines', '총 회선수'),
        createHandsonColumn('vertical', '수직'),
        createHandsonColumn('horizontal', '수평'),
        createHandsonColumn('vertical_horizontal', '수직ㆍ수평'),
        createHandsonColumn('direct_connection', '직접연결'),
    ];

    let handsonColumnsWork = [
        createHandsonColumn('NO', 'NO'),
        createHandsonColumn('organization_name', '기관명'),
        createHandsonColumn('division', '구분'),
        createHandsonColumn('start', '시작'),
        createHandsonColumn('end', '종료'),
        createHandsonColumn('purpose', '목적'),
        createHandsonColumn('worker', '작업자'),
        createHandsonColumn('target', '대상'),
        createHandsonColumn('line_count', '회선 수'),
        createHandsonColumn('requester', '요청자'),
        createHandsonColumn('contact', '연락처'),
        createHandsonColumn('position', '직급(직책)'),
        createHandsonColumn('department_name', '부서명'),
        createHandsonColumn('request_date', '신청날짜'),
        createHandsonColumn('application', '신청서'),
    ];

    let containerLine = document.getElementById('line-handsontable-container');
    let hotLine = new Handsontable(containerLine, {
        data: handsonDataLine,
        columns: handsonColumnsLine,
        colHeaders: true,            // 열 헤더 표시
        rowHeaders: false,            // 행 번호 표시
        contextMenu: true,           // 마우스 오른쪽 클릭 메뉴 활성화
        autoRowSize: true,           // 행 높이 자동 조정
        autoColumnSize: true,        // 열 높이 자동 조정
        columnSorting: true,
        width: '100%',
        height: 150,                 // 테이블 높이 설정
        stretchH: 'all',         // 열이 부모 크기에 맞게 늘어남
        overflow: 'hidden',
    });

    let containerType = document.getElementById('type-handsontable-container');
    let hotType = new Handsontable(containerType, {
        data: handsonDataType,
        columns: handsonColumnsType,
        colHeaders: true,            // 열 헤더 표시
        rowHeaders: false,            // 행 번호 표시
        contextMenu: true,           // 마우스 오른쪽 클릭 메뉴 활성화
        autoRowSize: true,           // 행 높이 자동 조정
        autoColumnSize: true,        // 열 높이 자동 조정
        columnSorting: true,
        width: '100%',
        height: 150,                 // 테이블 높이 설정
        stretchH: 'all',         // 열이 부모 크기에 맞게 늘어남
        overflow: 'hidden',
    });

    let containerWork = document.getElementById('work-handsontable-container');
    let hotWork = new Handsontable(containerWork, {
        data: handsonDataWork,
        columns: handsonColumnsWork,
        colHeaders: true,            // 열 헤더 표시
        rowHeaders: false,            // 행 번호 표시
        contextMenu: true,           // 마우스 오른쪽 클릭 메뉴 활성화
        autoRowSize: true,           // 행 높이 자동 조정
        autoColumnSize: true,        // 열 높이 자동 조정
        columnSorting: true,
        width: '100%',
        height: 200,                 // 테이블 높이 설정
        stretchH: 'all',         // 열이 부모 크기에 맞게 늘어남
        overflow: 'hidden',
    });

});