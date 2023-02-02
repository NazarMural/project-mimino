(() => {
  const modalRoom = {
    openModalBtn: document.querySelector("[data-modal-open-room]"),
    closeModalBtn: document.querySelector("[data-modal-close-room]"),
    modal: document.querySelector("[data-modal-room]"),
  };

  modalRoom.openModalBtn.addEventListener("click", toggleModal);
  modalRoom.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    modalRoom.modal.classList.toggle("is-hidden");
  }
})();

(() => {
  const modalPrice3 = {
    openModalBtn: document.querySelector("[data-modal-open-price3]"),
    closeModalBtn: document.querySelector("[data-modal-close-price3]"),
    modal: document.querySelector("[data-modal-price3]"),
  };

  modalPrice3.openModalBtn.addEventListener("click", toggleModal);
  modalPrice3.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    modalPrice3.modal.classList.toggle("is-hidden");
  }
})();
