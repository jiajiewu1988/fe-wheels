(() => {
  const items = document.getElementsByClassName('accordion-item');
  
  for (let item of items) {
    item.addEventListener('click', (event) => {
      const myHeader = item.querySelector('.header');
      const myContent = item.querySelector('.content');
      
      myHeader.classList.toggle('active');
      if (item.getAttribute('data-active')) {
        item.removeAttribute('data-active');
        myContent.style.maxHeight = 0;
      } else {
        item.setAttribute('data-active', 'yes');
        myContent.style.maxHeight = 300 + 'px';
      }
    });
  }
})();