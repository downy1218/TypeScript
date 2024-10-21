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
