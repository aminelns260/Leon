const links = document.querySelector('.links')

links.addEventListener('click', () => {
    links.classList.toggle('active')
    setTimeout(() => {
            links.classList.remove('active')
    }, 3000);
})