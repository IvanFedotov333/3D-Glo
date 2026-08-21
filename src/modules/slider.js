const slider = (options) => {
  const sliderBlock = document.querySelector(options.sliderBlock);
  if (!sliderBlock) return;
  const slides = document.querySelectorAll(options.slides);
  if (slides.length === 0) return;
  const dotsContainer = document.querySelector(options.dotsContainer);
  if (!dotsContainer) return;
  const activeSlideClass = options.activeSlideClass || "slide-active";
  const activeDotClass = options.activeDotClass || "dot-active";
  const dotClass = options.dotClass || "dot";

  dotsContainer.innerHTML = "";
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("li");
    dot.classList.add(dotClass);
    if (i === 0) dot.classList.add(activeDotClass);
    dotsContainer.appendChild(dot);
  }
  const dots = document.querySelectorAll(`.${dotClass}`);
  const timeInterval = 2000;
  let currentSlide = 0;
  let interval;

  const prevSlide = (elems, index, strClass) => {
    elems[index].classList.remove(strClass);
  };
  const nextSlide = (elems, index, strClass) => {
    elems[index].classList.add(strClass);
  };

  const autoSlide = () => {
    prevSlide(slides, currentSlide, activeSlideClass);
    prevSlide(dots, currentSlide, activeDotClass);
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    nextSlide(slides, currentSlide, activeSlideClass);
    nextSlide(dots, currentSlide, activeDotClass);
  };
  const startSlide = (timer = 1500) => {
    interval = setInterval(autoSlide, timer);
  };
  const stopSlide = () => {
    clearInterval(interval);
  };
  sliderBlock.addEventListener("click", (e) => {
    e.preventDefault();
    const dotSelector = `.${dotClass}`;
    const isDot = e.target.matches(dotSelector);
    const isArrow = e.target.matches(
      "#arrow-right, #arrow-left, .portfolio-btn",
    );
    if (!isDot && !isArrow) return;

    prevSlide(slides, currentSlide, activeSlideClass);
    prevSlide(dots, currentSlide, activeDotClass);

    if (e.target.matches("#arrow-right")) {
      currentSlide++;
    } else if (e.target.matches("#arrow-left")) {
      currentSlide--;
    } else if (isDot) {
      dots.forEach((dot, index) => {
        if (e.target === dot) {
          currentSlide = index;
        }
      });
    }
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }
    nextSlide(slides, currentSlide, activeSlideClass);
    nextSlide(dots, currentSlide, activeDotClass);
  });
  sliderBlock.addEventListener(
    "mouseenter",
    (e) => {
      if (e.target.matches(`.${dotClass}, .portfolio-btn`)) {
        stopSlide();
      }
    },
    true,
  );
  sliderBlock.addEventListener(
    "mouseleave",
    (e) => {
      if (e.target.matches(`.${dotClass}, .portfolio-btn`)) {
        startSlide(timeInterval);
      }
    },
    true,
  );
  startSlide(timeInterval);
};

export default slider;
