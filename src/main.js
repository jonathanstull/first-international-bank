import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyConversion from './js/exchange-service.js';


function showCurrencies(response) {
  let currencyArray = Object.entries(response.conversion_rates);
  if (response.conversion_rates) {
    currencyArray.forEach(function(countryCurrency) {
      $('#currency-origin').append(`<option value="${countryCurrency[1]}">${countryCurrency[0]}</option>`);
      $('#currency-target').append(`<option value="${countryCurrency[1]}">${countryCurrency[0]}</option>`);
    });
  } else {
    $('#error').html(`<p>There was an error processing your request: ${response["error-type"]}</p>`);
  }
}

function convertCurrency(exchangeAmount, originRate, targetRate) {
  return (exchangeAmount / originRate) * targetRate;
}

function showConversion(originCurrency, originRate, targetRate, convertedAmount) {
  let targetCurrency = $('#currency-target option:selected').text();
  let exchangeRate = (1 / originRate) * targetRate;
  $('#converted-currency').html(`<h3>${targetCurrency}${convertedAmount}</h3>`);
  $('#conversion-information').append(`<p>The going exchange rate from ${originCurrency} to ${targetCurrency} is ${exchangeRate}.</p>`);
}

function throwConversionError(response) {
  let currencyArray = Object.keys(response.conversion_rates);
  let originCurrency = $('#currency-origin option:selected').text();
  if (currencyArray.includes(originCurrency) === false) {
    $('#error').html(`<p>The requested currency either does not exist or the exchange rate is not available.</p>`);
  }
}

$(document).ready(function() {
  CurrencyConversion.getLatestConversionRates()
    .then(function(response) {
      showCurrencies(response);
    });
  $('#convert-btn').click(function() {
    let originCurrency = $('#currency-origin option:selected').text();
    let exchangeAmount = $('#currency-input').val();
    let originRate = $('#currency-origin').val();
    let targetRate = $('#currency-target').val();
    let convertedAmount = convertCurrency(exchangeAmount, originRate, targetRate);
    CurrencyConversion.getLatestConversionRates()
      .then(function(response) {
        throwConversionError(response);
      });
    showConversion(originCurrency, originRate, targetRate, convertedAmount);
  });
});