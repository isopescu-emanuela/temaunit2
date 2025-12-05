const images = [
    "images/cpu.png", 
    "images/memory.png", 
    "images/disk.png", 
    "images/porturi.png", 
	"images/servicii.png",
	"images/procese.png"
];

let currentImageIndex = 0;
let slideshowIntervalId = null; 
const monitorSection = document.getElementById('monitorizare');
const slideshowImage = document.getElementById('img-slideshow');
const instructiuneText = monitorSection.querySelector('p'); 

function changeSlide() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    slideshowImage.src = images[currentImageIndex];
    slideshowImage.alt = "Monitorizare Resurse, Slide " + (currentImageIndex + 1);
}

function startSlideshow() {
    if (slideshowIntervalId !== null) {
        clearInterval(slideshowIntervalId); 
    }
    
    slideshowImage.classList.remove('hidden');
    
    if (instructiuneText) {
        instructiuneText.classList.add('hidden');
    }
   
    slideshowIntervalId = setInterval(changeSlide, 3000); 
    
    console.log("Slide-show-ul a pornit cu un interval de 3 secunde.");
}

if (monitorSection) {
    monitorSection.addEventListener('dblclick', startSlideshow);
}