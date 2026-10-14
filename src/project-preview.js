import { gsap } from "gsap";

export function initProjectPreviews() {
  const rows = [...document.querySelectorAll("[data-project]")];
  document.querySelectorAll("[data-project-count]").forEach((count) => {
    count.textContent = String(rows.length).padStart(2, "0");
  });
  const previews = [...document.querySelectorAll("[data-preview]")];
  const layout = document.querySelector(".work-layout");
  const panel = document.querySelector(".project-preview");
  const header = document.querySelector(".floating-header");
  const stage = document.querySelector(".preview-stage");
  const floating = document.querySelector(".hover-preview");
  const floatingImage = floating.querySelector("img");
  const pointer = window.matchMedia(
    "(hover: hover) and (pointer: fine) and (min-width: 801px)",
  );
  const desktop = window.matchMedia("(min-width: 801px)");
  const mobilePreview = window.matchMedia(
    "(max-width: 800px) and (min-height: 560px)",
  );
  let activeRow = rows[0];
  let hoveredRow = null;
  let paused = document.documentElement.classList.contains("motion-paused");
  let lastPointer = null;
  let settleTimer;
  const tilt = gsap.quickTo(floatingImage, "rotation", {
    duration: 0.45,
    ease: "power3.out",
  });
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
    gsap.to(".preview-watermark", {
      autoAlpha: hoveredRow ? 1 : 0,
      scale: hoveredRow ? 1 : 0.9,
      duration: paused ? 0 : 0.35,
      overwrite: "auto",
    });
    previews.forEach((image) => {
      const selected = image.dataset.preview === row.dataset.project;
      image.classList.toggle("is-current", selected);
      image.setAttribute("aria-hidden", String(!selected));
      gsap.to(image, {
        autoAlpha: selected && !hoveredRow ? 1 : 0,
        scale: selected ? 1 : 0.96,
        duration: paused ? 0 : 0.45,
        overwrite: "auto",
        ease: "power2.out",
      });
    });
  }

  function hideFloating() {
    hoveredRow = null;
    lastPointer = null;
    clearTimeout(settleTimer);
    moveX.tween.pause();
    moveY.tween.pause();
    // Keep ownership of rotation in this reusable tween. Overwriting it with
    // another tween would remove the property that quickTo needs to reset.
    if (paused) {
      tilt(0, 0);
      tilt.tween.pause();
    } else tilt(0);
    gsap.to(floating, {
      autoAlpha: 0,
      scale: 0.94,
      duration: paused ? 0 : 0.2,
      overwrite: "auto",
    });
    activate(activeRow);
  }

  function moveFloating(event, instant = false) {
    const x = gsap.utils.clamp(
      30,
      window.innerWidth - floating.offsetWidth - 30,
      event.clientX + 38,
    );
    const y = gsap.utils.clamp(
      30,
      Math.max(30, window.innerHeight - floating.offsetHeight - 30),
      event.clientY - floating.offsetHeight / 2,
    );
    if (instant) {
      moveX(x, x);
      moveY(y, y);
      tilt(0, 0);
    } else {
      moveX(x);
      moveY(y);
      if (lastPointer) {
        const speed =
          (event.clientX - lastPointer.x) /
          Math.max(16, event.timeStamp - lastPointer.time);
        tilt(gsap.utils.clamp(-8, 8, speed * 5));
        clearTimeout(settleTimer);
        settleTimer = setTimeout(() => tilt(0), 100);
      }
    }
    lastPointer = { x: event.clientX, y: event.clientY, time: event.timeStamp };
  }

  function showFloating(row, event) {
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
      overwrite: "auto",
    });
  }

  rows.forEach((row) => {
    row.addEventListener("pointerenter", (event) => {
      showFloating(row, event);
    });
    row.addEventListener("pointermove", (event) => {
      if (!pointer.matches || paused) return;
      if (hoveredRow === row) moveFloating(event);
      else showFloating(row, event);
    });
    row.addEventListener("pointerleave", hideFloating);
    row.addEventListener("focusin", () => activate(row));
  });

  // Keep the mobile preview below the portrait pill, including when text zoom
  // or a breakpoint changes its height. The panel's own height defines the
  // unobscured reading area instead of a hard-coded scroll threshold.
  let previewTop = 88;
  function measureMobilePreview() {
    if (!mobilePreview.matches) return;
    previewTop = Math.ceil(header.getBoundingClientRect().bottom + 12);
    layout.style.setProperty("--mobile-preview-top", `${previewTop}px`);
    layout.style.setProperty(
      "--mobile-preview-height",
      `${panel.offsetHeight}px`,
    );
  }

  function updateLayout() {
    layout.classList.toggle("has-mobile-preview", mobilePreview.matches);
    measureMobilePreview();
    hideFloating();
    updateOnScroll();
  }

  // Choose the row closest to the unobscured reading position. All scrolling
  // stays native, including reverse scrolling and fast swipes through the list.
  let scheduled = false;
  function updateOnScroll() {
    if (scheduled || (!desktop.matches && !mobilePreview.matches)) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      // Keep a hovered image only while its row remains beneath the pointer.
      // This also prevents a fixed preview from lingering after a wheel scroll.
      if (hoveredRow) {
        const underPointer = document.elementFromPoint(
          lastPointer.x,
          lastPointer.y,
        );
        if (underPointer?.closest("[data-project]") === hoveredRow) return;
        hideFloating();
      }
      const readingTop = mobilePreview.matches
        ? previewTop + panel.offsetHeight
        : 120;
      const focusedRow = document.activeElement.closest?.("[data-project]");
      if (focusedRow && document.activeElement.matches(":focus-visible")) {
        const rect = focusedRow.getBoundingClientRect();
        if (rect.bottom > readingTop && rect.top < window.innerHeight) {
          if (focusedRow !== activeRow) activate(focusedRow);
          return;
        }
      }
      const anchor = mobilePreview.matches
        ? readingTop + Math.max(0, window.innerHeight - readingTop) * 0.38
        : window.innerHeight * 0.46;
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
  window.addEventListener("resize", updateLayout);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Tab" || event.key === "Escape") hideFloating();
  });
  pointer.addEventListener("change", () => {
    hideFloating();
    updateOnScroll();
  });
  mobilePreview.addEventListener("change", updateLayout);
  document.addEventListener("portfolio:motion", (event) => {
    paused = event.detail.paused;
    hideFloating();
  });
  stage.addEventListener("pointerenter", hideFloating);
  const resizeObserver = new ResizeObserver(() => {
    measureMobilePreview();
    updateOnScroll();
  });
  resizeObserver.observe(header);
  resizeObserver.observe(panel);
  document.fonts.ready.then(updateLayout);
  window.addEventListener("load", updateOnScroll, { once: true });
  updateLayout();
}
