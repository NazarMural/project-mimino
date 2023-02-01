(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    openModalBtn2: document.querySelector("[data-modal-open2]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.openModalBtn2.addEventListener("click", toggleModal);
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
    closeModalBtn: document.querySelector("[data-modal-close-room]"),
    modal: document.querySelector("[data-modal-room]"),
  };

  modalRoom.openModalBtn.addEventListener("click", toggleModal);
  modalRoom.openModalBtn2.addEventListener("click", toggleModal);
  modalRoom.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    modalRoom.modal.classList.toggle("is-hidden");
  }
})();


(() => {
  const modalPrice1 = {
    openModalBtn: document.querySelector("[data-modal-open-price1]"),
    closeModalBtn: document.querySelector("[data-modal-close-price1]"),
    modal: document.querySelector("[data-modal-price1]"),
  };

  modalPrice1.openModalBtn.addEventListener("click", toggleModal);
  modalPrice1.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    modalPrice1.modal.classList.toggle("is-hidden");
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
