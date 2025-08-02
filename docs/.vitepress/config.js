import standardSidebar from "./standardSidebar";
import websiteSidebar from "./websiteSidebar";
import jsAndTsbar from "./jsAndTs";
import utilitiesSidebar from "./utilitiesSidebar";
import engineeringSidebar from "./engineeringSidebar";
import pluginsSidebar from "./pluginsSidebar";
import performanceSidebar from "./performanceSidebar";

export default {
    base: '/',

    title: 'Frontend', // 所有文档的浏览器标签title
    description: 'Frontend Docs', // 会渲染成<meta>标签，SEO用

    themeConfig: {
        siteTitle: 'FRONTEND DOCS',
        logo: '/logo.png',
        head: [
            ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        ],
        nav: [
            { text: '前端规范', link: '/standard/', activeMatch: '/standard/' },
            {
                text: '官网',
                items: [
                    { text: '响应式方案', link: '/website/responsive' },
                    {
                      items: [
                        { text: 'Shopify 开发', link: '/website/Shopify/add-to-cart' },
                      ]
                    }
                ]
            },
            { text: '深入JS/TS', link: '/jsAndTs/js/base/scope', activeMatch: '/jsAndTs/' },
            {
                text: '工具函数/类库',
                items: [
                    { text: '简介', link: '/utilities/' },
                    {
                      items: [
                        { text: '工具函数库', link: '/utilities/utils/chunk' },
                        { text: '工具类库', link: '/utilities/classes/DragToMove' },
                      ]
                    }
                ]
            },
            { text: '性能优化', link: '/performance/', activeMatch: '/performance/' },
            {
                text: '项目工程',
                items: [
                    { text: 'npm私服', link: '/engineering/npm/index' },
                    {
                      items: [
                        { text: 'monorepo', link: '/engineering/monorepo/index' },
                        { text: 'nodejs', link: '/engineering/nodejs/index' },
                      ]
                    }
                ]
            },
            {
                text: '插件合集',
                items: [
                    {
                      items: [
                        { text: 'Vite插件', link: '/plugins/vite/dev-qrcode' },
                        { text: 'Babel插件', link: '/plugins/babel/test' },
                        { text: 'VSCode插件', link: '/plugins/vscode/test' },
                        { text: 'Chrome插件', link: '/plugins/chrome/test' },
                      ]
                    }
                ]
            },
        ],
        sidebar: {
            '/standard/': standardSidebar,
            '/website/': websiteSidebar,
            '/jsAndTs/': jsAndTsbar,
            '/utilities/': utilitiesSidebar,
            '/engineering/': engineeringSidebar,
            '/plugins/': pluginsSidebar,
            '/performance/': performanceSidebar,
        },
        socialLinks: [
            { icon: 'github', link: 'https://www.github.com/frontendMing/frontend-docs' }
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2023-present frontend'
        },
    },
    srcExclude: ['README.md'], // exclude the README.md , needn't to compiler
    ignoreDeadLinks: true,
    vite: {
        server: {
            port: 5000,
        }
    }
}