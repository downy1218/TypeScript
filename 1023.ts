// cmd 

//class 만들 때 타입지정

class Car{
    model:string;
    price:number;
    constructor(a:string,b:number){
        this.model = a;
        this.price = b;
    }
    taxfun(){
        return this.price/10;
    }
}
let so = new Car('소나타',3000);
console.log(so);
console.log(so.taxfun());



//rest parameter 사용해서 파라미터 여러개 입력
class Word{
    num:number[];
    str:string[];
    constructor(...x:(number|string)[]){
        let nums:number[] = [];
        let strings:string[] = [];
        x.forEach((i)=>{
            if (typeof i === 'number'){
                nums.push(i)
            }
            else{
                strings.push(i)
            }
        })
        this.num = nums;
        this.str = strings;
    }
}


let first = new Word('대머리',1,2,3,'바보');
console.log(first.num);
console.log(first.str);


//interface  (extends로 복사 가능)

interface Student{
    name:string
}
interface Teacher extends Student{  
    age:number
}

let 학생:Student = {name:'kim'}
let 선생:Teacher = {name:'cha',age:20}


interface Market{
    product:string,
    price:number
}
interface Card extends Market{
    card:boolean
}

let 장바구니:Market[] = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ]




interface Mathh{
    plus:(a:number,b:number) => number,
    minus:(a:number,b:number) => number
}
let 숙제:Mathh = {
    plus(a,b){
        return a + b
    },
    minus(a,b){
        return a - b
    }
}
