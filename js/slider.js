var sliderButtons = document.querySelectorAll(".carousel__button");
var carouselSlides = document.querySelectorAll(".carousel__slide");

sliderButtons.forEach(function(sliderButton, i) {
  sliderButton.addEventListener("click", function() {

    sliderButtons.forEach(function(carouselSlideRemove) {
      carouselSlideRemove.classList.remove("carousel__button-current");
    });
   sliderButton.classList.add("carousel__button-current");

   carouselSlides.forEach(function(carouselSlide) {
     carouselSlide.classList.remove("carousel__slide-current");
   });

    carouselSlides[i].classList.add("carousel__slide-current");
  });
});
