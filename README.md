# First International Bank

### A Week VI Epicodus Project, 23 April 2021

_By Jonathan Stull_

## **Description**

First International Bank returns the exchange rate and converts the amount of one currency to the amount of another using the [ExchangeRate API](https://www.exchangerate-api.com/).

## **Setup/Installation Requirements**

* Software requirements (internet browser, code editor, etc.)
  1. Internet browser
  2. A code editor like VSCode or Atom to view or edit the codebase

* Download/clone instructions
  1. Download this repository onto your computer by clicking the 'code' button
  2. Open the project folder.
  3. Double-click the index.html to open it in your web browser

* Open via Bash/GitBash:
  1. Clone this repository onto your computer: git clone [https://github.com/jonathanstull/first-international-bank.git](https://github.com/jonathanstull/first-international-bank.git)
  2. Navigate into the ~/first-international-bank directory, and open in VSCode or preferred text editor code .
  3. Open index.html in Chrome or preferred browser

* API Instructions
  1. Visit [ExchangeRate API](https://www.exchangerate-api.com/).
  2. Input your email address and click the "Get Free Key" button.
  3. Follow the prompts to create an account with your email, first name and a password.
  4. Agree to the terms of use and click "Get Started!" You will receive access to a dashboard that includes your API key as well as your remaining API calls for the month.
  5. Confirm your email address if desired and store the API key in your .env.

## **Known Bugs**

* None

## **Specs**

* A user should be able to enter an amount (in U.S. dollars) and then specify another currency (such as the South Korean won). The user should then see the total amount they entered in converted currency. In the example above, a user might enter 10 dollars and then see that amount in South Korean won.
* Users should be able to convert U.S. currency into at least 5 other types of currency.
* If the API call results in an error (any message not a 200 OK), the application should return a notification to the user that states what the error is. (That means the error should show up in the DOM, not in the console.)
* If the query response doesn't include that particular currency, the application should return a notification that states the currency in question doesn't exist. (Note: Even if you use a dropdown menu to specify currencies instead of a form field, you'll still need to add this functionality to your code.)

## **Tests**

Describe: 
  1. Test: <br>
  Code: <br>
  <br>
  Expected Output: <br>

## **Technologies Used**

* HTML/CSS
* JavaScript
* jQuery
* Markdown
* VS Code
* Google Chrome/Mozilla Firefox

## Whiteboarding

This project was planned with a recorded whiteboarding session available for download or listen. Refer to an audio file in `./whiteboard`.

A user should be able to type in an amount (in U.S. dollars) and then choose which currency it should be converted to (such as francs, marks, rupees, and so on). To determine the most recent exchange rate, your application will make an API call to the following exchange rate API.

HTML requires a form; we'll need to build that out with a few elements:
* text input
* dropdown menu with the available currencies for exchange populated on page load with an API call
  * use fetch to call the API and handle any errors
  * use a for loop to populate a dropdown with option tags that include the currency and the value of the exchange rate
* make the API call on page load and store it in a variable
* make sure that the currency returned is in the right format
* make sure that the input is only a number, or that I specify logic for edge cases in which the input is NaN


## **MIT License**

Copyright (c) 2021 Jonathan Stull

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## **Contact Information**

If you are interested in this work, please reach out to Jonathan at <jonathan.d.stull@gmail.com>.