function 최댓값(...a:number[]):number{
    let m = a[0];
    for(let i=0; i<a.length; i++){
        if(a[i]>m){
            m = a[i]
        }
    }
    return m
}
console.log(최댓값(1,2,3,4))



function 함수({user,comment,admin}:{user:string,comment:number[],admin:boolean}){
    console.log(user,comment,admin)
};
함수( { user : 'kim', comment : [3,5,4], admin : false } );


function arr([a,b,c]:[a:number,b:string,c:boolean]){
    return  console.log(a,b,c)
};

arr( [40, 'wine', false] );

// type 어레이 = (number | string | boolean)[];

// function arr([a,b,c]:어레이){
//   console.log(a,b,c)
// }

// arr( [40, 'wine', false] )