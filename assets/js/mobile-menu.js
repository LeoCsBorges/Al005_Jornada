// [ HAMBURGER MENU ]
const menuIcon = document.querySelector('.header__nav__menu-mobile');
const menuMobile = document.querySelector('.header__nav__mobile');
const backdrop = document.querySelector('.backdrop')

//open or close by clicking the menu icon
menuIcon.addEventListener('click', function () {
    mobileMenuToggle();
})

//close by clicking outside the menu
window.onclick = function (event) {
    if (event.target.matches('.backdrop') || (event.target.matches('.header__nav'))) {
        menuMobile.classList.remove('mobile-menu-show');
        menuMobile.classList.add('mobile-menu-hide');
        backdrop.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

function mobileMenuToggle() {
    //open
    if (menuMobile.classList.contains('hidden') || menuMobile.classList.contains('mobile-menu-hide')) {
        menuMobile.classList.remove('hidden');
        backdrop.classList.remove('hidden');
        menuMobile.classList.remove('mobile-menu-hide');
        menuMobile.classList.add('mobile-menu-show');
        document.body.style.overflow = 'hidden';

        //close 
    } else {
        menuMobile.classList.remove('mobile-menu-show');
        menuMobile.classList.add('mobile-menu-hide');
        backdrop.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}