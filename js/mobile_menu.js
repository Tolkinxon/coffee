'use strict'

const burgerBtn = document.querySelector('.header__burger')
const menuList = document.querySelector('.header__list')
const containerHeader = document.querySelector('.header__container')
const menuListClose = document.querySelector('.header__close')

burgerBtn.addEventListener('click', () => {
    containerHeader.after(menuList)
    menuList.style.display = 'block'
    menuList.classList.remove('header__list')
    menuList.classList.add('header__list--click-burger')
    burgerBtn.style.display = 'none'
    menuListClose.style.display = 'block'

})

menuListClose.addEventListener('click', () => {
    menuList.style.display = 'none'
    menuListClose.style.display = 'none'
    burgerBtn.style.display = 'block'
})
