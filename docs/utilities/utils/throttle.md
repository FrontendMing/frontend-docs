# throttle 方法
> 节流

## 参数列表

| 参数      | 说明        | 类型      | 默认值   |
| :---------|:------------| :---------| :-------|
| func      | 节流的函数   | function  | -       |
| wait      | 节流时间     | number    | 0       |


## 使用示例
```js
import { throttle, } from '@vantop/vantop-util'

export default {
    mounted() {
        window.addEventListener('scroll', throttle(this.scroll, 300));
    },
    methods: {
        scroll(){
            console.log(11)
        }
    }
}
```
