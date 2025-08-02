# downloadFile 方法
> 下载文件

::: tip 常规用法
downloadFile(url)

触发a标签点击事件，下载附件
:::


## 参数列表
| 参数          | 说明                 | 类型     | 默认值   |
| :------------- |:-----------------| :--------| :--------|
| url         | 附件url     | String       | 必填      |
| fileName         |  文件名称(跨域不起作用)    | String      | -     |

## 使用示例
```js
downloadFile('https://baidu.com/test.pdf');
```

