# 类型推断


TypeScript通过类型推断可以自动推导出变量和表达式的类型，提高代码的可读性和可维护性。

## 类型推断

类型推断是 TypeScript 在编译时根据上下文自动推导变量和表达式的类型。它根据变量的赋值、函数的返回值、表达式的操作等信息来确定变量或表达式的最佳类型。

### 1. 基础类型推断

TypeScript根据变量的初始值来推断基础类型，包括字符串、数字、布尔值等。

```typescript
let name = "John";  // 推断为string类型
let age = 30;  // 推断为number类型
let isStudent = true;  // 推断为boolean类型
```

### 2. 最佳公共类型推断

当我们将不同类型的值赋给一个变量或数组时，TypeScript会根据这些值的类型推断出一个最佳公共类型。

```typescript
let values = [1, 2, "three", true];  // 推断为(number | string | boolean)[]
```

在上面的示例中，数组`values`包含了数字、字符串和布尔值，TypeScript推断出这个数组的类型为`(number | string | boolean)[]`，即联合类型。

### 3. 上下文类型推断

TypeScript会根据上下文中的预期类型推断变量的类型。这种上下文可以是函数参数、赋值语句等。

```typescript
function greet(person: string) {
  console.log(`Hello, ${person}!`);
}

greet("John");  // person的类型推断为string
```

在上面的示例中，函数`greet`的参数`person`的类型被推断为`string`，因为在函数调用时传入的实参是一个字符串。

### 4. 类型断言

如果我们希望手动指定一个变量或表达式的类型，可以使用类型断言（Type Assertion）来告诉TypeScript我们的意图。

```typescript
let value = "Hello, TypeScript!";
let length = (value as string).length;  // 类型断言为string
```

在上面的示例中，我们使用类型断言`as string`将变量`value`的类型指定为`string`，以便在后面获取其长度时，TypeScript能正确推断出类型。

### 5. 类型推断和泛型

在使用泛型时，TypeScript会根据传入的参数类型推断泛型类型的具体类型。

```typescript
function identity<T>(value: T): T {
  return value;
}

let result = identity("Hello, TypeScript!");  // result的类型推断为string
```

在上面的示例中，泛型函数`identity`的参数`value`的类型被推断为传入的实参

类型，因此返回值的类型也被推断为`string`。

## 总结

类型推断是TypeScript中的一个重要特性，通过自动推导变量和表达式的类型，可以提高代码的可读性和可维护性。TypeScript根据赋值、返回值、上下文等信息进行类型推断，并在需要时允许手动指定类型。在编写现代化高级TypeScript代码时，深入了解和应用类型推断是非常重要的一部分。通过结合最新的TypeScript语法和类型推断，我们可以编写更具表达力和类型安全的代码。
