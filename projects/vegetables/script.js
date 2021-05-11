var burger = document.querySelector(".burger");

//Transforms the links in a burger when the width of the page is less than 1010px

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1010) {
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

//Transforms the burger in X and viceversa

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
