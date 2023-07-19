const slideshow1 = document.getElementById("slideshow-image");
const images = [
    "../resources/image1.jpg",
    "../resources/image2.jpg",
    "../resources/image3.jpg",
    "../resources/image4.jpg"
];
const timer = 3000;
let currentIndex = 0;

setInterval(function() {
    nextSlide(slideshow1);
}, timer);

function nextSlide(slideshowElement) {
    
    
    if (currentIndex < images.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }

    slideshowElement.src = images[currentIndex];
}