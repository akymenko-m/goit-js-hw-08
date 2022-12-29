import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryList = document.querySelector('.gallery');

const makeGalleryItem = ({ preview, original, description } = {}) => {
    return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    `
};

const galleryItem = galleryItems.map(el => {
    return makeGalleryItem(el);
});
galleryList.insertAdjacentHTML('beforeend', galleryItem.join(''));


// galleryList.addEventListener('click', openLightboxByClickOfImage);
// let lightbox = new SimpleLightbox('.gallery a', { captionsData:'alt', captionDelay:250 }); //fadeSpeed:300

// function openLightboxByClickOfImage(event) {
//     event.preventDefault();
// }

let gallery = new SimpleLightbox('.gallery a', { captionsData:'alt', captionDelay:250 });

