import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyConversion from './js/exchange-service.js';

function showRates(response) {
  console.log(response);
  if (response.conversion_rates) {
    let currencyArray = Object.entries(response.conversion_rates);
    currencyArray.forEach(function(countryCurrency) {
      console.log(currencyArray);
      $('#currency-origin').append(`<option value="${countryCurrency[1]}">${countryCurrency[0]}</option>`);
      $('#currency-target').append(`<option value="${countryCurrency[1]}">${countryCurrency[0]}</option>`);
    });
  } else {
    $('#response-error').html(`<p>There was an error processing your request: ${response["error-type"]}</p>`);
  }
}

function convertCurrency(exchangeAmount, originRate, targetRate) {
  return (exchangeAmount / originRate) * targetRate;
  // let convertedAmount;
  // // convert to USD
  // let amountInUsd = exchangeAmount / originRate;
  // // convert to foreign currency
  // convertedAmount = amountInUsd * targetRate;
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
    console.log(convertedAmount);
  });
});