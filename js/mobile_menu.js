window.addEventListener("DOMContentLoaded", (event) => {
    
    const burgerBtn = document.querySelector('.header__burger')
    const menuContainer = document.querySelector('.header')
    const choosing__menu = document.querySelectorAll('.choosing__left-item')
    const choosing__icon = document.querySelectorAll('.choosing__icon')
    const choosing__icon_mover = document.querySelectorAll('.choosing__icon-mover')
    
    
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
            })
        })
    } 
    
    if (choosing__icon && choosing__icon_mover) {
        for(let i = 0; i < choosing__icon.length; i++){
            choosing__icon[i].addEventListener('click', (e) => {
                console.log(e);
                let j = 250
                
                const inter = setInterval(() => {
                    j = j - 5
                    choosing__icon_mover[i].style.height = `${j}px`
                    if(j === 0) {
                        
                        clearInterval(inter)
                    }
                },0.1)
            })
        }
    }
    
    
    
    
    
    
    
    
    
    
    
    
});





