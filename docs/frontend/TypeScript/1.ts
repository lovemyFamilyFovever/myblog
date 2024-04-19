
interface IPerson {
    sex: string;
    height: number;
}

class Person implements IPerson {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}


let p: Person = {
    name: "John",
    age: 25,
};