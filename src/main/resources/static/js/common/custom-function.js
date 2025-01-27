
/**
    프로젝트 공통
*/
// 날짜 형식 검증 함수
function isValidDate(dateString) {
    const regex = /^\d{4}-\d{2}-\d{2}$/;

    if (!dateString.match(regex)) return false;

    const date = new Date(dateString);

    // 유효한 날짜인지 확인
    if (isNaN(date.getTime())) return false;

    // 주어진 날짜 문자열이 실제로 유효한지 확인
    const [year, month, day] = dateString.split('-').map(Number);
    return date.getFullYear() === year && (date.getMonth() + 1) === month && date.getDate() === day;
}


// 사용자가 데이터 입력 시 콤마 추가
function formatCurrency(input) {
    let value = input.value.replace(/,/g, '');
    if (value !== '' && !isNaN(value)) {
        input.value = Number(value).toLocaleString();
    }
}

// 서버에서 받아온 데이터에 콤마 추가
function addComma(input) {
    let value = input.value.replace(/,/g, '');
    if (value !== '' && !isNaN(value)) {
        input.value = Number(value).toLocaleString();
    }
}

// 콤마 제거
function removeComma(input) {
    return input.replace(/,/g, '');
}

// 글자 길이 체크
function checkLength(input, maxLength) {
    if (input.value.length > maxLength) {
        input.value = input.value.slice(0, maxLength);
    }
}

// 이전 페이지로 돌아감
function back() {
    window.history.back();
}

// 공통 검색 테이블 펴기/접기
function toggleFold() {
    const content = document.getElementById('foldableContent');
    const button = event.target;

    if (content.style.display === 'none') {
        content.style.display = ''; // 다시 표시
        button.textContent = '∨';  // 버튼 텍스트 복구
    } else {
        content.style.display = 'none'; // 숨기기
        button.textContent = '∧';  // 버튼 텍스트 변경
    }
}

/**
 * 서버 사이드에서 처리된 blob 데이터를 클라이언트 사이드에서 엑셀 파일 다운로드
 * @param {Blob} res - 서버에서 응답받은 파일 데이터
 * @param {string} fileName - 저장할 파일의 이름
 */
function downloadFileFunction(res, fileName){
    const url = window.URL.createObjectURL(res);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
}

///////
function usrlogout() {
    let fchk = document.getElementById("logoutform");
    fchk.submit();
}
