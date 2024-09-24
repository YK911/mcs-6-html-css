const refs = {
  modal: document.querySelector('.js-modal'),
  openModalBtn: document.querySelector('.js-open-modal'),
  closeModalBtn: document.querySelector('.js-close-modal'),
};

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  refs.modal.classList.toggle('is-open');
  document.body.classList.toggle('no-scroll');
}
