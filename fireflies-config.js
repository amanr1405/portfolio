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

  // Particle config
particlesJS("particles-js", {
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 1000
      }
    },
    color: {
      value: ["#a0e9ff", "#faff6d", "#ffb6ff", "#baffc9"]
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.8,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.2,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: true,
        speed: 3,
        size_min: 0.3,
        sync: false
      }
    },
    move: {
      enable: true,
      speed: 0.5,
      direction: "top",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false
    },
    line_linked: {
      enable: false
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false },
      onclick: { enable: false },
      resize: true
    }
  },
  retina_detect: true
});
