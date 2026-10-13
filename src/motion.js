import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const preferenceKey = "portfolio-motion-paused";

export function initMotion() {
  const root = document.documentElement;
  const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
  const toggle = document.querySelector(".motion-toggle");
  const label = toggle.querySelector("[data-motion-label]");
  let userPaused = false;
  let context;
  let hasPlayedIntro = false;

  try {
    userPaused = localStorage.getItem(preferenceKey) === "true";
  } catch {
    /* Storage may be unavailable. */
  }

  // Keep the paragraph's emphasis and spacing, while wrapping words for the reveal.
  const statement = document.querySelector("[data-word-reveal]");
  const walker = document.createTreeWalker(statement, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);
  textNodes.forEach((node) => {
    const fragment = document.createDocumentFragment();
    node.textContent.split(/(\s+)/).forEach((part) => {
      if (!part) return;
      if (/^\s+$/.test(part)) fragment.append(document.createTextNode(part));
      else {
        const word = document.createElement("span");
        word.className = "reveal-word";
        word.textContent = part;
        fragment.append(word);
      }
    });
    node.replaceWith(fragment);
  });

  function applyMotion() {
    context?.revert();
    const paused = preference.matches || userPaused;
    root.classList.toggle("motion-paused", paused);
    toggle.setAttribute("aria-pressed", String(paused));
    label.textContent = paused ? "Enable motion" : "Pause motion";
    toggle.title = preference.matches
      ? "Reduced motion is enabled in your system preferences"
      : "";
    toggle.disabled = preference.matches;
    document.dispatchEvent(
      new CustomEvent("portfolio:motion", { detail: { paused } }),
    );

    if (paused) return;

    context = gsap.context(() => {
      if (!hasPlayedIntro && window.scrollY < 100) {
        gsap.utils.toArray(".title-line").forEach((line, index) => {
          gsap.from(line.querySelectorAll(".type-glyph"), {
            yPercent: 125,
            rotation: 7,
            duration: 1.2,
            stagger: 0.045,
            ease: "power4.out",
            delay: 0.12 + index * 0.22,
          });
        });
        gsap.from(".hero-meta, .hero-bottom, .hero-index", {
          autoAlpha: 0,
          y: 14,
          duration: 0.8,
          stagger: 0.1,
          delay: 0.6,
          ease: "power2.out",
        });
      }
      hasPlayedIntro = true;

      const contact = document.querySelector(".contact-headline");
      if (contact.getBoundingClientRect().top >= window.innerHeight * 0.92) {
        gsap.from(contact.querySelectorAll(".type-glyph"), {
          yPercent: 120,
          rotation: 5,
          duration: 1.1,
          stagger: 0.035,
          ease: "power4.out",
          scrollTrigger: { trigger: contact, start: "top 92%", once: true },
        });
      }

      gsap.utils.toArray("[data-reveal]").forEach((element) => {
        // Elements already on screen must remain visible when motion is resumed.
        if (element.getBoundingClientRect().top < window.innerHeight * 0.9)
          return;
        gsap.from(element, {
          autoAlpha: 0,
          y: 35,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 90%", once: true },
        });
      });

      const toolkit = document.querySelector(".toolbox ul");
      if (toolkit.getBoundingClientRect().top >= window.innerHeight * 0.9) {
        gsap.from(toolkit.children, {
          autoAlpha: 0,
          x: 24,
          duration: 0.7,
          stagger: 0.09,
          ease: "power3.out",
          scrollTrigger: { trigger: toolkit, start: "top 90%", once: true },
        });
      }

      gsap.fromTo(
        ".reveal-word",
        { color: "#454545" },
        {
          color: "#ededed",
          stagger: 0.08,
          ease: "none",
          scrollTrigger: {
            trigger: statement,
            start: "top 82%",
            end: "bottom 45%",
            scrub: 0.7,
          },
        },
      );
    });
    ScrollTrigger.refresh();
  }

  toggle.hidden = false;
  toggle.addEventListener("click", () => {
    userPaused = !root.classList.contains("motion-paused");
    try {
      localStorage.setItem(preferenceKey, String(userPaused));
    } catch {
      /* The control still works without persistence. */
    }
    applyMotion();
  });
  preference.addEventListener("change", applyMotion);
  window
    .matchMedia("(min-width: 801px)")
    .addEventListener("change", applyMotion);
  applyMotion();
  // Refresh measurements after locally bundled fonts and late-loading imagery settle.
  document.fonts.ready.then(() => ScrollTrigger.refresh());
  window.addEventListener("load", () => ScrollTrigger.refresh(), {
    once: true,
  });
}
