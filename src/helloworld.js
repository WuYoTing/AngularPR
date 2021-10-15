// 寫完可以下 tsc + 檔名編譯成js 檔案
// 原始資料類別
var any = jasmine.any;
var isBool = Boolean(1);
var isBool1 = new Boolean(1);
var dec = 6;
var myName = 'Tom';
var myAge = 25;
var sentence = "Hello, my name is " + myName + ".I'll be " + (myAge + 1) + " years old next month.";
console.log(sentence);
// 任意型別
var anyType = "test";
anyType = 444;
anyType = null;
anyType = undefined;
// 未宣告的變數
var someVariable;
someVariable = 123;
someVariable = "AAA";
// 型別推論
var checkType = "seven";
// 聯合型別
var uni = "123";
uni = 123;
uni = false;
var cat = {
    name: "cat",
    avgAge: 21
};
var cookie = {
    name: "cookie",
    size: "small"
};
var potatoChip = {
    name: "potato chip",
    type: "bowl",
    size: "very samll"
};
var stinkyTofu = {
    name: "stinky tofu",
    1: "a",
    size: "medium"
};
// Array
var numberArr = [1, 2, 3, 4, 5, 6];
var stringArr = ["haha", "hohoh", "holo"];
numberArr.push(6);
stringArr.push("CCCC");
var fibonacci = [1, 2, 3, 4, 5, 6];
var ahahaArray = ["1", "2"];
// 函式宣告（Function Declaration）
function sum(x, y) {
    return x + y;
}
// 函式表示式（Function Expression）
var mySum = function (x, y) {
    return x + y;
};
