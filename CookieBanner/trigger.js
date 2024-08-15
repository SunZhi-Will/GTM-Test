
const floatingButton = document.getElementById('floatingButton');
const consentWindow = document.getElementById('Consent');

const tabs = document.querySelectorAll('.page-item');


const contents = document.querySelectorAll('.tab-word');



// 懸浮按鈕點擊事件
floatingButton.addEventListener('click', function () {
    console.log("TEST2")
    if (consentWindow.classList.contains('d-none')) {
        consentWindow.classList.add('active');
        consentWindow.classList.remove('d-none');
    } else {
        consentWindow.classList.add('d-none');
        consentWindow.classList.remove('active');

    }
});

function showConsent() {
    // 顯示 Consent 內容
    consentContent.classList.remove('d-none');
    // 隱藏其他內容
    contents.forEach(content => {
        if (content.id !== 'consent-content') {
            content.classList.add('d-none');
        }
    });
    // 設置 Consent 標籤為活動狀態
    tabs.forEach(tab => tab.classList.remove('active'));
    consentTab.classList.add('active');
}

tabs.forEach(tab => {
    tab.addEventListener('click', function () {
        tabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        const contentId = this.id.replace('-tab', '-content');
        contents.forEach(t => t.classList.add('d-none'));
        document.getElementById(contentId).classList.remove('d-none');

        // if (this.id === 'consent-tab') {
        //     showConsent();
        // } else {
        //     consentContent.classList.add('d-none');
        //     contents.forEach(content => content.classList.add('d-none'));
        //     const contentId = this.id.replace('-tab', '-content');
        //     document.getElementById(contentId).classList.remove('d-none');
        // }
    });
});