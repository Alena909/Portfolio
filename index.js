const cardContainers = document.querySelectorAll(".card-container");
const modeSwitch = document.querySelector('input[type="checkbox"]');
const iconSwitch = document.getElementById("icon-switch");

cardContainers.forEach((card) => {
  card.addEventListener("click", (e) => {
    const cardContainer = e.currentTarget;
    cardContainers.forEach((otherCard) => {
      otherCard.classList.remove("active");
    });
    cardContainer.classList.add("active");
  });
});
function mode(isLight) {
  iconSwitch.children[0].textContent = isLight ? "Light Mode" : "Dark Mode";
  isLight
    ? iconSwitch.children[1].classList.replace("fa-moon", "fa-sun")
    : iconSwitch.children[1].classList.replace("fa-sun", "fa-moon");
}

function modeChange(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "light");
    mode(true);
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    mode(false);
  }
}

modeSwitch.addEventListener("change", modeChange);
