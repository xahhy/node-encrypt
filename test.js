const fs = require('fs');

const string = fs.readFileSync('./script/data2.txt');
const data = {
  string,
};
console.time('stringify');
JSON.stringify(data);
console.timeEnd('stringify');

console.time('manual');
const result = `{"string": "${string}"}`;
console.timeEnd('manual');
