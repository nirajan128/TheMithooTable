// The Mithoo Table — interactive menu

const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".food-card");

filters.forEach(filter => {
  filter.addEventListener("click", () => {
    filters.forEach(btn => btn.classList.remove("active"));
    filter.classList.add("active");

    const selected = filter.dataset.filter;

    cards.forEach(card => {
      const matches = selected === "all" || card.dataset.category === selected;
      card.classList.toggle("is-hidden", !matches);
    });
  });
});

// Food detail modal
const modal = document.getElementById("foodModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalClose = document.querySelector(".modal-close");
const modalBackdrop = document.querySelector(".modal-backdrop");

cards.forEach(card => {
  card.addEventListener("click", () => {
    modalTitle.textContent = card.dataset.title;
    modalDescription.textContent = card.dataset.description;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  });
});

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", closeModal);

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeModal();
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("modalOrder").addEventListener("click", closeModal);
