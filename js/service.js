
  let firmsParent = document.querySelector('.service__firms');
  let textShow = document.querySelector('.service__show-text');
  let textChanged = textShow.lastElementChild;
  let iconChanged = textShow.firstElementChild;
  let isHidden = true;
  
  textShow.addEventListener('click', function() {
    for (let i = 0; i < firmsParent.children.length; i++) {
      if (firmsParent.children[i].classList.contains('hide')) {
        firmsParent.children[i].style.display = isHidden ? 'flex' : 'none';
      }
    }
    textChanged.textContent = isHidden ? 'Скрыть' : 'Показать';
    if (isHidden) {
      iconChanged.classList.add('icon-open');
      iconChanged.classList.remove('icon-hide');
    } else {
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

  