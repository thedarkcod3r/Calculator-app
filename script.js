let text = "";

let textOutput = document.querySelector("#output");
let btn0 = document.querySelector("#button0");
let btn1 = document.querySelector("#button1");
let btn2 = document.querySelector("#button2");
let btn3 = document.querySelector("#button3");
let btn4 = document.querySelector("#button4");
let btn5 = document.querySelector("#button5");
let btn6 = document.querySelector("#button6");
let btn7 = document.querySelector("#button7");
let btn8 = document.querySelector("#button8");
let btn9 = document.querySelector("#button9");

let divide = document.querySelector('#buttondivide');
let plus = document.querySelector('#buttonplus');
let minus = document.querySelector('#buttonminus');
let multi = document.querySelector('#buttonx');
let equal = document.querySelector('#buttonequal');

btn0.addEventListener('click', function () {
    text += "0";
    textOutput.innerHTML = text;
});
btn1.addEventListener('click', function () {
    text += "1";
    textOutput.innerHTML = text;
});
btn2.addEventListener('click', function () {
    text += "2";
    textOutput.innerHTML = text;
});
btn3.addEventListener('click', function () {
    text += "3";
    textOutput.innerHTML = text;
});
btn4.addEventListener('click', function () {
    text += "4";
    textOutput.innerHTML = text;
});
btn5.addEventListener('click', function () {
    text += "5";
    textOutput.innerHTML = text;
});
btn6.addEventListener('click', function () {
    text += "6";
    textOutput.innerHTML = text;
});
btn7.addEventListener('click', function () {
    text += "7";
    textOutput.innerHTML = text;
});
btn8.addEventListener('click', function () {
    text += "8";
    textOutput.innerHTML = text;
});
btn9.addEventListener('click', function () {
    text += "9";
    textOutput.innerHTML = text;
});

divide.addEventListener('click', function () {
    text += "/";
    textOutput.innerHTML = text;
});
plus.addEventListener('click', function () {
    text += "+";
    textOutput.innerHTML = text;
});
minus.addEventListener('click', function () {
    text += "-";
    textOutput.innerHTML = text;
});
multi.addEventListener('click', function () {
    text += "*";
    textOutput.innerHTML = text;
});

equal.addEventListener('click', function () {
    try {
        let result = eval(text);
        textOutput.innerHTML = result;
        text = ""
    } catch (error) {
        textOutput.innerHTML = "Error";
    }
});