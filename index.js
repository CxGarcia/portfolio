/********* Progress Animation*********/

window.addEventListener("scroll", onScroll, true);
function onScroll() {
  let yOffset = 0;
  yOffset = window.pageYOffset;
  if (yOffset >= 50) progressAnimation();
}

function progressAnimation() {
  let delay = 1;

  TweenMax.staggerTo(
    ".bar",
    2,
    {
      scaleX: 1,
      opacity: 1,
      ease: Sine.easeOut,
    },
    delay
  );

  TweenMax.staggerTo(
    ".plabel",
    2,
    {
      ease: Sine.easeOut,
      opacity: 1,
    },
    delay
  );
  window.removeEventListener("scroll", onScroll, true);
}

/*********Responsive Menu Animation*********/
const burger = document.getElementById("burger");
const menu = document.getElementById("main-menu");
const master = new TimelineMax({ paused: true });

master.add(burgerAnimation());
master.add(menuAnimation(), "-=1");

burger.addEventListener("click", clickBurger);
function clickBurger() {
  if (burger.classList.contains("active")) {
    master.reverse().timeScale(-2);
    burger.classList.toggle("active");
  } else {
    master.play().timeScale(1);
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
    .to(".l2", 0.2, {
      scaleX: 0,
    })
    .to(
      ".l1",
      0.2,
      {
        y: 3,
        transformOrigin: "center",
        ease: Bounce.inOut,
      },
      "center"
    )
    .to(
      ".l3",
      0.2,
      {
        y: -3,
        transformOrigin: "center",
        ease: Bounce.inOut,
      },
      "center"
    )
    .to(".l2", 0.5, {
      opacity: 0,
    })

    .to(".l1", 0.5, {
      rotate: 45,
    })
    .to(
      ".l3",
      0.5,
      {
        rotate: -45,
        ease: Bounce.easeOut,
      },
      "-=.2"
    );
  return tl1;
}
