const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const menuClose = document.querySelector('.menu__close');


hamburger.addEventListener('click',() => {
    menu.classList.add('active');
})
menuClose.addEventListener('click', () => {
    menu.classList.remove('active');
});

const percent = document.querySelectorAll('.skills__graph-percente');
const lines = document.querySelectorAll('.skills__graph-subline');

percent.forEach((item,i) =>{
    lines[i].style.width =item.innerHTML;
});