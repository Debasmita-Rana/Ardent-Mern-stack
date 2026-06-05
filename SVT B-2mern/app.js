const v1 = require('./v1');
const v2 = require('./v2');
const v3 = require('./v3');
const f1 = require('./f1');
const t1 = require('./t1');
const arr = require('./arr');
const arw = require('./arw');
const arr2 = require('./arr2');
console.log(v1);
console.log(v2.pname);
console.log(v2.pprice);
console.log(v3.pname);
console.log(v3.pprice);
console.log(v3.pcategory);

console.log(f1("a@gmail.com","1234"));
console.log(t1(5000,2));
console.log(arr.addcourse("c"));
console.log(arr.searchcourse("d"));
console.log(arw.x(5,6));
console.log(arw.m());
console.log(arr2);


