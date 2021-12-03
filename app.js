// open image popup
const popupSize = document.querySelector('.popup');
const previewImg = document.querySelectorAll('.places__container img');
const popupSizeImg = document.querySelector('.popup__img');
const popupSizeDescription = document.querySelector('.popup__description');

previewImg.forEach((preview) => {
  preview.addEventListener('click', () => {
    popupSize.classList.add('open');
    popupSizeImg.classList.add('open');
    const imageSrc = preview.getAttribute('src');
    popupSizeImg.src = imageSrc;
    const textImg = preview.getAttribute('alt');
    popupSizeDescription.textContent = textImg;
  });
});

popupSize.addEventListener('click', (evt) => {
 if (evt.target.classList.contains('popup')){
   popupSize.classList.remove('open');
 }
});

// make like action
function Toggle(btn) {
  if (btn.classList.contains("places__like")) {
    btn.classList.remove("places__like");
    btn.classList.add("places__like_active");
  } else {
    btn.classList.remove("places__like_active");
    btn.classList.add("places__like");
  }
}
