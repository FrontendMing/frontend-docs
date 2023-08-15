# copyText 方法
> 复制文本到剪切板

::: tip 常规用法
copyText(text): promise 

返回Promise。
:::


## 参数列表
| 参数          | 说明                 | 类型     | 默认值   |
| :------------- |:-----------------| :--------| :--------|
| text         | 需要进行复制的内容     | string｜number       | -      |

## 使用示例
可以直接调用方法进行复制
```js
copyText('文本复制');
```

可以用then()来处理复制成功的后续操作。
```js
copyText('用户admin').then( res => {
    console.log(`${res}复制成功！`);
})
// --> '用户admin复制成功'
```

当text值为boolean类型是会抛出错误
```js
copyText(true).then( res => {
    console.log(`${res}复制成功！`);
}).catch( err => {
    console.log(err);
})
// --> 'The parameter must be Number or String.'
```
