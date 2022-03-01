
var bar = document.querySelector('.bar-reponsive');
var modalMenu = document.querySelector('.modal-menu');
var menuReponsive = document.querySelector('.menu-mobile-tablet');
var closeMenu = document.querySelector('.close-menu');

bar.onclick = function(){
    modalMenu.style = `display: block`;
    menuReponsive.style = `transform: translateX(0)`;
}
modalMenu.onclick = function(){
    modalMenu.style = `display: none`;
    menuReponsive.style = `transform: translateX(-100%)`;
}
closeMenu.onclick = function(){
    modalMenu.style = `display: none`;
    menuReponsive.style = `transform: translateX(-100%)`;
}