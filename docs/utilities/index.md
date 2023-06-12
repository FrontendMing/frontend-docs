# Jackery 工具函数/类库
jackery-util 是一个为 Jackery 前端开发解决常见业务问题的工具库

> 市面上早已有一些知名的通用工具函数库，如 `Lodash`、`Underscore` 等，
>
> `jackery-util` 是想在工具函数库的基础之上，将常用的 `Class` 类也工具化，方便使用
> 
> 在提升业务开发效率的同时，也能精简项目代码


<!-- <version module="vantop-util" /> -->

### 安装
:::tip
待和 武林 沟通，部署 npm 私服后才能使用
:::
```shell
$ npm config set registry http://npm.jackery.cc
$ npm i --save @jackery/jackery-util
```

### CDN
```html
<!-- 引入工具库 -->
<script src=""></script>
```


### 按需加载
**方法一：**

`jackery-util` 默认提供es版本，支持基于 ES modules 的 tree shaking，对于 js 部分，直接引入 `import { copyText } from '@jackery/jackery-util'` 就会有按需加载的效果。
（若要使用 tree-shaking，请保证项目webpack ≥ @2.x）

**方法二：**

如若某些原因，项目不支持 tree shaking 或者不生效，我们可以借助 `babel-plugin-component`，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 `babel-plugin-import`
```shell
npm install babel-plugin-import --save-dev
```

然后，将 `babel.config.js` 修改为
```js
module.exports = {
    presets: [
        // 项目presets配置
        ...
    ],
    plugins: [
        // 项目其他plugin配置
        ...,
        // babel-plugin-import配置
        [
            'import',
            {
                'libraryName': '@jackery/jackery-util',
                'camel2DashComponentName': false,
                'customName': (name) => {
                    let matchName = '';
                    switch (name) {
                        case 'CookieHelper':
                            matchName = '@jackery/jackery-util/lib/cookie';
                            break;
                        case 'UA':
                            matchName = '@jackery/jackery-util/lib/userAgent';
                            break;
                        default:
                            matchName = `@jackery/jackery-util/lib/${name}`;
                            break;
                    }
                    return matchName;
                },
            }
        ]
    ],
};
```
接下来就可以在项目中使用 `jackery-util` 了
```js
import { copyText } from '@jackery/jackery-util'
```
最终打包后babel会将代码编译成
```js
var copyText = require ('@jackery/jackery-util/lib/copyText');
```
这样就达到了按需引入的目的
 