const commonPath = '/utilities';

export default [
    {
        text: '简介',
        link: `${commonPath}/index.md`,
    },
    {
        text: 'Getting Started',
        link: `${commonPath}/start.md`,
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
            { text: 'SimpleSwiper', link: `${commonPath}/classes/SimpleSwiper.md` },
            { text: 'DragToMove', link: `${commonPath}/classes/DragToMove.md` },
            { text: 'ValidateForm', link: `${commonPath}/classes/ValidateForm.md` },
            { text: 'Websocket', link: `${commonPath}/classes/Websocket.md` },
        ]
    },
]