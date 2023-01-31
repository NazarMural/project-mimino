(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();

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
  const modalPrice = {
    openModalBtn: document.querySelector("[data-modal-open-price]"),
    closeModalBtn: document.querySelector("[data-modal-close-price]"),
    modal: document.querySelector("[data-modal-price]"),
  };

  modalPrice.openModalBtn.addEventListener("click", toggleModal);
  modalPrice.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    modalPrice.modal.classList.toggle("is-hidden");
  }
})();
