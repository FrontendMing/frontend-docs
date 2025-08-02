# Mobile (< 1024) 等比缩放
# PC (1024 ~ 1440) 等比缩放
# PC (>= 1440) 固定宽度

## 响应式规范策略

- < 1024px ： Mobile UI
- \>= 1024px && < 1440px ： PC UI
- \>= 1440px ： PC UI

## 实现规则
### 分析
- PC 端设计稿是1920，版心宽度1440，也就是1440及以上，都是固定像素布局
- Mobile 端设计稿是750，也就是1024以下，都是响应式布局
- PC 端 1024~1440 ，按响应式布局，由于只有 1920 宽度的设计稿，因此需要将 1920 的设计稿转为 1440 设计稿
  > 设计稿缩放比率为 1920 / 1440 = 1.33333333333333

### 为什么要缩放
- 缩放是为了将 1920 的设计稿转为 1440 设计稿，是为了在 1440 断点处，更平滑的从固定像素布局，过渡到响应式布局

- 如果不做缩放处理
  >> \>=1440，是固定像素布局，宽度为 1200px 是固定的  

  >> 在 1024 ~ 1440 区间，是按 1920 的设计稿尺寸适配的响应式，(1200/1920) * 1440 = 1032px, 则会在 1440 断点处从 1200px 突变到 1032px

- 怎么做缩放处理
  >> 按规则生成样式时，是按 1920 设计稿的尺寸去缩放的，也就是 1vw = 19.2px

  >> 1200 * (1920/1440) / 19.2 = 83.3333333333333vw, 也就是将 1200px 宽，转换为 83.3333333333333vw 宽

  >> 在实际渲染时，屏幕宽度为 1400时, 1vw = 14.4px, 则 83.3333333333333vw * 14.4 = 1200px, 即实际渲染宽度为 1200px

  >> 这样就可以做到在 1440 断点处，平滑的从固定像素布局，过渡到响应式布局

