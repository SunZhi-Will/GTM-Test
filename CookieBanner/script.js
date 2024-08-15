
console.log('1231231313')
document.getElementsByTagName('head')[0].innerHTML = '<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>'
console.log(document.getElementsByTagName('head')[0])


const translations = {
    EN: {
        cookietitle: "Cookie settings",
        consentTitle: "Consent",
        aboutTitle: "About Cookie",
        description: "We use cookies to provide you with the best possible experience. They also allow us to analyze user behavior in order to constantly improve the website for you.",
        necessary: "Necessary",
        analytics: "Analytics",
        preferences: "Preferences",
        marketing: "Marketing",
        selectAll: "Select All",
        deselectAll: "Deselect All",
        saveSettings: "Save Settings",
        tabConsent: "Consent",
        tabDetails: "Details",
        tabAbout: "About",
        consentDescription: 'We use cookies to provide you with the best possible experience. They also allow us to analyze user behavior in order to constantly improve the website for you.',
        detailsDescription: 'Here is detailed information about the site.',
        aboutDescriptioncookie: "Cookies are small text files that can be used by websites to make a user's experience more efficient.",
        aboutDescriptionstore: "To comply with GDPR privacy regulations, we need your consent to store certain cookies in your browser to enhance your experience on our website. Once you agree, you can change or withdraw your consent at any time.",
        datailNecessary: "Necessary",
        datailwords: "Necessary cookies help make a website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.",
        datailAnalytics: "Analytics",
        datailwords: "Analytics helps website owners understand how visitors interact with their site. It enables the storage of data, such as cookies, related to analytics, for example, page view duration.",
        datailPreferences: "Preferences",
        Preferencesword: "To save users' preferences for changing the way the website behaves, such as language, currency, or region.",
        datailPreferences: "Marketing",
        Marketingword: "Marketing cookies are used to track user behavior across websites to display ads that match user interests or preferences. The behavioral data collected will be shared with third-party advertisers, such as Google and Meta.",
        language_btn: "Language",
        language_en: "EN",
        language_zh: "ZH-TW"
    },
    ZH: {
        cookietitle: "Cookie 使用者同意",
        consentTitle: "同意說明",
        aboutTitle: "關於 Cookie",
        necessary: "必要項目",
        analytics: "分析用途",
        preferences: "個人偏好",
        marketing: "行銷用途",
        selectAll: "全選",
        deselectAll: "取消全選",
        saveSettings: "保存設定",
        tabConsent: "同意設定",
        tabDetails: "Cookie詳細",
        tabAbout: "關於Cookie",
        consentDescription: "我們使用 Cookie 讓您提供最佳體驗。請允許我們分析用戶行為，以便讓我們網站有更好的體驗。",
        detailsDescription: '這裡為Detail分頁',
        aboutDescriptioncookie: "Cookies 是一個小型的文字檔案，可以被用於網站以提升用戶使用者體驗",
        aboutDescriptionstore: "為了符合目前GDPR使用者隱私法規，儲放特定的cookie需要您的同意，才會將儲存在您的瀏覽器中，以便提升我們的網站服務體驗。在您同意後，可以隨時進行取消、修改.",
        datailNecessary: "必要功能",
        datailwords: "必要項目Cookie，讓網站可以使用基本功能，例如頁面導向，導向網站的安全區域內，網站如果沒有必要項目的Cookie即無法正常運行。",
        datailAnalytics: "分析功能",
        analyticswords: "分析項目提供網站使用者，了解網站用戶與網站的互動，例如瀏覽頁面。此功能也會儲存關於分析功能的Cookie，例如頁面停留的時間、互動等。",
        datailPreferences: "用戶偏好",
        Preferencesword: "保存使用者個人的使用偏好，例如瀏覽器語言、幣別、用戶地區等。",
        datailMarketing: "行銷用途",
        Marketingword: "行銷用途的Cookie為使用於追蹤網站使用者行為，以利於呈現最適合使用者的廣告。這些數據都會傳送至第三方平台，例如GOOGLE, META等廣告商。",
        language_btn: "語言",
        language_en: "英文",
        language_zh: "中文"
    }
};




