
/* --- setting modal toggling settings --- */
const settingIcons = document.querySelectorAll('.setting-icon-container');
const settingModals = document.querySelectorAll('.setting-modal-container');

settingIcons.forEach(settingIcon => {
    settingIcon.addEventListener('click', () => {
        settingIcon.parentElement.previousElementSibling.classList.toggle('show-setting-modal')
    })
})

/* ------------------------------------- */

/* ---------------- Prevent default refresh on form submit --------------------- */
const submitPreventDefaultBtns = document.querySelectorAll('.submit-prevent-default')

submitPreventDefaultBtns.forEach(submitPreventDefaultBtn => {
    submitPreventDefaultBtn.addEventListener("click", (e) => {
        e.preventDefault()
    })
})
/* ------------------------------------- */

/* ------- Activate/Deactive white mode --------- */
const themeTogglers = document.querySelector(".white-darkmode-toggler-container");

var lightmode = localStorage.getItem("light-mode");

// enable dark mode function
const enableLightMode = () => {
  // add class dark mode to the body
  document.body.classList.add("light-mode");
  localStorage.setItem("light-mode", "enabled");
};

if (lightmode && lightmode === "enabled") {
  enableLightMode();
}

// disable dark mode function
const disableLightMode = () => {
  // remove class dark mode from the body
  document.body.classList.remove("light-mode");
  localStorage.setItem("light-mode", null);
};

// active/deactive dark mode
themeTogglers.addEventListener("click", () => {
  lightmode = localStorage.getItem("light-mode");
  if (!lightmode || lightmode !== "enabled") {
    enableLightMode();
  } else {
    disableLightMode();
  }
});

/* ---- detect browser version then use margins instead of gap ---- :( */

const platFormName = platform.name;
const platFormVersion = (platform.version).slice(0, 2);

const products = document.querySelectorAll('.product')

const plateformsChromeEdge = ["Chrome", "Edge"]
products.forEach(product => {
  if(product.classList.contains('margin-2rem') && platFormVersion >= 97) {
    console.log("Hooray! Yes i'm over 83 Version")
    product.parentElement.style.margin = 0;
    product.classList.remove("margin-2rem");
    product.parentElement.classList.add("gap-2rem");
  }
})
