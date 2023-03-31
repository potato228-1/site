let mobileMenu = document.querySelector('.menu-button');

mobileMenu.addEventListener('click', function() {
    if (!document.querySelector('.line1').classList.contains('line_not-active')) {
        document.querySelector('.line1').classList.add('line_not-active');
        document.querySelector('.line3').classList.add('line_not-active');
        document.querySelector('.line2').style.rotate = '45deg';
        document.querySelector('.line4').style.rotate = '-45deg';
        document.querySelector('.header-nav').style.left = '0';
    } else {
        document.querySelector('.line1').classList.remove('line_not-active');
        document.querySelector('.line3').classList.remove('line_not-active');
        document.querySelector('.line2').style.rotate = '0deg';
        document.querySelector('.line4').style.rotate = '0deg';
        document.querySelector('.header-nav').style.left = '-100%';
    }
})