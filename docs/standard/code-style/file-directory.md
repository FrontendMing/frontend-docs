# 目录规范

## 通用前端工程规范
```
├── build                       // 打包时的脚本
├── doc                         // 文档
├── node_modules                // 依赖
├── public                      // 公共资源
├── src
│   ├── api                     // 接口请求
│   ├── assets                  // 静态资源
│   ├── components              // 组件
│   ├── directive               // 指令
│   ├── enums                   // 枚举
│   ├── hooks                   // 公共hooks
│   ├── layout                  // Layout
│   ├── locales                 // 多语言
│   ├── plugins                 // 插件
│   ├── router                  // 路由
│   ├── stores                  // 存储
│   ├── styles                  // 样式
│   ├── utils                   // 工具类
│   ├── views                   // 视图
│   ├── App.vue                 // 入口文件
│   ├── main.ts                 // 入口TS文件 createApp
│   ├── shims.d.ts              // .vue文件类型声明
│   └── version.js              // 版本文件，tag自动增加
├── .editConfig                 // 配置统一编辑器
├── .env                        // 公共环境配置    
├── .env.development            // 开发环境配置
├── .env.test                   // 测试环境配置
├── .env.uat                    // uat环境配置
├── .env.production             // 生产环境配置
├── README.md
├── auto-imports.d.ts           // 自动导入配置
├── components.d.ts             // 组件自动导入配置
├── env.d.ts                    // vite/client ts配置
├── global.d.ts                 // 全局ts类型配置
├── index.html                  // 入口html文件
├── package.json                
├── pnpm-lock.yaml              
├── tsconfig.app.json            // ts配置文件
├── tsconfig.config.json         // ts配置文件
├── tsconfig.json                // ts公共配置文件
├── tsconfig.vitest.json         // vitest ts配置文件
└── vite.config.ts               // vite配置文件
```