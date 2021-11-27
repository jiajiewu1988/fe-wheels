function debounce(fn, wait) {
  let timer;
  return function() {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, wait);
  };
}

// simulate test debounce
const log = function() {
  console.log(`handler executed`);
};
const wait = 1000;
const debounceLogger = debounce(log, wait);

console.log('Hit logger at time 0');
debounceLogger();

setTimeout(() => {
  console.log('Hit logger at time 300');
  debounceLogger();

  setTimeout(() => {
    console.log('Hit logger at time 500');
    debounceLogger();
  }, 200);
}, 300);