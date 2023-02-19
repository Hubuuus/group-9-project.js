window.addEventListener('load', () => {
    const loader = document.querySelector('.Loader');
  
    loader.classList.add('LoaderHidden');
  
    loader.addEventListener('transitionend', () => {
      loader.innerHTML = '';
    });
  });
