// 原型在程式語言中分為古典繼承與原型繼承，js用的是原型繼承

let person = {
    'firstname': 'Default',
    'lastname': 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname
    }
}

let john = {
    'firstname': 'John',
    'lastname': 'Doe'
}


// 遠永不要打下面的__proto__ !!
john.__proto__ = person;
console.log(john.getFullName());

let a = {}
let b = function() {}
let c = []
    // a, b, c一直往上找都會是物件


// for-in 可以遍曆整個物件
// 而且還會找到原型鏈上

// 找包括原型鏈上的鍵值
for (let prop in john) {
    console.log(prop + ': ' + john[prop]);
}

console.log('----------------------------------');
// 只找自己這個物件的鍵值
// hasOweProperty是js基本物件上的方法
for (let prop in john) {
    if(john.hasOwnProperty(prop)) {
        console.log(prop + ': ' + john[prop]);
    }
}

