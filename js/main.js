const elLightModeButton = document.querySelector('.site-header-Light');
const elDarkModeButton = document.querySelector('.site-header-Dark');


elLightModeButton.addEventListener('click',function () {
    document.body.classList.remove('dark-mode');
} )

elDarkModeButton.addEventListener('click',function () {
    document.body.classList.add('dark-mode');
} )