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
                        <button id="btn-accept-all" class="btn btn-outline-primary" onclick="select_all()"  data-lang-key="selectAll">Select All</button>
                        <button id="btn-reject-all" class="btn btn-outline-danger" onclick="reject_all()" data-lang-key="deselectAll">Deselect All</button>
                        <button id="btn-save-settings" class="btn btn-outline-success" onclick="consent_push()" data-lang-key="saveSettings">Save Settings</button>
                        <button class="btn btn-outline-secondary dropdown-toggle"  data-lang-key="language_btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                          Language
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                          <li><a class="dropdown-item" data-lang-key="language_zh" onclick="setLanguage('ZH')" >Zh-Tw</a></li>
                          <li><a class="dropdown-item" data-lang-key="language_en" onclick="setLanguage('EN')" >English</a></li>
                        </ul>
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
    script.src = "https://sunzhi-will.github.io/GTM-Test/CookieBanner/script.js";
    shadow.appendChild(script);

    var script = document.createElement('script');
    script.src = "https://sunzhi-will.github.io/GTM-Test/CookieBanner/trigger.js";
    shadow.appendChild(script);

    var script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js";
    shadow.appendChild(script);

    var script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js";
    shadow.appendChild(script);


}();