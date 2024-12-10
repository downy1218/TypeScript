// 인덱스 시그니처(Index Signature)

//타입을 선언한 프로퍼티와 그에 맞는 타입만 쓸 수 있지만 인덱스 시그니처를 추가하여
//특정 프로터피 이외에도 허용하게 만든다
const person: { name: string; age: number; [key: string]: any } = {
    name: "Matthew",
    age: 30,
    job: "Engineer"
};

`위 코드에서는 인덱스 시그니처 [key: string]: any를 사용하여 추가적인 프로퍼티(job 등)를 허용하고, 
그 값은 any 타입으로 정의했습니다. 이 방식으로 객체의 특정 프로퍼티 외에도 임의의 키-값 쌍을 허용할 수 있습니다.`



//자바스크립트의 객체는 const 변수라도, 수정이 가능하므로,
// 타입스크립트는 수정 가능성이 있다고, 판단하여 타입을 넓게 추론합니다.

const matthew = { name: 'matthew' };
`name에는 matthew만 들어가게 하고 싶지만,  string으로 타입이 넓게 추론됨`

`matthew 이외에, 다른 값을 들어가고 싶지 않게하고 싶고, 
수정 가능성이 없는 것이 확실하다면 as const 라는 특별한 접미사를 붙이면 된다.`

const matthew = { name: 'matthew' } as const;

matthew.name = 'hi';
//오류가 남 





//객체 리터럴 타입에서 특정 프로퍼티가 읽기 전용(readonly)
//읽기 전용으로 정의된 프로퍼티는 객체가 생성된 후 값을 변경할 수 없다.
const person: { readonly name: string; age: number } = {
    name: "Matthew",
    age: 30
};

person.name = "John";  // 오류: 'name'은 읽기 전용이므로 값을 변경할 수 없다.