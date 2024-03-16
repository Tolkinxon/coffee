window.addEventListener("DOMContentLoaded", (event) => {
    
    const burgerBtn = document.querySelector('.header__burger')
    const menuContainer = document.querySelector('.header')

 // menu side when width turn into mobile shape
    if (burgerBtn) {
        burgerBtn.addEventListener('click', () => {
            menuContainer.classList.toggle('burger--click')
        })
    }    
});





