# 项目搭建

### 快速开始命令：

1. 在项目root目录安装所有依赖：`pnpm install`；
1. 在项目root目录安装指定依赖：`pnpm add <pkg>`;
1. 在项目root目录运行CMD命令：`pnpm <cmd>`;
1. 在特定子集运行CMD命令：`pnpm -F <package_selector> <command>`；

## 项目结构：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/15506cf4e3e74863ac32eda047179799~tplv-k3u1fbpfcp-zoom-1.image)


### 利用 vue@3 模板来创建 root 项目：

```shell
pnpm create vue@3
```

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3420b42b1c074caca0ef5303e2977c56~tplv-k3u1fbpfcp-zoom-1.image)

### 定义工作空间目录结构

使用 **pnpm** 管理的项目支持在 **root** 目录下使用 `pnpm-workspace.yaml` 文件来定义工作空间目录

```yaml
packages:
  # all packages in direct subdirs of packages/
  - 'packages/*'
  # all packages in subdirs of components/
  - 'components/**'
  # 获取数据相关的包在 apis 目录下
  - 'apis/**'
  # 通用工具相关的包在 utils 目录下
  - 'utils/**'
```

### 使用 vite 来初始化公共模块：

使用 vite 内置的基础项目模板创建 apis、utils两个公共模块

#### 创建 apis 项目：

```shell
yarn create vite
```

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3ac12818f28246029e75bc26e5aa34b8~tplv-k3u1fbpfcp-zoom-1.image)

#### 创建 utils 项目：

```shell
yarn create vite
```

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c20c28535bb8447991f4c15157ef4b77~tplv-k3u1fbpfcp-zoom-1.image)

#### 调整 apis、utils 的项目名称和版本号：

| **项目** | **name字段更新**          | **version字段更新** |
| ------ | --------------------- | --------------- |
| apis   | apis -> @kayce/apis   | 0.0.0 -> 0.0.1  |
| utils  | utils -> @kayce/utils | 0.0.0 -> 0.0.1  |

### 使用 vite 来初始化业务模块：

业务模块创建到 packages 目录下，创建命令同上一小节，我们这次改用 vite 内置的 vue-ts 模板

#### 创建三个module项目，整体的目录大致结构如下：

```
my-workspace                       
├─ apis                            
│  ├─ src                                                                                   
│  ├─ package.json                 
│  └─ tsconfig.json     
├─ utils                           
│  ├─ src                                                                                  
│  ├─ package.json                 
│  └─ tsconfig.json  
├─ packages                        
│  ├─ module1                                 
│  ├─ module2                                
│  └─ module3                                
├─ public                                         
├─ src                                                         
├─ env.d.ts                        
├─ index.html                      
├─ package.json                    
├─ pnpm-lock.yaml                  
├─ pnpm-workspace.yaml             
├─ README.md                       
├─ tsconfig.config.json            
├─ tsconfig.json                   
└─ vite.config.ts                  
```

#### 调整三个模块项目的名称和版本号

| **项目**  | **name字段更新**              | **version字段更新** |
| ------- | ------------------------- | --------------- |
| module1 | module1 -> @kayce/module1 | 0.0.0 -> 0.0.1  |
| module2 | module2 -> @kayce/module2 | 0.0.0 -> 0.0.1  |
| module3 | module3 -> @kayce/module3 | 0.0.0 -> 0.0.1  |

#### 统一包管理器的使用：

在创建的各模块的 `package.json` 中增加一条`script`，内容如下：

```shell
"preinstall": "npx only-allow pnpm"
```

### 开发utils模块：

#### 开发Clipboard工具类（支持移动端和PC端两种提示风格）：

##### 准备Clipboard工具类：

```ts
import Clipboard from 'clipboard'

export const handleClipboard = (text: string, event: MouseEvent) => {
  const clipboard = new Clipboard(event.target as Element, {
    text: () => text
  })
  clipboard.on('success', () => {
    clipboard.destroy()
  })
  clipboard.on('error', () => {
    clipboard.destroy()
  });
  (clipboard as any).onClick(event)
}
```

##### 配置相关依赖：

1. 安装`vueuse`依赖库，监听屏幕变化；
1. 安装`clipboard`依赖库，完成粘贴板基础功能；
1. 安装`element-plus`PC风格组件库；
1. 安装`vant`移动端风格组件库。

