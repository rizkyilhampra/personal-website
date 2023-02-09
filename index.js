window.onload = function () {
    setTimeout(function () {
        hideLoading();
    }, 800);
};
function hideLoading() {
    document.getElementById('loading').style.opacity = '0';
    document.getElementById('loading').style.zIndex = '-1';
    AOS.init();
}
window.addEventListener('scroll', function scrollShadow() {
    const navbar = document.getElementsByTagName("nav")[0];
    navbar.removeAttribute("data-aos", "data-aos-duration");
    if (window.scrollY > 5) {
        navbar.classList.replace("bg-putih", "bg-blur");
    } else {
        navbar.classList.replace("bg-blur", "bg-putih");
    }
});