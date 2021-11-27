const cardContainers = document.querySelectorAll(".card-container");

cardContainers.forEach((card) => {
  card.addEventListener("click", (e) => {
    const cardContainer = e.currentTarget;
    cardContainers.forEach((otherCard) => {
      otherCard.classList.remove("active");
    });
    cardContainer.classList.add("active");
  });
});
