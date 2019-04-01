# JavaScript 배열의 사용법

----
## what is forEach?
see [Wikipedia](https://ko.wikipedia.org/wiki/Foreach_루프)

> foreach는 컬렉션 안의 항목들을 횡단하는 제어 흐름 문이다. 그러나 다른 루프와 달리 foreach 루프는 일반적으로 명시적인 카운터를 관리하지 않는다. 즉, "이것을 x번 하라"라고 하지 않고 "이 집합 안에서 모든 것에 대해 이것을 하라"라고 필수적으로 명시하게 된다. 잠재적인 순환 횟수 오류(off-by-one error)를 예방하고 코드를 더 단순하게 읽힐 수 있게 만들어준다. 만약 중간에 멈춰야 한다면 forEach()가 적절한 방법이 아닐지도 모릅니다.

----

**forEach() 메서드는 주어진 함수를 배열 요소 각각에 대해 실행합니다.**

----

    var array1 = ['a', 'b', 'c'];
    array1.forEach(function(element) {
        console.log(element);
    });

    // expected output: "a"
    // expected output: "b"
    // expected output: "c"

*forEach() 메서드로 array1배열에 있는 값을 element(array1을 순환하는 변수)변수가 순차적으로 출력한다.*

----
## 예제 1. for문을 forEach로 변경하기

    const items = ['item1', 'item2', 'item3'];
    const copy = [];

    // 이전
    for (let i=0; i<items.length; i++) {
        copy.push(items[i]);
    }

    // 이후
    items.forEach(function(item){
        copy.push(item);
    });

----
## 예제 2. 배열의 위치에 항목이 없는 경우
    function logArrayElements(element, index, array) {
        console.log('a[' + index + '] = ' + element);
    }

    // 인덱스 2는 배열의 그 위치에 항목이 없기에
    // 건너뜀을 주의하세요.
    [2, 5, , 9].forEach(logArrayElements);
    // 출력결과
    // a[0] = 2
    // a[1] = 5
    // a[3] = 9

----
## 예제 3. thisArg 사용
    function Counter() {
        this.sum = 0;
        this.count = 0;
    }
    Counter.prototype.add = function(array) {
      array.forEach(function(entry) {
        this.sum += entry;
        ++this.count;
      }, this);
      // ^---- 주의
    };

    var obj = new Counter();
    obj.add([2, 5, 9]);
    obj.count
    // 3
    obj.sum
    // 16

*다음 (지어낸) 예는 배열의 각 항목에서 객체의 속성을 갱신합니다.*
*thisArg 매개변수(this)를 forEach()에 제공했기에, callback은 전달받은 this의 값을 자신의 this 값으로 사용할 수 있습니다.