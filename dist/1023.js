// cmd 
//class 만들 때 타입지정
var Car = /** @class */ (function () {
    function Car(a, b) {
        this.model = a;
        this.price = b;
    }
    Car.prototype.taxfun = function () {
        return this.price / 10;
    };
    return Car;
}());
var so = new Car('소나타', 3000);
console.log(so);
console.log(so.taxfun());
//rest parameter 사용해서 파라미터 여러개 입력
var Word = /** @class */ (function () {
    function Word() {
        var x = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            x[_i] = arguments[_i];
        }
        var nums = [];
        var strings = [];
        x.forEach(function (i) {
            if (typeof i === 'number') {
                nums.push(i);
            }
            else {
                strings.push(i);
            }
        });
        this.num = nums;
        this.str = strings;
    }
    return Word;
}());
var first = new Word('대머리', 1, 2, 3, '바보');
console.log(first.num);
console.log(first.str);
var 학생 = { name: 'kim' };
var 선생 = { name: 'cha', age: 20 };
var 장바구니 = [{ product: '청소기', price: 7000 }, { product: '삼다수', price: 800 }];
var 숙제 = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    }
};
