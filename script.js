
  const popup = document.getElementById('popup');
  const popupImg = document.getElementById('popup-img');
  const closeBtn = document.querySelector('.popup .close');


  document.querySelectorAll('.card img').forEach(img => {
    img.addEventListener('click', () => {
      popupImg.src = img.src;
      popup.classList.add('active');
    });
  });

  closeBtn.addEventListener('click', () => {
    popup.classList.remove('active');
  });


  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.classList.remove('active');
    }
  });