##### 完善Clipboard工具类以支持不同风格提示：

utils\src\clipboard.ts

```ts
// 手动导入vant中的通知组件及样式文件
import { showNotify } from "vant";
import "vant/es/notify/style";

// 手动导入element-plus中的通知组件及样式文件
import { ElMessage } from "element-plus";
import "element-plus/es/components/message/style/css";

// 导入剪切板基础依赖
import Clipboard from "clipboard";
// 导入vueuse/core 中监听浏览器端点变化的函数
import { useBreakpoints, breakpointsTailwind } from "@vueuse/core";

const sm = useBreakpoints(breakpointsTailwind).smaller("sm");

/* 依据sm值的变化来改变使用不同的通知风格 */
export const clipboardSuccess = () =>
  sm.value
    ? showNotify({
        message: "Copy successfully",
        type: "success",
        duration: 1500,
      })
    : ElMessage({
        message: "Copy successfully",
        type: "success",
        duration: 1500,
      });

/* 依据sm值的变化来改变使用不同的通知风格 */
export const clipboardError = () =>
  sm.value
    ? showNotify({
        message: "Copy failed",
        type: "danger",
      })
    : ElMessage({
        message: "Copy failed",
        type: "error",
      });

export const handleClipboard = (text: string, event: MouseEvent) => {
  const clipboard = new Clipboard(event.target as Element, {
    text: () => text,
  });
  clipboard.on("success", () => {
    // 在复制成功后提示成功通知内容
    clipboardSuccess();
    clipboard.destroy();
  });
  clipboard.on("error", () => {
    // 在复制失败后提示失败通知内容
    clipboardError();
    clipboard.destroy();
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (clipboard as any).onClick(event);
};
```

##### 导出工具类的相关配置：

1. 配置统一导出文件（`utils\index.ts`）：

```ts
export * from "./src/clipboard";
```

2. 修改`package.json`的`main`字段：

```json
{
  "main": "index.ts"
}
```

##### 将utils模块安装到module1项目：

1. 下面的命令在root目录执行，通过`-F`来执行命令执行的位置是`@kayce/module1`，执行的命令是`add`。

```shell
pnpm -F @kayce/module1 add @kayce/utils
```

注：当`@kayce/utils`包升级后，执行执行`pnpm update`来更新相关依赖版本。

2. 安装成功后的依赖信息如下：

```json
{
  "dependencies": {
    "@kayce/utils": "workspace:^0.0.1"
  }
}
```

##### 在module1项目中尝试使用Clipboard函数：

1. 在模板中增加按钮：

```vue
<button @click="copy">复制</button>
```

2. 在`setup`的`script`中增加对应函数并导入`handleClipboard`：

```ts
import { handleClipboard } from "@kayce/utils";
const copy = (e) => {
  console.log("[ e ] >", e);
  handleClipboard("haha", e);
};
```

PC端复制成功后提示风格：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9dd59a76f959487da3d31b6ab1537e21~tplv-k3u1fbpfcp-zoom-1.image)

移动端复制成功后提示风格：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/62d90741d2ca43c28fa88966c9986e3b~tplv-k3u1fbpfcp-zoom-1.image)

### 开发 apis 模块：

#### 开发axios工具类函数：

##### 准备axios工具类：

