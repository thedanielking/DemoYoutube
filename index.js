let menuIcon = document.querySelector("#menu-icon");
let sideNav = document.querySelector(".side-nav")


menuIcon.addEventListener("click", e=>{
    sideNav.classList.toggle("side-nav-hide") ;
})



// dark theme
const darkBtn = document.getElementsByClassName("nav_avatar");

darkBtn[0].addEventListener("click", (e)=>{
    document.body.classList.toggle("darkTheme");
})






