let menu = document.querySelector(".nav__ul")
let menuBtn = document.querySelector(".header__icon")
let menuBtnIcon = document.querySelector(".header__icon i")
let container = document.querySelector(".container")

menuBtn.addEventListener("click", function(){
    if (menuBtnIcon.classList.contains("fa-bars")){
        menu.style.left = "0"
        menuBtnIcon.classList = "fa fa-times"
    } else{
        menu.style.left = "-256px"
        menuBtnIcon.classList = "fa fa-bars"
    }
})