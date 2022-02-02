const cards = document.querySelectorAll(".card__img-wrapper");
const lightBox = document.querySelector(".lightbox");
const lightBoxImg = document.querySelector(".lightbox__img");
const lightBoxCloseBtn = document.querySelector(".lightbox__closeBtn");

cards.forEach((card) => {
    card.addEventListener("click", () => {
        // toggle the lightbox to display
        lightBox.classList.toggle("--is-active");
        // get the src attribute from the image of the card being clicked
        let imgSrc = card.querySelector(".card__img").getAttribute("src");
        // add the img src to the background-image url
        lightBoxImg.style.backgroundImage = `url(${imgSrc})`;
    });
});
// close lightbox when closeBtn is clicked
lightBoxCloseBtn.addEventListener("click", () => {
    lightBox.classList.toggle("--is-active");
});
