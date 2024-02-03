'use strict'

const burgerBtn = document.querySelector('.header__burger')
const menuContainer = document.querySelector('.header')

burgerBtn.addEventListener('click', () => {
    menuContainer.classList.toggle('burger--click')
})


