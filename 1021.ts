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




// 타입을 변수에 담아 쓰기 type alias
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




