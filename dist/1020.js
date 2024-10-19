//cmd켜라
var 이름 = 'daeun';
var 나이 = 15;
var 지역 = 'incheon';
var good = { singer: 'day6', song: '둘도 아닌 하나' };
var project = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
var unionType = '바보'; //문자열 또는 숫자 다 됨 2개 이상의 타입 설정가능
var 회원들 = ['kim', 2, 'park']; // ()로 묶어줘야함
var obj = { a: '123' };
var anyType = 7; // 타입 해제할 때 = 타입관련 버그가 일어나도 캐치 안해줌
var unknownType = 7; // 타입 해제할 때 = 타입관련 버그 캐치
// let A:string = unknownType; => 오류 발생 (A가 any타입이면 오류 발생 안함)
function 함수(x) {
    return x * 2;
}
//리턴값의 타입도 지정할 수 있음
//리턴이 없는 함수에서 void 타입을 지정하면 실수로 리턴하는 실수 안하게해줌
function 함수2(x) {
    return x * 2;
}
;
함수2();
//?를 써서 파라미터가 옵션임을 설정 (파라미터 있을 수도 없을 수도)
// (x:number|undefined)랑 같은 말임
function 함수3(name) {
    if (name) {
        console.log("\uC548\uB155\uD558\uC138\uC694 ".concat(name, "\uB2D8"));
    }
    else {
        console.log('이름을 입력하세요');
    }
}
;
함수3('배다은');
함수3();
function count(x) {
    if (typeof x === 'number') {
        return String(x).length;
    }
    else {
        return x.length;
    }
}
;
count(555);
function marry(m, h, a) {
    if (h === true) {
        if (a === '상') {
            var sum_1 = m + 500 + 100;
            if (sum_1 >= 600) {
                return '결혼가능';
            }
        }
        var sum = m + 500;
        if (sum >= 600) {
            return '결혼 가능';
        }
        else {
            return '';
        }
    }
}
console.log(marry(100, false, '상'));
