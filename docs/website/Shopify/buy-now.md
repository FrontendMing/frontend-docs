# 立即购买

```js

//  获取多语言中的配置
// "properties_warranty_key": "AutoWarranty",
// "properties_warranty": "A {{ total }}-year total warranty (includes a {{ extended }}-year extension)",
const productCompare = {
   warrantyKey: "{{'products.product.properties_warranty_key' | t}}",
   warrantyContent: "{{'products.product.properties_warranty' | t}}"
}
```

```javascript
// 处理[]
matchContent(param) {
  const RegExp = /\[([^\]]*)\]/ // 摘取 [] 内的内容
  const result = param.match(RegExp)
  return result ? result[1] : ''
},
/**
* @description 立即购买
* @param {*} item Obj 产品信息
* productWarranty: 是否需要延保 true/false/null
* defaultWarranty：默认延保时间 数据格式字符串[1]
* extendedWarranty: 额外延保时间 数据格式字符串[1]
* skuId: 产品sku
*/
buyNow(item) {
  const { extendedWarranty, defaultWarranty, productWarranty } = item
  const ex = extendedWarranty ?  this.matchContent(extendedWarranty) : ''
  const de = defaultWarranty ? this.matchContent(defaultWarranty) : ''
  const warrantyKey = `${productCompare.warrantyKey}`
  const warrantyContent = `${productCompare.warrantyContent}`
  let warrantyProperty = Object.create(null)

  if (productWarranty && (ex || de)) {
    const total = Number(ex) + Number(de)
    warrantyProperty[warrantyKey] = warrantyContent.replace("{{ total }}", total).replace("{{ extended }}", ex)
    // 将信息转化为base64传递到checkout页面
    const properties = window.btoa(unescape(encodeURIComponent(JSON.stringify(warrantyProperty))))
    /*
    * @description 跳转参数说明
    * 1: /cart/ 路径
    * 2: item.skuId: 产品的sku
    * 3: :1 代表购买数量为1个
    * 4: traffic_source=buy_now 代表购买
    * 5: properties: 代表需要传递的参数
    */
    window.location.href = `/cart/${item.skuId}:1?traffic_source=buy_now&properties=${properties}`
  } else {
    window.location.href = `/cart/${item.skuId}:1?traffic_source=buy_now`
  }
}
```

