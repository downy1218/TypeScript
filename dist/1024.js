function 최댓값() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var m = a[0];
    for (var i = 0; i < a.length; i++) {
        if (a[i] > m) {
            m = a[i];
        }
    }
    return m;
}
console.log(최댓값(1, 2, 3, 4));
function 함수(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user, comment, admin);
}
;
함수({ user: 'kim', comment: [3, 5, 4], admin: false });
function arr(_a) {
    var a = _a[0], b = _a[1], c = _a[2];
    return console.log(a, b, c);
}
;
arr([40, 'wine', false]);
function animal(a) {
    if ('name' in a) {
        console.log('this is a cat');
    }
}
