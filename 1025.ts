class privates {
    private static x = 10;
    public static y = 20;
    protected z = 30;
}
`private 는 클래스 속성받은 자식이 변경 불가능함 오직 class 안에서만 수정 가능
          = extend된 클래스에서 사용 불가

 static은 부모 class만 가질 수 있는 속성으로 자식이 수정불가 
          자식이 사용할 필요 없는 속성에 부여 privates.x = 클래스에 직접부여되는 속성

 protected는 private랑 비슷하지만 extend된 클래스에서 사용 가능`

 //private static = 부모 클래스에서만 사용가능 자식 사용불가 privates.x로만 접근가능 class 안에서만 수정 가능
 //public static = class 내부 외부 상관없이 수정가능. public 키워드 지워도 똑같이 동작 


 class XX {
    private static x = 10;
    public static y = 20;
    static addOne(a:number){
        console.log(XX.x += a)
    }
    static printX(){
        console.log(XX.x)
    }
  }
XX.addOne(5)
XX.printX()



