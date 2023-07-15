const carouselContainer = document.querySelector(".carousel-container");
let slides = document.querySelectorAll(".carousel-slide");
slideIndex = 0;
slidesCount = slides.length
// function nextSlide() {
//   slides.forEach((slide) => {
//     for (let slideIndex = 0; slideIndex < slides.length; slideIndex++) {
//       setTimeout(() => {
//         slide.style.transform = "translate(-100%)";
//       }, 1000);

//       console.log(slideIndex);
//     }
//   });
// }
let offset = 0
let t = 0
setInterval(() => {
    slideIndex++

    console.log(slideIndex);
    t = offset
    if (slideIndex <= slides.length) {
        offset = offset - 600
        slides.forEach((slide) => {
            slide.style.transform = `translate(${offset}px)`;
        });
    } 
    else if (slideIndex > slides.length && slideIndex <= (slides.length * 2)) {
       
    
        slides.forEach((slide) => {
            offset = t + 600
            slide.style.transform = `translate(${offset}px)`;
        })


    }else{
        slideIndex = 0
        
    }
}, 1000);
// const slideWidth = slides[0].clientWidth; // Assuming all slides have the same width

// function showSlide() {
//   slides.forEach((slide, index) => {
//     const slideOffset = (index - slideIndex) * slideWidth;
//     slide.style.transform = `translateX(${slideOffset}px)`;
//   });
// }

// function nextSlide() {
//   slideIndex++;

//   while (slideIndex<slides.length) {
//     slides.forEach((slide)=>{

//         slide[slideIndex].style.transform = "translate(-100%)"
//         slideIndex++
//       })
//   }
//    if (slideIndex >= slides.length) {
//     slideIndex = 0;

//   }

//   showSlide();
// }
// console.log(slideLength)
// setInterval(nextSlide, 1000)
