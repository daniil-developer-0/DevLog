"use strict";

function changeScheme(light) {
  if (light) {
    document.querySelector('body').classList.remove('dark-theme');
    document.querySelector('.theme-changer').innerHTML = '<img src="/assets/img/dark_mode_black_24dp.svg" alt="dark-theme"/>';
    window.localStorage.setItem('theme', true);
  } else {
    document.querySelector('body').classList.add('dark-theme');
    document.querySelector('.theme-changer').innerHTML = '<img src="/assets/img/light_mode_black_24dp.svg" alt="light-theme"/>';
    window.localStorage.setItem('theme', false);
  }
}

function getPreferences() {
  return window.localStorage.getItem('theme') === 'true';
}

changeScheme(getPreferences());

// DOM
let schemeChangerButton = document.querySelector('.theme-changer');
schemeChangerButton.addEventListener('click', (event) => {
  changeScheme(!getPreferences());
});