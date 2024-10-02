let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');
let list = document.querySelector('.list');
let items = document.querySelectorAll('.item');
let runningTime = document.querySelector('.carousel .timeRunning');

let timeRunning = 3000;
let timeAutoNext = 7000;

nextBtn.onclick = function () {
    showSlider('next');
};

prevBtn.onclick = function () {
    showSlider('prev');
};

let runTimeOut;
let runNextAuto = setTimeout(() => {
    nextBtn.click();
}, timeAutoNext);

function resetTimeAnimation() {
    runningTime.style.animation = 'none';
    runningTime.offsetHeight; // trigger reflow
    runningTime.style.animation = null;
    runningTime.style.animation = 'runningTime 7s linear 1 forwards';
}

function showSlider(type) {
    let sliderItemsDom = list.querySelectorAll('.item');
    if (sliderItemsDom.length === 0) return;

    let current = sliderItemsDom[0];
    list.style.transition = '0.5s';
    list.style.transform = 'translateY(100%)';

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        list.appendChild(current);
        list.style.transition = 'none';
        list.style.transform = 'translateY(0%)';
        resetTimeAnimation();
    }, 500);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        nextBtn.click();
    }, timeAutoNext);
}
