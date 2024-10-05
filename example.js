let burger = document.querySelector('.burger-menu')
let nav = document.querySelector('.main-nav')
    // Asegúrate de que el menú no esté activo al cargar
    nav.classList.remove('active');
    burger.classList.remove('active');
burger.addEventListener('click', function() {
    burger.classList.toggle('active')
    nav.classList.toggle('active') 
})