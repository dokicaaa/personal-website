import { gsap } from "gsap";

export function initTypography() {
  const pointer = window.matchMedia(
    "(hover: hover) and (pointer: fine) and (min-width: 801px)",
  );
  const groups = [...document.querySelectorAll("[data-reactive-type]")].map(
    (element) => {
      const text = element.textContent.trim();
      const word = document.createElement("span");
      word.className = "type-word";
      word.setAttribute("aria-hidden", "true");
      const measure = document.createElement("span");
      measure.className = "type-measure";
      measure.textContent = text;
      word.append(measure);
      const letters = [...text].map((character) => {
        const cell = document.createElement("span");
        cell.className = "type-cell";
        const glyph = document.createElement("span");
        glyph.className = "type-glyph";
        glyph.textContent = character;
        cell.append(glyph);
        word.append(cell);
        return {
          cell,
          glyph,
          weight: gsap.quickTo(glyph, "fontWeight", {
            duration: 0.35,
            ease: "power2.out",
          }),
        };
      });
      element.replaceChildren(word);

      function measureLetters() {
        // The original word reserves its exact width, including kerning. Weight
        // changes happen inside those slots, so neither line can jump or reflow.
        const bounds = measure.getBoundingClientRect();
        const range = document.createRange();
        letters.forEach(({ cell }, index) => {
          range.setStart(measure.firstChild, index);
          range.setEnd(measure.firstChild, index + 1);
          const rect = range.getBoundingClientRect();
          cell.style.left = `${((rect.left - bounds.left) / bounds.width) * 100}%`;
          cell.style.width = `${(rect.width / bounds.width) * 100}%`;
        });
      }

      let frame = 0;
      let active = false;
      function reset(instant = false) {
        cancelAnimationFrame(frame);
        frame = 0;
        if (!active && !letters.some(({ weight }) => weight.tween.isActive()))
          return;
        active = false;
        instant ||=
          !pointer.matches ||
          document.documentElement.classList.contains("motion-paused");
        letters.forEach(({ glyph, weight }) => {
          if (instant) {
            weight(900, 900);
            weight.tween.pause();
            gsap.set(glyph, { clearProps: "fontWeight" });
          } else weight(900);
        });
      }
      element.addEventListener("pointermove", (event) => {
        if (
          !pointer.matches ||
          document.documentElement.classList.contains("motion-paused")
        )
          return;
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
          frame = 0;
          active = true;
          const bounds = letters.map(({ cell }) =>
            cell.getBoundingClientRect(),
          );
          letters.forEach(({ weight }, index) => {
            const rect = bounds[index];
            const distance = Math.hypot(
              event.clientX - rect.left - rect.width / 2,
              (event.clientY - rect.top - rect.height / 2) * 0.6,
            );
            const influence = Math.max(
              0,
              1 - distance / Math.min(240, rect.height * 1.15),
            );
            weight(900 - influence * 570);
          });
        });
      });
      element.addEventListener("pointerleave", () => reset());
      measureLetters();
      return { measureLetters, reset };
    },
  );
  const measureAll = () => groups.forEach((group) => group.measureLetters());
  const resetAll = () => groups.forEach((group) => group.reset(true));
  document.fonts.ready.then(measureAll);
  window.addEventListener("resize", measureAll);
  window.addEventListener("scroll", resetAll, { passive: true });
  window.addEventListener("blur", resetAll);
  pointer.addEventListener("change", resetAll);
  document.addEventListener("portfolio:motion", resetAll);
}
