const customSlide = document.querySelector('.slider');
const customImg = document.querySelectorAll('.slider img');

//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter
let counter = 1;
const size = customImg[0].clientWidth;

customSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//button listener
nextBtn.addEventListener('click', () => {
    if(counter >= customImg.length-1) return;
    customSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    // console.log(counter);
    customSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
    if(counter <= 0) return;
    customSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    // console.log(counter);
    customSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

customSlide.addEventListener('transitionend', ()=>{
    // console.log(customImg[counter]);
    if(customImg[counter].id=== 'lastClone'){
        // console.log(counter);
        customSlide.style.transition = "none";
        counter = customImg.length-2;
        customSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        
    }

    if(customImg[counter].id=== 'firstClone'){
        console.log(counter);
        customSlide.style.transition = "none";
        counter = customImg.length-counter;
        customSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});