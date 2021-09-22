const toggleMenu = function () {
  const menuBtn = document.querySelector(".navigation__button");
  menuBtn.addEventListener("click", function () {
    const nav = document.querySelector(".navigation__nav");
    nav.classList.toggle("navigation__repsonsive-nav");
  });
};

const removeHoverEffect = function () {
  function hasTouch() {
    return (
      "ontouchstart" in document.documentElement ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  }
  if (hasTouch()) {
    try {
      for (let si in document.styleSheets) {
        let styleSheet = document.styleSheets[si];
        if (!styleSheet.rules) continue;
        for (let ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
          if (!styleSheet.rules[ri].selectorText) continue;
          if (styleSheet.rules[ri].selectorText.match(":hover")) {
            styleSheet.deleteRule(ri);
          }
        }
      }
    } catch (ex) {}
  }
};

const init = function () {
  toggleMenu();
  removeHoverEffect();
};

init();
