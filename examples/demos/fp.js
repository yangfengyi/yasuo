/**
 * Observer 使用方法
 * @type {PerformanceObserver}
 */
const observer = new PerformanceObserver((listener) => {});
observer.observe({
  entryTypes: ['paint'],
});