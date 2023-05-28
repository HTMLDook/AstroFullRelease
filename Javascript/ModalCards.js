const closeModalBtn = document.querySelector(".btn-close");
const overlay = document.querySelector(".overlay");
const openModalBtns = document.querySelectorAll(".btn-open");
const closeModal = function() {
    const modals = document.querySelectorAll(".profilemodal:not(.hidden)");
    modals.forEach(function(modal) {
        modal.classList.add("hidden");
    });
    overlay.classList.add("hidden");
};
const closeModalBtns = document.querySelectorAll(".btn-close");
closeModalBtns.forEach(function(btn) {
    btn.addEventListener("click", closeModal);
});
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        closeModal();
    }
});
openModalBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
        const modalId = btn.dataset.modal;
        const modal = document.querySelector('#' + modalId);
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
    });
});