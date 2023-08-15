const commonPath = '/website';

export default [
    {
        text: '响应式方案',
        link: `${commonPath}/responsive.md`,
    },
    {
        text: '方案一：无固定版心宽度',
        link: `${commonPath}/responsive-scale-full.md`,
    },
    {
        text: '方案二：固定版心宽度',
        link: `${commonPath}/responsive-fixed-central.md`
    },
    {
        text: 'Shopify 开发',
        collapsible: true,
        collapsed: false,
        items: [
            { text: 'theme工程目录', link: `${commonPath}/Shopify/theme.md` },
            { text: '加入购物车', link: `${commonPath}/Shopify/add-to-cart.md` },
            { text: '立即购买', link: `${commonPath}/Shopify/buy-now.md` },
        ]
    },
]