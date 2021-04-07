let names = []; //new Array();
names[0] = 'Hong';
names.push('김다희');
names.push('김민주');
names.unshift('성다영');

delete names[0];
names.pop(); // 제일뒤쪽 요소부터 제거
names.shift(); // 제일앞쪽 요소부터 제거

for (let i = 0; i < names.length; i++) {
    console.log(i, names[i]);
}
let ns = names.join(','); //문자열 리턴
console.log(ns);

console.log(names);
ns = names.reverse(); //원본을 수정해서 배열 리턴
console.log(ns);

names.reverse();
names.push('만식이');
console.log(names);

ns = names.splice(1, 3); 
//splice는 원본 수정 slice는 원본수정X
console.log(ns);
console.log(names);