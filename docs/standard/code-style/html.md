## HTML文件规范



## 1. 前言

HTML 作为描述网页结构的超文本标记语言，写出一手超漂亮的结构是我们持续不懈追寻的目标。

本文档的目标是使 HTML 代码风格保持一致，容易被理解和被维护。



### 2 代码风格



#### 2.1 缩进与换行

**[强制] 使用 `2` 个空格做为一个缩进层级，不允许使用 `4` 个空格 或 `tab` 字符。**

解释： 对于非 HTML 标签之间的缩进，比如 script 或 style 标签内容缩进，与 script 或 style 标签的缩进同级。

示例：

```html
<style>
/* 样式内容的第一级缩进与所属的 style 标签对齐 */
ul {
  padding: 0;
}
</style>
<ul>
  <li>first</li>
  <li>second</li>
</ul>
<script>
// 脚本代码的第一级缩进与所属的 script 标签对齐
require(['app'], function (app) {
  app.init();
});
</script>
```



#### 2.2 命名

**[强制] 类名 必须单词全字母小写，单词间以 `-` 分隔。**

**[强制] 功能块以双中隔线分离。**

示例：

```html
<!-- good -->
<div class="sidebar">
	<div class="sidebar-box">
    <div class="sidebar-box--content"></div>
  </div>
</div>

<!-- bad -->
<div class="left"></div>
```



#### 2.3 标签

**[强制] 标签名必须使用小写字母。**

示例：

```html
<!-- good -->
<p>Hello StyleGuide!</p>

<!-- bad -->
<P>Hello StyleGuide!</P>
```



**[强制] 对于无需自闭合的标签，不允许自闭合。**

解释：

常见无需自闭合标签有 `input`、`br`、`img`、`hr` 等。

示例：

```html
<!-- good -->
<input type="text" name="title">

<!-- bad -->
<input type="text" name="title" />
```



**[强制] 对 `HTML5` 中规定允许省略的闭合标签，不允许省略闭合标签。**

示例：

```html
<!-- good -->
<ul>
  <li>first</li>
  <li>second</li>
</ul>

<!-- bad -->
<ul>
  <li>first
  <li>second
</ul>
```



**[强制] 标签使用必须符合标签嵌套规则。**

解释：

比如 `div` 不得置于 `p` 中，`tbody` 必须置于 `table` 中。

详细的标签嵌套规则参见[HTML DTD](http://www.cs.tut.fi/~jkorpela/html5.dtd)中的 `Elements` 定义部分。



**[建议] 标签的使用应尽量简洁，减少不必要的标签。**

示例：

```html
<!-- good -->
<img class="avatar" src="image.png">

<!-- bad -->
<span class="avatar">
  <img src="image.png">
</span>
```



#### 2.4 属性

**[强制] 属性名必须使用小写字母。**

示例：

```html
<!-- good -->
<table cellspacing="0">...</table>

<!-- bad -->
<table cellSpacing="0">...</table>
```



**[强制] 属性值必须用双引号包围。**

解释：

不允许使用单引号，不允许不使用引号。

示例：

```html
<!-- good -->
<script src="esl.js"></script>

<!-- bad -->
<script src='esl.js'></script>
<script src=esl.js></script>
```



**[建议] 布尔类型的属性，建议不添加属性值。**

示例：

```html
<input type="text" disabled>
<input type="checkbox" value="1" checked>
```



**[建议] 自定义属性建议以 `xxx-` 为前缀，推荐使用 `data-`。**

解释：

使用前缀有助于区分自定义属性和标准定义的属性。

示例：

```html
<ol data-ui-type="Select"></ol>
```



### 3 head



#### 3.1 title

**[强制] 页面必须包含 `title` 标签声明标题。**

**[强制] `title` 必须作为 `head` 的直接子元素，并紧随 `charset` 声明之后。**

解释：

`title` 中如果包含 ASCII 之外的字符，浏览器需要知道字符编码类型才能进行解码，否则可能导致乱码。

示例：

```html
<head>
  <meta charset="UTF-8">
  <title>页面标题</title>
</head>
```



#### 3.2 favicon

**[强制] 保证 `favicon` 可访问。**

解释：

在未指定 favicon 时，大多数浏览器会请求 Web Server 根目录下的 `favicon.ico` 。为了保证 favicon 可访问，避免 404，必须遵循以下两种方法之一：

1. 在 Web Server 根目录放置 `favicon.ico` 文件。
2. 使用 `link` 指定 favicon。

示例：

```html
<link rel="shortcut icon" href="path/to/favicon.ico">
```



### 4 通用

#### 4.1 DOCTYPE

**[强制] 使用 `HTML5` 的 `doctype` 来启用标准模式，建议使用大写的 `DOCTYPE`。**

示例：

```html
<!DOCTYPE html>
```



**[建议] 启用 IE Edge 模式。**

示例：

```html
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
```



**[建议] 在 `html` 标签上设置正确的 `lang` 属性。**

解释：

有助于提高页面的可访问性，如：让语音合成工具确定其所应该采用的发音，令翻译工具确定其翻译语言等。

示例：

```html
<html lang="zh-CN">
```



#### 4.2 编码

**[强制] 页面必须使用精简形式，明确指定字符编码。指定字符编码的 `meta` 必须是 `head` 的第一个直接子元素。**

解释：

见 [HTML5 Charset能用吗](http://www.qianduan.net/html5-charset-can-it.html) 一文。

示例：

```html
<html>
  <head>
    <meta charset="UTF-8">
    ......
  </head>
  <body>
    ......
  </body>
</html>
```



**[建议]如果引用外部资源的 `URL` 协议部分与页面相同，建议省略协议前**缀。

示例：

```html
<script src="//s1.bdstatic.com/cache/static/jquery-1.10.2.min_f2fb5194.js"></script>
```
