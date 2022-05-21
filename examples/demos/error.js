/**
 * window.onerror 捕获异常的能力比 try-catch 要强
 * 无论是异步的还是同步的错误，onerror都可以捕获到
 *
 * @param {String} msg 错误信息
 * @param {String} url 出错文件
 * @param {Number} row 行号
 * @param {Number} col 列号
 * @param {Object} error 错误的详细信息
 */
window.onerror = function (
  msg,
  url,
  row,
  col,
  error
) {
  console.log(`我知道错误了~`);

  console.log({
    msg,
    url,
    row,
    col,
    error,
  });

  return true;
};

// 监听图片等资源的报错
// 在捕获阶段捕获到图片的错误事件
window.addEventListener('error', function (msg, url, row, col, error) {
    console.log(`静态资源报错了~`);

    console.log({
      msg,
      url,
      row,
      col,
      error,
    });

    // 这里没有办法解决掉报红的问题
    return true;
  },
  true
);

// 监听到所有的promise的reject的错误
// 跨域的JS，需要处理跨域，否则无法被捕获
window.addEventListener('unhandledrejection', function () {
  e.preventDefault();
  console.log('promise error');
  console.log(e.reason);

  return true;
});

Promise.reject('promise error').catch((err) => console.log(err));

new Promise((resolve, reject) => {
  reject('promise error');
}).catch((err) => {
  console.log(err);
});

new Promise((resolve, reject) => resolve()).then(() => {
  throw 'promise error';
});

new Promise((resolve, reject) => {
  reject(1231313);
});
