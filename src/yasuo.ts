import {YasuoOptions} from "./typings/type";
import ErrorTrace from "./error";

/**
 * SDK入口
 */
class Yasuo {
  // 初始化代码
  constructor(options: YasuoOptions) {

    // 开启错误监控
    if (options.captureError) {
      const errorTrace = new ErrorTrace();
      errorTrace.run();
    }
  }
}

// usage
// new Yasuo(options)

export default Yasuo