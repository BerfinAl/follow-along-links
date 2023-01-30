const hl = document.querySelector(".highlight");
const as = document.querySelectorAll("a");
as.forEach((a) => {
  a.addEventListener("mouseover", (e) => {
    hl.style.width = `${e.target.offsetWidth}px`;
    hl.style.height = `${e.target.offsetHeight}px`;
    hl.style.left = `${e.target.offsetLeft}px`;
    hl.style.top = `${e.target.offsetTop}px`;
  });
});
