var finalValue = 599;
var startValue = 0;
var time;
var x;
var numString = "";
var valueLength = finalValue.toString().length;

//to increase speed, reduce the value of "i"
for (var i = 10; i < valueLength; i++) {
    numString += "1";
}
x = Number(numString);

function upValue() {
    if (startValue <= finalValue) {
        setTimeout(function() {
            document.getElementById("number_up").innerText = startValue;
            if (x > 0) {
                startValue = startValue + x;
                time = 1;
            } else {
                startValue = startValue + 1;
                time = 5;
            }
            upValue();
        }, time);
    } else {
        setTimeout(function() {
            document.getElementById("number_up").innerText = finalValue;
        }, time);
    }
}
upValue();
var final = 1000;
var start = 0;
var time;
var x;
var numString = "";
var valueLength = final.toString().length;

//to increase speed, reduce the value of "i"
for (var i = 10; i < valueLength; i++) {
    numString += "1";
}
x = Number(numString);

function upValue1() {
    if (start <= final) {
        setTimeout(function() {
            document.getElementById("number_up1").innerText = start;
            if (x > 0) {
                start = start + x;
                time = 1;
            } else {
                start = start + 1;
                time = 5;
            }
            upValue1();
        }, time);
    } else {
        setTimeout(function() {
            document.getElementById("number_up1").innerText = final;
        }, time);
    }
}
upValue1();