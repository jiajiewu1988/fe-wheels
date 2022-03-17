(() => {
  let counter = 0;

  function addItem(count) {
    const promise = Promise.resolve(count);

    promise.then(limit => {
      for (let i = 0; i < limit; i++) {
        const item = document.createElement('div');
        item.classList.add('item');
        item.innerHTML = '' + counter;
        counter += 1;
    
        const container = document.getElementById('container');
        container.appendChild(item);
      }
    });
    
  }

  // append items initially
  addItem(12);

  // if reached to bottom of scroll container, do add items into container
  window.addEventListener('scroll', () => {
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
      addItem(6);
    }
  });
})();