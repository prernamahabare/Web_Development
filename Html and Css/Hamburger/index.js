burger = document.querySelector('.burger');
navbar = document.querySelector('.container');
nav_list = document.querySelector('.box1');


burger.addEventListener('click', ()=>{
    nav_list.classList.toggle('visible_class');
    navbar.classList.toggle('height_class');
})
