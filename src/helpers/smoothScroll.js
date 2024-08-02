export const smoothScroll = (target) => {
  document.querySelector(target).scrollIntoView({
    behavior: "smooth",
  });
};
