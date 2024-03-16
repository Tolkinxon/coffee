const modal = document.querySelector('.modal')
const button = document.querySelector('.choosing-link')
const modalButton = document.querySelector('.modal-link')


// openning modal
button.addEventListener('click', () => {
    modal.style.display = 'block'
    document.body.classList.add('remove-scrolling')
})

// closing modal 
modal.addEventListener('click', () => {
    modal.style.display = 'none'  
    document.body.classList.remove('remove-scrolling')
})

modalButton.addEventListener('click', () => {
    modal.style.display = 'none'  
    document.body.classList.remove('remove-scrolling')
})



