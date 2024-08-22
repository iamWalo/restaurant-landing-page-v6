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
console.log(buttons);
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        buttons.classList.remove('clicked');
        button.classList.add('clicked');
    })
})
// recipes sripte
const bigTitleContainer = document.getElementById('big-title');
const smallTitleContainer = document.getElementById('small-title');
const headerContainer = document.querySelector('.recipes-container-header');
const featuredSection = document.querySelector('.featured-recipes')
const trendySection = document.querySelector('.trendy-recipes')


const featuredTitle = `<h1 class="featured-recipes-link">Featured <span>Recipes</span></h1>`;
const trendyTitle = `<h1 class="trendy-recipes-link">Trendy <span>Recipes</span></h1>`;

smallTitleContainer.innerHTML = featuredTitle;
bigTitleContainer.innerHTML = trendyTitle;
smallTitleContainer.addEventListener('click', () => {
    if (smallTitleContainer.innerHTML === featuredTitle) {
        bigTitleContainer.innerHTML = featuredTitle;
        smallTitleContainer.innerHTML = trendyTitle;
        featuredSection.classList.add('show');
        trendySection.classList.remove('show');
    } else if (smallTitleContainer.innerHTML === trendyTitle) {
        bigTitleContainer.innerHTML = trendyTitle;
        smallTitleContainer.innerHTML = featuredTitle;
        trendySection.classList.add('show');
        featuredSection.classList.remove('show');
    }
})