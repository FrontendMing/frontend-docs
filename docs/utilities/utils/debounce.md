# debounce 方法
> 防抖

### debounce参数列表

| 参数      | 说明        | 类型      | 默认值   |
| :---------|:------------| :---------| :-------|
| func      | 防抖的函数   | function  | -       |
| wait      | 防抖时间     | number    | 0       |

#### 例子

```js
import { debounce, } from '@vantop/vantop-util'

export default {
    mounted() {
        window.addEventListener('scroll', debounce(this.scroll, 300));
    },
    methods: {
        scroll(){
            console.log(11)
        }
    }
}
```
