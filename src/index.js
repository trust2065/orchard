import "./style.scss";
import "bootstrap";
import $ from "jquery";
import randomWords from "random-words";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faTimes, faCircleNotch } from "@fortawesome/free-solid-svg-icons";

// fontawesome icon
library.add(faTimes, faCircleNotch);
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
  // toggle modal
  if (
    e.target.localName === "img" &&
    e.target.classList.contains("sectionImage")
  ) {
    const modalBody = document.querySelector("#imgModal .modal-body");
    const modalDialog = document.querySelector("#imgModal .modal-dialog");
    const modalDialogMaxWidth = parseInt(
      window.getComputedStyle(modalDialog).maxWidth
    );

    // 50 is: padding 1.5rem and 1px boarder on each side
    const modalBodyMaxWidth = (modalDialogMaxWidth || screen.width) - 50;

    modalBody.style.minHeight = `${modalBodyMaxWidth *
      (e.target.height / e.target.width)}px`;
    modalBody.style.minWidth = `${modalBodyMaxWidth}px`;

    const modalImage = document.querySelector("#imgModal .modal-body img");
    document.querySelector(".modal-loadingIndicator").style.display = "block";
    modalImage && modalBody.removeChild(modalImage);

    const newImg = new Image();
    newImg.classList.add("mw-100", "h-auto");

    newImg.onload = function() {
      document.querySelector(".modal-loadingIndicator").style.display = "none";
      modalBody.appendChild(newImg);
    };

    newImg.src = e.target.src;
    newImg.alt = e.target.alt;
    $("#imgModal").modal();
  }
});
