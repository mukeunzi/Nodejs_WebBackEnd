function fibo(num){
    if(num <= 1){
        return num;
    }

    return fibo(num-2) + fibo(num-1);

}

function fiboList(n){
    for(let i =0; i <= n; i++){
        var a = fibo(i);
        console.log(a);
    }
}

fiboList(5);
