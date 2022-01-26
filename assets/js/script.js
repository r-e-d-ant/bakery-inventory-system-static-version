
const settingIcon = document.querySelector('.setting-icon-container');
const settingModal = document.querySelector('.setting-modal-container');

settingIcon.addEventListener('click', () => {
    settingModal.classList.toggle('show-setting-modal')
})