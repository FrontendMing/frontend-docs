import docsSidebar from "./docsSidebar";
import responsivePageSidebar from "./responsivePageSidebar";
import pluginsSidebar from "./pluginsSidebar";
import utilitiesSidebar from "./utilitiesSidebar";
import performanceSidebar from "./performanceSidebar";

export default {
    base: '/frontend-docs/',

    title: 'JACKERY', // 所有文档的浏览器标签title
    description: 'Jackery Frontend Docs', // 会渲染成<meta>标签，SEO用

    themeConfig: {
        siteTitle: 'JACKERY DOCS',
        logo: '/logo.png',
        head: [
            ['link', { rel: 'icon', type: 'image/x-icon', href: 'https://cn.vitejs.dev/logo.svg' }],
        ],
        nav: [
            { text: '前端规范', link: '/docs/', activeMatch: '/docs/' },
            { text: '响应式页面', link: '/responsivePage/', activeMatch: '/responsivePage/' },
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
                text: '插件合集',
                items: [
                    {
                      items: [
                        { text: 'Chrome插件', link: '/plugins/chrome/test' },
                        { text: 'Vite插件', link: '/plugins/vite/test' },
                        { text: 'VSCode插件', link: '/plugins/vscode/test' },
                      ]
                    }
                ]
            },
        ],
        sidebar: {
            '/docs/': docsSidebar,
            '/responsivePage/': responsivePageSidebar,
            '/utilities/': utilitiesSidebar,
            '/plugins/': pluginsSidebar,
            '/performance/': performanceSidebar,
        },
        socialLinks: [
            { icon: 'github', link: 'http://192.168.30.241/wangming/jackery-docs' },
            { icon: 'twitter', link: '...' },
            { icon: 'discord', link: '...' },
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2023-present jackery'
        },
    }
}