```ts
import axios, { AxiosRequestConfig } from "axios";

const pending = {};

const CancelToken = axios.CancelToken;
const removePending = (key: string, isRequest = false) => {
  if (Reflect.get(pending, key) && isRequest) {
    Reflect.get(pending, key)("取消重复请求");
  }
  Reflect.deleteProperty(pending, key);
};
const getRequestIdentify = (config: AxiosRequestConfig, isReuest = false) => {
  let url = config.url;
  const suburl = config.url?.substring(1, config.url?.length) ?? "";
  if (isReuest) {
    url = config.baseURL + suburl;
  }
  return config.method === "get"
    ? encodeURIComponent(url + JSON.stringify(config.params))
    : encodeURIComponent(config.url + JSON.stringify(config.data));
};

// 创建一个AXIOS实例
const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 16000, // 请求超时
});

// 请求拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 拦截重复请求(即当前正在进行的相同请求)
    const requestData = getRequestIdentify(config, true);
    removePending(requestData, true);

    config.cancelToken = new CancelToken((c: any) => {
      Reflect.set(pending, requestData, c);
    });

    // 请求发送前的预处理(如:获取token等)
    // if (store.getters.token) {
    //   // let each request carry token
    //   // ['X-AUTH-TOKEN'] is a custom headers key
    //   // please modify it according to the actual situation
    //   config.headers['X-AUTH-TOKEN'] = getToken()
    // }
    return config;
  },
  (error: any) => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  (response: { config: AxiosRequestConfig; data: any }) => {
    // 把已经完成的请求从 pending 中移除
    const requestData = getRequestIdentify(response.config);
    removePending(requestData);
    const res = response.data;
    return res;
  },
  (error: {
    message: string;
    config: { showLoading: any };
    response: { status: any };
    request: any;
  }) => {
    console.log(error.message);
    if (error) {
      if (error.response) {
        switch (error.response.status) {
          case 400:
            error.message = "错误请求";
            break;
          case 401:
            error.message = "未授权，请重新登录";
            break;
          default:
            error.message = `连接错误${error.response.status}`;
        }
        const errData = {
          code: error.response.status,
          message: error.message,
        };
        console.log("统一错误处理: ", errData);
      } else if (error.request) {
        console.log("统一错误处理: ", "网络出错，请稍后重试");
      }
    }
    return Promise.reject(error);
  }
);

export default service;
```

##### 配置相关依赖：

1. 安装`axios`依赖库，完成数据请求的发送及处理；
1. 安装`vant`依赖库，完成请求数据后的状态提示等。

说明：在`apis`模块中就不再做手机端和PC端的风格切换了；

##### 完善axios工具类：

apis\src\axios.ts，部分逻辑有删减，仅保证基础功能正常

```ts
import { showDialog } from "vant";
import "vant/es/dialog/style";

import { showLoadingToast, closeToast, } from "vant";
import "vant/es/toast/style";

import axios, { AxiosRequestConfig } from "axios";

const pending = {};

const CancelToken = axios.CancelToken;
const removePending = (key: string, isRequest = false) => {
  if (Reflect.get(pending, key) && isRequest) {
    Reflect.get(pending, key)("取消重复请求");
  }
  Reflect.deleteProperty(pending, key);
};
const getRequestIdentify = (config: AxiosRequestConfig, isReuest = false) => {
  let url = config.url;
  const suburl = config.url?.substring(1, config.url?.length) ?? "";
  if (isReuest) {
    url = config.baseURL + suburl;
  }
  return config.method === "get"
    ? encodeURIComponent(url + JSON.stringify(config.params))
    : encodeURIComponent(config.url + JSON.stringify(config.data));
};

// 创建一个AXIOS实例
const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 16000, // 请求超时
});

// 请求拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 拦截重复请求(即当前正在进行的相同请求)
    const requestData = getRequestIdentify(config, true);
    removePending(requestData, true);

    config.cancelToken = new CancelToken((c: any) => {
      Reflect.set(pending, requestData, c);
    });

    // 是否开启loading
    if (config.showLoading) {
      showLoadingToast({
        duration: 0,
        mask: true,
        forbidClick: true,
        message: "加载中...",
        loadingType: "spinner",
      });
    }

    // 请求发送前的预处理(如:获取token等)
    // if (store.getters.token) {
    //   // let each request carry token
    //   // ['X-AUTH-TOKEN'] is a custom headers key
    //   // please modify it according to the actual situation
    //   config.headers['X-AUTH-TOKEN'] = getToken()
    // }
    return config;
  },
  (error: any) => {
    // do something with request error
    console.log(error); // for debug
    showLoadingToast({
      message: "网络出错，请重试",
      duration: 1500,
      type: "fail",
    });
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  (response: { config: AxiosRequestConfig; data: any }) => {
    // 把已经完成的请求从 pending 中移除
    const requestData = getRequestIdentify(response.config);
    removePending(requestData);

    if (response.config.showLoading) {
      closeToast();
    }

    const res = response.data;
    return res;
  },
  (error: {
    message: string;
    config: { showLoading: any };
    response: { status: any };
    request: any;
  }) => {
    console.log(error.message);
    if (error) {
      if (error.config && error.config.showLoading) {
        closeToast();
      }
      if (error.response) {
        switch (error.response.status) {
          case 400:
            error.message = "错误请求";
            break;
          case 401:
            error.message = "未授权，请重新登录";
            break;
          default:
            error.message = `连接错误${error.response.status}`;
        }
        const errData = {
          code: error.response.status,
          message: error.message,
        };
        console.log("统一错误处理: ", errData);
        showDialog({ title: "提示", message: errData.message || "Error" });
      } else if (error.request) {
        showLoadingToast({
          message: "网络出错，请稍后重试",
          duration: 1500,
          type: "fail",
        });
      }
    }
    return Promise.reject(error);
  }
);

export default service;
```

