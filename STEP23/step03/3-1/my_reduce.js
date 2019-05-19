// 문제. Array의 reduce()와 같이 동작하는 메서드 만들기

const myReduce = (arr, callback, initialValue) => {
    let acc = 0;

    // initialValue에 관계없이 arr의 요소를 다 더하니까 forEach를 하나만 사용해도 되구만
    if(typeof initialValue === "undefined"){
        initialValue = 0;
    }
    acc = initialValue;
    arr.forEach(element => { 
        acc = callback(acc, element);
    });

    return acc;
}

const resultSum = myReduce([1, 2, 3, 4, 5], (prev, value) => { return prev + value; });
const resultMul = myReduce([1, 2, 3, 4, 5], (prev, value) => { return prev * value; }, 1);

console.log(resultSum);
console.log(resultMul);