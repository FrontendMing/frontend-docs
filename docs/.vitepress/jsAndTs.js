const commonPath = '/jsAndTs';

export default [
    {
        text: 'JS',
        collapsible: true,
        collapsed: false,
        items: [
            {
                text: '基础',
                collapsible: true,
                collapsed: false,
                items: [
                    { text: '作用域与作用域链', link: `${commonPath}/js/base/scope.md` },
                    { text: '执行上下文与闭包', link: `${commonPath}/js/base/closure.md` },
                    { text: '函数上下文和this关键字', link: `${commonPath}/js/base/context.md` },
                    { text: '数组', link: `${commonPath}/js/base/array.md` },
                    { text: '对象', link: `${commonPath}/js/base/object.md` },
                    { text: '数据类型和类型转换', link: `${commonPath}/js/base/types.md` },
                    { text: '原型与继承', link: `${commonPath}/js/base/prototype.md` },
                    { text: '事件处理和传播机制', link: `${commonPath}/js/base/event.md` },
                    { text: '编码和解码', link: `${commonPath}/js/base/escape.md` },
                ]
            },
            {
                text: '进阶',
                collapsible: true,
                collapsed: true,
                items: [
                    { text: '前端模块化', link: `${commonPath}/js/advance/module.md` },
                    { text: '代码解析与执行', link: `${commonPath}/js/advance/eval.md` },
                    { text: '垃圾回收机制', link: `${commonPath}/js/advance/recycle.md` },
                    { text: 'WeakMap和WeakSet', link: `${commonPath}/js/advance/weak.md` },
                    { text: '面向对象编程与Class', link: `${commonPath}/js/advance/class.md` },
                    { text: '函数式编程', link: `${commonPath}/js/advance/function.md` },
                    { text: 'Iterator 迭代器', link: `${commonPath}/js/advance/iterator.md` },
                    { text: '深入理解 Proxy', link: `${commonPath}/js/advance/proxy.md` },
                    { text: '浅拷贝与深拷贝', link: `${commonPath}/js/advance/clone.md` },
                    { text: '深入理解JSON.stringify', link: `${commonPath}/js/advance/stringify.md` },
                    { text: '前端数据存储', link: `${commonPath}/js/advance/storage.md` },
                    { text: '修饰器', link: `${commonPath}/js/advance/decorator.md` },
                    { text: '前端跨页面通信', link: `${commonPath}/js/advance/message.md` },
                    { text: 'Shadow DOM', link: `${commonPath}/js/advance/shadowDOM.md` },
                    { text: 'Date类：日期和时间处理', link: `${commonPath}/js/advance/date.md` },
                    { text: '正则表达式', link: `${commonPath}/js/advance/regExp.md` },
                    { text: 'Error 类', link: `${commonPath}/js/advance/error.md` },
                ]
            },
            {
                text: '异步',
                collapsible: true,
                collapsed: true,
                items: [
                    { text: '异步编程与Promise', link: `${commonPath}/js/async/task.md` },
                    { text: '实现Promise', link: `${commonPath}/js/async/promise.md` },
                    { text: '异步的终极解决方案', link: `${commonPath}/js/async/await.md` },
                    { text: 'Generator 函数', link: `${commonPath}/js/async/generator.md` },
                ]
            },
        ]
    },

    {
        text: 'TS',
        collapsible: true,
        collapsed: false,
        items: [
            { text: '简介', link: `${commonPath}/ts/index.md`, },
            {
                text: '基础',
                collapsible: true,
                collapsed: false,
                items: [
                    { text: '概述', link: `${commonPath}/ts/base/descrition.md` },
                    { text: '类型', link: `${commonPath}/ts/base/types.md` },
                    { text: '函数', link: `${commonPath}/ts/base/function.md` },
                    { text: '接口和类', link: `${commonPath}/ts/base/interface.md` },
                    { text: '枚举和泛型', link: `${commonPath}/ts/base/generics.md` },
                    { text: '命名空间和模块', link: `${commonPath}/ts/base/namespace.md` },
                ]
            },
            {
                text: '进阶',
                collapsible: true,
                collapsed: true,
                items: [
                    { text: '类型系统层级', link: `${commonPath}/ts/advance/typesLevel.md` },
                    { text: '高级类型', link: `${commonPath}/ts/advance/mappedTypes.md` },
                    { text: '类型推断', link: `${commonPath}/ts/advance/inference.md` },
                ]
            },
        ]
    },
]
