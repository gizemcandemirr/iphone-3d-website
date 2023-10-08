import gsap from "gsap";

export const scrollAnimation = (
  position,
  target,
  isMobileorTablet,
  onUpdate
) => {
  const tl = gsap.timeline();

  tl.to(position, {
    x: !isMobileorTablet ? 3.38 : -7.0,
    y: !isMobileorTablet ? -10.74 : 12.2,
    z: !isMobileorTablet ? -5.93 : -6.0,
    scrollTrigger: {
      trigger: ".sound-section",
      start: "top bottom",
      end: "top top",
      scrub: 2,
      immediateRender: false,
    },
    onUpdate,
  })
    .to(target, {
      x: !isMobileorTablet ? 1.52 : 0.7,
      y: !isMobileorTablet ? 0.77 : 1.9,
      z: !isMobileorTablet ? -1.08 : 0.7,
      scrollTrigger: {
        trigger: ".sound-section",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
    })
    .to(".jumbtron-section", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".sound-section",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
    })
    .to(".sound-section-content", {
      opacity: 1,
      scrollTrigger: {
        trigger: ".sound-section",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
    })
    .to(position, {
      x: !isMobileorTablet ? 1.56 : 9.5,
      y: !isMobileorTablet ? 5.0 : 10.95,
      z: !isMobileorTablet ? 0.01 : 0.09,
      scrollTrigger: {
        trigger: ".display-section",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
      onUpdate,
    })
    .to(target, {
      x: !isMobileorTablet ? -0.55 : -1.62,
      y: !isMobileorTablet ? 0.32 : 0.02,
      z: !isMobileorTablet ? 0.0 : -0.06,
      scrollTrigger: {
        trigger: ".display-section",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
    })
    .to(".display-section", {
      opacity: 1,
      scrollTrigger: {
        trigger: ".display-section",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
    });
};
