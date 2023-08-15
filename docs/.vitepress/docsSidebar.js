const commonPath = '/docs';

export default [
    {
        text: 'Git',
        collapsible: true,
        collapsed: false,
        items: [
            { text: 'Commit 信息规范', link: `${commonPath}/git/commit.md` },
            { text: '常用 Git 命令清单', link: `${commonPath}/git/handle.md` },
            { text: 'Flow 工作流', link: `${commonPath}/git/flow.md` },
            { text: 'Git 使用实战', link: `${commonPath}/git/practice.md` },
        ]
    },
    {
        text: '目录',
        collapsible: true,
        collapsed: false,
        items: [
            { text: '目录规范', link: `${commonPath}/directory/rule.md` },
        ]
    },
]