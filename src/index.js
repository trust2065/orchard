const style = require("./style.scss");
new fullpage("#fullpage", {
  responsiveWidth: 960,
  onLeave: function(currentPage, nextPage, direction) {
    const index = currentPage.index;
    const nextIndex = nextPage.index;

    const updateAnimation = (section, action) => {
      const images = document
        .querySelectorAll(`#${section} .imageBox`)
        .forEach(function(e) {
          if (action === "add") {
            e.classList.add("imageBox--spin");
          } else if (action === "remove") {
            e.classList.remove("imageBox--spin");
          }
        });
      const textBox = document
        .querySelectorAll(`#${section} .textBox`)
        .forEach(function(e) {
          if (action === "add") {
            e.classList.add("textBox--fade");
          } else if (action === "remove") {
            e.classList.remove("textBox--fade");
          }
        });
    };

    if (direction === "down") {
      updateAnimation(`section${index}`, "remove");
      updateAnimation(`section${index + 1}`, "add");
    } else if (direction === "up") {
      updateAnimation(`section${index - 1}`, "add");
      updateAnimation(`section${index}`, "remove");
    }
  }
});
