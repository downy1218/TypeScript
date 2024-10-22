let link = document.querySelector('#image')
if (link instanceof HTMLImageElement){
    link.src = 'new.jpg'
}

// let navlink = document.querySelectorAll('.naver');
// if (navlink instanceof HTMLAnchorElement){
//     navlink.href = 'https://kakao.com'
// }
//이렇게 하면 안되고 클래스 안에 있는 각각의 a요소들을 바꿔줘야하기 때문에 반복문 돌려야함

let navlink = document.querySelectorAll('.naver');
navlink.forEach((a)=>{
    if (a instanceof HTMLAnchorElement){
        a.href = 'https://kakao.com'
    }
});

