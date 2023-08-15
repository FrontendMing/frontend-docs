const commonPath = '/engineering';

export default [
    { text: '搭建npm私服', link: `${commonPath}/npm/index.md`, },
    {
        text: 'Monorepo',
        collapsible: true,
        collapsed: false,
        items: [
            { text: 'pnpm介绍', link: `${commonPath}/monorepo/pnpm/index.md` },
            { text: '项目搭建指南', link: `${commonPath}/monorepo/project/index.md` },
            { text: '项目地址', link: `${commonPath}/monorepo/project/link.md` },
        ]
    },
    {
        text: 'NodeJS',
        collapsible: true,
        collapsed: false,
        items: [
            { text: 'test', link: `${commonPath}/nodejs/index.md` },
        ]
    },
]