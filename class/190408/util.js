(function callModuleChecker(){
    result = new Date();
    console.log("WELCOME UTIL MODULE : " + result);
})();

function checkNumbers(arrVal){
    if((typeof arrVal == "undefined") || (typeof arrVal == "string")){
        return true;
    }
}

module.exports.sum = (arr) => {
    let res = 0;

    for (let i = 0; i < arr.length; i++) {
        if (checkNumbers(arr[i])){
            continue;
        }
        res += arr[i];
    }

    return res;
}