##### 编写userApi类，汇总关于user对象的数据读取：

apis\src\user.ts

```ts
import service from "./axios";

export const UserApi = {
  getUsers: () => service.get<any>("/users"),
};
```

##### 导出userApi类的相关配置：

1. 配置统一导出文件（`apis\index.ts`）：

```ts
export * from "./src/user";
```

2. 修改`package.json`的`main`字段：

```json
{
  "main": "index.ts"
}
```

##### 在module2项目中尝试使用userApi类：

1. 定义模板：

```vue
<template>
  <button @click="getUserList">获取用户列表</button>
  <ul>
    <li v-for="user in users" :key="user.id">
      {{ user.name }}、{{ user.age }}
    </li>
  </ul>
</template>
```

2. 安装、导入、编写逻辑：

```shell
pnpm -F @kayce/module2 add @kayce/apis
```

```vue
<script setup lang="ts">
import { UserApi } from "@kayce/apis";
import { ref } from "vue";
const users = ref();
const getUserList = async () => {
  const resp = await UserApi.getUsers();
  users.value = resp;
};
</script>
```

<https://www.awesomescreenshot.com/video/9976769?key=be6dffcf6e60e59ec5a601b34582e57b>

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2a4a2552d096464aace2454703294c0b~tplv-k3u1fbpfcp-zoom-1.image)

#### 使用[Mockend](https://mockend.com/)来Mock数据：

1. 选择一个符合自己的方案：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2e7bd821b9804fb888d00fcf25f4f0bc~tplv-k3u1fbpfcp-zoom-1.image)

2. 选择要安装到得公共项目仓库，Github组织不支持免费的（只为截个图）：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/af1cdddc316942e19e14975346dec5a3~tplv-k3u1fbpfcp-zoom-1.image)

3. 在项目root目录新建`.mockend.json`文件：

```json
{
  "User": {
    "name": {
      "string": {}
    },
    "avatarUrl": {
      "regexp": "https://i\.pravatar\.cc/150\?u=[0-9]{5}"
    },
    "statusMessage": {
      "string": [
        "working from home",
        "watching Netflix"
      ]
    },
    "email": {
      "regexp": "#[a-z]{5,10}@[a-z]{5}\.[a-z]{2,3}"
    },
    "color": {
      "regexp": "#[0-9A-F]{6}"
    },
    "age": {
      "int": {
        "min": 21,
        "max": 100
      }
    },
    "isPublic": {
      "boolean": {}
    }
  }
}
```

4. 通过 <https://mockend.com/OSpoon/data-mock/users> 就可以获取到mock数据了；
4. 更多配置请参考<https://docs.mockend.com/>。

### 开发 Components 模块：

#### 开发Card组件，并应用到module3项目中：

##### 使用pnpm create vue@3来创建项目模板，修改项目名称和版本号：

##### 创建如下card组件目录结构：

```
components                   
├─ card                      
│  ├─ src                    
│  │  ├─ card.scss           
│  │  └─ index.vue           
│  └─ index.ts         
```

##### 组件模板及配置：

组件名称通过defineComponent函数导入，在注册组件时读取使用

```vue
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "it-card",
});
</script>
<script setup lang="ts">
const props = defineProps({
  shadow: {
    type: String,
    default: "always",
  },
  bodyStyle: {
    type: Object,
    default: () => {
      return { padding: "20px" };
    },
  },
});
console.log("[ props ] >", props);
</script>

<template>
  <div class="it-card">
    <div :class="`is-${shadow}-shadow`"></div>
    <div class="it-card__body" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
```

##### 组件样式文件：

