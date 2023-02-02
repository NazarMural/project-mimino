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
  const modalPrice2 = {
    openModalBtn: document.querySelector("[data-modal-open-price2]"),
    closeModalBtn: document.querySelector("[data-modal-close-price2]"),
    modal: document.querySelector("[data-modal-price2]"),
  };

  modalPrice2.openModalBtn.addEventListener("click", toggleModal);
  modalPrice2.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    modalPrice2.modal.classList.toggle("is-hidden");
  }
})();