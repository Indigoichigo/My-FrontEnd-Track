//函數建構子 new

function Person() {

    console.log(this);
    // Person {}
    this.firstname = 'John';
    this.lastname = 'Doe';

}

Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname
}

let john = new Person();

// js 看到上面這行後，做了以下事情
// 1.看到new建立一個空物件
// 2.看到Person()，呼叫它，此時function內的this，會指向剛剛建立的空物件，並將屬性、方法和原型設定給這個空物件
// 函式建構子就是函式
// 如果不回傳任何東西，會回傳這個空物件以及自己用this設定的屬性、方法和原型，而不是undefined
let jane = new Person();

console.log(john);
console.log(jane);
// 上面這兩個的物件不一樣，但內容完全一樣

// -------------------------------------

// 要讓內容不一樣，只要像使用function一樣傳參數給它就好

function Person2(firstname, lastname) {
    
    this.firstname = firstname;
    this.lastname = lastname;

}

let mary = new Person2('Mary', 'Doe');
let ivy = new Person2('Ivy', 'Doe');
console.log(mary);
console.log(ivy);

// -------------------------------------

// 當用函式建構子，會自動設定好原型
// 當用含數來建立物件時，有一個特殊屬性.prototype才會用到
// 通常我們會將屬性設定在函式建構子裡面，但方法會另外設定
//   e.g Person.prototype.getFullName = function() {}
// 如此就算有一千個物件，原型設定上只會有一個，可增進效能

// 用函式建構子建立物件時，首字母大寫!

// -------------------------------------

// 陣列也是物件，如果有設定原型，會遍曆到這個原型
// e.g如下

Array.prototype.otherItem = 'grape';
let arr = ['apple', 'banana', 'melon'];
for (let prop in arr) {
    console.log(prop + ': ' + arr[prop]);
}

// 會回傳
// 0: apple
// 1: banana
// 2: melon
// otherItem: grape

// 所以在遍曆陣列時用一般for-loop語法就好


