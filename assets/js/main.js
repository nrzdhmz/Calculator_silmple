const operators = document.getElementsByClassName('operators');
const del = document.getElementsByClassName('del');
const reset = document.getElementsByClassName('reset');
const finish = document.getElementsByClassName('finish');

const changeColorButton = document.getElementById('changeColorButton');

const colorScheme2 = {
  '--background-color-1-': '#E7E7E7',
  '--output-color-1-': '#EFEFEF',
  '--input-color-1-': '#D4CDCD',
  '--equal-color-1-': '#C85400',
  '--equal-shadow-color-1-': '#904818',
  '--equal-hower-color-1-': '#5BAFB4',
  '--font-color-1-': '#363732',
  '--rare-btn-color-1-': '#378185',
  '--rare-btn-shadow-color-1-': '#1C6469',
  '--rare-btn-hover-color-1-': '#E86C14',
  '--common-btn-color-1-': '#E7E5E1',
  '--common-btn-shadow-color-1-': '#A29E95',
  '--common-btn-hower-color-1-': '#FFFEFB',
  '--top-font-color-1-': '#000000'
};

const colorScheme3 = {
  '--background-color-1-': '#170629',
  '--output-color-1-': '#1D0836',
  '--input-color-1-': '#1D0836',
  '--equal-color-1-': '#00DECE',
  '--equal-shadow-color-1-': '#6BF2F0',
  '--equal-hower-color-1-': '#4BEBE0',
  '--font-color-1-': '#EFDF72',
  '--rare-btn-color-1-': '#54087F',
  '--rare-btn-shadow-color-1-': '#9E2BCC',
  '--rare-btn-hover-color-1-': '#7C23AF',
  '--common-btn-color-1-': '#331A4E',
  '--common-btn-shadow-color-1-': '#722A86',
  '--common-btn-hower-color-1-': '#502E75',
  '--top-font-color-1-': '#EFDF72'
};

const colorScheme1 = {
  '--background-color-1-': '#3B4664',
  '--output-color-1-': '#181F32',
  '--input-color-1-': '#252D44',
  '--equal-color-1-': '#D13F30',
  '--equal-shadow-color-1-': '#94271B',
  '--equal-hower-color-1-': '#EC6C5D',
  '--font-color-1-': '#454B5C',
  '--rare-btn-color-1-': '#65729A',
  '--rare-btn-shadow-color-1-': '#414E70',
  '--rare-btn-hover-color-1-': '#7583AD',
  '--common-btn-color-1-': '#EAE3DB',
  '--common-btn-shadow-color-1-': '#B4A398',
  '--common-btn-hower-color-1-': '#F0EBE7',
  '--top-font-color-1-': '#FFFFFF'
};

let currentColorScheme = 1;

changeColorButton.addEventListener('click', () => {

  if (currentColorScheme === 1) {
    applyColorScheme(colorScheme2);
    currentColorScheme = 2;
    updatePseudoElementPosition_2();
  } else if (currentColorScheme === 2) {
    applyColorScheme(colorScheme3);
    currentColorScheme = 3;
    updatePseudoElementPosition_3();
  } else {
    applyColorScheme(colorScheme1);
    currentColorScheme = 1;
    updatePseudoElementPosition_1()
  }
});

function applyColorScheme(scheme) {
  const rootElement = document.documentElement;

  for (const [property, value] of Object.entries(scheme)) {
    rootElement.style.setProperty(property, value);
  }
}

function updatePseudoElementPosition_1() {
  const newLeft =  4;
  changeColorButton.style.setProperty('--left-position', newLeft + 'px');
}
function updatePseudoElementPosition_2() {
  const newLeft =  19.5 + 4;
  changeColorButton.style.setProperty('--left-position', newLeft + 'px');
}
function updatePseudoElementPosition_3() {
  const newLeft =  39.5 + 4;
  changeColorButton.style.setProperty('--left-position', newLeft + 'px');
}