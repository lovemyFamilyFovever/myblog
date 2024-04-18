var Color;
(function (Color) {
    Color[Color["Red"] = 2] = "Red";
    Color[Color["Green"] = 3] = "Green";
    Color[Color["Blue"] = 5] = "Blue";
})(Color || (Color = {}));
;
console.log(Color);
var list = [1, "123", true, null, undefined, Symbol()];
console.log(list);
