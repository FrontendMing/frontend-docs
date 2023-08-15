<meta name="referrer" content="no-referrer">

## 标准shopify theme目录
![image.png](https://cdn.nlark.com/yuque/0/2023/png/25670427/1689919996952-97390685-2f8e-481c-8f6c-987d06fe7164.png#averageHue=%2327282a&clientId=ue138d4a0-7b10-4&from=paste&height=162&id=u32992417&originHeight=162&originWidth=125&originalType=binary&ratio=1&rotation=0&showTitle=false&size=4133&status=done&style=none&taskId=ucae654e3-18a6-4d33-bfcc-ee3d0c82f07&title=&width=125)<br />![](https://cdn.nlark.com/yuque/0/2023/png/25670427/1689920218043-13a39131-a1c5-43bd-a630-7679e1175e0d.png#averageHue=%23e1edf3&clientId=ue138d4a0-7b10-4&from=paste&height=410&id=uf2668996&originHeight=1040&originWidth=1000&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u50e43395-317d-4213-8655-6caa185c049&title=&width=394)

1. layout - 布局文件，承载公共元素（header\footer）
2. template - 页面内容（index\product等）
3. assets -  静态资源css、js、img等
4. section - 可复用定制，可配置在json模板中
5. snippts - 可复用的代码块,不可自定义配置
6. config - 配置文件，自定义配置信息
7. locals - 多语言文件


## 3.0目录
![image.png](https://cdn.nlark.com/yuque/0/2023/png/25670427/1689920765220-608482bd-4a88-4848-a70a-92c05d746534.png#averageHue=%2324272a&clientId=ue138d4a0-7b10-4&from=paste&height=458&id=u2993375d&originHeight=587&originWidth=411&originalType=binary&ratio=1&rotation=0&showTitle=false&size=24954&status=done&style=none&taskId=u6d8d3dea-b4c8-4276-b8f6-34af2de3f38&title=&width=321)

- bin - 自定义命令command目录
- build - 构建 or node脚本执行命令目录
- src - 工程主目录
   1. css - 项目样式表
   2. js - js目录
   3. liquid - 模板目录
      1. common - 所有站点公共功能集合目录
      2. 非common - 对应站点特定功能
> liquid目录common以及其它目录按照shopify标准目录建设方便维护管理，对应的css以及js也是按照标准目录建立开发，尽量避免单文件模式的section 或 snippts，在js index中统一导入相关section、snippts的css js