document.addEventListener('DOMContentLoaded', function () {

    console.log(document.getElementsByTagName('head')[0])
    var tabs = document.querySelectorAll('.page-item');
    var contents = document.querySelectorAll('.tab-content');
    var words = document.querySelectorAll('.tab-word');


    tabs.forEach(function (tab, index) {
        tab.addEventListener('click', function () {
            tabs.forEach(function (t) {
                t.classList.remove('active');
            });
            contents.forEach(function (content) {
                content.classList.remove('active');
            });
            words.forEach(function (word) {
                word.classList.remove('d-none');
                if (index == 0) {
                    words[1].classList.add('d-none')
                    words[2].classList.add('d-none')
                }
                if (index == 1) {
                    words[0].classList.add('d-none')
                    words[2].classList.add('d-none')
                }
                if (index == 2) {
                    words[0].classList.add('d-none')
                    words[1].classList.add('d-none')
                }
            })
            tab.classList.add('active');
            var contentId = tab.id.replace('-tab', '-content');
            var contentToShow = document.getElementById(contentId);
            if (contentToShow) {
                contentToShow.classList.add('active');
            }
        });
    });
    const consent_analytics = document.querySelectorAll('.consent-analytics')
    const consent_preferences = document.querySelectorAll('.consent-preferences')
    const consent_marketings = document.querySelectorAll('.consent-marketing')
    consent_analytics.forEach(function (consent_analytic, index) {
        consent_analytic.addEventListener('click', () => {
            if (index === 0 && consent_analytics[0].checked == true) {
                consent_analytics[1].checked = true
            }
            else if (index === 1 && consent_analytics[1].checked == true) {
                consent_analytics[0].checked = true
            }
            else if (index === 0 && consent_analytics[0].checked == false) {
                consent_analytics[1].checked = false
            }
            else if (index === 1 && consent_analytics[1].checked == false) {
                consent_analytics[0].checked = false
            }
        })
    })

    consent_preferences.forEach(function (consent_preference, index) {
        consent_preference.addEventListener('click', () => {
            if (index === 0 && consent_preferences[0].checked == true) {
                consent_preference[1].checked = true
            }
            else if (index === 1 && consent_preferences[1].checked == true) {
                consent_preferences[0].checked = true
            }
            else if (index === 0 && consent_preferences[0].checked == false) {
                consent_preferences[1].checked = false
            }
            else if (index === 1 && consent_preferences[1].checked == false) {
                consent_preferences[0].checked = false
            }
        })
    })

    consent_marketings.forEach(function (consent_marketing, index) {
        consent_marketing.addEventListener('click', () => {
            if (index === 0 && consent_marketings[0].checked == true) {
                consent_marketings[1].checked = true
            }
            else if (index === 1 && consent_marketings[1].checked == true) {
                consent_marketings[0].checked = true
            }
            else if (index === 0 && consent_marketings[0].checked == false) {
                consent_marketings[1].checked = false
            }
            else if (index === 1 && consent_marketings[1].checked == false) {
                consent_marketings[0].checked = false
            }
        })
    })

    /*修改視窗隱藏開啟*/
    document.getElementById('floatingButton').addEventListener('click', function (event) {
        event.preventDefault();
        const chatWindow = document.querySelector('.consent-Window');
        if (chatWindow.classList.contains('d-none')) {
            chatWindow.classList.remove('d-none');
        } else {
            chatWindow.classList.add('d-none');
        }
    });

});





function setLanguage(language = "EN") {
    const elements = document.querySelectorAll('[data-lang-key]');
    console.log(elements)
    elements.forEach(element => {

        const key = element.getAttribute('data-lang-key');
        console.log(key)
        element.textContent = translations[language][key];
    });
}

function reject_all() {
    const consent_analytics = document.querySelectorAll('.consent-analytics')
    const consent_preferences = document.querySelectorAll('.consent-preferences')
    const consent_marketings = document.querySelectorAll('.consent-marketing')
    consent_analytics.forEach(consent_analytic => {
        consent_analytic.checked = false
    })
    consent_preferences.forEach(consent_preference => {
        consent_preference.checked = false
    })
    consent_marketings.forEach(consent_marketing => {
        consent_marketing.checked = false
    })
}

function select_all() {
    const consent_analytics = document.querySelectorAll('.consent-analytics')
    const consent_preferences = document.querySelectorAll('.consent-preferences')
    const consent_marketings = document.querySelectorAll('.consent-marketing')
    consent_analytics.forEach(consent_analytic => {
        consent_analytic.checked = true
    })
    consent_preferences.forEach(consent_preference => {
        consent_preference.checked = true
    })
    consent_marketings.forEach(consent_marketing => {
        consent_marketing.checked = true
    })
}

function openTab(event, tabName) {
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.style.display = 'none');

    const tabLinks = document.querySelectorAll('.tab-link');
    tabLinks.forEach(link => link.classList.remove('active'));

    document.getElementById(tabName).style.display = 'block';
    event.currentTarget.classList.add('active');
}

function consent_push() {
    const event_obj = { "event": "consent" }
    const consent_analytics = document.querySelectorAll('.consent-analytics')
    if (consent_analytics[0].checked == true) {
        event_obj['analytics_storage'] = "granted"
    } else {
        event_obj['analytics_storage'] = "denied"
    }

    const consent_preferences = document.querySelectorAll('.consent-preferences')
    if (consent_preferences[0].checked == true) {
        event_obj['personalization_storage'] = "granted"
        event_obj['functionality_storage'] = "granted"
    } else {
        event_obj['personalization_storage'] = "denied"
        event_obj['functionality_storage'] = "denied"
    }

    const consent_marketings = document.querySelectorAll('.consent-marketing')
    if (consent_marketings[0].checked == true) {
        event_obj['ad_storage'] = "granted"
        event_obj['ad_user_data'] = "granted"
        event_obj['ad_personalization'] = "granted"
    } else {
        event_obj['ad_storage'] = "denied"
        event_obj['ad_user_data'] = "denied"
        event_obj['ad_personalization'] = "denied"
    }

    dataLayer.push(event_obj)
    const chatWindow = document.querySelector('.consent-Window');
    chatWindow.classList.add('d-none')
}



setLanguage('zh');