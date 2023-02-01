(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    openModalBtn2: document.querySelector("[data-modal-open2]"),
    openModalBtn3: document.querySelector("[data-modal-open3]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.openModalBtn2.addEventListener("click", toggleModal);
  refs.openModalBtn3.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();

(() => {
  const modalRoom = {
    openModalBtn: document.querySelector("[data-modal-open-room]"),
    openModalBtn2: document.querySelector("[data-modal-open-room2]"),
    openModalBtn3: document.querySelector("[data-modal-open-room3]"),
    closeModalBtn: document.querySelector("[data-modal-close-room]"),
    modal: document.querySelector("[data-modal-room]"),
  };

  modalRoom.openModalBtn.addEventListener("click", toggleModal);
  modalRoom.openModalBtn2.addEventListener("click", toggleModal);
  modalRoom.openModalBtn3.addEventListener("click", toggleModal);
  modalRoom.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    modalRoom.modal.classList.toggle("is-hidden");
  }
})();
