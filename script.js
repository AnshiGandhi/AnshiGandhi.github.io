document.addEventListener("DOMContentLoaded", () => {
    const introText = document.querySelector("#intro .intro-text");
    const introPhoto = document.querySelector("#intro .intro-photo img");
    
    introText.style.opacity = 0;
    introPhoto.style.transform = 'translateX(50%)';
    
    setTimeout(() => {
        introText.style.transition = 'opacity 1s ease-in-out';
        introPhoto.style.transition = 'transform 1s ease-in-out';
        introText.style.opacity = 1;
        introPhoto.style.transform = 'translateX(0)';
    }, 100);
});
