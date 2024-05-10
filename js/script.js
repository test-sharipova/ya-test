//slider steps

const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('.steps__slide'));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSlider();

//slider person new
var swiper = new Swiper(".party__slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: '.party__next-button',
    prevEl: '.party__prev-button',
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    20: {
      slidesPerView: 1,
      
    },
    768: {
      slidesPerView: 3,
      
    },
    
  },
});

//счетчик слайдов
const prevButton1 = document.querySelector('.party__prev-button');
const nextButton1 = document.querySelector('.party__next-button');
prevButton1.addEventListener('click', function(){
  const slidesCount = document.querySelector('.party__slides-count');
  const slideActive = document.querySelector('.swiper-slide-active');
  const slideNum = slideActive.querySelector('.slide-num');
  slidesCount.textContent = slideNum.textContent;
});
nextButton1.addEventListener('click', function(){
  const slidesCount = document.querySelector('.party__slides-count');
  const slideActive = document.querySelector('.swiper-slide-active');
  const slideNum = slideActive.querySelector('.slide-num');
  slidesCount.textContent = slideNum.textContent;
});

const allSlidesLength = document.querySelectorAll('.swiper-slide'),
      allSlides = allSlidesLength.length,
      allSlidesNum = document.querySelector('.party__slides-count__all');
      allSlidesNum.textContent = allSlides;