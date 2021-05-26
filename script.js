let darkmode = localStorage.getItem("darkMode");

const toggleDarkMode = document.querySelector(".circle");

const enableDarkMode = () => {
  document.body.classList.add("dark-mode");

  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  document.body.classList.remove("dark-mode");

  localStorage.setItem("darkMode", null);
};

if (darkmode === "enabled") {
  enableDarkMode();
}

toggleDarkMode.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkMode");

  if (darkmode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
