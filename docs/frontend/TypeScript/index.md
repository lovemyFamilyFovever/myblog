---
outline: [1,3]
head:
  - - meta
    - name: description
      content: TypeScript
  - - meta
    - name: keywords
      content: TypeScript 前端开发 前端框架 前端工程师
---

# TypeScript

TypeScript是JavaScript的超集，它可以编译成纯JavaScript代码，并且可以提供静态类型检查，使代码更加可靠。

## 安装TypeScript

TypeScript可以通过npm安装：

```bash
npm install -g typescript
```

## 编译TS文件to JS文件

TypeScript编译器可以编译单个文件或整个项目。

编译单个文件：

```bash
tsc hello.ts
```

# TS类型

| 类型        |      例子      |  描述 |
| :------: | :---------------: | :----------------------------: |
|  number  |    1, -33, 2.5    |            任意数字            |
|  string  | 'hi', "hi", `hi`  |           任意字符串           |
| boolean  |    true、false    |       布尔值true或false        |
|  字面量  |      其本身       |  限制变量的值就是该字面量的值  |
|   any    |         *         |            任意类型            |
| unknown  |         *         |         类型安全的any          |
|   void   | 空值（undefined） |     没有值（或undefined）      |
|  never   |      没有值       |          不能是任何值          |
|  object  |  {name:'孙悟空'}  |          任意的JS对象          |
|  array   |      [1,2,3]      |           任意JS数组           |
|  tuple   |       [4,5]       | 元素，TS新增类型，固定长度数组 |
|   enum   |    `enum{A, B}`   |       枚举，TS中新增类型       |


## 编译基本类型 

```typescript
let name: string = "Tom";
let age: number = 25;
let isMarried: boolean = true;
```

## 编译数组类型 

```typescript
let fruits: string[] = ["apple", "banana", "orange"];
let numbers: number[] = [1, 2, 3];
```

## 编译对象类型 

```typescript
let person: {name: string, age: number} = {name: "Tom", age: 25};
```

## 编译函数类型 

```typescript
function greet(name: string): void {
  console.log("Hello, " + name);
}
```

## 编译接口类型 

```typescript
interface Person {
  name: string;
  age: number;
  greet(name: string): void;
}

let tom: Person = {
  name: "Tom",
  age: 25,
  greet: function(name: string) {
    console.log("Hello, " + name);
  }
};
```

## 编译类类型 

```typescript
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(name: string): void {
    console.log("Hello, " + name);
  }
}

let tom = new Person("Tom", 25);
```

## 编译模块类型 

```typescript
module Animal {
  export class Dog {
    bark() {
      console.log("Woof!");
    }
  }
}

let myDog = new Animal.Dog();
myDog.bark();
```

## 编译泛型类型 

```typescript
function reverse<T>(arr: T[]): T[] {
  return arr.reverse();
}

let fruits = ["apple", "banana", "orange"];
let reversed = reverse(fruits);
```

## 编译声明文件 

TypeScript编译器可以生成声明文件，声明文件可以让TypeScript编译器知道某些变量的类型。

```typescript
// my-declarations.d.ts
declare let name: string;
declare let age: number;
declare let isMarried: boolean;

declare let fruits: string[];
declare let numbers: number[];

declare let person: {name: string, age: number};

declare function greet(name: string): void;

interface Person {
  name: string;
  age: number;
  greet(name: string): void;
}

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(name: string): void {
    console.log("Hello, " + name);

  }
}

module Animal {
  export class Dog {
    bark() {
      console.log("Woof!");
    }
  }
}

declare function reverse<T>(arr: T[]): T[];
```

## 编译选项 

TypeScript编译器有很多选项可以控制编译行为。

```typescript
// tsconfig.json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "sourceMap": true,
    "outDir": "dist"
  },
  "include": ["src/**/*"]
}
```

- `target`：指定编译的目标版本，可以是"es3"、"es5"、"es6"、"es2015"、"es2016"、"es2017"、"es2018"、"es2019"、"es2020"、"esnext"。
- `module`：指定模块代码生成方式，可以是"none"、"commonjs"、"amd"、"umd"、"system"、"es2015"、"es2020"、"esnext"。
- `sourceMap`：是否生成sourceMap文件。
- `outDir`：指定输出目录。
- `include`：指定编译的文件列表。



