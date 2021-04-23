import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyConversion from './js/exchange-service.js';

function showRates(response) {
  console.log(response);
  if (response.conversion_rates) {
    $('#converted-currency').html(`<p>Demonstrate successful API call by showing the USD exchange rate: ${response.conversion_rates.USD}</p>`);
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