# 泛型和类型体操

泛型和类型体操（Type Gymnastics）是 TypeScript 中高级类型系统的重要组成部分。它们提供了强大的工具和技巧，用于处理复杂的类型操作和转换。

## 泛型（Generics）

### 1. 泛型函数

泛型函数允许我们在函数定义中使用类型参数，以便在函数调用时动态指定类型。例如：

```typescript
function identity<T>(arg: T): T {
  return arg;
}

let result = identity<number>(42);  // result 的类型为 number
```

在上面的示例中，`identity` 函数使用类型参数 `T`，并返回与输入类型相同的值。通过显式传递泛型参数，我们可以确保在函数调用时指定了具体的类型。

### 2. 泛型接口

泛型接口允许我们在接口定义中使用类型参数，以便在实现该接口时指定具体的类型。例如：

```typescript
interface Container<T> {
  value: T;
}

let container: Container<number> = { value: 42 };
```

在上面的示例中，我们定义了一个泛型接口 `Container`，它包含一个类型参数 `T`。通过指定 `Container<number>`，我们创建了一个具体的实现，其中的 `value` 属性类型为 `number`。

### 3. 泛型类

泛型类允许我们在类定义中使用类型参数，以便在创建类的实例时指定具体的类型。例如：

```typescript
class Stack<T> {
  private items: T[] = [];

  push(item: T) {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }
}

let stack = new Stack<number>();
stack.push(1);
stack.push(2);
let item = stack.pop();  // item 的类型为 number | undefined
```

在上面的示例中，我们定义了一个泛型类 `Stack`，它使用类型参数 `T` 来表示堆栈中的元素类型。通过创建 `Stack<number>` 的实例，我们限制了堆栈中的元素必须为 `number` 类型。

## 类型体操（Type Gymnastics）

### 1. 条件类型（Conditional Types）

条件类型允许我们根据输入类型的条件判断结果来选择不同的类型。条件类型的语法形式为：

```typescript
T extends U ? X : Y
```

其中，`T` 是待检查的类型，`U` 是条件类型，`X` 是满足条件时返回的类型，`Y` 是不满足条件时返回的类型。

下面是一个使用条件类型的示例：

```typescript
type Check<T> = T extends string ? true : false;

type Result = Check<string>;  // Result 的类型为 true
```

在上面的示例中，我们定义了一个条件

类型 `Check<T>`，它接受一个类型参数 `T`。如果 `T` 是 `string` 类型，那么 `Check<T>` 的类型将是 `true`，否则为 `false`。

### 2. `keyof` 操作符和索引访问类型

`keyof` 操作符用于获取类型的所有属性名，结合索引访问类型可以从一个类型中获取属性的具体类型。

```typescript
interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person;  // "name" | "age"
type PersonNameType = Person['name'];  // string
```

在上面的示例中，我们使用 `keyof` 操作符获取了 `Person` 接口的属性名集合，并通过索引访问类型获取了 `Person` 接口中 `name` 属性的类型。

### 3. `infer` 关键字

`infer` 关键字用于在条件类型中推断类型，并将其赋值给一个类型变量。

```typescript
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function add(a: number, b: number): number {
  return a + b;
}

type AddReturnValue = ReturnType<typeof add>;  // 类型为 number
```

在上面的示例中，`ReturnType` 类型接受一个类型参数 `T`，并使用条件类型和 `infer` 关键字推断函数类型的返回类型。通过调用 `ReturnType<typeof add>`，我们推断出 `add` 函数的返回类型为 `number`。

当涉及到泛型时，还有一些重要的概念和内置泛型函数可以深入分析。让我们继续探讨 `extends` 关键字、TS 官方内置的一些泛型函数以及它们的使用。

## `extends` 关键字和类型约束

在泛型中，我们可以使用 `extends` 关键字来对泛型类型进行约束。这样可以确保传递给泛型的类型满足特定条件。

```typescript
function printProperty<T extends { name: string }>(obj: T): void {
  console.log(obj.name);
}

printProperty({ name: 'John', age: 25 });  // 输出 'John'
```

在上面的示例中，`printProperty` 函数接受一个泛型参数 `T`，该参数必须满足一个约束条件：具有 `name` 属性，且 `name` 的类型为 `string`。通过使用 `extends` 关键字和类型约束，我们可以确保 `obj` 参数具有所需的属性和类型，从而避免出现错误。

### 泛型函数Util

TypeScript 提供了一些内置的泛型函数，这些函数被广泛用于处理各种类型操作。以下是一些常见的官方内置泛型函数：

#### `Partial<T>`

`Partial<T>` 是 TypeScript 中的一个内置泛型类型，它可以将给定类型 `T` 中的所有属性转换为可选属性。这对于创建部分完整的对象非常有用。

```typescript
interface Person {
  name: string;
  age: number;
}

type PartialPerson = Partial<Person>;

const partialPerson: PartialPerson = { name: 'John' };  // age 属性是可选的
```

