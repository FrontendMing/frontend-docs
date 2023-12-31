# 命名空间和模块


## 命名空间（Namespace）

在 TypeScript 中，命名空间是一种将代码封装在一个特定名称下的方式，以防止全局作用域污染并避免命名冲突。命名空间在 TypeScript 中非常重要，因为它们为模块化和封装提供了灵活的选项。

创建命名空间的语法如下：

```typescript
namespace MyNamespace {
  export const myVar: number = 10;
  export function myFunction(): void {
    console.log("Hello from MyNamespace");
  }
}
```

在此例中，我们创建了一个名为`MyNamespace`的命名空间，该命名空间内有一个变量`myVar`和一个函数`myFunction`。`export`关键字允许我们从命名空间外部访问这些元素。

命名空间中的元素可以通过以下方式访问：

```typescript
console.log(MyNamespace.myVar); // 输出：10
MyNamespace.myFunction(); // 输出：Hello from MyNamespace
```

我们也可以使用嵌套的命名空间：

```typescript
namespace ParentNamespace {
  export namespace ChildNamespace {
    export const myVar: number = 20;
  }
}
console.log(ParentNamespace.ChildNamespace.myVar); // 输出：20
```


## 命名空间（Namespace）使用场景


> 在 TypeScript 的早期版本中，命名空间被广泛地使用来组织和包装一组相关的代码。然而，随着 ES6 模块系统（ES6 Modules）的出现和广泛使用，命名空间的用法变得越来越少，现在被视为一种遗留的方式来组织代码。


### 第三方库

一些第三方库仍然使用命名空间来组织自己的代码，并提供命名空间作为库的入口点。在这种情况下，我们需要使用命名空间来访问和使用库中的类型和函数。

```typescript
namespace MyLibrary {
  export function myFunction() {
    // ...
  }
}

MyLibrary.myFunction();
```



### 兼容性

在一些遗留的 JavaScript 代码或库中，命名空间仍然是一种常见的组织代码的方式。如果我们需要与这些代码进行交互，我们可能需要创建命名空间来适应它们。

```typescript
// legacy.js
var MyNamespace = {
  myFunction: function() {
    // ...
  }
};

MyNamespace.myFunction();
```

在上面的示例中，我们演示了命名空间的几个使用场景。第一个示例展示了如何使用命名空间访问和使用第三方库的函数。第二个示例展示了如何使用命名空间来管理全局状态。第三个示例展示了如何在与遗留 JavaScript 代码进行交互时创建命名空间。

虽然在现代 TypeScript 开发中，模块是更常见和推荐的代码组织方式，但命名空间仍然在特定的情况下具有一定的用处，并且在与一些特定的库或代码进行交互时可能是必需的。


##  模块

在 TypeScript 中，模块是另一种组织代码的方式，但它们更关注的是依赖管理。每个模块都有其自己的作用域，并且只有明确地导出的部分才能在其他模块中访问。


创建和使用模块的方式如下：

在`myModule.ts`文件中：

```typescript
export const myVar: number = 10;
export function myFunction(): void {
  console.log("Hello from myModule");
}
```

在另一个文件中导入和使用模块：

```typescript
import { myVar, myFunction } from './myModule';

console.log(myVar); // 输出：10
myFunction(); // 输出：Hello from myModule
```

在 TypeScript 中，我们可以使用模块解析策略（如 Node 或 Classic），以确定如何查找模块。这些策略在 `tsconfig.json` 文件的 `compilerOptions` 选项下的 `moduleResolution` 选项中定义。



## 3. 命名空间与模块的对比

虽然命名空间和模块在某种程度上有所相似，但它们有以下几个关键区别：

1. **作用域**：命名空间是在全局作用域中定义的，而模块则在自己的作用域中定义。这意味着，在模块内部定义的所有内容默认情况下在模块外部是不可见的，除非显式地导出它们。

2. **文件组织**：命名空间通常用于组织在同一文件中的代码，而模块则是跨文件进行组织。

3. **依赖管理**：模块关注的是如何导入和导出功能，以便管理代码之间的依赖关系。相比之下，命名空间并未对依赖管理提供明确的支持。

4. **使用场景**：随着 ES6 模块语法的普及，现代 JavaScript 项目通常更倾向于使用模块来组织代码。然而，对于一些遗留项目或那些需要将多个文件合并为一个全局可用的库的场景，命名空间可能更为合适。
