function throttle(fn, wait) {
  let timer;
  return function() {
    if (!timer) {
      fn.apply(this, arguments);
      timer = setTimeout(() => {
        timer = null;
      }, wait);
    }
  }
}

// test throttle
const log = function() {
  console.log('handler executed');
}
const wait = 1000;
const throttleLogger = throttle(log, wait);

console.log('event triggered at 0');
throttleLogger();

setTimeout(() => {
  console.log('event triggered at 500');
  throttleLogger();

  setTimeout(() => {
    console.log('event triggered at 1100');
    throttleLogger();
  }, 600);
}, 500);
