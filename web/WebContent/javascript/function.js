let result = square(3);

// 정의문
function square(num) {
    if(num == null) {
        return 0;
    } else if(isNaN(num)) {
        return 0;
    }
    return num * num;
}

// 표현식
let fnc = function (num) {
    return num * num;
}
console.log(fnc(3));

//
let count = 0;
function myFnc() {
    let cnt = 0;
    count++;
    cnt++;
    document.write(cnt + '<br>');
}
myFnc();

let theFnc = function() {
    let cnt = 0;
    count++;
    cnt++;
    document.write(cnt + '<br>');
}
theFnc();theFnc();theFnc();theFnc();

let colors = ['yellow','red','blue','aqua'];
let i = 0;
function changeColor() {
    let bdy = document.getElementsByTagName('body');
    // bdy = document.getElementById('bdy');
    bdy[0].style.backgroundColor = colors[i % 4];
    i++;
    console.log(bdy[0]);
}

function map(func, ary) {
    let result = [];
    for(let i = 0; i < ary.length; i++) {
        result[i] = func(ary[i]);
    }
    return result;
}
let fun = function (x) {
    return x * x;
}
let arr = [0,1,2,4];
let result = map(fun, arr);
console.log(result);

function callFunc() {
    let sum = 0;
    for(let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log(callFunc(2,3,4,5,6,7,8));

function callArySum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
let aryy = [1,2,3,4,5];
console.log(callArySum(aryy));

// 재귀함수.
let factorial = function (num) {
    return num<2 ? 1 : num * factorial(num-1);
}
// let factorial = function func(num) {
//     return num<2 ? 1 : num * func(num-1);
// }
result = factorial(4);
console.log(result);


//
function outside(x) {
    function inside(y) {
        return x + y;
    }
    return inside;
}
let fn_inside = outside(2);
let res = fn_inside(3); // outside(2)(3);
console.log(res);

res = outside(2)(3);
console.log(res);

let numbers = [23, 45, 33, 56, 12];
let sum = 0;
let list = document.getElementById('list');
numbers.forEach(function (a, b, c) {
    sum += a;
    let li = document.createElement('li');
    let text = document.createTextNode(a);
    li.appendChild(text);
    list.appendChild(li);
});
console.log(sum);

class Student {
    constructor(sno, name, score) {
        this.sno = sno;
        this.name = name;
        this.score = score;
    }
}

let student = {
    sno: '1111',
    name: 'Hong',
    score: 80
}

let students = [];
students.push(student);
students.push(new Student('2222', 'Hwang', 90));
students.push(new Student('3333', 'Park', 75));

function createTr(std) {

    let trTag = document.createElement('tr');
    trTag.onmouseover = function () {
        this.style.backgroundColor = 'yellow';
    }
    trTag.onmouseout = function () {
        this.style.backgroundColor = '';
    }
    let td = document.createElement('td');
    let chk = document.createElement('input');
    chk.setAttribute('type', 'checkbox');
    td.appendChild(chk);
    trTag.appendChild(td);

    for(field in student) {
        let tdTag = document.createElement('td');
        let text = document.createTextNode(std[field]);
        tdTag.appendChild(text);
        trTag.appendChild(tdTag);
    }
    td = document.createElement('td');
    let btn = document.createElement('button');
    btn.innerHTML = 'OK';
    btn.onclick = clickFnc;
    td.appendChild(btn);
    trTag.appendChild(td);
    return trTag;
}
let tbl = document.getElementById('tbl');

students.forEach(function (val, idx, ary) {
    let newTr = createTr(val);
    tbl.appendChild(newTr);
});

function clickFnc() {
    this.parentNode.parentNode.remove();
}