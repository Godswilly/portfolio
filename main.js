const toActiveModal = document.querySelector('.to_active_modal');
const modalContainer = document.querySelector('.contact_modal_container');
const modalCloser = document.querySelector('.close_modal');

toActiveModal.addEventListener('click', () => {
  modalContainer.classList.add('active_modal');
});

modalCloser.addEventListener('click', () => {
  modalContainer.classList.remove('active_modal');
});
