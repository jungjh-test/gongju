


function createHandsonColumn(field, title, method = null) {

    let column = {
        data: field,
        title: title,
        className: 'htCenter htMiddle', // 가로 및 세로 가운데 정렬
    };

    if (field === 'checkbox') {
        column.type = 'checkbox'; // 체크박스형
        column.renderer = Handsontable.renderers.CheckboxRenderer; // 내장 체크박스 렌더러 사용
    } else {
        // 기본 또는 기타 유형에서는 TextRenderer를 사용
        column.renderer = function(instance, td, row, col, prop, value, cellProperties) {
            Handsontable.renderers.TextRenderer.apply(this, arguments);
            td.style.whiteSpace = 'nowrap'; // 줄바꿈 방지
        };
    }

    // method가 지정된 경우, 커스텀 렌더러 생성
    if (method && typeof method === 'function') {
        column.renderer = function (instance, td, row, col, prop, value, cellProperties) {
            // 버튼을 렌더링하며, 전달된 method를 실행하도록 설정
            td.innerHTML = `<button type="button" class="custom-btn custom-gray-btn" onclick="${method.name}(${row})">${title}</button>`;
            return td;
        };
    }

    return column;
}


// 전체 선택/해제 함수
let isAllSelected = true;
function toggleSelectAll(hotInstance, col, isChecked) {
    if (isAllSelected){
        isAllSelected = false;
    }
    else{
        isAllSelected = true;
    }

    const rowCount = hotInstance.countRows();

    for (let row = 0; row < rowCount; row++) {
        hotInstance.setDataAtCell(row, col, isAllSelected); // 모든 행의 체크박스 값을 변경
    }
}

// 선택박스 체크된 row 반환 함수
function checkSelectAll(hot){
    const tableData = hot.getData();

    // 선택된 행(Row)만 필터링
    return tableData.filter((row, index) => {
        // 체크박스 상태를 확인 (첫 번째 컬럼 값이 `true`인지 확인)
        const isChecked = hot.getDataAtCell(index, 0); // 0은 체크박스 열의 인덱스
        return isChecked === true; // 체크된 행만 리턴
    });
}

// handsontable refresh
function tableRefresh(url, data = {}) {
    $.ajax({
        url: url,
        method: 'post',
        contentType: 'application/json',
        data : JSON.stringify(data),
        dataType : 'JSON',
        success: function (res) {
            hot.loadData(res.rows);
            document.getElementById('table-cnt').textContent = `전체 개수 : ${res.total}개`;
        },
        error: function () {
            alert('데이터를 불러오는 중 오류가 발생했습니다.');
        }
    });
}
