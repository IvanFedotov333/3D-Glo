const modal = () => {
  const popupBtn = document.querySelectorAll(".popup-btn");
  const popupMenu = document.querySelector(".popup");

  const isMobile = () => window.innerWidth < 768;

  const animatedModal = () => {
    popupMenu.style.display = "block";
    popupMenu.style.opacity = "0";
    if (isMobile()) {
      popupMenu.style.opacity = "1";
      return;
    }
    const animationStart = performance.now();
    const duration = 200;

    function animate(currentTime) {
      const elapsedTime = currentTime - animationStart;
      const progress = Math.min(elapsedTime / duration, 1);
      popupMenu.style.opacity = progress;

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }
    requestAnimationFrame(animate);
  };

  popupBtn.forEach((btn) => {
    btn.addEventListener("click", animatedModal);
  });

  popupMenu.addEventListener("click", (e) => {
    if (
      !e.target.closest(".popup-content") ||
      e.target.classList.contains("popup-close")
    ) {
      popupMenu.style.display = "none";
    }
  });
};

export default modal;
