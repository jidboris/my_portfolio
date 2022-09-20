const navHeader = document.querySelector("header");

// window.addEventListener("scroll", function () {
//     header.classList.toggle ("sticky", window.scrollY > 0 );
// } );

window.addEventListener("scroll", myFunction);
function myFunction() {
    // alert("Hello")
    navHeader.classList.toggle("sticky", window.scrollY > 0);
};

const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    menu.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    menu.classList.remove('active');
}
