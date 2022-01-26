
const settingIcons = document.querySelectorAll('.setting-icon-container');
const settingModals = document.querySelectorAll('.setting-modal-container');

settingIcons.forEach(settingIcon => {
    settingIcon.addEventListener('click', () => {
        settingIcon.parentElement.previousElementSibling.classList.toggle('show-setting-modal')
    })
})
