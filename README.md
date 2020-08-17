# lazyload

> [IntersectionObserver API](https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API) 实现 lazyload

## Example

- [Demo](./index.html)

```js
var observer = new IntersectionObserver(function (changes) {
  changes.forEach(function (change) {
    if (change.intersectionRatio > 0) {
      var container = change.target;
      var src = container.getAttribute("data-src");
      container.setAttribute("src", src);
      observer.unobserve(container);
    }
  });
});

Array.from(document.querySelectorAll(".lazy")).forEach(function (item) {
  observer.observe(item);
});
```
