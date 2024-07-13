const join = document.querySelector('.join');
const title = document.querySelector('.title');
const math = document.querySelector('.mathBoard');
const school = document.querySelector('.schoolElements');
const organic = document.querySelector('.organicShapes');
const learners = document.querySelector('.learnersStationery');

let start = null;

requestAnimationFrame(function animText(time) {
    if (!start) start = time;

    const progress = (time - start);

    join.style.top = `51px`;
    join.style.transform = `translate(-50%) scale(0.7)`
    
    if(progress >= 600) {
        join.style.transform = `translate(-50%) scale(1)`
    }

    if (progress < 600) {
        requestAnimationFrame(animText);
    }
})

let startImg = null;

requestAnimationFrame(function animImg(time) {
    if (!startImg) startImg = time;

    const progress = (time - startImg);

    if (progress > 1000) {
        title.style.left = `200%`;
        math.style.transform = `rotate(-45deg)`;
        organic.style.transform = `rotate(-45deg)`;
        school.style.transform = `rotate(45deg)`;
        learners.style.transform = `rotate(45deg)`;
    }

    if (progress < 1800) {
        requestAnimationFrame(animImg);
    }

    if (progress >= 1800) {
        math.style.transform = `rotate(0deg)`;
        organic.style.transform = `rotate(0deg)`;
        school.style.transform = `rotate(0deg)`;
        learners.style.transform = `rotate(0deg)`;
    }

})