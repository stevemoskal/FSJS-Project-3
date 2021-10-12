/*
Treehouse Techdegree:
FSJS Project 3 - Interactive Form
*/

// Add focus on page load to the Name input field
const name = document.querySelector('#name');
name.focus();

// Show and Hide the 'Other Job Role' input field based on user selection
const jobRole = document.querySelector('#title');
const otherJobRole = document.querySelector('#other-job-role');
otherJobRole.style.display = 'none';

jobRole.addEventListener('change', (e) => {
  if (event.target.value === 'other') {
    otherJobRole.style.display = '';
  } else {
    otherJobRole.style.display = 'none';
  }
});

const design = document.querySelector('#design');
const color = document.querySelector('#color');
color.disabled = true;

design.addEventListener('change', (e) => {
  color.disabled = false;
  for ( let i = 0; i < color.children.length; i++ ) {
    const value = e.target.value;
    const dataTheme = color.children[i].dataset.theme;
    if (value === dataTheme) {
      color.children[i].disabled = false;
      color.children[i].hidden = false;
    } else {
      color.children[i].disabled = true;
      color.children[i].hidden = true;
    }
  }
  color.children[0].selected = true;
});

console.log(color.children);
