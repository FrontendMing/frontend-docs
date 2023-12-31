# 类型守卫


## 概述

在 TypeScript 中，类型守卫可以用于在运行时检查变量的类型，并在代码块内部将变量的类型范围缩小到更具体的类型。这种类型收窄可以让 TypeScript 编译器更好地理解我们代码的意图，从而提供更准确的类型推断和类型检查。

类型守卫通常使用类型断言、类型谓词、typeof 操作符、instanceof 操作符或自定义的谓词函数来判断变量的具体类型，并根据判断结果收窄变量的类型范围。

##  typeof 类型守卫

typeof 类型守卫允许我们使用 typeof 操作符来在代码中根据变量的类型范围进行条件判断。以下是一个示例：

```typescript
function printValue(value: string | number) {
  if (typeof value === 'string') {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}

printValue('hello');  // 输出: HELLO
printValue(3.1415);   // 输出: 3.14
```

在上面的示例中，我们使用 typeof 操作符在条件语句中检查变量 `value` 的类型。如果它的类型是 `'string'`，则调用 `toUpperCase` 方法；如果是 `'number'`，则调用 `toFixed` 方法。通过使用 typeof 类型守卫，我们能够根据不同的类型执行不同的代码逻辑。

## instanceof 类型守卫

instanceof 类型守卫允许我们使用 instanceof 操作符来检查对象的类型，并在代码块内部收窄对象的类型范围。以下是一个示例：

```typescript
class Animal {
  move() {
    console.log('Animal is moving');
  }
}

class Dog extends Animal {
  bark() {
    console.log('Dog is barking');
  }
}

function performAction(animal: Animal) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.move();
  }
}

const animal1 = new Animal();
const animal2 = new Dog();

performAction(animal1);  // 输出: Animal is moving
performAction(animal2);  // 输出: Dog is barking
```

在上面的示例中，我们使用 instanceof 操作符在条件语句中检查变量 `animal` 的类型。如果它是 Dog 类的实例，则调用 `bark` 方法；否则调用 `move` 方法。通过使用 instanceof 类型守卫，我们可以根据对象的具体类型执行不

同的代码逻辑。

## 使用自定义谓词函数类型守卫

自定义谓词函数类型守卫允许我们定义自己的函数，根据特定条件判断变量的类型，并在代码块内部收窄变量的类型范围。以下是一个示例：

```typescript
interface Circle {
  kind: 'circle';
  radius: number;
}

interface Rectangle {
  kind: 'rectangle';
  width: number;
  height: number;
}

type Shape = Circle | Rectangle;

function calculateArea(shape: Shape) {
  if (isCircle(shape)) {
    console.log(Math.PI * shape.radius ** 2);
  } else {
    console.log(shape.width * shape.height);
  }
}

function isCircle(shape: Shape): shape is Circle {
  return shape.kind === 'circle';
}

const circle: Circle = { kind: 'circle', radius: 5 };
const rectangle: Rectangle = { kind: 'rectangle', width: 10, height: 20 };

calculateArea(circle);     // 输出: 78.53981633974483
calculateArea(rectangle);  // 输出: 200
```

在上面的示例中，我们定义了 `Shape` 类型，它可以是 `Circle` 或 `Rectangle`。通过自定义的谓词函数 `isCircle`，我们判断变量 `shape` 的类型是否是 `Circle`，并在条件语句内部收窄变量的类型范围。通过使用自定义谓词函数类型守卫，我们能够根据特定的谓词条件执行相应的代码逻辑。

## 联合类型守卫

类型守卫最常用于联合类型中，因为联合类型可能包含多个不同的类型选项。以下是一个更复杂的示例，展示了如何使用类型守卫和联合类型来提供更精确的类型推断和类型检查：

```typescript
interface Car {
  type: 'car';
  brand: string;
  wheels: number;
}

interface Bicycle {
  type: 'bicycle';
  color: string;
}

interface Motorcycle {
  type: 'motorcycle';
  engine: number;
}

type Vehicle = Car | Bicycle | Motorcycle;

function printVehicleInfo(vehicle: Vehicle) {
  switch (vehicle.type) {
    case 'car':
      console.log(`Brand: ${vehicle.brand}, Wheels: ${vehicle.wheels}`);
      break;
    case 'bicycle':
      console.log(`Color: ${vehicle.color}`);
      break;
    case 'motorcycle':
      console.log(`Engine: ${vehicle.engine}`);
      break;
    default:
      const _exhaustiveCheck: never = vehicle;
  }
}

const car: Car = { type: 'car', brand: 'Toyota', wheels: 4 };
const bicycle: Bicycle = { type: 'bicycle', color: 'red' };
const motorcycle: Motorcycle = { type: 'motorcycle', engine: 1000 };

printVehicleInfo(car);         // 输出: Brand: Toyota, Wheels: 4
printVehicleInfo(bicycle);     // 输出: Color: red
printVehicleInfo(motorcycle);  // 输出: Engine: 1000
```

