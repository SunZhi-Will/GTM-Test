!function () {
    console.log('Test')
    var boot_js = document.createElement('script')
    boot_js.type = 'text/javascript';
    // boot_js.async = true;
    boot_js.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
    boot_js.integrity = "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
    boot_js.crossorigin = "anonymous"
    boot_js.defer = true;

    var boot_css = document.createElement('link')
    boot_css.rel = "stylesheet"
    boot_css.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
    boot_css.integrity = "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
    boot_css.crossorigin = "anonymous"

    var spyder_js = document.createElement('script')
    spyder_js.type = 'text/javascript';
    // spyder_js.async = true;
    spyder_js.src = "script.js"
    spyder_js.defer = true;

    var banner = document.createElement('div');
    banner.id = 'cookie-consent-banner';

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://cookie.dspyder.tw/', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                banner.innerHTML = xhr.response;
            } else {
                console.error('Error fetching consent banner HTML:', xhr.statusText);
            }
        }
    };
    xhr.send();

    var popup = document.getElementsByTagName('head')[0]

    popup.parentNode.insertBefore(spyder_js, popup)
    popup.parentNode.insertBefore(boot_css, popup)
    popup.parentNode.insertBefore(boot_js, popup)
    popup.parentNode.insertBefore(banner, popup)

}();