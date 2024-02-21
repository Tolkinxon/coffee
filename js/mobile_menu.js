window.addEventListener("DOMContentLoaded", (event) => {
    
    const burgerBtn = document.querySelector('.header__burger')
    const menuContainer = document.querySelector('.header')
    const choosing__menu = document.querySelectorAll('.choosing__left-item')
    const choosing__icon = document.querySelectorAll('.choosing__icon')
    const choosing__icon_mover = document.querySelectorAll('.choosing__icon-mover')
    const choosingInnerWords = document.querySelectorAll('.choosing__inner-words')
   
    
    // clearing function about older classes
    const radioBtn = () => {
        if (choosing__menu) {
            choosing__menu.forEach(item => item.classList.remove('choosing__left-item--active'))       
        }
    }
  
    // menu side when width turn into mobile shape
    if (burgerBtn) {
        burgerBtn.addEventListener('click', () => {
            menuContainer.classList.toggle('burger--click')
        })
    }
    

    // this codes for active side of choosing orders
    
    if (choosing__menu) {
        choosing__menu.forEach(item => {
            item.addEventListener('click', (e) => {
                radioBtn()
                e.currentTarget.classList.add('choosing__left-item--active')
            })
        })
    } 
    
    // this codes about hide and show input elements and making orders
    if (choosing__icon && choosing__icon_mover && choosingInnerWords) {
        for(let i = 0; i < choosing__icon.length; i++){
            choosing__icon[i].addEventListener('click', (e) => {

                              
                choosing__icon[i].style.transform = 'rotate(180deg)'
                let j = choosing__icon_mover[i].clientHeight
                let n
                if(j == 0){
                    n = 5
                    choosing__icon[i].style.transform = 'rotate(0deg)'

                }
                else {
                    n = -5
                }
                
                const inter = setInterval(() => {
                    j = j + n
                    choosing__icon_mover[i].style.height = `${j}px`
                    if(j === 0) {
                        clearInterval(inter)
                    }
                    if(j === 250) {
                        clearInterval(inter)
                    }

                },0.1)               
            })



            choosingInnerWords[i].innerHTML = choosing__icon_mover[i].childNodes[1].value.slice(0, -1) // showing default input values


            // showing input values by clicking 
            choosing__icon_mover[i].addEventListener('click', (e) => {
                if(e.target.value){
                    const n = +e.target.value.at(-1)
                    console.log(typeof n);
                    
                    choosingInnerWords[n - 1].innerHTML = e.target.value.slice(0, -1)
                }
                
            })
        }



    }  
    
    
    
});





