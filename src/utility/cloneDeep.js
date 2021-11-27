const { prettyPrintJson } = require('pretty-print-json');

function cloneDeep1(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function cloneDeep2(origin) {
  // check if it's a obj
  if (typeof origin === 'object') {
    const newObj = Array.isArray(origin) ? [] : {};;
    const keys = Object.keys(origin);
    keys.forEach((key) => {
      newObj[key] = cloneDeep2(origin[key]);
    });
    return newObj;
  } else {
    return origin;
  }
}

const a = {
  b: {
    c: val => console.log(val)
  }
};

console.log('----------------cloneDeep1-------------------');
const copy = cloneDeep1(a);
console.log(`original obj - ${JSON.stringify(a, null, 2)}`);
console.log(`copied object - ${JSON.stringify(copy, null, 2)}`);
console.log('----------------cloneDeep1-------------------');

console.log('----------------cloneDeep2-------------------');
const copy2 = cloneDeep2(a);
console.log(`original obj - ${JSON.stringify(a, null, 2)}`);
console.log(`copied object - ${JSON.stringify(copy2, null, 2)}`);
console.log('----------------cloneDeep2-------------------');

