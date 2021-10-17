# FSJS-Project-3
### Project-3: Interactive Web Form

#### Description

This repository was designed for the Treehouse TechDegree course, Project-3: Interactive Web form

This project is complete, and I am hoping to obtain an "Exceeds Expectations" grade based on the grading key provided.

There are three different types of code contained in this repository: HTML, CSS and JavaScript. The HTML and CSS were provided by Treehouse, and it was my objective to complete the JavaScript code.

#### Exceeds Expectations Explained

Real Time Error Messages
There are two inputs that are programmed for the 'keyup' event listener, the email input and the credit card input. These inputs will update while the user is inputting the information, and not only once the submit function had run.

Conditional Error Messages
All inputs are programmed for two separate errors, if the field is blank, the input error will display that the field cannot be blank, if there is a value but incorrect, the error message will change to say that a valid input is required.

Conflicting Activities
If any input is selected, all conflicting activities will be disabled.

#### Outside Resources

I found the most challenging aspect of this project to be the Regular Expressions used to validate the user input. There were several websites that I referenced for help with these expressions, most notably searching on (https://stackoverflow.com), as well as (https://developer.mozilla.org/en-US/). I also used (https://regexpal.com) to test the RegEx's before implementing them in my code. All of the RegEx's used in this code is as follows, with a description of the requirements for a valid input below:

```
const nameInput = name.value;
const validName = /^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$/i.test(nameInput);
const emailInput = email.value;
const validEmail = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailInput);
const cardInput = cardNumber.value.replace(/[\D]/g, '');
const validCard = /^[0-9]{13,16}$/.test(cardInput);
const zipInput = zipCode.value;
const validZip = /^[0-9]{5}(?:-[0-9]{4})?$/.test(zipInput);
const cvvInput = cvv.value;
const validCvv = /^[0-9]{3,4}$/.test(cvvInput);
```
Name - Must be at least two names, special characters allowed are ' and -  (case insensitive)
Email - must contain characters before an '@' symbol, follow by characters then a '.' followed by at least one more letter (case insensitive)
Credit Card Number - Must contain 13-16 numbers, can be separated by spaces or '-'
Zip Code - Must be a 5-digit number, or a 5-digit number followed by a '-' then a 4-digit number
CVV - Must be a 3-digit or 4-digit number

#### Frameworks used

This project was built using:
  - [Atom Text Editor](https://atom.io)
  - [Github Desktop](https://desktop.github.com)

Thank you for viewing my repository!

Steve Moskal
