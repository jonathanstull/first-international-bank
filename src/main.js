import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyConversion from './js/exchange-service.js';

function showRates(response) {
  console.log(response);
  if (response.conversion_rates) {
    let currencyArray = Object.entries(response.conversion_rates)
    currencyArray.forEach(function(countryCurrency) {
      $('#currency-code').append(`<option value="${countryCurrency[1]}">${countryCurrency[0]}</option>`);
    })
  } else {
    $('#response-error').html(`<p>There was an error processing your request: ${response["error-type"]}</p>`);
  }
}

$(document).ready(function() {
  CurrencyConversion.getLatestConversionRates()
  .then(function(response) {
    showRates(response);
  });
  $('#convert-btn').click(function() {
  });
});