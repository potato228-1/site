// Мелкие заготовки

let header = document.querySelector('.header');
let headerNav = document.querySelector('.header-nav');
let menuButton = document.querySelector('.nav-button');

// Логика работы меню-бургера

menuButton.addEventListener('click', function() {
    if (!document.querySelector('#menu-line1').classList.contains('menu-line_not-active')) {
        document.querySelector('#menu-line1').classList.add('menu-line_not-active');
        document.querySelector('#menu-line3').classList.add('menu-line_not-active');
        document.querySelector('#menu-line2').style.transform = 'rotate(45deg)';
        document.querySelector('#menu-line4').style.transform = 'rotate(-45deg)';
        document.querySelector('.header-nav').style.right = '0';
    } else {
        document.querySelector('#menu-line1').classList.remove('menu-line_not-active');
        document.querySelector('#menu-line3').classList.remove('menu-line_not-active');
        document.querySelector('#menu-line2').style.transform = 'rotate(0)';
        document.querySelector('#menu-line4').style.transform = 'rotate(0)';
        document.querySelector('.header-nav').style.right = '-100%';
    }
});

// Немного адаптации

if (window.screen.width <= 574) {
    headerNav.after(document.querySelector('.header-logo'));
}

window.addEventListener('resize', function() {
    if (window.screen.width <= 574) {
        if (!header.lastElementChild.classList.contains('header-logo')) {
            headerNav.after(document.querySelector('.header-logo'));
        }
    } else {
        if (window.screen.width >= 574) {
            if (header.lastElementChild = document.querySelector('.header-logo')) {
                headerNav.insertBefore(document.querySelector('.header-logo'), headerNav.children[2]);
            }

        }
    }
});