```scss
.it-card {
    border-radius: 4px;
    border: 1px solid #ebeef5;
    background-color: #fff;
    overflow: hidden;
    color: #303133;
    transition: 0.3s;

    .it-card__body {
        padding: 20px;
    }

    .is-always-shadow {
        box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    }

    .is-hover-shadow:hover {
        box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    }

    .is-never-shadow {
        box-shadow: none;
    }
}
```

##### 组件安装插件：

```ts
import type { App } from "vue";
import Card from "./src/index.vue";

export default {
  install(app: App) {
    app.component(Card.name, Card);
  },
};
```

##### 在Components项目中尝试使用Card组件：

1. 导入组件相关配置并安装，`components\src\main.ts`

```ts
import Card from "./components/card/index";
import "./components/card/src/card.scss";

app.use(Card);
```

2. 在`App.vue`组件中使用：

```vue
<template>
  <it-card style="width: 235px" :body-style="{ padding: '0px' }">
    <img
      src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
      class="image"
    />
    <div style="padding: 14px">
      <span>好吃的汉堡</span>
      <div class="bottom">
        <time class="time">"2022-05-03T16:21:26.010Z"</time>
      </div>
    </div>
  </it-card>
</template>
```

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/224cc078990f4271aad50d2669140222~tplv-k3u1fbpfcp-zoom-1.image)

##### 准备导入组件的相关配置：

1. 配置统一导出文件：

```ts
import Card from "./src/components/card/index";
export default {
  Card,
};
```

2. 修改`package.json`的`main`字段：

```json
{
  "main": "index.ts"
}
```

##### 安装、导入到module3：

1. 安装`components`组件包：

```shell
pnpm -F @kayce/module3 add @kayce/components
```

2. 导入`components`组件包：

```ts
import Comps from "@kayce/components";
import "@kayce/components/src/components/card/src/card.scss";

app.use(Comps.Card);
```

3. 使用方式同在Components项目中验证一样，效果一样，就不再演示了。

## 扩展（Changesets发布变更）：

### 增加相关配置：

1. 安装`changesets`到工作空间根目录：

```shell
pnpm add -Dw @changesets/cli
```

2. 执行`changesets`初始化命令：

```shell
pnpm changeset init
```

### 生成新的changesets：

```shell
pnpm changeset
```

注意：第一次运行前请检查`git`分支名称和`.changeset\config.json`中的`baseBranch`是否一致。

#### 生成示例：

```
PS xxx> pnpm changeset
🦋  Which packages would you like to include? · @kayce/module3
🦋  Which packages should have a major bump? · No items were selected
🦋  Which packages should have a minor bump? · @kayce/module3
🦋  Please enter a summary for this change (this will be in the changelogs).
🦋    (submit empty line to open external editor)
🦋  Summary · 增加components模块的配置和使用
🦋
🦋  === Summary of changesets ===
🦋  minor:  @kayce/module3
🦋
🦋  Note: All dependents of these packages that will be incompatible with
🦋  the new version will be patch bumped when this changeset is applied.
🦋
🦋  Is this your desired changeset? (Y/n) · true
🦋  Changeset added! - you can now commit it
🦋
🦋  If you want to modify or expand on the changeset summary, you can find it here
🦋  info D:\daydayup\my-workspace.changeset\purple-dodos-check.md
```

### 发布变更：

执行命令，会依据先前生成的变更集来在对应的`package`中的项目中生成对应的`CHANGELOG.md`并提高对应项目的`version`，版本提升还需遵守语义化版本规范要求：

```shell
pnpm changeset version
```

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2bd285b359c24cfb8e046d905680d674~tplv-k3u1fbpfcp-zoom-1.image)

后续的步骤还需按项目的实际情况来考虑，这里将变更日志生成、版本号提升后就先告一段落了~

## 总结：

&ensp;&ensp;&ensp;&ensp;这里使用了工作空间的概念来实现了多项目的管理，每一个单独的模块、项目都可以独立维护、测试、构建，同时在 pnpm 的 node_modules 管理模式下节约了磁盘空间并提升安装速度。在这里只是小试牛刀，更多的特性还没有体现出来，需要后续跟进学习。项目的搭建没有特别的约定要做的一模一样，符合实际情况的考虑就是最优。
