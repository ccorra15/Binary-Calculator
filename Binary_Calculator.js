let elem = document.getElementById("res");
var hasEq = false;
var opCount = 0;

const actions ={
    "+": (a,b) => a + b,
    "-": (a,b) => a - b,
    "*": (a,b) => a * b,
    "/": (a,b) => Math.floor(a / b)
}

function check() {

    if(elem.innerHTML.endsWith("+") || elem.innerHTML.endsWith("-") ||
       elem.innerHTML.endsWith("*") || elem.innerHTML.endsWith("/") || opCount >= 1)
       return true;
}

function zero() {
    if(hasEq) {
        elem.innerHTML = '0';
        hasEq = false;
    }
    else{
        elem.innerHTML += '0';
    }
}

function one() {
    if(hasEq) {
        elem.innerHTML = '1';
        hasEq = false;
    }
    else{
        elem.innerHTML += '1';
    }
}

function plus() {
    if(elem.innerHTML.length != 0 && !check()) {
        elem.innerHTML += "+";
        opCount+=1;
        hasEq = false;
    }
}

function sub() {
    if(elem.innerHTML.length != 0 && !check()) {
        elem.innerHTML += "-";
        opCount+=1;
        hasEq = false;
    }
}

function multiply() {
    if(elem.innerHTML.length != 0 && !check()) {
        elem.innerHTML += "*";
        opCount+=1;
        hasEq = false;
    }
}

function divide() {
    if(elem.innerHTML.length != 0 && !check()) {
        elem.innerHTML += "/";
        opCount+=1;
        hasEq = false;
    }
}

function clear() {
    console.log("do something");
}

function clearRes() {
    elem.innerHTML = '';
    opCount = 0;
    hasEq = false;
}

function equal() {
        const [num1, operator, num2] = elem.innerText.split(/\b/);
        const n1 = parseInt(num1, 2);
        const n2 = parseInt(num2, 2);

        if(num2 != null) {
            elem.innerHTML = Number(actions[operator](n1, n2)).toString(2);
            hasEq = true;
            opCount = 0;
        }
    

}