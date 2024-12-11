//cmd켜라

const 이름:string = 'daeun';
const 나이:number = 15;
const 지역:string = 'incheon';

const good: {singer:string,song:string} = {singer:'day6', song:'둘도 아닌 하나'};

let project: {
    member:string[],
    days : number,
    started : boolean
  } = {
    member: ['kim', 'park'],
    days : 30,
    started : true,
  };


let unionType: string|number = '바보';  //문자열 또는 숫자 다 됨 2개 이상의 타입 설정가능
let 회원들:(number|string)[] = ['kim',2,'park'] // ()로 묶어줘야함
let obj:{a:number|string} = {a:'123'}
let anyType:any = 7; // 타입 해제할 때 = 타입관련 버그가 일어나도 캐치 안해줌

let unknownType:unknown = 7; // 타입 해제할 때 = 타입관련 버그 캐치
// let A:string = unknownType; => 오류 발생 (A가 any타입이면 오류 발생 안함)

let unknownVar: unknown = 10;
// 타입 체크 후에는 사용 가능
if (typeof unknownVar === "string") {
    console.log(unknownVar.toUpperCase());  // OK
}
` any는 "타입 체크를 포기"하는 것이고, unknown은 "타입을 나중에 체크"하는 것`

function 함수(x:number):number{
    return x*2
}
함수(5)
//리턴값의 타입도 지정할 수 있음

function 함수2(x?:number):number{
    return x*2
}; 함수2()   
//?를 써서 파라미터가 옵션임을 설정 (파라미터 있을 수도 없을 수도)
// (x:number|undefined)랑 같은 말임

//리턴이 없는 함수에서 void 타입을 지정하면 실수로 리턴하는 실수 안하게해줌
function 함수3(name?:string):void{
    if(name){
        console.log(`안녕하세요 ${name}님`)
    }
    else{
       console.log('이름을 입력하세요')
    }
};
함수3('배다은')
함수3()

function count(x:string|number):number{
    if(typeof x === 'number'){
        return String(x).length
    }else{
        return x.length
    }
};
count(555)



function marry(m:number,h:boolean,a:string):string|void{
    if (h === true){
        if(a==='상'){
            let sum = m+500+100
            if (sum>=600){
                return '결혼가능'
            }
        }
        let sum = m+500;
        if (sum >=600){
            return '결혼 가능'
        }else{
            return ''
        }
    }
}
console.log(marry(100,false,'상'))