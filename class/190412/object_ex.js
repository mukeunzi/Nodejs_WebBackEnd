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

const result = [];

for(key1 in data){
    if(typeof data[key1] === "number"){
        result.push(key1);
    }else if(typeof data[key1] === "object"){
        const valueObj = data[key1];

        for(key2 in valueObj){
            if(typeof valueObj[key2] === "number"){
                result.push(key2);
            }
        }
    }
}

console.log(result);