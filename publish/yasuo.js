var r = window,
  o = /*#__PURE__*/ (function () {
    function o() {
      (this.errorInfo = void 0), (this.errorInfo = {});
    }
    var e = o.prototype;
    return (
      (e.globalError = function () {
        console.log('error: yasuo global error init'),
          (r.onerror = function (r, o, e, n, t) {
            var i = JSON.stringify({
              scriptURL: o,
              lineNum: e,
              colNum: n,
              error: t,
            });
            return console.log('[global error] ' + r), console.log(i), !0;
          });
      }),
      (e.networkError = function () {
        r.addEventListener(
          'error',
          function (o) {
            o.target !== r && console.log('网络错误 ' + o.target),
              console.log('网络错误 ' + o.message);
          },
          !0
        );
      }),
      (e.promiseError = function () {
        r.addEventListener('unhandledrejection', function (r) {
          return (
            r.preventDefault(), console.log('promise error ' + r.reason), !0
          );
        });
      }),
      (e.iframeError = function () {
        for (var o = r.frames, e = 0; e < o.length; e++)
          o[e].addEventListener(
            'error',
            function (r) {
              console.log('iframe error event ' + r);
            },
            !0
          ),
            o[e].addEventListener(
              'unhandledrejection',
              function (r) {
                console.log('iframe error event ' + r);
              },
              !0
            );
      }),
      (e.run = function () {
        this.globalError(), this.networkError(), this.promiseError();
      }),
      o
    );
  })();
module.exports = function (r) {
  r.captureError && new o().run();
};
//# sourceMappingURL=yasuo.js.map
