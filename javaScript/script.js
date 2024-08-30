
window.addEventListener('load', () => {
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('.content').style.display = 'block';
});
// side bar

const menuOpen = document.querySelector('#menu-open');
const menuClose = document.querySelector('#menu-close');
const sidebar = document.querySelector('.sidebar');
const sidebarButton = document.querySelector("div.header-button")
const html = document.querySelector('html');
menuOpen.addEventListener('click', () => {
    sidebar.classList.add('show-sidebar');
    sidebarButton.style.display = 'block';
    sidebar.appendChild(sidebarButton);
    html.style.overflow = 'hidden';
    menuOpen.style.display = 'none';
})
menuClose.addEventListener('click', () => {
    sidebarButton.style.display = 'none';
    html.style.overflow = 'scroll';
    sidebar.classList.remove('show-sidebar');
    menuOpen.style.display = 'block';
})
document.addEventListener('click', function (event) {
    const isClickInside = sidebar.contains(event.target) || menuOpen.contains(event.target);
    if (!isClickInside) {
        sidebar.classList.remove('show-sidebar');
    }
})
// vedios animations
const videos = document.querySelectorAll('.myVideo');
videos.forEach(video => {

    video.currentTime = 1.58;
    video.addEventListener('mouseover', () => {
        video.currentTime = 0;
        video.play();
    });

    video.addEventListener('mouseout', () => {
        video.currentTime = 1.58;
        video.pause();
    });
});
// nav bar  animation
const buttons = document.querySelectorAll('.sidebar nav ul li a');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        buttons.classList.remove('clicked');
        button.classList.add('clicked');
    })
})
// about Us slider 
