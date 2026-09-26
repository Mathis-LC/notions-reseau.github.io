// Ce JavaScript permet de gérer l'ouverture et la fermeture du menu de navigation sur téléphone.

const burgers = document.querySelectorAll('.navbar-burger');

burgers.forEach(burger => {
    burger.addEventListener('click', () => {

        const menu = document.querySelector('.navbar-menu');

        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');

        burger.setAttribute(
            'aria-expanded',
            burger.classList.contains('is-active')
        );
    });
});