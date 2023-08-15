## CSS文件规范



### 1. 前言

css作为前端同学的门面，写出一手漂亮的样式与代码始终是我们不变的目标。

无论团队人数多少，代码应该同出一门。





### 2 代码风格



#### 2.1 缩进

**[强制] 使用`2`个空格作为一个缩进层级，不允许使用`4`个空格或`tab`字符**

示例：

```css
.selector {
  margin: 0;
  padding: 0;
}
```



#### 2.2 空格

**[强制] `选择器` 与 `{` 之间必须包含空格。**

示例：

```css
.selector {
}
```



**[强制] `属性名` 与之后的 `:` 之间不允许包含空格， `:` 与 `属性值` 之间必须包含空格。**

示例：

```css
margin: 0;
```



**[强制]`列表型属性值` 书写在单行时，`,` 后必须跟一个空格。**

示例：

```css
font-family: Arial, sans-serif;
```



#### 2.3 选择器

**[强制] 当一个 rule 包含多个 selector 时，每个选择器声明必须独占一行。**

示例：

```css
/* good */
.post,
.page,
.comment {
  line-height: 1.5;
}

/* bad */
.post, .page, .comment {
  line-height: 1.5;
}
```



#### 2.4 属性

**[强制] 属性定义必须另起一行。**

示例：

```css
/* good */
.selector {
  margin: 0;
  padding: 0;
}

/* bad */
.selector { margin: 0; padding: 0; }
```



**[强制] 属性定义后必须以分号结尾。**

示例：

```css
/* good */
.selector {
  margin: 0;
}

/* bad */
.selector {
  margin: 0
}
```



### 3 通用



#### 3.1 命名

**[强制]  root伪类定义的全局变量，以双中划线--开头，使用小写字母，以中划线分隔 **
**[强制]  类名使用小写字母，以中划线分隔，功能块以双中隔线分离; **

​**动态css中的变量、函数、混合、placeholder采用驼峰式命名**。

```CSS
/* root 定义变量 */
:root {
  --color-primary: #FD5000;
  ...
}

/* class */
.element-box--content {
    ...
}

/* id */
#myDialog {
    ...
}

/* 变量 */
$colorBlack: #000;

/* 函数 */
@function pxToRem($px) {
  ...
}

/* 混合 */
@mixin centerBlock {
  ...
}

/* placeholder */
%myDialog {
  ...
}
```



#### 3.2 选择器

**[建议] 选择器的嵌套层级应不大于 `3` 级，位置靠后的限定条件应尽可能精确。**

示例：

```css
/* good */
#username input {}
.comment .avatar {}

/* bad */
.page .header .login #username input {}
.comment div * {}
```



#### 3.3 属性缩写

**[建议] 在可以使用缩写的情况下，尽量使用属性缩写。**

示例：

```css
/* good */
.post {
  font: 12px/1.5 arial, sans-serif;
}

/* bad */
.post {
  font-family: arial, sans-serif;
  font-size: 12px;
  line-height: 1.5;
}
```



**[建议] 使用 `border` / `margin` / `padding` 等缩写时，应注意隐含值对实际数值的影响，确实需要设置多个方向的值时才使用缩写。**

解释：

`border` / `margin` / `padding` 等缩写会同时设置多个属性的值，容易覆盖不需要覆盖的设定。如某些方向需要继承其他声明的值，则应该分开设置。

示例：

```css
/* 水平居中 <article class="page"> 并且高亮边框 */
article {
  margin: 5px;
  border: 1px solid #999;
}

/* good */
.page {
  margin-right: auto;
  margin-left: auto;
}

.featured {
  border-color: #69c;
}

/* bad */
.page {
  margin: 5px auto; /* 不必要的冗余 */
}

.featured {
  border: 1px solid #69c; /* 不必要的冗余 */
}
```



#### 3.4 属性书写顺序

**[建议] 同一 rule set 下的属性在书写时，应按功能进行分组，并以 Formatting Model（布局方式、位置） > Box Model（尺寸） > Typographic（文本相关） > Visual（视觉效果） 的顺序书写，以提高代码的可读性。**

解释：

- Formatting Model 相关属性包括：`position` / `top` / `right` / `bottom` / `left` / `float` / `display` / `overflow` 等
- Box Model 相关属性包括：`border` / `margin` / `padding` / `width` / `height` 等
- Typographic 相关属性包括：`font` / `line-height` / `text-align` / `word-wrap` 等
- Visual 相关属性包括：`background` / `color` / `transition` / `list-style` 等

另外，如果包含 `content` 属性，应放在最前面。

示例：

