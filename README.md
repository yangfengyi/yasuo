# performance-monitor
Performance monitoring SDK

## Usage

```javascript
new Yasuo(options);
```

## bundler handler

- sdk --- rollup
- demo --- parcel
- types --- api-extractor

## rollup 常用插件

// rollup typescript配置处理
`@rollup/plugin-typescript`/*
 * 帮助寻找node_modules里的包
 * rollup.js编译源码中的模块引用默认只支持ES6+的模块方式import/export。
 * 然而大量的npm模块是基于CommonJS模块方式，这就导致了大量 npm 模块不能直接编译使用。
 * 所以辅助rollup.js编译支持npm模块和CommonJS模块方式的插件就应运而生
 */
`@rollup/plugin-node-resolve`// 支持import 'xx.json'文件
`@rollup/plugin-json`// 在打包的时候把目标字符串替换å
`@rollup/plugin-replace`// 对打包的js进行压缩
`rollup-plugin-terser`// 删除原来的bundle
`rollup-plugin-delete`// 显示打包后文件的大小
`rollup-plugin-filesize`// 将CommonJs语法转成es5
`rollup-plugin-commonjs`// rollup 的 babel 插件，ES6转ES5
`rollup-plugin-babel`;
