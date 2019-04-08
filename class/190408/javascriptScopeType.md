# JavaScript Scope type

## 1. var(function-scoped)

(1)

    var foo = 't1';
    console.log(foo);  //t1
    var foo = 't2';
    console.log(foo);  //t2
    
 - var는 너그러운 scope type이다.
 - 같은 이름의 변수를 두 번 선언해도 에러를 발생시키지 않는다.

 ----

(2)

    console.log(foo);
    var foo;  //let foo; 이거나 const foo; 이면?

 - 선언보다 호출이 먼저 있었음에도 불구하고 에러가 발생되지 않는다.
 - let과 const로 선언하면 변수가 선언되지 않았다는 에러가 발생.

> jaascript는 초기화가 아닌 선언을 맨 위로 끌어올리는 작동방식(hoisting) 때문.
    

## 2. let, const(block-scoped)

 - let과 const 의 공통점은 변수 재선언이 불가능하다.
 - 두 타입의 차이점은 let은 재할당이 가능하지만, const 는 재할당도 불가능하다. 
 - var 는 function-scoped 단위로 hoisting 되지만 let 과 const 는 block-scoped 단위로 hoisting 된다.

(1) 

    c = 'test' // ReferenceError: c is not defined
    let c;

 - 에러가 발생하는 이유는 TDZ(temporal dead zone) 때문이다.
 - let 은 값을 할당하기 전에 선언되어야 하기 때문이다.

----

(2)

    const aa // Missing initializer in const declaration

 - const 선언과 동시에 값을 할당 해야한다.    