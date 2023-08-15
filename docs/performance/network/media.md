<meta name="referrer" content="no-referrer">

# 资源加载优化


## 图片资源优化
> 图片资源在我们业务中占比最重，对于性能的影响也是最为显著的

### 图片格式选择与对比：
> 针对目前主流类型进行比较：

- **webp**

同时支持有损和无损压缩，支持透明度图片格式， 兼容性较差 压缩比高，大量图片场景适用<br />WebP 是未压缩照片的最佳格式（比 JPEG 小 1.42 倍，比 PNG 小 1.70 倍，比 AVIF 小 1.75 倍）

- **PNG**

支持无损压缩，支持多级不透明度，尺寸通常较大，适用于线条明显，标志性强的图片应用场景。

- **JPG**

压缩程度也可以调整,可以在质量和大小间平衡，不支持动画和透明度。 适用于高分辨率和大量渐变的大型、复杂、彩色图像。

[以下是几种常用图片比对情况：](https://photutorial.com/image-format-comparison-statistics/)

| 图片类型  | Alpha 通道 | 动画 | 编码性能 | 压缩 | 颜色支持 | 兼容 |
| --- | --- | --- | --- | --- | --- | --- |
| JPG | 不支持 | 不支持 | 较高 | 有损 | 直接色 | ALL |
| PNG | 支持 | 不支持 | 较高 | 无损 | 索引色(256)\\直接色 | ALL |
| WebP | 支持 | 支持 | 差 | 有损/无损 | 直接色 | 高版本 |

![](https://cdn.nlark.com/yuque/0/2023/svg/25670427/1689849449342-b0cfe3cd-1efb-44f3-85a7-040cd38e2f9b.svg#from=url&id=oK5Oe&originHeight=720&originWidth=960&originalType=binary&ratio=2.25&rotation=0&showTitle=false&status=done&style=none&title=)

### 图片加载优化

#### 响应式图片
根据不同屏幕尺寸、DPR设备像素比提供合适的图片，在视网膜屏下，CSS像素大小图片会失真模糊（一倍图）
> 设备独立像素 = CSS像素     设备像素 = 物理像素        DPR = 物理像素 / CSS像素 （> 1 称为视网膜屏）

**处理方案：**

- 统一多倍图-高dpr设备与普通设备效果都兼容，但是资源过大（例如：[ecoflow](https://www.ecoflow.com/cn/delta-2-portable-power-station)使用方案）

![](https://cdn.nlark.com/yuque/0/2023/png/25670427/1689897043935-3904ebff-3736-4f0c-939a-2d2e77770043.png#averageHue=%2349647e&clientId=u7f6a169b-dcb0-4&from=paste&height=214&id=ubed9f9f6&originHeight=1377&originWidth=2706&originalType=binary&ratio=2.25&rotation=0&showTitle=false&size=1210822&status=done&style=none&taskId=u192be552-3e31-42ba-b380-3f04c860aa3&title=&width=420.22222900390625)

- 媒体查询设置 - 代码太多，无法逐个设置
```css
#id { 
  background: url(xxx@2x.png) 
}
@media (device-pixel-ratio: 2) {
  #id { 
    background: url(xxx@2x.png) 
  }
}
@media (device-pixel-ratio: 3) {
  #id { 
    background: url(xxx@3x.png) 
  }
}
```

- srcset 配合像素密度描述符x / picture（苹果官网）：该方案处理多倍图加载的同时也可以处理响应式布局的差异性，在不同视口可以加载指定图片资源

![image.png](https://cdn.nlark.com/yuque/0/2023/png/25670427/1689897606760-d6d1cea9-c5c9-4a36-80c3-98ee20311702.png#averageHue=%233e5252&clientId=udad46c45-c730-4&from=paste&height=208&id=u082ccd69&originHeight=1323&originWidth=2650&originalType=binary&ratio=2.25&rotation=0&showTitle=false&size=1052297&status=done&style=none&taskId=u9f9eaac2-98b9-464f-b725-091f6c0c4d8&title=&width=417.22222900390625)<br />优化：CDN自带图片裁切，可以根据使用场景以及屏幕尺寸加载裁切后的图片，图片可以上传多倍图，适用响应式图片根据设备dpr和屏幕尺寸进行裁切选择<br />![image.png](https://cdn.nlark.com/yuque/0/2023/png/25670427/1689899634754-10318578-0427-433f-9ef4-d6fb0d97bebb.png#averageHue=%23232221&clientId=udad46c45-c730-4&from=paste&height=130&id=u79deece1&originHeight=292&originWidth=1478&originalType=binary&ratio=2.25&rotation=0&showTitle=false&size=45249&status=done&style=none&taskId=u6bb71445-7c8e-4093-97bc-e9fd6f0be62&title=&width=656.8888888888889)


#### 图片懒加载
未滚动到指定区域之中的图片不会被加载，实现方式有两种，`HTML 属性 loading` or `js实现`

- loading lazy 实现 `<img src="xxx.jpg" loading="lazy" alt>`  简单便捷
- js实现  监听滚动或者intersection observe等实现，目前我们采用的第三方库[lazysizes](https://afarkas.github.io/lazysizes/index.html)，相比较html属性，灵活性高(可以指定位置范围加载)，适用场景多(script、css、iframe、video等都适用)，拓展性强（可以添加骨架图、渐进式、低质量占位图等）
> 💡 Tips：DJI和apple均采用的js 懒加载

未懒加载下：<br />![](https://cdn.nlark.com/yuque/0/2023/png/25670427/1689815845907-d0d7b167-5445-4d82-ab2e-1e265f629359.png#averageHue=%23fdfcfb&from=url&height=299&id=RdlvN&originHeight=912&originWidth=1070&originalType=binary&ratio=2.25&rotation=0&showTitle=false&status=done&style=none&title=&width=350.22222900390625)<br />部分懒加载优化后：<br />![](https://cdn.nlark.com/yuque/0/2023/png/25670427/1689816336079-965958c5-b204-41d9-b31a-4f0a08c030b9.png#averageHue=%23fdfbfa&from=url&height=359&id=YAOzD&originHeight=808&originWidth=774&originalType=binary&ratio=2.25&rotation=0&showTitle=false&status=done&style=none&title=&width=344.22222900390625)<br />大图处理后：<br />![](https://cdn.nlark.com/yuque/0/2023/png/25670427/1689824235822-90a0ec5f-4afe-44bd-a8b4-32e2ca0c1c7e.png#averageHue=%23fdfbfa&from=url&height=267&id=RDF5p&originHeight=636&originWidth=873&originalType=binary&ratio=2.25&rotation=0&showTitle=false&status=done&style=none&title=&width=366.22222900390625)



### 讨论与总结

- 图片懒加载： lazysizes(图片，video，iframe，script), 属性：loading = "lazy"（都加）
- 响应式图片（尺寸）picture-source 媒体查询/dpr （shopify支持自动裁切， aem?）
- 物料图片2x      建议优先webp

## 视频加载优化
视频默认都是页面载入立即加载，在有视频的情况下，页面加载资源过大，可以使用 preload = none或者lazysizes等进行指定加载<br />但是部分情况下，需要视频自动播放，例如官网首页，userguide等，该情况可以使用懒加载配合scroll进行指定加载：案例-[apple](https://www.apple.com/ipad-pro/) / [自定义demo](https://codepen.io/zzl-leo/pen/wvQXQjg)动画自动加载，指定位置播放<br />![image.png](https://cdn.nlark.com/yuque/0/2023/png/25670427/1689900044897-3eacb506-f7c6-4c51-ab9f-bab654ca1a29.png#averageHue=%23ccd6d0&clientId=udad46c45-c730-4&from=paste&height=173&id=u01e66f60&originHeight=1282&originWidth=2907&originalType=binary&ratio=2.25&rotation=0&showTitle=false&size=1053921&status=done&style=none&taskId=uf5ac11dc-5ebc-4705-ac6d-b81f13d4bda&title=&width=392.22222900390625)

### 讨论与总结

- 需要自动播放：关键位置加载指定位置播放

## Iconfont图标字体加载使用(后续待确认)
目前采用ali iconfont字体，缺点是无法按需加载，页面只使用了两个字体图标也必须加载整个字体包才行<br />优化：使用SVG替代：在snippts下创建对应的片段使用即可<br />![image.png](https://cdn.nlark.com/yuque/0/2023/png/25670427/1689903033755-14ed1099-9960-4efd-ace6-792bee1904e9.png#averageHue=%23a4754f&clientId=u4a87bbf0-b8cb-4&from=paste&height=117&id=u77be0238&originHeight=117&originWidth=1234&originalType=binary&ratio=1&rotation=0&showTitle=false&size=32719&status=done&style=none&taskId=u96d88cf4-c00b-4095-b37c-08aab0e7795&title=&width=1234)

### 讨论与总结

- 待确认aem是否支持snippet形式引用

## JS&CSS构建优化
shopify中复用的组件或者代码片段可以使用section或者snippts实现，开发过程很容易将css&js在单文件中实现（liquid），这样导致的问题就是单个页面中多次复用一个模块时候会导致css以及js多次重载，造成重绘重排以及脚本执行错误等问题出现<br />![image.png](https://cdn.nlark.com/yuque/0/2023/png/25670427/1689903517991-621d6829-4cc3-4373-a3c6-704bada9c43f.png#averageHue=%23fdfbfa&clientId=u4a87bbf0-b8cb-4&from=paste&height=256&id=ue5200220&originHeight=689&originWidth=1094&originalType=binary&ratio=1&rotation=0&showTitle=false&size=145337&status=done&style=none&taskId=u482b7c30-efc7-4eca-a17d-63f5be59409&title=&width=407)![image.png](https://cdn.nlark.com/yuque/0/2023/png/25670427/1689904092230-1f9e5960-9028-4326-89b1-745ebca14d98.png#averageHue=%23e7eed2&clientId=u4a87bbf0-b8cb-4&from=paste&height=92&id=u7db3b2f4&originHeight=126&originWidth=522&originalType=binary&ratio=1&rotation=0&showTitle=false&size=14700&status=done&style=none&taskId=u2b5b7f6c-2655-4e4f-9a30-b823e775b87&title=&width=383)<br />![image.png](https://cdn.nlark.com/yuque/0/2023/png/25670427/1689904219857-335ea845-6a90-4802-8d06-465bad5edfd9.png#averageHue=%23e7c79b&clientId=u4a87bbf0-b8cb-4&from=paste&height=173&id=ub4834f12&originHeight=173&originWidth=626&originalType=binary&ratio=1&rotation=0&showTitle=false&size=23574&status=done&style=none&taskId=ude04818f-d1be-4b5f-b41a-c669f429f96&title=&width=626)<br />优化建议：对于复用性较多的section或snippts可以采用esm引入，保持单一page模板对应一个js\css入口

- 现有3.0项目按照jscss分离esm导入形式（确定全局单例可单文件实现）

![image.png](https://cdn.nlark.com/yuque/0/2023/png/25670427/1689904371595-95f55543-805b-4805-b1eb-f4d1aa33ea38.png#averageHue=%23272220&clientId=u4a87bbf0-b8cb-4&from=paste&height=70&id=u4dddf634&originHeight=70&originWidth=569&originalType=binary&ratio=1&rotation=0&showTitle=false&size=9451&status=done&style=none&taskId=u43939188-0c92-470a-b02d-f213323079b&title=&width=569)<br />![image.png](https://cdn.nlark.com/yuque/0/2023/png/25670427/1689904387355-b9ca2d5d-7c6d-44f8-8078-576d7daa6c50.png#averageHue=%23292421&clientId=u4a87bbf0-b8cb-4&from=paste&height=159&id=u089d3b14&originHeight=159&originWidth=465&originalType=binary&ratio=1&rotation=0&showTitle=false&size=23756&status=done&style=none&taskId=udc84896c-3ecd-475c-8b5d-2ad15b17098&title=&width=465)

## 其它

- js脚本加载尽量用异步方式async or defer，避免阻塞渲染
- 复杂计算或者运算结果尽量用闭包本地存储等缓存，提高用户体验
- dom操作尽量避免重排，例如批量样式操作用通过样式类名实现等
- 第三方库按需引入等
