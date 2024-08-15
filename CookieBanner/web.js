!function () {
    console.log('Test')
    // 創建一個新的 iframe 元素
    var iframe = document.createElement('iframe');
    iframe.style.width = '100%';
    iframe.style.height = '150px';
    iframe.style.border = 'none';
    iframe.style.position = 'fixed';
    iframe.style.bottom = '0';
    iframe.style.left = '0';
    iframe.style.zIndex = '9999'; // 確保 iframe 在頁面頂層顯示

    // 將 iframe 插入到頁面中的指定容器中
    document.getElementsByTagName('body')[0].appendChild(iframe);

    // 定義 Cookie Consent 的 HTML 內容
    var htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Cookie Consent</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f5f5f5;
                    margin: 0;
                    padding: 20px;
                    box-sizing: border-box;
                }
                .consent-banner {
                    background-color: #333;
                    color: #fff;
                    padding: 15px;
                    text-align: center;
                    position: fixed;
                    bottom: 0;
                    width: 100%;
                }
                .consent-banner button {
                    background-color: #4CAF50;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    cursor: pointer;
                    font-size: 14px;
                    margin-left: 10px;
                }
            </style>
        </head>
        <body>
            <div class="consent-banner">
                <p>We use cookies to ensure you get the best experience on our website. <a href="#" style="color: #4CAF50;">Learn more</a></p>
                <button onclick="acceptCookies()">Accept</button>
            </div>
            <script>
                function acceptCookies() {
                    alert('Cookies accepted!');
                    // 在這裡你可以設置 cookie，並隱藏或移除 iframe
                    // document.cookie = "cookieConsent=true; path=/;";
                    window.parent.document.getElementById('cookieConsentContainer').remove();
                }
            </script>
        </body>
        </html>
    `;

    // 將 HTML 內容寫入 iframe
    iframe.contentWindow.document.open();
    iframe.contentWindow.document.write(htmlContent);
    iframe.contentWindow.document.close();

}();