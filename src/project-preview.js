import { gsap } from "gsap";

export function initProjectPreviews() {
  const rows = [...document.querySelectorAll("[data-project]")];
  const previews = [...document.querySelectorAll("[data-preview]")];
  const stage = document.querySelector(".preview-stage");
  const floating = document.querySelector(".hover-preview");
  const floatingImage = floating.querySelector("img");
  const pointer = window.matchMedia(
    "(hover: hover) and (pointer: fine) and (min-width: 801px)",
  );
  const desktop = window.matchMedia("(min-width: 801px)");
  let activeRow = rows[0];
  let hoveredRow = null;
  let paused = document.documentElement.classList.contains("motion-paused");
  const moveX = gsap.quickTo(floating, "x", {
    duration: 0.4,
    ease: "power3.out",
  });
  const moveY = gsap.quickTo(floating, "y", {
    duration: 0.4,
    ease: "power3.out",
  });

  function activate(row) {
    activeRow = row;
    rows.forEach((item) => item.classList.toggle("is-active", item === row));
    document.querySelectorAll("[data-preview-number]").forEach((number) => {
      number.textContent = row.dataset.projectNumber;
    });
    document.querySelector("[data-preview-category]").textContent =
      row.dataset.projectCategory;
    document.querySelector(".preview-progress span").style.width =
      `${((rows.indexOf(row) + 1) / rows.length) * 100}%`;
    previews.forEach((image) => {
      const selected = image.dataset.preview === row.dataset.project;
      image.classList.toggle("is-current", selected);
      image.setAttribute("aria-hidden", String(!selected));
      gsap.to(image, {
        autoAlpha: selected && !hoveredRow ? 1 : 0,
        scale: selected ? 1 : 0.96,
        duration: paused ? 0 : 0.45,
        overwrite: true,
        ease: "power2.out",
      });
    });
  }

  function hideFloating() {
    hoveredRow = null;
    gsap.to(floating, {
      autoAlpha: 0,
      scale: 0.94,
      duration: paused ? 0 : 0.2,
      overwrite: true,
    });
    activate(activeRow);
  }

  function moveFloating(event, instant = false) {
    const x = Math.min(
      window.innerWidth - 260,
      Math.max(45, event.clientX + 26),
    );
    const y = Math.min(
      window.innerHeight - 315,
      Math.max(20, event.clientY - 140),
    );
    if (instant) gsap.set(floating, { x, y });
    else {
      moveX(x);
      moveY(y);
    }
  }

  rows.forEach((row) => {
    row.addEventListener("pointerenter", (event) => {
      if (!pointer.matches || paused) return;
      hoveredRow = row;
      const source = row.querySelector(".project-mobile-image");
      floatingImage.src = source.currentSrc || source.src;
      moveFloating(event, true);
      activate(row);
      gsap.to(floating, {
        autoAlpha: 1,
        scale: 1,
        duration: 0.25,
        overwrite: true,
      });
    });
    row.addEventListener("pointermove", (event) => {
      if (hoveredRow === row && !paused) moveFloating(event);
    });
    row.addEventListener("pointerleave", hideFloating);
    row.addEventListener("focusin", () => activate(row));
  });

  // Choose the row closest to the viewport's reading position; scrolling remains native.
  let scheduled = false;
  function updateOnScroll() {
    if (scheduled || hoveredRow || !desktop.matches) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      const anchor = window.innerHeight * 0.46;
      let nearest = rows[0];
      let distance = Infinity;
      rows.forEach((row) => {
        const rect = row.getBoundingClientRect();
        const current = Math.abs(rect.top + rect.height / 2 - anchor);
        if (current < distance) {
          nearest = row;
          distance = current;
        }
      });
      if (nearest !== activeRow) activate(nearest);
    });
  }
  window.addEventListener("scroll", updateOnScroll, { passive: true });
  window.addEventListener("blur", hideFloating);
  pointer.addEventListener("change", () => {
    hideFloating();
    updateOnScroll();
  });
  document.addEventListener("portfolio:motion", (event) => {
    paused = event.detail.paused;
    hideFloating();
  });
  stage.addEventListener("pointerenter", hideFloating);
  activate(activeRow);
}
