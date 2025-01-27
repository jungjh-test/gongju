const popupManager = {
    /**
    * Prompt 메서드: 팝업 호출 설정
    * @param {Object} config - 사용자 설정 (URL, Title, Size 등)
    * @returns {Promise<any>} - 팝업 결과를 Promise로 반환
    */
    Prompt: function (config) {
        return new Promise((resolve, reject) => {
            const defaultConfig = {
                url: "",
                title: "Default Popup",
                width: 600,
                height: 400,
                resizable: true,
                scrollbars: true,
                centered: true, // 화면 중앙 여부 옵션 추가
            };
            const finalConfig = { ...defaultConfig, ...config };

            // 팝업 좌표 설정 (화면 중앙 계산)
            let left = 0;
            let top = 0;
            if (finalConfig.centered) {
                left = window.screenX + (window.outerWidth - finalConfig.width) / 2;
                top = window.screenY + (window.outerHeight - finalConfig.height) / 2;
            }

            // 팝업 창 옵션 문자열 생성
            const features = `
                width=${finalConfig.width},
                height=${finalConfig.height},
                resizable=${finalConfig.resizable ? "yes" : "no"},
                scrollbars=${finalConfig.scrollbars ? "yes" : "no"},
                left=${left},
                top=${top}
            `.trim();

            // 팝업 열기
            const popup = window.open(finalConfig.url, finalConfig.title, features);
            if (!popup) {
                reject("Popup blocked by browser or failed to open.");
                return;
            }

            // 팝업 닫힘 감지 및 결과 처리
            const checkPopupClosed = setInterval(() => {
                if (popup.closed) {
                    clearInterval(checkPopupClosed);

                    // 팝업 닫힘 후 결과 처리
                    resolve("Popup closed and processed."); // 예: 결과값 전달
                }
            }, 500);
        });
    },
};