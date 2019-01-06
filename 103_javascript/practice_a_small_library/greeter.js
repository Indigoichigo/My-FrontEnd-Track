// 需求
// 1.有英文和西班牙文支援
// 2.可支援jQ
// 3.以G$開頭

// 建立IIFE，把window和jQ物件傳入
(function(global, $) {

    let Greeter = function(firstName, lastName, language) {
        return new Greeter.init(firstName, lastName, language);
    }

    Greeter.prototype = {}

    Greeter.init = function(firstName, lastName, language) {
        var self = this;

        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';

    }

    //Greeter.init原型鏈繼承至Greeter.prototype
    Greeter.init.prototype = Greeter.prototype;

    //讓外面的世界可以取用這個物件
    global.Greeter = global.G$ = Greeter;

}(window, jQuery))