在上面的示例中，`Partial<Person>` 将 `Person` 接口中的所有属性变为可选属性，从而创建了一个部分完整的 `PartialPerson` 类型。

#### `Required<T>`

`Required<T>` 是 TypeScript 中的另一个内置泛型类型，它可以将给定类型 `T` 中的所有可选属性转换为必需属性。这对于确保对象的完整性非常有用。

```typescript
interface Person {
  name?: string;
  age?: number;
}

type RequiredPerson = Required<Person>;

const requiredPerson: RequiredPerson = { name: 'John', age: 25 };  // name 和 age 属性是必需的
```

在上面的示例中，`Required<Person>` 将 `Person` 接口中的所有可选属性变为必需属性，从而创建了一个要求完整性的 `RequiredPerson` 类型。

#### `Pick<T, K>`

`Pick<T, K>` 是 TypeScript 中的另一个内置泛型函数，它可以从给定类型 `T` 中选择指定的属性 `K` 组成一个新的类型。

```typescript
interface Person {
  name: string;
  age: number;
  address: string;
}

type NameAndAge = Pick<Person, 'name' | 'age'>;

const person: NameAndAge = { name:

 'John', age: 25 };  // 只包含 name 和 age 属性
```

在上面的示例中，`Pick<Person, 'name' | 'age'>` 从 `Person` 接口中选择了 `'name'` 和 `'age'` 属性，创建了一个新的类型 `NameAndAge`。


我们还可以结合泛型和内置泛型函数来实现更复杂的类型操作。以下是一个示例，展示了如何使用 `Pick` 和泛型来创建一个函数，该函数从给定对象中选择指定属性，并返回一个新的对象。

```typescript
function pickProperties<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const result: Partial<T> = {};
  for (const key of keys) {
    result[key] = obj[key];
  }
  return result as Pick<T, K>;
}

interface Person {
  name: string;
  age: number;
  address: string;
}

const person: Person = {
  name: 'John',
  age: 25,
  address: '123 Main St'
};

const nameAndAge = pickProperties(person, ['name', 'age']);  // 只包含 name 和 age 属性
console.log(nameAndAge);  // 输出: { name: 'John', age: 25 }
```

在上面的示例中，`pickProperties` 函数接受一个泛型参数 `T` 和一个属性数组 `keys`。通过使用 `Pick<T, K>`，我们将从给定对象 `obj` 中选择指定的属性 `keys`，并创建一个新的对象。

这个例子结合了泛型、内置泛型函数 `Pick`、`keyof` 操作符和 `extends` 关键字，展示了如何在 TypeScript 中处理复杂的类型操作和转换。


当涉及到官方内置的泛型函数时，还有一些重要的函数值得分析。让我们继续探讨一些常用的官方内置泛型函数以及它们的使用。

### `Exclude<T, U>`

`Exclude<T, U>` 是 TypeScript 中的一个内置泛型函数，用于从类型 `T` 中排除类型 `U`。它返回一个新类型，该新类型包含在 `T` 中存在但不在 `U` 中存在的成员类型。

```typescript
type T = Exclude<"a" | "b" | "c", "a" | "b">;  // T 的类型为 "c"
```

在上面的示例中，`Exclude<"a" | "b" | "c", "a" | "b">` 排除了类型 `"a"` 和 `"b"`，返回类型为 `"c"`。

### `Omit<T, K>`

`Omit<T, K>` 是 TypeScript 中的另一个内置泛型函数，它返回一个新类型，该新类型排除了类型 `T` 中指定的属性 `K`。

```typescript
interface Person {
  name: string;
  age: number;
  address: string;
}

type PersonWithoutAddress = Omit<Person, "address">;
```

在上面的示例中，`Omit<Person, "address">` 返回了一个新类型 `PersonWithoutAddress`，该类型排除了 `Person` 接口中的 `address` 属性。



### `Readonly<T>`

`Readonly<T>` 是 TypeScript 中的另一个内置泛型函数，它将类型 `T` 中的所有属性转换为只读属性。

```typescript
interface Person {
  name: string;
  age: number;
}

type ReadonlyPerson = Readonly<Person>;
```

在上面的示例中，`Readonly<Person>` 将 `Person` 接口中的所有属性变为只读属性，创建了一个新类型 `ReadonlyPerson`。



## 总结

泛型和类型体操是 TypeScript 中强大的类型系统的关键组成部分。通过使用泛型，我们可以创建可重用、灵活和类型安全的代码。内置泛型函数提供了一些常用的类型转换工具，如 `Partial`、`Required` 和 `Pick`，可以帮助我们更方便地处理类型操作。

通过结合泛型、`extends` 关键字、内置泛型函数和其他高级类型概念，我们能够在 TypeScript 中编写更复杂、类型安全的代码，并利用 TypeScript 的强大类型系统来提高代码的可读性、可维护性和可扩展性。