### 完整 uno.config.js 规则配置如下：
```js
import { defineConfig, presetUno, presetAttributify } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group'

export const theme = {
    colors: {
        primary: "var(--primary-color)", // #FD5000
    },
    breakpoints: {
        lg: '1024px', // Mobile 端和 PC 端的断点
        xl: '1440px', // PC 端响应式和固定像素的断点
    },
};

const shortcuts = {
    // flex 布局
    "flex-start": 'flex items-center justify-start',
    "flex-center": 'flex items-center justify-center',
    "flex-between": 'flex items-center justify-between',

    // 共用 button
    "large-button": ""
};

// 由于 UnoCSS 在构建时使用静态提取，因此在编译时不可能知道所有实用程序的组合。为此，可以配置 safelist 选项
// 动态样式示例：<div class="lg:j-w-${size}"></div>
// const safelist = 'w-50 w-100 lg:j-w-50 lg:j-w-100'.split(' ')

// hidden 类
const safelist = 'hidden lg:hidden'


// 生成规则/
/**
 * @params
 * prefix: 前缀, unocss在分析文本时，通过前缀匹配后, 生成对应的样式
 * rate: 比率, 表示 1vw 等于多少像素
 * unit: 单位, unocss 生成的样式的单位
 * scale: 缩放比率，由于设计稿是按 1920 ，但是只在 1440 断点时开始响应或失去响应，
 * 则缩放基准比率为 1920/1440
 */
function createRules({ prefix = 'j-', rate = 7.5, unit = 'vw', scale = 1, }) {

    const RegFc = props => ([, d]) => {

        const isArray = Object.prototype.toString.call(props).slice(8, -1) === 'Array'

        // props 为数组
        if (isArray) {
            return props.reduce((prev, next) => {
                prev[next] = `${d * scale / rate}${unit}`
                return prev
            }, {})
        }
        // transform 特殊处理
        else if (props.includes(':')) {
            const [key, value] = props.split(':')
            return {
                [key]: `${value}(${d * scale / rate}${unit})`
            }
        }

        // 默认
        return {
            [props]: `${d * scale / rate}${unit}`
        }
    }

    return [
        [new RegExp("^" + prefix + "w-([\\.\\d]+)$"), RegFc('width')],
        [new RegExp("^" + prefix + "min-w-([\\.\\d]+)$"), RegFc('min-width')],
        [new RegExp("^" + prefix + "max-w-([\\.\\d]+)$"), RegFc('max-width')],
        [new RegExp("^" + prefix + "h-([\\.\\d]+)$"), RegFc('height')],
        [new RegExp("^" + prefix + "min-h-([\\.\\d]+)$"), RegFc('min-height')],
        [new RegExp("^" + prefix + "max-h-([\\.\\d]+)$"), RegFc('max-height')],
        [new RegExp("^" + prefix + "m-([\\.\\d]+)$"), RegFc('margin')],
        [new RegExp("^" + prefix + "mx-([\\.\\d]+)$"), RegFc(['margin-left', 'margin-right'])],
        [new RegExp("^" + prefix + "my-([\\.\\d]+)$"), RegFc(['margin-top', 'margin-bottom'])],
        [new RegExp("^" + prefix + "ml-([\\.\\d]+)$"), RegFc('margin-left')],
        [new RegExp("^" + prefix + "mr-([\\.\\d]+)$"), RegFc('margin-right')],
        [new RegExp("^" + prefix + "mt-([\\.\\d]+)$"), RegFc('margin-top')],
        [new RegExp("^" + prefix + "mb-([\\.\\d]+)$"), RegFc('margin-bottom')],
        [new RegExp("^" + prefix + "p-([\\.\\d]+)$"), RegFc('padding')],
        [new RegExp("^" + prefix + "px-([\\.\\d]+)$"), RegFc(['padding-left', 'padding-right'])],
        [new RegExp("^" + prefix + "py-([\\.\\d]+)$"), RegFc(['padding-top', 'padding-bottom'])],
        [new RegExp("^" + prefix + "pl-([\\.\\d]+)$"), RegFc('padding-left')],
        [new RegExp("^" + prefix + "pr-([\\.\\d]+)$"), RegFc('padding-right')],
        [new RegExp("^" + prefix + "pt-([\\.\\d]+)$"), RegFc('padding-top')],
        [new RegExp("^" + prefix + "pb-([\\.\\d]+)$"), RegFc('padding-bottom')],
        [new RegExp("^" + prefix + "top-([\\.\\d]+)$"), RegFc('top')],
        [new RegExp("^" + prefix + "right-([\\.\\d]+)$"), RegFc('right')],
        [new RegExp("^" + prefix + "bottom-([\\.\\d]+)$"), RegFc('bottom')],
        [new RegExp("^" + prefix + "left-([\\.\\d]+)$"), RegFc('left')],
        [new RegExp("^" + prefix + "gap-([\\.\\d]+)$"), RegFc('gap')],
        [new RegExp("^" + prefix + "gap-x-([\\.\\d]+)$"), RegFc('column-gap')],
        [new RegExp("^" + prefix + "gap-y-([\\.\\d]+)$"), RegFc('row-gap')],
        [new RegExp("^" + prefix + "border-([\\.\\d]+)$"), RegFc('border-width')],
        [new RegExp("^" + prefix + "border-l-([\\.\\d]+)$"), RegFc('border-left-width')],
        [new RegExp("^" + prefix + "border-r-([\\.\\d]+)$"), RegFc('border-right-width')],
        [new RegExp("^" + prefix + "border-t-([\\.\\d]+)$"), RegFc('border-top-width')],
        [new RegExp("^" + prefix + "border-b-([\\.\\d]+)$"), RegFc('border-bottom-width')],
        [new RegExp("^" + prefix + "rounded-([\\.\\d]+)$"), RegFc('border-radius')],
        [new RegExp("^" + prefix + "rounded-t-([\\.\\d]+)$"), RegFc(['border-top-left-radius', 'border-top-right-radius'])],
        [new RegExp("^" + prefix + "rounded-b-([\\.\\d]+)$"), RegFc(['border-bottom-left-radius', 'border-bottom-right-radius'])],
        [new RegExp("^" + prefix + "rounded-l-([\\.\\d]+)$"), RegFc(['border-top-left-radius', 'border-bottom-left-radius'])],
        [new RegExp("^" + prefix + "rounded-r-([\\.\\d]+)$"), RegFc(['border-top-right-radius', 'border-bottom-right-radius'])],
        [new RegExp("^" + prefix + "rounded-tl-([\\.\\d]+)$"), RegFc('border-top-left-radius')],
        [new RegExp("^" + prefix + "rounded-tr-([\\.\\d]+)$"), RegFc('border-top-right-radius')],
        [new RegExp("^" + prefix + "rounded-bl-([\\.\\d]+)$"), RegFc('border-bottom-left-radius')],
        [new RegExp("^" + prefix + "rounded-br-([\\.\\d]+)$"), RegFc('border-bottom-right-radius')],
        [new RegExp("^" + prefix + "text-([\\.\\d]+)$"), RegFc('font-size')],
        [new RegExp("^" + prefix + "leading-([\\.\\d]+)$"), RegFc('line-height')],
        [new RegExp("^" + prefix + "translate-([\\.\\d]+)$"), RegFc('transform:translate')],
        [new RegExp("^" + prefix + "translate-x-([\\.\\d]+)$"), RegFc('transform:translateX')],
        [new RegExp("^" + prefix + "translate-y-([\\.\\d]+)$"), RegFc('transform:translateY')],
    ]
}


// PC端 设计稿尺寸
const PC_DESIGN_SIZE = 1920
// 移动端 设计稿尺寸
const MB_DESIGN_SIZE = 750

// 版心宽度
const CONTENT_AREA = 1440

export default defineConfig({
    presets: [
        presetUno(),
        presetAttributify()
    ],
    rules: [
        // 移动端 - 响应式
        ...createRules({
            prefix: '',                 // 通过前缀匹配
            rate: MB_DESIGN_SIZE / 100, // 比率
            unit: 'vw',                 // 单位
            scale: 1,                   // 缩放比率
        }),

        // PC端 - 响应式
        ...createRules({
            prefix: 'j-',                          // 通过前缀匹配
            rate: PC_DESIGN_SIZE / 100,            // 比率
            unit: 'vw',                            // 单位
            scale: PC_DESIGN_SIZE / CONTENT_AREA,  // 缩放比率
        }),

        // PC端 - 固定版心
        ...createRules({
            prefix: 'a-',               // 通过前缀匹配
            rate: 1,                    // 比率
            unit: 'px',                 // 单位
            scale: 1,                   // 缩放比率
        }),

        // zoom 缩放
        [/^zoom-([\.\d]+)$/, ([_, d]) => ({ zoom: `${d}%` })],
        // 字体
        [/^Gilroy-(\w+)$/, ([, d]) => ({ 'font-family': `Gilroy-${d}` })],
    ],
    theme,
    shortcuts,
    safelist,
    transformers: [
        transformerDirectives({
            // the defaults
            applyVariable: ['--at-apply', '--uno-apply', '--uno'],
        }),
        transformerVariantGroup(),
    ],
});
```

