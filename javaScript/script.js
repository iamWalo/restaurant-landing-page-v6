
window.addEventListener('load', () => {
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('.content').style.display = 'block';
});

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


