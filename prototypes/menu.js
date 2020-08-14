/*********Responsive Menu Animation*********/
const burger = document.getElementById("burger");
const menu = document.getElementById("main-menu");
const master = new TimelineMax({ paused: true });

master.add(burgerAnimation());
master.add(menuAnimation(), "-=1");

burger.addEventListener("click", clickBurger);
function clickBurger() {
  if (burger.classList.contains("active")) {
    master.reverse().timeScale(-3);
    burger.classList.toggle("active");
  } else {
    master.play();
    burger.classList.toggle("active");
  }
}

function menuAnimation() {
  const tl = new TimelineMax();
  tl.to(".main-menu", 1, {
    transformOrigin: "right",
    scaleX: 1,
    ease: Power3.easeInOut,
    opacity: 1,
  }).staggerTo(
    ".main-menu li",
    1.5,
    {
      opacity: 1,
      y: 0,
      ease: Power3.easeInOut,
    },
    0.25
  );
  return tl;
}

function burgerAnimation() {
  const tl1 = new TimelineMax();
  tl1
    .to(".l1", 0.2, {
      y: 3,
      transformOrigin: "center",
      ease: Bounce.inOut,
    })
    .to(
      ".l3",
      0.2,
      {
        y: -3,
        z: 1000,
        transformOrigin: "center",
        ease: Bounce.inOut,
      },
      "-=.2"
    )
    .to(
      ".l2",
      0.5,
      {
        opacity: 0,
        z: 1000,
      },
      "-=.5"
    )

    .to(".l1", 0.5, {
      rotate: 50,
      z: 1000,
    })
    .to(
      ".l3",
      0.5,
      {
        rotate: -50,
        z: 1000,
        ease: Bounce.easeOut,
      },
      "-=.2"
    );
  return tl1;
}
