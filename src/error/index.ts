import { Win } from '../data/constants'
type ErrorInfo = any;

// 监控页面错误
class ErrorTrace {
  private errorInfo: ErrorInfo;

  constructor() {
    this.errorInfo = {};
  }

  // 全局捕获 同步 + 异步 的错误
  private globalError() {
    console.log(`[global error]: yasuo global error handler init!`);
    Win.onerror = function (
      eventOrMessage: Event | string, // 错误信息
      scriptURL?: string, // 出错的脚本
      lineNum?: number, // 哪一行出错了
      colNum?: number,  // 哪一列出错了
      error?: Error // 错误信息
    ){
      const data = JSON.stringify({
        scriptURL,
        lineNum,
        colNum,
        error
      })

      console.log(`[global error] ${eventOrMessage}`, data)

      // TODO: 错误上报

      // 防止爆红
      return true
    }
  }

  // 资源请求失败，比如图片 404
  private networkError() {

    console.log(`[network error] network error handler init!`)

    Win.addEventListener(
      'error',
      function(e: ErrorEvent) {
        if (e.target !== Win) {
          console.log(`[network error] ${e.target}`)

          // TODO: 错误上报
        }

        // 这里是其他类型的错误，比如脚本错误
        // console.log(`网络错误 ${e.message}`)
      },
      true
    )
  }

  // 捕获promise的错误 (所有promise的reject都可以捕获到)
  private promiseError() {
    Win.addEventListener('unhandledrejection', function(e: PromiseRejectionEvent): boolean {
      e.preventDefault();

      console.log(`promise error ${e.reason}`)

      return true;
    })
  }

  // iframe 的报错，iframe 的报错，需要对每个 frame 单独去绑定
  private iframeError() {
    const frames = Win.frames;
    for (let i = 0; i < frames.length; i++){
      frames[i].addEventListener(
        'error',
        (e:ErrorEvent) => {
          console.log(`iframe error event ${e}`)
        },
        true
      )

      frames[i].addEventListener(
        'unhandledrejection',
        (e: PromiseRejectionEvent) => {
          console.log(`iframe error event ${e}`)
        },
        true
      )
    }
  }

  public run() {
    this.globalError();
    this.networkError();
    this.promiseError();
    // this.iframeError();
  }
}

export default ErrorTrace;