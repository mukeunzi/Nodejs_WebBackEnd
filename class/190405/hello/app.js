function forTest(){
    for(var i=0; i<10; i++){
        console.log(i);
        
        callFun(i);
    }
}

function callFun(param){
    for(var i=0;i<10; i++){
        console.log(param + "의 " + i+1+"번째 호출");
    }
}
