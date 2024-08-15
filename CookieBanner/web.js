!function () {
    console.log('Test')
    // 創建一個新的 iframe 元素
    var iframe = document.createElement('div');
    iframe.style.width = '100%';
    iframe.style.height = '150px';
    iframe.style.border = 'none';
    iframe.style.position = 'fixed';
    iframe.style.bottom = '0';
    iframe.style.left = '0';
    iframe.style.zIndex = '9999'; // 確保 iframe 在頁面頂層顯示

    // 將 iframe 插入到頁面中的指定容器中
    document.getElementsByTagName('body')[0].appendChild(iframe);

    // 獲取當前頁面的 URL
    const url = new URL(window.location.href);

    // 獲取查詢參數中的 type
    const type = url.searchParams.get('type');

    // 檢查 type 是否存在
    if (type) {
        console.log('Type:', type);
    } else {
        console.log('No type parameter found');
    }


    function setupConsentBanner(shadow) {

        const floatingButton = shadow.getElementById('floatingButton');
        const consentWindow = shadow.getElementById('Consent');

        const tabs = shadow.querySelectorAll('.page-item');


        const contents = shadow.querySelectorAll('.tab-word');



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
                shadow.getElementById(contentId).classList.remove('d-none');

                // if (this.id === 'consent-tab') {
                //     showConsent();
                // } else {
                //     consentContent.classList.add('d-none');
                //     contents.forEach(content => content.classList.add('d-none'));
                //     const contentId = this.id.replace('-tab', '-content');
                //     shadow.getElementById(contentId).classList.remove('d-none');
                // }
            });
        });
    }

    function setWeb(shadow) {

        console.log('1231231313')



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




        shadow.addEventListener('DOMContentLoaded', function () {

            console.log(shadow.getElementsByTagName('head')[0])
            var tabs = shadow.querySelectorAll('.page-item');
            var contents = shadow.querySelectorAll('.tab-content');
            var words = shadow.querySelectorAll('.tab-word');


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
                    var contentToShow = shadow.getElementById(contentId);
                    if (contentToShow) {
                        contentToShow.classList.add('active');
                    }
                });
            });
            const consent_analytics = shadow.querySelectorAll('.consent-analytics')
            const consent_preferences = shadow.querySelectorAll('.consent-preferences')
            const consent_marketings = shadow.querySelectorAll('.consent-marketing')
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
            shadow.getElementById('floatingButton').addEventListener('click', function (event) {
                event.preventDefault();
                const chatWindow = shadow.querySelector('.consent-Window');
                if (chatWindow.classList.contains('d-none')) {
                    chatWindow.classList.remove('d-none');
                } else {
                    chatWindow.classList.add('d-none');
                }
            });

        });





        function setLanguage(language = "EN") {
            const elements = shadow.querySelectorAll('[data-lang-key]');
            console.log(elements)
            elements.forEach(element => {

                const key = element.getAttribute('data-lang-key');
                element.textContent = translations[language][key];
            });
        }

        function reject_all() {
            const consent_analytics = shadow.querySelectorAll('.consent-analytics')
            const consent_preferences = shadow.querySelectorAll('.consent-preferences')
            const consent_marketings = shadow.querySelectorAll('.consent-marketing')
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
            const consent_analytics = shadow.querySelectorAll('.consent-analytics')
            const consent_preferences = shadow.querySelectorAll('.consent-preferences')
            const consent_marketings = shadow.querySelectorAll('.consent-marketing')
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
            const tabContents = shadow.querySelectorAll('.tab-content');
            tabContents.forEach(content => content.style.display = 'none');

            const tabLinks = shadow.querySelectorAll('.tab-link');
            tabLinks.forEach(link => link.classList.remove('active'));

            shadow.getElementById(tabName).style.display = 'block';
            event.currentTarget.classList.add('active');
        }

        let dataLayer = []
        function consent_push() {
            const event_obj = { "event": "consent" }
            const consent_analytics = shadow.querySelectorAll('.consent-analytics')
            if (consent_analytics[0].checked == true) {
                event_obj['analytics_storage'] = "granted"
            } else {
                event_obj['analytics_storage'] = "denied"
            }

            const consent_preferences = shadow.querySelectorAll('.consent-preferences')
            if (consent_preferences[0].checked == true) {
                event_obj['personalization_storage'] = "granted"
                event_obj['functionality_storage'] = "granted"
            } else {
                event_obj['personalization_storage'] = "denied"
                event_obj['functionality_storage'] = "denied"
            }

            const consent_marketings = shadow.querySelectorAll('.consent-marketing')
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
            const chatWindow = shadow.querySelector('.consent-Window');
            chatWindow.classList.add('d-none')
        }

        shadow.getElementById('btn-reject-all').addEventListener('click', reject_all);
        shadow.getElementById('btn-accept-all').addEventListener('click', select_all);
        // shadow.getElementById('btn-accept-all').addEventListener('click', openTab);
        shadow.getElementById('btn-save-settings').addEventListener('click', consent_push);



        setLanguage('ZH');

    }

    // 定義 Cookie Consent 的 HTML 內容
    var htmlContent = `
    <!-- Boostrape -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <!-- Boostrape -->
    <script src="https://sunzhi-will.github.io/GTM-Test/CookieBanner/script.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Sora:wght@400;500;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="https://sunzhi-will.github.io/GTM-Test/CookieBanner/style.css" />
    <!-- 動畫 -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
    <!-- 動畫 -->
        <!-- 懸浮Icon -->
    <button class="float my-float" id="floatingButton">
      <img class="float my-float"  src="https://sunzhi-will.github.io/GTM-Test/CookieBanner/gear.png" alt="floating-icon"/></img>
    </button>    
    <!-- 懸浮Icon -->

    <div id="Consent" class="tab-content consent-Window fade-in-image d-none">
        <div id="cookie-consent-banner" class="cookie-consent-banner">
            <h3 data-lang-key="cookietitle">Cookie settings</h3>


            <!-- */bootstrap模板/* -->
            <nav aria-label="choosepage">
                <ul class="pagination pagination-lg">
                <li class="page-item active" id="consent-tab" aria-current="page">
                    <button class="page-link" data-lang-key="tabConsent">Consent</button>
                </li>
                <li class="page-item" id="details-tab">
                    <button class="page-link" data-lang-key="tabDetails">Details</button>
                </li>
                <li class="page-item" id="about-tab">
                    <button class="page-link" data-lang-key="tabAbout">About</button>
                </li>
            </ul>
              </nav>


            <!-- <p data-lang-key="description">We use cookies to provide you with the best possible experience. They also allow us to analyze user behavior in order to constantly improve the website for you.</p> -->
            <div id="consent-content" class="tab-word active">
                <h2 data-lang-key="consentTitle">Consent</h2>
                <p data-lang-key="consentDescription">We use cookies to provide you with the best possible experience. They also allow us to analyze user behavior in order to constantly improve the website for you.</p>
                </br>

                  <!-- Boostrape Toggle -->
                  <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked disabled>
                    <label class="form-check-label" for="flexSwitchCheckDefault" value="Necessary"><span data-lang-key="necessary">Necessary</span></label>
                  </div>
                  <div class="form-check form-switch">
                    <input class="form-check-input consent-analytics" type="checkbox" id="flexSwitchCheckChecked" checked>
                    <label class="form-check-label" for="flexSwitchCheckChecked" value="Analytics"><span data-lang-key="analytics">Analytics</span></label>
                  </div>
                  <div class="form-check form-switch">
                    <input class="form-check-input consent-preferences" type="checkbox" id="flexSwitchCheckChecked" checked>
                    <label class="form-check-label" for="flexSwitchCheckDisabled" value="Preferences"><span data-lang-key="preferences">Preferences</span></label>
                  </div>
                  <div class="form-check form-switch">
                    <input class="form-check-input consent-marketing" type="checkbox" id="flexSwitchCheckChecked" checked >
                    <label class="form-check-label" for="flexSwitchCheckCheckedDisabled" value="Marketing"><span data-lang-key="marketing">Marketing</span></label>
                  </div>
                <!-- Boostrape Toggle -->
                </br>

                <!-- 按鈕 -->
                <div class="tab-change-consent" id="consent-content">
                    <div class="cookie-buttons">
                        <button id="btn-accept-all" class="btn btn-outline-primary"   data-lang-key="selectAll">Select All</button>
                        <button id="btn-reject-all" class="btn btn-outline-danger"  data-lang-key="deselectAll">Deselect All</button>
                        <button id="btn-save-settings" class="btn btn-outline-success" data-lang-key="saveSettings">Save Settings</button>
                        
                        <button class="btn btn-outline-secondary dropdown-toggle"  data-lang-key="language_btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                          Language
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                          <li><a class="dropdown-item" data-lang-key="language_zh" onclick="setLanguage('ZH')" >Zh-Tw</a></li>
                          <li><a class="dropdown-item" data-lang-key="language_en" onclick="setLanguage('EN')" >English</a></li>
                        </ul>

                        <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
                    </div>
                </div>
                
            </div>

            <div id="details-content" class="tab-word d-none">
                <!-- Boostrape 手風琴 -->
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button"  data-lang-key="datailNecessary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Necessary
                        </button>
                        
                      </h2>
                      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body" data-lang-key="datailwords">
                          <p >Necessary cookies help make a website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.</p>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" data-lang-key="datailAnalytics" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Analytics
                        </button>
                      </h2>
                      <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                          <div class="form-check form-switch">
                            <span data-lang-key="analytics">Analytics</span>
                            <input class="form-check-input consent-analytics" type="checkbox" id="flexSwitchCheckChecked" checked>
                            <label class="form-check-label" for="flexSwitchCheckChecked" value="Analytics"></label>
                          </div>
                          <p data-lang-key="analyticswords">Analytics helps website owners understand how visitors interact with their site. It enables the storage of data, such as cookies, related to analytics, for example, page view duration.</p> 
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" data-lang-key="datailPreferences" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Preferences
                        </button>
                      </h2>
                      <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                          <div class="form-check form-switch">
                            <input class="form-check-input consent-preferences" type="checkbox" id="flexSwitchCheckChecked" checked>
                            <label class="form-check-label" for="flexSwitchCheckDisabled" value="Preferences"><span data-lang-key="preferences">Preferences</span></label>
                          </div>
                          <p data-lang-key="Preferencesword">To save users' preferences for changing the way the website behaves, such as language, currency, or region.</p>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingFour">
                          <button class="accordion-button collapsed" data-lang-key="datailMarketing"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Marketing
                          </button>
                        </h2>
                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                            <div class="form-check form-switch">
                              <input class="form-check-input consent-marketing" type="checkbox" id="flexSwitchCheckChecked" checked >
                              <label class="form-check-label" for="flexSwitchCheckCheckedDisabled" value="Marketing"><span data-lang-key="marketing">Marketing</span></label>
                            </div>
                            <p data-lang-key="Marketingword">Marketing cookies are used to track user behavior across websites to display ads that match user interests or preferences. The behavioral data collected will be shared with third-party advertisers, such as Google and Meta.</p>
                          </div>
                        </div>
                      </div>

                  </div>
                <!-- Boostrape 手風琴 -->


            </div>

            <div id="about-content" class="tab-word d-none">
                <h2 data-lang-key="aboutTitle">About Cookie</h2>
                <p data-lang-key="aboutDescriptioncookie">Cookies are small text files that can be used by websites to make a user's experience more efficient.</p>
                </br>
                <p data-lang-key="aboutDescriptionstore">To comply with GDPR privacy regulations, we need your consent to store certain cookies in your browser to enhance your experience on our website. Once you agree, you can change or withdraw your consent at any time.</p>                    
                </br>
                <p>Made By 黑客數位</p>                    
              </div>
        </div>
    </div>
    `;
    const shadow = iframe.attachShadow({ mode: 'open' });

    // 將 HTML 內容寫入 iframe
    shadow.innerHTML = htmlContent;


    var script = document.createElement('script');
    script.src = "https://sunzhi-will.github.io/GTM-Test/bootstrap-5.3.3-dist/js/bootstrap.bundle.min.js";
    script.integrity = "sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz";
    script.crossOrigin = "anonymous";
    shadow.appendChild(script);

    var script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js";
    shadow.appendChild(script);

    var script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js";
    shadow.appendChild(script);




    // shadow.getElementsByTagName('head')[0].innerHTML = '<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>'



    setupConsentBanner(shadow);
    setWeb(shadow)

}();