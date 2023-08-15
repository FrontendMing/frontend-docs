const commonPath = '/performance';

export default [
    {
        text: '代码优化',
        collapsible: true,
        collapsed: false,
        items: [
            {
                text: 'JS 四大观察者',
                collapsible: true,
                collapsed: false,
                items: [
                    { text: 'MutationObserver', link: `${commonPath}/code/observer/mutationObserver.md` },
                    { text: 'IntersectionObserver', link: `${commonPath}/code/observer/intersectionObserver.md` },
                    { text: 'ResizeObserver', link: `${commonPath}/code/observer/resizeObserver.md` },
                    { text: 'PerformanceObserver', link: `${commonPath}/code/observer/performanceAPI.md` },
                ]
            },
            { text: '优化动画和渲染', link: `${commonPath}/code/requestAnimationFrame.md` },
            { text: '页面生命周期', link: `${commonPath}/code/pageLifecycle.md` },
        ]
    },
    {
        text: '网络优化',
        collapsible: true,
        collapsed: false,
        items: [
            { text: 'HTTP2或HTTP3', link: `${commonPath}/network/http.md` },
            { text: '图片/视频加载', link: `${commonPath}/network/media.md` },
        ]
    },
    {
        text: '缓存优化',
        collapsible: true,
        collapsed: false,
        items: [
            { text: 'test', link: `${commonPath}/storage/index.md` },
        ]
    },
    {
        text: '打包优化',
        collapsible: true,
        collapsed: false,
        items: [
            { text: 'Vite打包', link: `${commonPath}/build/index.md` },
        ]
    },
    {
        text: '性能监测和分析',
        collapsible: true,
        collapsed: false,
        items: [
            { text: 'test', link: `${commonPath}/lighthouse/index.md` },
        ]
    },
]
