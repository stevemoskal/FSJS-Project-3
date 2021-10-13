/*
Treehouse Techdegree:
FSJS Project 3 - Interactive Form
*/

// Add focus on page load to the Name input field
const name = document.getElementById('name');
name.focus();

// Show and Hide the 'Other Job Role' input field based on user selection
const jobRole = document.getElementById('title');
const otherJobRole = document.getElementById('other-job-role');
otherJobRole.style.display = 'none';

jobRole.addEventListener('change', (e) => {
  if (event.target.value === 'other') {
    otherJobRole.style.display = '';
  } else {
    otherJobRole.style.display = 'none';
  }
});

// Disable the color selection until a T-shirt choice is picked, then only show applicable options
const design = document.getElementById('design');
const color = document.getElementById('color');
color.disabled = true;

design.addEventListener('change', (e) => {
  color.disabled = false;
  for ( let i = 0; i < color.children.length; i++ ) {
    const value = e.target.value;
    const dataTheme = color.children[i].getAttribute('data-theme');
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

// Calculating the total cost of the activities chosen and displaying it on the page

const activities = document.getElementById('activities');
const total = document.getElementById('activities-cost');
const activityList = document.getElementById('activities-box');
const allInputs = activityList.querySelectorAll('input[type="checkbox"]');
let totalCost = 0;

activities.addEventListener('change', (e) => {
  const activityCost = parseInt(e.target.getAttribute('data-cost'));
  if (e.target.checked) {
    totalCost += activityCost;
  } else {
    totalCost -= activityCost;
  }
  total.innerText = `Total: $${totalCost}`;

// disable activities with conflicting time periods

  const activityTime = e.target.getAttribute('data-day-and-time');
  for (let i = 0; i < allInputs.length; i++ ) {
    const currentActTime = allInputs[i].getAttribute('data-day-and-time');
    if (e.target.checked) {
      if (activityTime === currentActTime &&
        e.target != allInputs[i] ) {
          allInputs[i].disabled = true;
          allInputs[i].parentElement.classList.add('disabled');
      }
    } else if (activityTime === currentActTime &&
      e.target != allInputs[i] ){
      allInputs[i].disabled = false;
      allInputs[i].parentElement.classList.remove('disabled');
    }
  }
});

// Hiding and Displaying the payment info sections

const paymentSelect = document.getElementById('payment');
const creditCard = document.getElementById('credit-card');
const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');

paypal.hidden = true;
bitcoin.hidden = true;
paymentSelect.children[1].setAttribute('selected','');

paymentSelect.addEventListener('change', (e) => {
    const target = e.target.value;
    if (target === 'credit-card') {
      creditCard.hidden = false;
      paypal.hidden = true;
      bitcoin.hidden = true;
    } else if (target === 'paypal') {
      creditCard.hidden = true;
      paypal.hidden = false;
      bitcoin.hidden = true;
    } else if (target === 'bitcoin') {
      creditCard.hidden = true;
      paypal.hidden = true;
      bitcoin.hidden = false;
    }
});
