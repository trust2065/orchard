// require("./style.scss");

new fullpage("#fullpage", {
  responsiveWidth: 960,
  onLeave: function(currentPage, nextPage, direction) {
    const index = currentPage.index;
    const nextIndex = nextPage.index;

    const updateAnimation = (section, action) => {
      document.querySelectorAll(`#${section} .imageBox`).forEach(function(e) {
        if (action === "add") {
          e.classList.add("imageBox--spin");
        } else if (action === "remove") {
          e.classList.remove("imageBox--spin");
        }
      });
      document.querySelectorAll(`#${section} .textBox`).forEach(function(e) {
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

(function() {
  // console log when clicked
  document.querySelectorAll(".imageBox").forEach(e => {
    e.addEventListener("click", e => {
      console.log(`image clicked, which is ${e.target.alt}`);
    });
  });
  document.querySelectorAll(".textBox").forEach(e => {
    e.addEventListener("click", e => {
      console.log(`text clicked, which is ${e.target.innerHTML}`);
    });
  });

  // open modal when click image
  const modal = document.querySelector("#imageModal");
  const modalImage = document.querySelector("#imageModal img");
  document.querySelectorAll("#section1 .imageBox__image").forEach(e => {
    e.addEventListener("click", e => {
      modalImage.src = e.target.src;
      modalImage.alt = e.target.alt;
      modal.classList.add("modal--flex");
    });
  });

  // close modal when click X
  document.querySelector(".modal__close").addEventListener("click", () => {
    modal.classList.remove("modal--flex");
  });

  // close modal when click out of modal area
  window.onclick = e => {
    if (e.target == modal) {
      modal.classList.remove("modal--flex");
    }
  };
})();
