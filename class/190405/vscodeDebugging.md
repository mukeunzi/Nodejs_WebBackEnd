# vscode와 Node.js Debugging

> vscode에서는 node.js의 디버깅을 지원한다.

----

## breakpoints

breakpoints는 동작을 잠시 멈추도록 하여 디버깅이 가능하게 해준다. 디버깅이 필요한 라인의 라인넘버 좌측을 클릭하거나 단축키 F9를 이용해 breakpoints를 지정할 수 있다.


## watch

breakpoints에서 디버깅 중인 값 외에도 watch 섹션에 변수나 함수를 등록하면 해당 값의 상태변화를 지켜볼 수 있다.

## call stack

javascript는 단일 스레드 언어이므로, 단일 호출 스택(Last in Fist out)입니다. 한 번에 하나의 일만 처리할 수 있다는 의미로, 콜스택은 우리가 어디에 있는지를 기록하는 데이터 구조입니다.

## step over
현재 break 가 된 라인에 함수가 존재하면 그 함수의 안으로는 들어가지 않고 함수를 실행한 뒤, 실행한 함수의 종료시점 이후에 멈춘다. 

## step into
현재 break 가 된 라인에 함수가 존재하면 그 함수에 안으로 들어가 라인별로 실행한다.

## step out
step into로 들어간 함수를 끝까지 실행한 뒤 빠져나온다. step into로 실행중인 함수를 빠져나올 때 사용한다.