```css
.sidebar {
  /* formatting model: positioning schemes / offsets / z-indexes / display / ...  */
  position: absolute;
  top: 50px;
  left: 0;
  overflow-x: hidden;

  /* box model: sizes / margins / paddings / borders / ...  */
  width: 200px;
  padding: 5px;
  border: 1px solid #ddd;

  /* typographic: font / aligns / text styles / ... */
  font-size: 14px;
  line-height: 20px;

  /* visual: colors / shadows / gradients / ... */
  background: #f5f5f5;
  color: #333;
  -webkit-transition: color 1s;
    -moz-transition: color 1s;
      transition: color 1s;
}
```



#### 3.5 !important

#### [建议] 尽量不使用 `!important` 声明。

#### [建议] 当需要强制指定样式且不允许任何场景覆盖时，通过标签内联和 `!important` 定义样式。

解释：

必须注意的是，仅在设计上 `确实不允许任何其它场景覆盖样式` 时，才使用内联的 `!important` 样式。通常在第三方环境的应用中使用这种方案。



#### 3.6 z-index

**[建议] 在可控环境下，期望显示在最上层的元素，`z-index` 指定为 `9999`。**

解释：

可控环境分成两种，一种是自身产品线环境；还有一种是可能会被其他产品线引用，但是不会被外部第三方的产品引用。



### 4 值与单位

#### 4.1 数值

**[强制] 当数值为 0 - 1 之间的小数时，不能省略整数部分的 `0`。**

示例：

```CSS
/* good */
panel {
  opacity: .8;
}

/* bad */
panel {
  opacity: 0.8;
}
```



#### 4.2 url()

**[强制] `url()` 函数中的路径添加双引号。**

示例：

```
body {
  background: url("bg.png");
}
```

**[建议] `url()` 函数中的绝对路径可省去协议名。**

示例：

```
body {
  background: url("//baidu.com/img/bg.png") no-repeat 0 0;
}
```



#### 4.3 引号

**[强制] 最外层统一使用双引号；属性选择器中的属性值需要引号。**

```css
.element:after {
  content: "";
  background-image: url("logo.png");
}

li[data-type="single"] {
  ...
}
```



#### 4.4 长度

**[强制] 长度为 `0` 时须省略单位。 (也只有长度单位可省)**

示例：

```css
/* good */
body {
  padding: 0 5px;
}

/* bad */
body {
  padding: 0px 5px;
}
```



#### 4.5 颜色

**[强制] RGB颜色值必须使用十六进制记号形式 `#rrggbb`。不允许使用 `rgb()`。**

解释：

带有alpha的颜色信息可以使用 `rgba()`。使用 `rgba()` 时每个逗号后必须保留一个空格。

示例：

```css
/* good */
.success {
  box-shadow: 0 0 2px rgba(0, 128, 0, .3);
  border-color: #008000;
}

/* bad */
.success {
  box-shadow: 0 0 2px rgba(0,128,0,.3);
  border-color: rgb(0, 128, 0);
}
```



**[强制] 颜色值可以缩写时，不允许使用缩写形式。**

示例：

```css
/* good */
.success {
  background-color: #aaccaa;
}

/* bad */
.success {
  background-color: #aca;
}
```



**[强制] 颜色值不允许使用命名色值。**

示例：

```css
/* good */
.success {
  color: #90ee90;
}

/* bad */
.success {
  color: lightgreen;
}
```



**[建议] 颜色值中的英文字符采用小写。如不用小写也需要保证同一项目内保持大小写一致。**

示例：

```css
/* good */
.success {
  background-color: #acacaa;
  color: #90ee90;
}

/* good */
.success {
  background-color: #ACACAA;
  color: #90EE90;
}

/* bad */
.success {
  background-color: #ACACAA;
  color: #90ee90;
}
```



### 5 文本编排



#### 5.1 字重

**[强制] `font-weight` 属性必须使用数值方式描述。**

解释：

CSS 的字重分 100 – 900 共九档，但目前受字体本身质量和浏览器的限制，实际上支持 `400` 和 `700` 两档，分别等价于关键词 `normal` 和 `bold`。

浏览器本身使用一系列[启发式规则](http://www.w3.org/TR/CSS21/fonts.html#propdef-font-weight)来进行匹配，在 `<700` 时一般匹配字体的 Regular 字重，`>=700` 时匹配 Bold 字重。

但已有浏览器开始支持 `=600` 时匹配 Semibold 字重 (见[此表](http://justineo.github.io/slideshows/font/#/3/15))，故使用数值描述增加了灵活性，也更简短。

示例：

```css
/* good */
h1 {
  font-weight: 700;
}

/* bad */
h1 {
  font-weight: bold;
}
```



### 6 响应式

**[强制] `Media Query` 不得单独编排，必须与相关的规则一起定义。**

示例：

```css
/* Good */
/* header styles */
@media (...) {
  /* header styles */
}

/* main styles */
@media (...) {
  /* main styles */
}

/* footer styles */
@media (...) {
  /* footer styles */
}


/* Bad */
/* header styles */
/* main styles */
/* footer styles */

@media (...) {
  /* header styles */
  /* main styles */
  /* footer styles */
}

```
