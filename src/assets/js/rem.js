(function flexible (window, document) {
    var docEl = document.documentElement
    var dpr = window.devicePixelRatio || 1
    var isPC = isPCFn()
    var isApp = ~navigator.userAgent.toLowerCase().indexOf('zebra')
    var isAndroid = ~navigator.userAgent.toLowerCase().indexOf('android')
    var isIPhone = ~navigator.userAgent.toLowerCase().indexOf('iphone')

    function isPCFn(){
      var userAgentInfo = navigator.userAgent;
      var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
      var flag = true;
      for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) { 
          flag = false; 
          break; 
        }
      }
      return flag;  
    }

    // adjust body font size
    function setBodyFontSize () {
      if (document.body) {
        document.body.style.fontSize = (12 * dpr) + 'px'
      }
      else {
        document.addEventListener('DOMContentLoaded', setBodyFontSize)
      }
    }
    // setBodyFontSize();

    // set 1rem = viewWidth / 10
    function setRemUnit () {
      var clientWidth = isPC ? 750 : docEl.clientWidth
      var rem = clientWidth / 10
      docEl.style.fontSize = rem + 'px'
    }

    setRemUnit()

    // reset rem unit on page resize
    window.addEventListener('resize', setRemUnit)
    window.addEventListener('pageshow', function (e) {
      if (e.persisted) {
        setRemUnit()
      }
    })

    // detect 0.5px supports
    if (dpr >= 2) {
      var fakeBody = document.createElement('body')
      var testElement = document.createElement('div')
      testElement.style.border = '.5px solid transparent'
      fakeBody.appendChild(testElement)
      docEl.appendChild(fakeBody)
      if (testElement.offsetHeight === 1) {
        docEl.classList.add('hairlines')
      }
      docEl.removeChild(fakeBody)
    }

    // pc
    if (isPC) {
      docEl.classList.add('desktop')
    } else if(isApp) {
      docEl.classList.add('hybrid')
    } else {
      docEl.classList.add('h5')
    }

    if (isAndroid) {
      docEl.classList.add('android')
    } else if (isIPhone) {
      docEl.classList.add('iPhone')
    }
}(window, document))