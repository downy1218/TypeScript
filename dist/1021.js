//cmd켜라
"\uD0C0\uC785\uC774 \uC544\uC9C1 \uD558\uB098\uB85C \uC815\uD574\uC9C0\uC9C0 \uC54A\uC558\uC744 \uB54C (\uC720\uB2C8\uC628 \uD0C0\uC785\uC77C \uB54C)  narrowing\uBB38\uBC95\uC744 \uC368\uC11C \uD0C0\uC785\uC744 \uD558\uB098\uB85C \uD655\uC815\uD574\uC90C \n\uB300\uD45C\uC801\uC778 \uBC29\uBC95\uC740 if(type of x === 'string')\n\uB610 \uB2E4\uB978 \uBC29\uBC95\uC73C\uB85C\uB294 as x \uAC00 \uC788\uC74C \n\uBCC0\uC218[0] = x as number    ==> assertion \uBB38\uBC95  \uC88B\uB2E4\uACE0 \uB9C9 \uC4F0\uB294 \uAC70 \uC544\uB2C8\uACE0 \uC720\uB2C8\uC628 \uD0C0\uC785\uC77C \uB54C \uC0AC\uC6A9\uD558\uB294 \uAC83\nas \uBB38\uBC95\uBCF4\uB2E4\uB294 if\uBB38\uC744 \uC0AC\uC6A9\uD558\uB294 \uAC8C \uD6E8\uC52C \uC548\uC804\uD568 ";
// function cleaning(a:(string|number)[]){
//     for (let i=0; i<a.length; i++){
//         if(typeof a[i] === 'string'){
//             Number(a[i])
//             return a
//         }else{
//             return a
//         }
//     }
// }
// console.log(cleaning([1,2,'3']));
function clean(x) {
    return (x.map(function (item) {
        if (typeof item === 'string') {
            var changed = Number(item);
            return (changed);
        }
        else {
            return item;
        }
    }));
}
;
console.log(clean([1, 2, '3']));
function ssam(x) {
    if (typeof x.sub === 'string') {
        return x.sub;
    }
    else if (Array.isArray(x.sub)) {
        var changed = x.sub.pop();
        return changed;
    }
    else {
        return 'none';
    }
}
;
//else if (Array.isArray(x.sub) ){
//return x.sub[x.sub.length - 1]
console.log({ x: 'math' });
console.log({ x: ['math', 'music'] });
var 동물 = '사자';
var 여친 = {
    name: '엠버'
};
var 유저 = {
    name: 'daeun',
    phone: 123,
    email: 'ej@'
};
var 유저2 = {
    name: 'daeun',
    phone: 123,
    email: 'ej@',
    adult: true
};
//Literal Type 만드는 법 
var john;
var kim;
var 방향;
방향 = 'left';
//--------------------------------------------------------------------------------
var 자료 = {
    name: 'kim'
};
function 나(a) {
}
"\uB098(\uC790\uB8CC.name) <- \uC774\uB807\uAC8C\uD558\uBA74 \uC624\uB958\uAC00 \uB0A8 \uC65C? a \uD30C\uB77C\uBBF8\uD130\uC5D0 \uC9C0\uC815\uD55C \uD0B4\uC740 'kim'\uC774\uB77C\uB294 \uD0C0\uC785\uC784\n                  \uC790\uB8CC.name\uC740 string\uC774\uB77C\uB294 \uD0C0\uC785\uC774\uBBC0\uB85C 'kim'\uC774\uB77C\uB294 \uD0C0\uC785\uB9CC \uB4E4\uC5B4\uC62C \uC218 \uC788\uB294 \uAC83\uC784";
var 함수표현식 = function (para) { return 10; };
// methods 안에 타입지정하기 
var 회원정보 = {
    name: 'kim',
    age: 30,
    plusOne: function (x) {
        return x + 1;
    },
    changeName: function () {
        console.log('안녕');
    }
};
회원정보.plusOne(1);
회원정보.changeName();
var cut = function (s) {
    var result = s.replace(/^0+/, '');
    return result;
};
console.log(cut('00da'));
var removedash = function (s) {
    var result = s.replace(/-/g, '');
    return parseFloat(result);
};
function triple(a, fuc1, fuc2) {
    var res1 = fuc1(a);
    var res2 = fuc2(res1);
    return res2;
}
console.log(triple('010-1111-777', cut, removedash));
