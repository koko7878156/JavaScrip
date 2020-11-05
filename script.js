if (true) {
    console.log("我是判斷式");
}

var pricel = 500;

if (pricel >= 200) {
    console.log("大於 200塊的商品")
}

else {
    console.log("小於 200塊的商品")
}

var pricel = 100000;

if (pricel >= 20000) {
    console.log("頂級旗艦款")
}

else if (pricel >= 15000) {
    console.log("旗艦款")
}

else if (pricel >= 10000) {
    console.log("頂級款")
}

else {
    console.log("基本款")
}

var boxes = document.getElementsByClassName("box");

console.log(boxes[1]);

// boxes[0].innerHTML = "我是盒子";
// boxes[1].innerHTML = "我是盒子";
// boxes[2].innerHTML = "我是盒子";

for(var i = 0; i < 10 ; i++) {  
    console.log("迴圈執行次數:" + i)
}

console.log("陣列的數量:" + boxes.length);

for(var i = 0; i <boxes.length; i++) {
    boxes[i].innerHTML = "迴圈數量" + i
}