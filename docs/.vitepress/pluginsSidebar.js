const commonPath = '/plugins';

export default [
    {
        text: 'Vite 插件',
        collapsible: true,
        collapsed: false,
        items: [
            { text: 'dev-qrcode', link: `${commonPath}/vite/dev-qrcode.md` },
        ]
    },
    {
        text: 'Babel 插件',
        collapsible: true,
        collapsed: false,
        items: [
            { text: 'Test', link: `${commonPath}/babel/test.md` },
        ]
    },
    {
        text: 'Vscode 插件',
        collapsible: true,
        collapsed: false,
        items: [
            { text: 'Test', link: `${commonPath}/vscode/test.md` },
        ]
    },
    {
        text: 'Chrome 插件',
        collapsible: true,
        collapsed: false,
        items: [
            { text: 'Test', link: `${commonPath}/chrome/test.md` },
        ]
    },
]