import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyConversion from './js/exchange-service.js';

function showRates(response) {
  if (response.conversion_rates) {
    let currencyArray = Object.entries(response.conversion_rates);
    currencyArray.forEach(function(countryCurrency) {
      $('#currency-origin').append(`<option value="${countryCurrency[1]}">${countryCurrency[0]}</option>`);
      $('#currency-target').append(`<option value="${countryCurrency[1]}">${countryCurrency[0]}</option>`);
    });
  } else {
    $('#response-error').html(`<p>There was an error processing your request: ${response["error-type"]}</p>`);
  }
}

function convertCurrency(exchangeAmount, originRate, targetRate) {
  return (exchangeAmount / originRate) * targetRate;
}

function showConversion(originRate, targetRate, convertedAmount) {
  let originCurrency = $('#currency-origin option:selected').text();
  let targetCurrency = $('#currency-target option:selected').text();
  let exchangeRate = (1 / originRate) * targetRate;
  $('#converted-currency').html(`<h3>${targetCurrency}${convertedAmount}</h3>`);
  $('#conversion-information').append(`<p>The going exchange rate from ${originCurrency} to ${targetCurrency} is ${exchangeRate}.</p>`);
}

$(document).ready(function() {
  CurrencyConversion.getLatestConversionRates()
  .then(function(response) {
    showRates(response);
  });
  $('#convert-btn').click(function() {
    let exchangeAmount = $('#currency-input').val();
    let originRate = $('#currency-origin').val();
    let targetRate = $('#currency-target').val();
    let convertedAmount = convertCurrency(exchangeAmount, originRate, targetRate);
    showConversion(originRate, targetRate, convertedAmount);
  });
});