const data = {
    "debug": "on",
    "window": {
        "title": "Sample Konfabulator Widget",
        "name": "main_window",
        "width": 500,
        "height": 500
    },
    "image": { 
        "src": "Images/Sun.png",
        "name": "sun1",
        "hOffset": 250,
        "vOffset": 250,
        "alignment": "center"
    },
    "text": {
        "data": "Click Here",
        "size": 36,
        "style": "bold",
        "name": "text1",
        "hOffset": 250,
        "vOffset": 100,
        "alignment": "center",
        "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
    }
}

/* 문제. 숫자타입의 key값을 추출해 배열만들기 */


// 코드개선 : 2차원 배열을 이용해 value의 타입이 숫자이면 result배열에 push함.
                      
const result = [];

for(let key1 in data){
    for(key2 in data[key1]){
        if(typeof data[key1][key2] === "number"){
            result.push(key2);
        }
    }
}

console.log(result);