
import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryMarking = document.querySelector('.gallery');

const nowGallery = galleryItems => {
  return galleryItems.map(({ original, preview, description}) => {
    return `
      <li class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</li>
    `;
  }).join('');
  
};

const nowMarkup = nowGallery(galleryItems);
galleryMarking.insertAdjacentHTML('beforeend', nowMarkup);


galleryMarking.addEventListener("click", selectPicture)


function selectPicture(event) {
    
  event.preventDefault(event);  
  
   if (event.target.nodeName !== 'IMG') {        
        return
    }
    
    const instance = basicLightbox.create(`<img src = '${event.target.dataset.source}'>`);
    instance.show();
};


// galleryMarking.addEventListener("keydown", evt => {
//     if (evt.code === 'Escape') {
//         instance.close();
//     }
// });


