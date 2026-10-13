import { gsap } from "gsap";

export function initCursor() {
  const cursor = document.querySelector(".pointer-halo");
  const label = cursor.querySelector("[data-cursor-label]");
  const pointer = window.matchMedia(
    "(hover: hover) and (pointer: fine) and (min-width: 801px)",
  );
  let visible = false;
  const x = gsap.quickTo(cursor, "x", { duration: 0.18, ease: "power3.out" });
  const y = gsap.quickTo(cursor, "y", { duration: 0.18, ease: "power3.out" });

  function hide() {
    visible = false;
    x.tween.pause();
    y.tween.pause();
    cursor.classList.remove("is-visible");
  }

  document.addEventListener(
    "pointermove",
    (event) => {
      if (
        !pointer.matches ||
        event.pointerType !== "mouse" ||
        document.documentElement.classList.contains("motion-paused")
      )
        return;
      const link = event.target.closest("a, button");
      const project = link?.matches(
        ".project-link, .web-project, .hardware-project",
      );
      const email = link?.matches(".contact-headline");
      label.textContent = project ? "View" : email ? "Email" : "";
      cursor.classList.toggle("is-action", Boolean(project || email));
      cursor.classList.toggle("is-link", Boolean(link));
      if (!visible) {
        gsap.set(cursor, { x: event.clientX, y: event.clientY });
        cursor.classList.add("is-visible");
        visible = true;
      } else {
        x(event.clientX);
        y(event.clientY);
      }
    },
    { passive: true },
  );
  document.documentElement.addEventListener("pointerleave", hide);
  document.addEventListener("keydown", hide);
  document.addEventListener("visibilitychange", hide);
  document.addEventListener("portfolio:motion", hide);
  window.addEventListener("scroll", hide, { passive: true });
  window.addEventListener("blur", hide);
  pointer.addEventListener("change", hide);
}
