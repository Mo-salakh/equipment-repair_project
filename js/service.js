var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  let h2 = document.querySelector("h2");
  let swiperParent = h2.nextElementSibling;
  let swiperWrapper = document.querySelector('.service__firms')
  let swiperSlide = swiperParent.querySelector(".service__firm");
  let pagination = document.querySelector("div.swiper-pagination");

  
  window.addEventListener("resize", function () {
    if (screen.width >= 780) {
      swiperParent.classList.remove("swiper");
      swiperParent.classList.remove("mySwiper");
      swiperWrapper.classList.remove("swiper-wrapper");
      swiperSlide.classList.remove("swiper-slide");
    }
  });