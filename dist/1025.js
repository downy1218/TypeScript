var privates = /** @class */ (function () {
    function privates() {
        this.z = 30;
    }
    privates.x = 10;
    privates.y = 20;
    return privates;
}());
"private \uB294 \uD074\uB798\uC2A4 \uC18D\uC131\uBC1B\uC740 \uC790\uC2DD\uC774 \uBCC0\uACBD \uBD88\uAC00\uB2A5\uD568 \uC624\uC9C1 class \uC548\uC5D0\uC11C\uB9CC \uC218\uC815 \uAC00\uB2A5\n          = extend\uB41C \uD074\uB798\uC2A4\uC5D0\uC11C \uC0AC\uC6A9 \uBD88\uAC00\n\n static\uC740 \uBD80\uBAA8 class\uB9CC \uAC00\uC9C8 \uC218 \uC788\uB294 \uC18D\uC131\uC73C\uB85C \uC790\uC2DD\uC774 \uC218\uC815\uBD88\uAC00 \n          \uC790\uC2DD\uC774 \uC0AC\uC6A9\uD560 \uD544\uC694 \uC5C6\uB294 \uC18D\uC131\uC5D0 \uBD80\uC5EC privates.x = \uD074\uB798\uC2A4\uC5D0 \uC9C1\uC811\uBD80\uC5EC\uB418\uB294 \uC18D\uC131\n\n protected\uB294 private\uB791 \uBE44\uC2B7\uD558\uC9C0\uB9CC extend\uB41C \uD074\uB798\uC2A4\uC5D0\uC11C \uC0AC\uC6A9 \uAC00\uB2A5";
//private static = 부모 클래스에서만 사용가능 자식 사용불가 privates.x로만 접근가능 class 안에서만 수정 가능
//public static = class 내부 외부 상관없이 수정가능. public 키워드 지워도 똑같이 동작 
var XX = /** @class */ (function () {
    function XX() {
    }
    XX.addOne = function (a) {
        console.log(XX.x += a);
    };
    XX.printX = function () {
        console.log(XX.x);
    };
    XX.x = 10;
    XX.y = 20;
    return XX;
}());
XX.addOne(5);
XX.printX();
