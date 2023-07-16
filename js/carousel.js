const carouselContainer = document.querySelector(".carousel-container");
let slides = document.querySelectorAll(".carousel-slide");
slideIndex = 0;
slidesCount = slides.length;

let offset = 0;
let t = 0;
setInterval(() => {
    slideIndex++;
    t = offset;
    console.log(slideIndex);
    if (slideIndex > (slides.length * 2-2)) {
        slideIndex = 0;
        
    }
    
    else if (slideIndex < slides.length) {
        offset = offset - 600;
        slides.forEach((slide) => {
            slide.style.transform = `translate(${offset}px)`;
        });
    } else if (slideIndex >= slides.length && slideIndex <= (slides.length * 2-2)) {
        slides.forEach((slide) => {
            offset = t + 600;
            slide.style.transform = `translate(${offset}px)`;
        });
    }
}, 1000);

// (slideIndex >= slides.length && slideIndex < slides.length * 2)
