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

## AEM工程目录规范
```
JACKERY
├─ all                                 
├─ core                               # Java后台代码
├─ dispatcher                         # AEM dispatcher
├─ ui.apps                            # AEM组件和模板开发 
│  ├─ src/main/content/jcr_root/
│  │  ├─ apps/jackery                   
│  │     |
│  │     ├─ clientlibs                # 前端公共CSS和JS管理文件夹
│  │     │  ├─ clientlib-api          # 前端API接口管理（挂载到window.Jackery.API）
│  │     │  ├─ clientlib-base         # 基础CSS和JS管理（对应生成clientlib-base.xxx.min.css和clientlib-base.xxx.min.js）
│  │     │  ├─ clientlib-page         # 页面CSS和JS管理（对应生成clientlib-page.xxx.min.css和clientlib-page.xxx.min.js）
│  │     │  ├─ clientlib-utils        # 前端Utils管理（挂载到window.Jackery.utils和window.Jackery.fetch)
│  │     │  ├─ plugins                # 前端三方插件管理
│  │     │  ├─ ...         
│  │     |
│  │     ├─ components                # 组件及模板关联的page目录
│  │     ├─ ...                       # 各类组件
│  │     │  
│  │     ├─ custom-plugins            # 自定义插件组件目录
│  │     │  ├─ custom-common-plugins  # 公共插件组件（放置无需配置项的，仅有HTML+CSS+JS的插件功能）  
│  │     │  ├─ ...                    # 其他插件组件（后续放置需要配置项的插件功能，需要继续研发）   
│  │     │  
│  │     ├─ page                      # 根模板关联page（其他模板均继承它）
│  │     ├─ homepage                  # 首页模板关联page
│  │     ├─ product-page              # 产品页模板关联page
│  │     ├─ xfpage                    # Experience Fragments页模板关联page
│  │     ├─ ...                         
│  │     └─ structure                 # temple模板关联的page
│  │        ├─ *-page                 # 各模板关联的page，用于配置各个模板的属性            
│  │        ├─ header                 # 公共Header组件（Experience Fragments方式开发）           
│  │        └─ footer                 # 公共Feader组件（Experience Fragments方式开发）
│  │      
│  └─ src/main/content/META-INF/      # 工程代码同步到Server的文件目录过滤器管理
│  
├─ ui.config                          # AEM工程各类后端配置
│  └─ src/main/content/jcr_root/
│     └─ apps/jackery/osgiconfig      # 匹配各环境的AEM配置（常见的各环境接口域名配置就在这里）
│  
├─ ui.content                         # AEM工程各类后端配置
│  ├─ src/main/content/jcr_root/
│     ├─ conf/jackery/settings         
│     │  └─ wcm/templates         
│     │     └─ *-page                 # 各类页面模板
│     │ 
│     ├─ content/dam                  # AEM Assets资产管理存储目录（工程代码中不自动同步那些资源）
│     └─ etc
│        └─ map.publish.dev           # （待分析……）
│
├─ ui.frontend                        # AEM纯前端工程
├─ pom.xml                            # Maven依赖管理
├─ .gitignore                         # git提交忽略配置
└─ README.md                          # 工程说明
```
