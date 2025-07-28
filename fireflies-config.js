// fireflies-config.js

document.addEventListener("DOMContentLoaded", function () {
  const particleElement = document.getElementById("particles-js");

  // Add background grid lines
  particleElement.style.position = "fixed";
  particleElement.style.top = "0";
  particleElement.style.left = "0";
  particleElement.style.width = "100%";
  particleElement.style.height = "100%";
  particleElement.style.zIndex = "-1";
  particleElement.style.backgroundImage =
    "linear-gradient(to right, rgba(79, 79, 79, 0.18) 1px, transparent 1px), " +
    "linear-gradient(to bottom, rgba(79, 79, 79, 0.18) 1px, transparent 1px)";
  particleElement.style.backgroundSize = "14px 24px";

  // Particle config (no connecting lines)
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 60,
        density: { enable: true, value_area: 800 },
      },
      color: { value: ["#e91e63", "#00bcd4", "#9c27b0", "#8bc34a", "#ffeb3b"] },
      shape: { type: "circle" },
      opacity: {
        value: 0.9,
        random: true,
        anim: { enable: true, speed: 1, opacity_min: 0.2, sync: false },
      },
      size: {
        value: 4,
        random: true,
        anim: { enable: true, speed: 2, size_min: 0.5, sync: false },
      },
      move: {
        enable: true,
        speed: 1.2,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
      // 🔻 Disable line linking completely
      line_linked: {
        enable: false
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "push" },
        resize: true,
      },
      modes: {
        grab: { distance: 140 },
        push: { particles_nb: 3 },
      },
    },
    retina_detect: true,
  });
});
