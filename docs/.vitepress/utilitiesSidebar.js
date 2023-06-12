const commonPath = '/utilities';

export default [
    {
        text: '简介',
        link: `${commonPath}/index.md`,
    },
    {
        text: '工具函数库',
        collapsible: true,
        collapsed: false,
        items: [
            { text: 'chunk', link: `${commonPath}/utils/chunk.md` },
            { text: 'copyText', link: `${commonPath}/utils/copyText.md` },
            { text: 'downloadFile', link: `${commonPath}/utils/downloadFile.md` },
            { text: 'debounce', link: `${commonPath}/utils/debounce.md` },
            { text: 'throttle', link: `${commonPath}/utils/throttle.md` },
        ]
    },
    {
        text: '工具类库',
        collapsible: true,
        collapsed: false,
        items: [
            { text: 'DragToMove', link: `${commonPath}/classes/DragToMove.md` },
        ]
    },
]