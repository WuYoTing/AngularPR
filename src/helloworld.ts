// 寫完可以下 tsc + 檔名編譯成js 檔案
// 原始資料類別
import any = jasmine.any;

let isBool: boolean = Boolean(1);
let isBool1: Boolean = new Boolean(1);

let dec: number = 6

let myName: string = 'Tom';
let myAge: number = 25;
let sentence: string = `Hello, my name is ${myName}.I'll be ${myAge + 1} years old next month.`;
console.log(sentence);


// 任意型別
let anyType: any = "test";
anyType = 444;
anyType = null;
anyType = undefined;

// 未宣告的變數
let someVariable;
someVariable = 123;
someVariable = "AAA";

// 型別推論
let checkType = "seven";

// 聯合型別
let uni: string | number | boolean = "123"
uni = 123;
uni = false;

// interface
interface Animal {
  name: string;
  avgAge: number;
  desc?: any;
}

let cat: Animal = {
  name: "cat",
  avgAge: 21
};

// 任意屬性
interface food {
  [propName: string]: string;

  desc?: any;
  name: string;
  readonly size: string;
}

let cookie: food = {
  name: "cookie",
  size: "small"
};

let potatoChip: food = {
  name: "potato chip",
  type: "bowl",
  size: "very samll"
}

let stinkyTofu: food = {
  name: "stinky tofu",
  1: "a",
  size: "medium"
}

// Array
let numberArr: number[] = [1, 2, 3, 4, 5, 6];
let stringArr: string[] = ["haha", "hohoh", "holo"];
numberArr.push(6);
stringArr.push("CCCC");

// interface as number array
interface NumberArray {
  [index: number]: number;
}

let fibonacci: NumberArray = [1, 2, 3, 4, 5, 6];

// interface as string array
interface StringArray {
  [index: number]: String;
}

let ahahaArray: StringArray = ["1", "2"];

// 函式宣告（Function Declaration）
function sum(x: number, y: number): number {
  return x + y;
}

// 函式表示式（Function Expression）
let mySum = function (x: number, y: number): number {
  return x + y;
};

// 可選引數
function buildName(firstName: string, lastName?: string) {
  if (lastName) {
    return firstName + ' ' + lastName;
  } else {
    return firstName;
  }
}

let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');

// 引述預設值
function buildName1(firstName: string, lastName: string = 'Cat') {
  return firstName + ' ' + lastName;
}

let tomcat1 = buildName('Tom', 'Cat');
let tom1 = buildName('Tom');

// 剩餘引數
function push(array: any[], ...items: any[]) {
  items.forEach(function (item) {
    array.push(item);
  });
}

let aBB: number[] = [];
push(aBB, 1, 2, 3);

// overload
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''));
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('');
  } else {
    return 0
  }
}

// 型別斷言
function getLength(something: string | number): number {
  if ((<string>something).length) {
    return (<string>something).length;
  } else {
    return something.toString().length;
  }
}
