// variable.js

// let num2 = 30; (X)

let numbers = [1,2,3,4,5];
let sum = 0;
document.write('<h1>Number</h1>');
document.write('<ul>');
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    document.write('<li>' + numbers[i] + '</li>');
}
document.write('<li>합: ' + sum + '</li>');
document.write('</ul>');