# Mobile + PC 皆等比缩放，无固定版心宽度

## 响应式规范策略
- < 1024px ： Mobile UI
- \>= 1024px ： PC UI

## 实现规则
### 分析
- PC 端设计稿是1920，也就是1024及以上，都是响应式布局
- Mobile 端设计稿是750，也就是1024以下，都是响应式布局


### 完整 uno.config.js 规则配置如下：
```js
import { defineConfig, presetUno, presetAttributify } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group'

export const theme = {
  colors: {
    primary: 'var(--brand-color)', // #FD5000
    main: 'var(--main-text-color)', // #222
    sub: 'var(--text-sub-color)', // #333
    regular: 'var(--regular-color)', // #666
    info: "var(--weak-color)", // #999
    disable: "var(--weak-color3)", // #ddd
    soft: "var(--soft-color)", // #F5F5F5
    f7: "var(--weak-color2)", // #F7F8F9
    gray: "#DCDCDC", 
    blue: "#2672FF",
  },
  breakpoints: {
    lg: '1024px', // Mobile 端 和 PC 端的断点
  },
};

const shortcuts = {
  "flex-start": 'flex items-center justify-start',
  "flex-center": 'flex items-center justify-center',
  "flex-between": 'flex items-center justify-between',
};

// 由于 UnoCSS 在构建时使用静态提取，因此在编译时不可能知道所有实用程序的组合。为此，可以配置 safelist 选项
// 动态样式示例：<div class="lg:j-w-${size}"></div>
// const safelist = 'w-50 w-100 lg:j-w-50 lg:j-w-100'.split(' ')

// hidden 类
const safelist = 'hidden lg:hidden'

// 生成规则
function createRules(prefix = 'j-', rate = 7.5, unit = 'vw') {
  const RegFc = props => ([, d]) => {

    const isArray = Object.prototype.toString.call(props).slice(8, -1) === 'Array'

    // 数组
    if (isArray) {
      return props.reduce((prev, next) => {
        prev[next] = `${d / rate}${unit}`
        return prev
      }, {})
    }
    // transform 特殊处理
    else if (props.includes(':')) {
      const [key, value] = props.split(':')
      return {
          [key]: `${value}(${d / rate}${unit})`
      }
    }

    // 默认
    return {
      [props]: `${d / rate}${unit}`
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

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify()
  ],
  rules: [
    // 移动端 - 响应式
    ...createRules('', MB_DESIGN_SIZE / 100, 'vw'),

    // PC端 - 响应式
    ...createRules('j-', PC_DESIGN_SIZE / 100, 'vw'),
    // PC端 - 固定像素大小
    ...createRules('a-', 1, 'px'),
    

    // zoom 缩小
    [/^zoom-([\.\d]+)$/, ([_, d]) => ({ zoom: `${d}%` })],
    // 字体
    [/^Gilroy-(\w+)$/, ([, d]) => ({ 'font-family': `Gilroy-${d}` })],
  ],
  theme,
  shortcuts,
  transformers: [
    transformerDirectives({
      // the defaults
      applyVariable: ['--at-apply', '--uno-apply', '--uno'],
    }),
    transformerVariantGroup(),
  ],
})
```

## 书写示例
```html
<!-- 标题 -->
<section class="w-full relative">
    <h2
        class="
            absolute left-1/2 -translate-x-1/2 Gilroy-Bold font-bold text-white text-center
            w-full top-0 px-40 text-72 leading-80
            lg:j-top-244 lg:j-w-1080 lg:j-px-0 lg:j-text-70 lg:j-leading-78
        "
    >Join Stories as a<br/>Storyteller!</h2>
</section>
```
### 解析：  
> 公共样式: 
  >> `absolute left-1/2 -translate-x-1/2 Gilroy-Bold font-bold text-white text-center`

> 移动端 (< 1024px) 样式: 
  >> `w-full top-0 px-40 text-72 leading-80`

> PC端 (\>=1024px) 样式: 
  >> `lg:j-top-244 lg:j-w-1080 lg:j-px-0 lg:j-text-70 lg:j-leading-78`


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
.top-0 {
    top: 0vw;
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
        width: 56.25vw;
    }
    .lg\:j-h-800 {
        height: 41.66666666666667vw;
    }
    .lg\:j-px-0 {
        padding-left: 0vw;
        padding-right: 0vw;
    }
    .lg\:j-top-244 {
        top: 12.708333333333334vw;
    }
    .lg\:j-text-70 {
        font-size: 3.6458333333333335vw;
    }
    .lg\:j-leading-78 {
        line-height: 4.0625vw;
    }
}
```

从而实现 
- Mobile + PC 皆等比缩放
