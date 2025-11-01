function autoInfiniteSlider(sliderId, speed = 0.6) {
  const slider = document.getElementById(sliderId);
  const slides = slider.querySelector(".slides");
  let isHovered = false;
  let scrollAmount = 0;

  // Duplicate slides for infinite loop
  slides.innerHTML += slides.innerHTML;

  function animate() {
    if (!isHovered) {
      scrollAmount += speed;
      if (scrollAmount >= slides.scrollWidth / 2) {
        scrollAmount = 0; // reset to start for infinite loop
      }
      slides.scrollLeft = scrollAmount;
    }
    requestAnimationFrame(animate);
  }

  // Pause when user hovers
  slides.addEventListener("mouseenter", () => (isHovered = true));
  slides.addEventListener("mouseleave", () => (isHovered = false));

  // Allow manual scroll
  slides.addEventListener("scroll", () => {
    scrollAmount = slides.scrollLeft;
  });

  animate();
}

// Apply on both sliders
autoInfiniteSlider("leadersSlider", 0.5);   // For professors
autoInfiniteSlider("recruitersSlider", 0.7); // For recruiters
