// function myFunction(x) {
//     var element = document.getElementById("custom-col-resp")
//     if (x.matches) { // If media query matches
//         element.classList.toggle("col-2");
//     } else {
//         element.classList.toggle("col-1");
//         element.classList.remove("col-2");
//         element2.classList.toggle("col-1");
//     }
// }
// var x = window.matchMedia("(max-width: 568px)")
// myFunction(x) // Call listener function at run time
// x.addListener(myFunction) // Attach listener function on state changes
const navbar = document.getElementsByTagName("nav")[0];
function hideLoading() {
    document.getElementById('loading').style.opacity = '0';
    document.getElementById('loading').style.zIndex = '-1';
    AOS.init();
}
window.addEventListener('scroll', function scrollShadow() {
    navbar.removeAttribute("data-aos", "data-aos-duration");
    if (window.scrollY > 5) {
        navbar.classList.replace("bg-putih", "bg-blur");
    } else {
        navbar.classList.replace("bg-blur", "bg-putih");
    }
});