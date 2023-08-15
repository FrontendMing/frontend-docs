const commonPath = '/standard';

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
        text: '代码风格',
        collapsible: true,
        collapsed: false,
        items: [
            { text: '命名规范', link: `${commonPath}/code-style/naming.md` },
            { text: '目录规范', link: `${commonPath}/code-style/file-directory.md` },
            { text: 'HTML', link: `${commonPath}/code-style/html.md` },
            { text: 'CSS', link: `${commonPath}/code-style/css.md` },
            { text: 'Javascript', link: `${commonPath}/code-style/js.md` },
            // { text: 'BEM 命名规范', link: `${commonPath}/code-style/bem.md` },
            { text: '兼容性规范', link: `${commonPath}/code-style/compatibility.md` },
            { text: '响应式规范', link: `${commonPath}/code-style/responsive.md` },
        ]
    },
]