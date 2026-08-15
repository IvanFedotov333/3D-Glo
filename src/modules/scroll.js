const smoothScroll = (targetElement) => {
  const currentPosition = window.scrollY;
  const targetPosition =
    currentPosition + targetElement.getBoundingClientRect().top;
  const distance = targetPosition - currentPosition;
  const duration = 300;
  let startTime = null;

  const scrollAnimation = (currentTime) => {
    if (startTime === null) startTime = currentTime;

    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, currentPosition + distance * progress);
    if (progress < 1) requestAnimationFrame(scrollAnimation);
  };
  requestAnimationFrame(scrollAnimation);
};

export default smoothScroll;
