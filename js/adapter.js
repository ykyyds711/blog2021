(function () {
    function resizeBaseFontSize() {
        var rootHtml = document.documentElement,
            deviceWidth = rootHtml.clientWidth;
        if (deviceWidth > 640) {
            deviceWidth = 640;
        }
        rootHtml.style.fontSize = deviceWidth / 3.75 + "px";

          //1rem = 100px
        
          console.log(deviceWidth / 3.75 + "px");
    }
    resizeBaseFontSize();
    window.addEventListener("resize", resizeBaseFontSize, false);
    window.addEventListener("orientationchange", resizeBaseFontSize, false);
})();