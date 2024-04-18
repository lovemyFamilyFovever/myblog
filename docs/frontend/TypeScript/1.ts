

enum Color { Red = 2, Green, Blue = 5 };
console.log(Color);


let list: any[] = [1, "123", true, null, undefined, Symbol()];
console.log(list);


let str = "123123123asdasd";
let strLength = (<string>str).length; 