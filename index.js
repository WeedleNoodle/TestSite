const arrowDown = document.getElementById("down-arrow");
const main = document.getElementById("main");
const secondPage = document.getElementById("second-page");

arrowDown.onclick = () => {
  secondPage.scrollIntoView({
    behavior: "smooth",
  });
};
