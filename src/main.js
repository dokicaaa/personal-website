import "@fontsource-variable/inter-tight";
import "@fontsource-variable/inter-tight/wght-italic.css";
import "./styles.css";
import { initNavigation } from "./navigation.js";
import { initMotion } from "./motion.js";
import { initProjectPreviews } from "./project-preview.js";
import { initTypography } from "./typography.js";
import { initCursor } from "./cursor.js";
import { initRoboticsGallery } from "./robotics-gallery.js";

document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

const localTime = document.querySelector("[data-local-time]");
function updateLocalTime() {
  localTime.textContent = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Skopje",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date());
  localTime.dateTime = new Date().toISOString();
}
updateLocalTime();
setInterval(updateLocalTime, 60_000);

initNavigation();
initTypography();
initMotion();
initProjectPreviews();
initCursor();
initRoboticsGallery();
