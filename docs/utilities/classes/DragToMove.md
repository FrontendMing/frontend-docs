# DragToMove
> 视窗内拖拽移动，兼容 PC 和 Mobile


### 参数列表
| 参数           | 说明                   | 类型     | 可选值          |默认值          | 
| :------------- |:-----------------------| :--------| :-------------- | ------------: |
| el             | 拖拽目标元素            | string   | -               | -             |
| placement      | 拖拽目标初始位置        | string   | 'left', 'right' |'left'         | 
| offset         | 拖拽目标相对视窗的偏移量 | object   |  -              |\{ x: 0, y: 0 \} |
| onClick        | 拖拽目标点击事件        | function | -               | -              |
| closable       | 是否可关闭             | boolean   | true, false    | false          |
| closableEl     | 触发关闭事件的元素      | string   | -               | -              |
| closedCallback | 关闭后的回调            | function | -              | -              |

##  使用示例
```js
new DragToMove({
    el: '#drag-element',
    placement: 'right', // 目标位置，'left' - 靠左，'right' - 靠右
    offset: { // 偏移量
        x: 10,
        y: '40%',
    },
    onClick: () => window.open('https://www.baidu.com'),
    closable: true,
    closableEl: '#close-btn',
    closedCallback: () => {
        console.log('closed')
    },
})
```