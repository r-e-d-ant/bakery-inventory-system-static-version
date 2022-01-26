
/* --- setting modal toggling settings --- */
const settingIcons = document.querySelectorAll('.setting-icon-container');
const settingModals = document.querySelectorAll('.setting-modal-container');

settingIcons.forEach(settingIcon => {
    settingIcon.addEventListener('click', () => {
        settingIcon.parentElement.previousElementSibling.classList.toggle('show-setting-modal')
    })
})

/* ------------------------------------- */

const submitPreventDefaultBtns = document.querySelectorAll('.submit-prevent-default')

submitPreventDefaultBtns.forEach(submitPreventDefaultBtn => {
    submitPreventDefaultBtn.addEventListener("click", (e) => {
        e.preventDefault()
    })
})
