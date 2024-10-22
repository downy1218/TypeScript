//cmd켜라


`타입이 아직 하나로 정해지지 않았을 때 (유니온 타입일 때)  narrowing문법을 써서 타입을 하나로 확정해줌 
대표적인 방법은 if(type of x === 'string')
또 다른 방법으로는 as x 가 있음 
변수[0] = x as number    ==> assertion 문법  좋다고 막 쓰는 거 아니고 유니온 타입일 때 사용하는 것
as 문법보다는 if문을 사용하는 게 훨씬 안전함 `

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




function clean(x:(string|number)[]){
    return(
        x.map((item)=>{
            if(typeof item === 'string'){
                let changed = Number(item)
                return(changed);       
            }else{
                return item
            }
        })
    )
};
console.log(clean([1,2,'3'])); 



function ssam(x:{sub:string|string[]}){
    if(typeof x.sub === 'string'){
        return x.sub
    }
    else if(Array.isArray(x.sub)){
        let changed = x.sub.pop()
        return changed
    }
    else{
        return 'none'
    }
};
//else if (Array.isArray(x.sub) ){
    //return x.sub[x.sub.length - 1]
console.log({x:'math'});
console.log({x:['math','music']});




// 타입을 변수에 담아 쓰기 'type alias'
// 작명 시 대문자로 작명
type AnimalType = number|string|boolean;
let 동물:AnimalType = '사자';

type Girlfriend = {
    readonly name : string,
}
  
let 여친 :Girlfriend = {
    name : '엠버'
}
//여친.name = '유라' //readonly라서 에러남


// 타입 합치기 가능
type Name = string;
type Age = number;
type NewOne = Name | Age; 

// & 연산자 사용해서 오브젝트 extend
type PositionX = { x: number };
type PositionY = { y: number };
type XandY = PositionX & PositionY


type A = {
    color?:string,
    size:number,
    readonly position:number[]
};

type User = {
    name : string, 
    phone : number, 
    email : string 
};
type Adult = {adult:boolean};
type NewUser = User&Adult;

let 유저:User = {
    name:'daeun',
    phone:123,
    email:'ej@'
};

let 유저2:NewUser = {
    name:'daeun',
    phone:123,
    email:'ej@',
    adult:true
};

//Literal Type 만드는 법 
let john :'대머리';
let kim :'솔로';
let 방향: 'left' | 'right';
방향 = 'left';


//--------------------------------------------------------------------------------

let 자료 = {
    name:'kim'
};

function 나(a:'kim'){

}
`나(자료.name) <- 이렇게하면 오류가 남 왜? a 파라미터에 지정한 킴은 'kim'이라는 타입임
                  자료.name은 string이라는 타입이므로 'kim'이라는 타입만 들어올 수 있는 것임`


type FucType = (para:number) => number;
let 함수표현식:FucType = function (para){return 10}       


// methods 안에 타입지정하기 

let 회원정보 = {
    name : 'kim',
    age : 30,
    plusOne (x){
      return x + 1
    },
    changeName : () => {
      console.log('안녕')
    }
}


type 회원정보 = {
    name: string,
    age: number,
    plusOne : ( x :number ) => number,
    changeName : () => void
}
회원정보.plusOne(1);
회원정보.changeName();


//--------------------------------------------------------------------------


type CutZero = (s:string)=>string;
type RemDash = (s:string)=>number;

let cut:CutZero = function(s){
    let result = s.replace(/^0+/,'')
    return result
};
console.log(cut('00da'));


let removedash:RemDash = function(s){
    let result = s.replace(/-/g,'')
    return parseFloat(result)
};
//parseInt(): 정수 부분만 반환. 소수점 이하  x
//parseFloat(): 정수와 소수 부분 모두를 반환



type 함수1 = (x:string)=>string;
type 함수2 = (x:string)=>number;

function triple(a:string,fuc1:함수1,fuc2:함수2){
    let res1 = fuc1(a);
    let res2 = fuc2(res1);
    return res2
}
console.log(triple('010-1111-777',cut,removedash));