window.addEventListener("DOMContentLoaded", (event) => {
    
    const burgerBtn = document.querySelector('.header__burger')
    const menuContainer = document.querySelector('.header')
    const choosing__menu = document.querySelectorAll('.choosing__left-item')
    
    const radioBtn = () => {
        if (choosing__menu) {
            choosing__menu.forEach(item => item.classList.remove('choosing__left-item--active'))       
        }
    }
    
    if (burgerBtn) {
        burgerBtn.addEventListener('click', () => {
            menuContainer.classList.toggle('burger--click')
        })
    }

    radioBtn()
    
    if (choosing__menu) {
        choosing__menu.forEach(item => {
            item.addEventListener('click', (e) => {
                radioBtn()
                e.currentTarget.classList.add('choosing__left-item--active')
             
                console.log(e.target.tagName);
                console.log(e.currentTarget);
            })
        })
    }
    
     
    
    
    
    
    
    
    
});





