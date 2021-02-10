// ===============================
// THIS FILE WAS NOT THE ORIGINAL IP OF NIC DURISH. 
// IT HAS BEEN MODIFIED
// ORIGINAL AUTHOR    : Vincent Garreau
// URL                : https://github.com/VincentGarreau/particles.js/
// ===============================

particlesJS("particles-js", {
  particles: {
    number: { value: 150, density: { enable: true, value_area: 800 } },
    // color: { value: ["#f1c40f", "#3498db", "#9b59b6", "#e74c3c", "#2ecc71"] },
    color: { value: ["#777777"] },
    shape: {
      type: ["circle"],
      stroke: { width: 0, color: "var(--color-splash-txt" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: true,
        speed: 0.05,
        opacity_min: 0.015,
        sync: false,
      },
    },
    size: {
      value: 15,
      random: true,
      anim: { enable: true, speed: 3, size_min: 2, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 200,
      color: "#777777",
      opacity: 0.15,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.7,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "bounce",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 2367.442924896818,
        rotateY: 5287.289198936227,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 200,
        line_linked: {
          opacity: 0.7,
        },
      },
      bubble: {
        distance: 200,
        size: 30,
        duration: 0.4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
    mouse: {},
  },
  retina_detect: true,
});

particlesJS("particles-js2", {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 1000,
      },
    },
    color: {
      value: "#777777",
    },
    shape: {
      type: "polygon",
      stroke: {
        width: 0,
        color: "#777777",
      },
      polygon: {
        nb_sides: 6,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.02,
      random: true,
      anim: {
        enable: false,
        speed: 0.01,
        opacity_min: 0.01,
        sync: true,
      },
    },
    size: {
      value: 100,
      random: false,
      anim: {
        enable: true,
        speed: 2,
        size_min: 55,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 1500,
      color: "#ffffff",
      opacity: 0.4,
      width: 2,
    },
    move: {
      enable: true,
      speed: 0.8,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 1600,
        rotateY: 200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "bubble",
      },
      onclick: {
        enable: false,
        mode: "bubble",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 0.5,
        },
      },
      bubble: {
        distance: 36.54347455356053,
        size: 33,
        duration: 0.3,
        opacity: 3,
        speed: 3,
      },
      repulse: {
        distance: 56.84540486109416,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});
