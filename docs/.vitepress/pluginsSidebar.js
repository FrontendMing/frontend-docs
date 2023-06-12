const commonPath = '/plugins';

export default [
    {
        text: 'Chrome 插件',
        collapsible: true,
        collapsed: false,
        items: [
            { text: 'Test', link: `${commonPath}/chrome/test.md` },
        ]
    },
    {
        text: 'Vite 插件',
        collapsible: true,
        collapsed: false,
        items: [
            { text: 'Test', link: `${commonPath}/vite/test.md` },
        ]
    },
    {
        text: 'Vscode 插件',
        collapsible: true,
        collapsed: false,
        items: [
            { text: 'Test', link: `${commonPath}/vscode/test.md` },
        ]
    }
]