var burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
  if (document.querySelector(".links").style.display === "none") {
    burger.innerHTML = `
    <span class="x" style="color: white; font-size: 26px; margin-right: 5px">
    X
    </span>`;
    document.querySelector(".links").style.display = "block";
  } else {
    burger.innerHTML = `
    <div></div>
    <div></div>
    <div></div>
    `;
    document.querySelector(".links").style.display = "none";
  }
});
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1010) {
    document.querySelector(".links").style.display = "block";
  } /*else if (window.onscroll = true) {
    burger.innerHTML = `
    <div></div>
    <div></div>
    <div></div>
    `;
    document.querySelector(".links").style.display = "none";
  }*/ else {
    burger.innerHTML = `
    <div></div>
    <div></div>
    <div></div>
    `;
    document.querySelector(".links").style.display = "none";
  }
});
