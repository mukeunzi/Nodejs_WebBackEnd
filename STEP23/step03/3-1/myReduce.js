// 문제. Array의 reduce()와 같이 동작하는 메서드 만들기

const myReduce = (arr, callback, initialValue) => {
    let acc;

    if(typeof initialValue === "undefined"){
        acc = arr[0];
        // i가 1일때 callback 함수의 연산(+, *)을 통해 리턴 값을 acc에 누적하고
        // for문의 길이만큼 반복한다
        for(let i=1; i<arr.length; i++){
            acc = callback(acc, arr[i]);
        }
    } else {
        acc = initialValue;
        for(let i=0; i<arr.length; i++){
            acc = callback(acc, arr[i]);
        }
    }

    return acc;
}

const resultSum = myReduce([1, 2, 3, 4, 5], (prev, value) => {
    return prev + value;
});

const resultMul = myReduce([1, 2, 3, 4, 5], (prev, value) => {
    return prev * value;
});

console.log(resultSum);
console.log(resultMul);