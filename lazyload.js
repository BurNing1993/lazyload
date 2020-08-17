var SELECTOR = '.lazy-loaded'
var SOURCE_SRC = 'data-src'

if (window.IntersectionObserver) {
    var observer = new IntersectionObserver(
        function (changes) {
            changes.forEach(function (change) {
                if (change.intersectionRatio > 0) {
                    var container = change.target;
                    var src = container.getAttribute(SOURCE_SRC)
                    container.setAttribute('src', src)
                    observer.unobserve(container)
                }
            });
        }
    );

    Array.from(document.querySelectorAll(SELECTOR)).forEach(function (item) {
        observer.observe(item);
    });
} else {
    console.log('浏览器不支持 IntersectionObserver API')
    var nodeList = document.querySelectorAll(SELECTOR)
    for (var i = 0; i < nodeList.length; i++) {
        var element = nodeList[i];
        var src = element.getAttribute(SOURCE_SRC)
        element.setAttribute('src', src)
    }
}


