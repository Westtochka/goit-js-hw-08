// Add imports above this line
import { galleryItems } from './gallery-items';

import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";
// import * as basicLightbox from 'basiclightbox'
console.log(galleryItems);

const photoList=document.querySelector(".gallery")
// console.log(photoList)

const imgCard=createImgCards(galleryItems);
photoList.insertAdjacentHTML('beforeend', imgCard)

function createImgCards(galleryItems) {
    return galleryItems
    .map(({preview, original, description})=>{
    return `
<li class="gallery__item">
<a class="gallery__link"
href="${original}">
<img 
class="gallery__image" 
src="${preview}"
data-source="${original}"
alt="${description}" width=100%></img>
</a> 
</li>
    `
}).join("")}

const lightbox = new SimpleLightbox('.gallery a', { captionsData:'alt',
    captionPosition:'bottom',
    animationSpeed:250});