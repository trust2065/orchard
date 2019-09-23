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
// window.onclick = e => {
//   if (e.target == modal) {
//     modal.classList.remove("modal--flex");
//   }
// };
