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
});

//slider persons desktop
// const slider1 = document.querySelector('.party__slider');
// const prevButton1 = document.querySelector('.party__prev-button');
// const nextButton1 = document.querySelector('.party__next-button');
// const slides1 = Array.from(slider1.querySelectorAll('.party__slide'));
// const slideCount1 = slides1.length;
// let slideIndex1 = 0;

// Устанавливаем обработчики событий для кнопок
// prevButton1.addEventListener('click', showPreviousSlide1);
// nextButton1.addEventListener('click', showNextSlide1);

// Функция для показа предыдущего слайда
// function showPreviousSlide1() {
//   slideIndex1 = (slideIndex1 - 1 + slideCount1) % slideCount1;
//   updateSlider1();
// }

// Функция для показа следующего слайда
// function showNextSlide1() {
//   slideIndex1 = (slideIndex1 + 1) % slideCount1;
//   updateSlider1();
// }

// Функция для обновления отображения слайдера
// function updateSlider1() {
//   slides1.forEach((slide1, index1) => {
//     if (index1 === slideIndex1) {
//       slide1.style.display = 'block';
//       slide1.classList.add('slide-active');
//     } else {
//       slide1.style.display = 'none';
//       slide1.classList.remove('slide-active');
//     }
//   });
// }

// Инициализация слайдера
// updateSlider1();

//счетчик слайдов
// prevButton1.addEventListener('click', function(){
//   const slidesCount = document.querySelector('.party__slides-count');
//   const slideActive = document.querySelector('.slide-active');
//   const slideNum = slideActive.querySelector('.slide-num');
//   slidesCount.textContent = slideNum.textContent;
// });
// nextButton1.addEventListener('click', function(){
//   const slidesCount = document.querySelector('.party__slides-count');
//   const slideActive = document.querySelector('.slide-active');
//   const slideNum = slideActive.querySelector('.slide-num');
//   slidesCount.textContent = slideNum.textContent;
// });

// const allSlidesLength = document.querySelectorAll('.party__slide'),
//       allSlides = allSlidesLength.length,
//       allSlidesNum = document.querySelector('.party__slides-count__all');
//       allSlidesNum.textContent = allSlides;

//slider persons mobile
// const slider2 = document.querySelector('.party__slider2');
// const prevButton2 = document.querySelector('.party__prev-button2');
// const nextButton2 = document.querySelector('.party__next-button2');
// const slides2 = Array.from(slider2.querySelectorAll('.party__slide2'));
// const slideCount2 = slides2.length;
// let slideIndex2 = 0;

// Устанавливаем обработчики событий для кнопок
// prevButton2.addEventListener('click', showPreviousSlide2);
// nextButton2.addEventListener('click', showNextSlide2);

// Функция для показа предыдущего слайда
// function showPreviousSlide2() {
//   slideIndex2 = (slideIndex2 - 1 + slideCount2) % slideCount2;
//   updateSlider2();
// }

// Функция для показа следующего слайда
// function showNextSlide2() {
//   slideIndex2 = (slideIndex2 + 1) % slideCount2;
//   updateSlider2();
// }

// Функция для обновления отображения слайдера
// function updateSlider2() {
//   slides2.forEach((slide2, index2) => {
//     if (index2 === slideIndex2) {
//       slide2.style.display = 'block';
//       slide2.classList.add('slide-active2');
//     } else {
//       slide2.style.display = 'none';
//       slide2.classList.remove('slide-active2');
//     }
//   });
// }

// Инициализация слайдера
// updateSlider2();

//счетчик слайдов
// prevButton2.addEventListener('click', function(){
//   const slidesCount = document.querySelector('.party__slides-count2');
//   const slideActive = document.querySelector('.slide-active2');
//   const slideNum = slideActive.querySelector('.slide-num');
//   slidesCount.textContent = slideNum.textContent;
// });
// nextButton2.addEventListener('click', function(){
//   const slidesCount = document.querySelector('.party__slides-count2');
//   const slideActive = document.querySelector('.slide-active2');
//   const slideNum = slideActive.querySelector('.slide-num');
//   slidesCount.textContent = slideNum.textContent;
// });

// const allSlidesLength2 = document.querySelectorAll('.party__slide2'),
//       allSlides2 = allSlidesLength2.length,
//       allSlidesNum2 = document.querySelector('.party__slides-count__all2');
//       allSlidesNum2.textContent = allSlides2;
