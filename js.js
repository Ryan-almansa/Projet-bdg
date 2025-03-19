const openPopup = document.getElementById('open-popup');
const closePopup = document.getElementById('close-popup');
const popupContainer = document.getElementById('popup-container');

openPopup.addEventListener('click', () => {
  popupContainer.classList.remove('hidden');
});

closePopup.addEventListener('click', () => {
  popupContainer.classList.add('hidden');
});

window.addEventListener('click', (event) => {
  if (event.target === popupContainer) {
    popupContainer.classList.add('hidden');
  }
});
