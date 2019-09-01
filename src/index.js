import "./style.scss";
import randomWords from "random-words";

// debug mode
if (window.location.href.includes("debug=1")) {
  document.querySelectorAll(".randomText").forEach(node => {
    node.innerHTML = randomWords({ min: 3, max: 100 }).reduce(
      (a, b) => `${a} ${b}`
    );
  });
}

window.addEventListener("click", e => {
  if (e.target.localName === "a") {
    console.log("target: ", e.target);
  }
  // modal
  if (
    e.target.localName === "img" &&
    e.target.classList.contains("sectionImage")
  ) {
    document.querySelector("#imgModal .modal-body").src = e.target.src;
    document.querySelector("#imgModal .modal-body").alt = e.target.alt;
    document.querySelector("#imgModal").style.display = "block";
  } else if (e.target.getAttribute("data-dismiss")) {
    document.querySelector(
      `#${e.target.getAttribute("data-dismiss")}`
    ).style.display = "none";
  }
});

// open modal when click image

// const modal = document.querySelector("#imageModal");
// const modalImage = document.querySelector("#imageModal img");
// document.querySelectorAll("#section1 .imageBox__image").forEach(e => {
//   e.addEventListener("click", e => {
//     modalImage.src = e.target.src;
//     modalImage.alt = e.target.alt;
//     modal.classList.add("modal--flex");
//   });
// });

// close modal when click X
// document.querySelector(".modal__close").addEventListener("click", () => {
//   modal.classList.remove("modal--flex");
// });

// close modal when click out of modal area
// window.onclick = e => {
//   if (e.target == modal) {
//     modal.classList.remove("modal--flex");
//   }
// };
