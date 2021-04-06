
var num1; //undefined
num1 = 10; //number
num1 = 'Hello'; //string
num1 = false; //boolean
num1 = null; //object
num1 = {
    name: 'Hong',
    age: 20
}
num1 = []; // object
num1[0] = 10;
num1[1] = 20;
num1[2] = 'Hello';

num1 = function() { //function
    window.alert('Hello');
}

console.log(num1);
// console.log(typeof num1);

let num2; //let은 좀더 타이트한 규칙을 가진다
num2 = 10;

{
    let num2; //지역변수라서 이 20은 블럭이 끝나면 사라짐
    num2 = 20;
    console.log('{ num2: }' + num2);
}
num2 = 15;
console.log('num2: ' + num2);

const num3 = 77;
// num3 = 78;
