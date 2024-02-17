window.addEventListener("DOMContentLoaded", (event) => {
    
    const burgerBtn = document.querySelector('.header__burger')
    const menuContainer = document.querySelector('.header')
    const choosing__menu = document.querySelectorAll('.choosing__left-item')
    
    if (burgerBtn) {
        burgerBtn.addEventListener('click', () => {
            menuContainer.classList.toggle('burger--click')
        })
    }
    
    
    if (choosing__menu) {
        choosing__menu.forEach(item => {
            item.addEventListener('click', () => {
                choosing__menu.classList.toggle('choosing__left-item--active')
            })
        })
    }

    console.log(choosing__menu);
  
});