在上面的示例中，我们定义了 `Vehicle` 类型，它是 `Car`、`Bicycle` 和 `Motor

cycle` 的联合类型。通过使用 `switch` 语句和根据 `vehicle.type` 的不同值进行类型守卫，我们可以在每个 `case` 分支中收窄 `vehicle` 的类型范围，并执行相应的代码逻辑。通过这种方式，我们能够更准确地推断和检查联合类型的变量。



### 使用 `in` 操作符进行类型守卫

`in` 操作符可以用于在 TypeScript 中判断一个属性是否存在于对象中，从而进行类型判断和类型收窄。以下是一个示例：

```typescript
interface Circle {
  kind: 'circle';
  radius: number;
}

interface Rectangle {
  kind: 'rectangle';
  width: number;
  height: number;
}

type Shape = Circle | Rectangle;

function printArea(shape: Shape) {
  if ('radius' in shape) {
    console.log(Math.PI * shape.radius ** 2);
  } else {
    console.log(shape.width * shape.height);
  }
}

const circle: Circle = { kind: 'circle', radius: 5 };
const rectangle: Rectangle = { kind: 'rectangle', width: 10, height: 20 };

printArea(circle);     // 输出: 78.53981633974483
printArea(rectangle);  // 输出: 200
```

在上面的示例中，我们使用 `in` 操作符来检查属性 `'radius'` 是否存在于 `shape` 对象中。如果存在，则收窄 `shape` 的类型为 `Circle`，并执行相应的代码逻辑。通过使用 `in` 操作符进行类型判断，我们可以根据属性的存在与否进行类型收窄。

### 控制流类型守卫

在 TypeScript 中，当执行特定的操作后，编译器会智能地调整变量的类型范围，这被称为控制流类型收窄。以下是一些常见的控制流类型收窄情况：

**if 语句的条件判断**

```typescript
function printValue(value: string | number) {
  if (typeof value === 'string') {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}
```

在上面的示例中，当执行 `typeof value === 'string'` 的条件判断时，TypeScript 编译器会收窄 `value` 的类型为 `string`，从而在代码块内部提供相应的智能提示和类型检查。

**switch 语句的 case 判断**

```typescript
type Fruit = 'apple' | 'banana' | 'orange';

function getFruitColor(fruit: Fruit) {
  let color: string;
  switch (fruit) {
    case 'apple':
      color = 'red';
      break;
    case 'banana':
      color = 'yellow';
      break;
    default:
      color = 'orange';
  }
  console.log(`The color of ${fruit} is ${color}`);
}
```

在上面的示例中，根据 `switch` 语句中的 `case` 判断，TypeScript 编译器会智能地收窄 `color` 的类型为相应的颜色字符串。


### 真值类型守卫

真值收窄是一种在条件表达式中进行类型收窄的机制。当条件表达式的结果是真值时，TypeScript 编译

器会将变量的类型范围缩小为 `true` 的类型。以下是一个示例：

```typescript
function processValue(value: string | null) {
  if (value) {
    console.log(value.toUpperCase());
  } else {
    console.log('Value is null or empty');
  }
}
```

在上面的示例中，当条件表达式 `value` 的结果是真值（即不为 `null` 或空字符串）时，TypeScript 编译器会将 `value` 的类型范围缩小为 `string`。


### 自定义类型判断式（Type Predicates）守卫

TypeScript 提供了自定义类型判断式的功能，它允许我们定义自己的谓词函数来进行类型判断和类型收窄。以下是一个示例：

```typescript
interface Bird {
  fly(): void;
}

interface Fish {
  swim(): void;
}

function isBird(animal: Bird | Fish): animal is Bird {
  return (animal as Bird).fly !== undefined;
}

function processAnimal(animal: Bird | Fish) {
  if (isBird(animal)) {
    animal.fly();
  } else {
    animal.swim();
  }
}
```

在上面的示例中，我们定义了 `isBird` 谓词函数来判断参数 `animal` 是否属于 `Bird` 类型。在 `processAnimal` 函数中，通过使用自定义谓词函数 `isBird`，我们能够根据 `animal` 的具体类型执行相应的代码逻辑，并在代码块内部收窄 `animal` 的类型范围。
