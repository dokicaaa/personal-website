export function initRoboticsGallery() {
  const links = [...document.querySelectorAll(".robotics-photo-link")];
  const dialog = document.querySelector(".robotics-lightbox");
  if (!links.length || !dialog) return;

  const image = dialog.querySelector("img");
  const caption = dialog.querySelector(".robotics-lightbox-caption");
  let current = 0;
  let opener;
  let touchStart;

  function show(index) {
    current = (index + links.length) % links.length;
    const link = links[current];
    const thumbnail = link.querySelector("img");
    // Use src (the full WebP), rather than currentSrc (the responsive thumbnail).
    image.src = thumbnail.src;
    image.alt = thumbnail.alt;
    caption.textContent = `${String(current + 1).padStart(2, "0")} / ${String(links.length).padStart(2, "0")} — ${link.parentElement.querySelector("figcaption > span:last-child").textContent}`;
  }

  links.forEach((link, index) => {
    link.addEventListener("click", () => {
      opener = link;
      show(index);
      dialog.showModal();
      document.body.classList.add("gallery-open");
    });
  });
  dialog
    .querySelector(".robotics-lightbox-close")
    .addEventListener("click", () => dialog.close());
  dialog
    .querySelector("[data-gallery-previous]")
    .addEventListener("click", () => show(current - 1));
  dialog
    .querySelector("[data-gallery-next]")
    .addEventListener("click", () => show(current + 1));
  dialog.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    show(current + (event.key === "ArrowRight" ? 1 : -1));
  });
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener("close", () => {
    document.body.classList.remove("gallery-open");
    opener?.focus({ preventScroll: true });
    touchStart = null;
  });
  image.addEventListener(
    "touchstart",
    (event) => {
      touchStart = event.touches.length === 1 ? event.touches[0] : null;
    },
    { passive: true },
  );
  image.addEventListener(
    "touchend",
    (event) => {
      if (!touchStart) return;
      const end = event.changedTouches[0];
      const dx = end.clientX - touchStart.clientX;
      const dy = end.clientY - touchStart.clientY;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy))
        show(current + (dx < 0 ? 1 : -1));
      touchStart = null;
    },
    { passive: true },
  );
  image.addEventListener("touchcancel", () => {
    touchStart = null;
  });
}