## 书写示例
```html
<!-- 标题 -->
<section class="w-full relative">
    <h2
        class="
            absolute left-1/2 -translate-x-1/2 Gilroy-Bold font-bold text-white text-center
            w-full top-200 px-40 text-72 leading-80
            lg:j-top-244 lg:j-w-1080 lg:j-px-0 lg:j-text-70 lg:j-leading-78
            xl:a-top-244 xl:a-w-1080 xl:a-px-0 xl:a-text-70 xl:a-leading-78
        "
    >Join Stories as a<br/>Storyteller!</h2>
</section>
```
### 解析：  
> 公共样式: 
  >> `absolute left-1/2 -translate-x-1/2 Gilroy-Bold font-bold text-white text-center`

> 移动端 (< 1024px) 样式: 
  >> `w-full top-0 px-40 text-72 leading-80`

> PC端 (1024px ~ 1440px) 样式: 
  >> `lg:j-top-244 lg:j-w-1080 lg:j-px-0 lg:j-text-70 lg:j-leading-78`

> PC端 (\>= 1440px) 样式: 
  >> `xl:a-top-244 xl:a-w-1080 xl:a-px-0 xl:a-text-70 xl:a-leading-78`


### 最后会生成以下样式：
```css
.absolute {
    position: absolute;
}

.left-1\/2 {
    left: 50%;
}

.w-full {
    width: 100%;
}

.-translate-x-1\/2 {
    --un-translate-x: -50%;
    transform: translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));
}

.object-cover {
    object-fit: cover;
}

.text-center {
    text-align: center;
}

.font-bold {
    font-weight: 700;
}

.text-white {
    --un-text-opacity: 1;
    color: rgba(255, 255, 255, var(--un-text-opacity));
}

.h-1080 {
    height: 144vw;
}

.px-40 {
    padding-left: 5.333333333333333vw;
    padding-right: 5.333333333333333vw;
}

.top-200 {
    top: 26.666666666666668vw;
}

.text-72 {
    font-size: 9.6vw;
}

.leading-80 {
    line-height: 10.666666666666666vw;
}

.Gilroy-Bold {
    font-family: Gilroy-Bold;
}

@media (min-width: 1024px) {
    .lg\:j-w-1080 {
        width: 75vw;
    }

    .lg\:j-h-800 {
        height: 55.55555555555555vw;
    }

    .lg\:j-px-0 {
        padding-left: 0vw;
        padding-right: 0vw;
    }

    .lg\:j-top-244 {
        top: 16.944444444444443vw;
    }

    .lg\:j-text-70 {
        font-size: 4.861111111111111vw;
    }

    .lg\:j-leading-78 {
        line-height: 5.416666666666667vw;
    }
}

@media (min-width: 1440px) {
    .xl\:a-w-1080 {
        width: 1080px;
    }

    .xl\:a-h-800 {
        height: 800px;
    }

    .xl\:a-px-0 {
        padding-left: 0px;
        padding-right: 0px;
    }

    .xl\:a-top-244 {
        top: 244px;
    }

    .xl\:a-text-70 {
        font-size: 70px;
    }

    .xl\:a-leading-78 {
        line-height: 78px;
    }
}
```

从而实现 
- Mobile (< 1024) 等比缩放
- PC (1024 ~ 1440) 等比缩放
- PC (>= 1440) 固定宽度
