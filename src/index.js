import "./style.scss";
import "bootstrap";
import $ from "jquery";
import randomWords from "random-words";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";

// fontawesome icon
library.add(faTimes);
dom.watch();

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
    document.querySelector("#imgModal .modal-body img").src = e.target.src;
    document.querySelector("#imgModal .modal-body img").alt = e.target.alt;
    $("#imgModal").modal();
  }
});
