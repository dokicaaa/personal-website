export function initNavigation() {
  const dialog = document.querySelector("#mobile-menu");
  const toggle = document.querySelector(".menu-toggle");
  const closeButton = document.querySelector(".menu-close");
  const desktop = window.matchMedia("(min-width: 801px)");

  toggle.hidden = false;
  document.documentElement.classList.remove("no-js-nav");

  function closeMenu() {
    if (dialog.open) dialog.close();
  }

  toggle.addEventListener("click", () => {
    dialog.showModal();
    document.body.classList.add("menu-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close menu");
  });
  closeButton.addEventListener("click", closeMenu);
  dialog.addEventListener("close", () => {
    document.body.classList.remove("menu-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
  });
  desktop.addEventListener("change", (event) => {
    if (event.matches) closeMenu();
  });

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    const target = document.getElementById(link.hash.slice(1));
    if (!target) return;

    link.addEventListener("click", (event) => {
      // Preserve native modified-click behavior.
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
        return;
      event.preventDefault();
      closeMenu();
      const reduceMotion =
        document.documentElement.classList.contains("motion-paused");
      target.scrollIntoView({ behavior: reduceMotion ? "instant" : "smooth" });
      if (window.location.hash !== link.hash)
        history.pushState(null, "", link.hash);
      if (!target.hasAttribute("tabindex")) {
        target.setAttribute("tabindex", "-1");
        target.addEventListener(
          "blur",
          () => target.removeAttribute("tabindex"),
          { once: true },
        );
      }
      target.focus({ preventScroll: true });
    });
  });

  const navLinks = [...document.querySelectorAll(".desktop-nav a")];
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          if (link.hash === `#${entry.target.id}`)
            link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      });
    },
    { rootMargin: "-15% 0px -65% 0px" },
  );

  document
    .querySelectorAll("main > section[id]")
    .forEach((section) => sectionObserver.observe(section));
}
