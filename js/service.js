
let elementsParent = document.querySelector('.mySwiper');
let textShow = document.querySelector('.service__show-text');
let textChanged = textShow.lastElementChild;
let iconChanged = textShow.firstElementChild;
let isHidden = false;

textShow.addEventListener('click', function() {

  if (isHidden) {
    textChanged.textContent = 'Показать все';
    elementsParent.style.height = '170px';
    iconChanged.classList.add('icon-open');
    iconChanged.classList.remove('icon-hide');
  } else {
    textChanged.textContent = 'Скрыть';
    elementsParent.style.height = 'auto';
    iconChanged.classList.add('icon-hide');
    iconChanged.classList.remove('icon-open');
  }
  isHidden = !isHidden;
});

  const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
  
    slidesPerView: "auto",
    spaceBetween: 16,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  
    breakpoints: {
      780: {
        toggle: false,
        loop: false,
        spaceBetween: "auto",
        slidesPerView: "auto",
        centeredSlides: false,
      },
    },
  });

  