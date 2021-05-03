import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyConversion from './js/exchange-service.js';

function storeCurrencies(response) {
  if (response) {
    const conversionRates = response.conversion_rates;
    for (const property in conversionRates) {
      sessionStorage.setItem(property, conversionRates[property]);
      $('#currency-origin').append(`<option value="${conversionRates[property]}">${property}</option>`);
      $('#currency-target').append(`<option value="${conversionRates[property]}">${property}</option>`);
    } 
  } else {
    $('#error').html(`<p>Currency data could not be downloaded.</p>`)
  }
}

function convertCurrency(exchangeAmount, originRate, targetRate) {
  let targetCurrency = $('#currency-target option:selected').text();
  let convertedAmount = (exchangeAmount / originRate) * targetRate;
  return convertedAmount.toLocaleString('en-US', { style: 'currency', currency: targetCurrency });
}

function showConversion(originCurrency, originRate, targetRate, convertedAmount) {
  let targetCurrency = $('#currency-target option:selected').text();
  let exchangeRate = (1 / originRate) * targetRate;
  $('#converted-currency').html(`<h3>${convertedAmount}</h3>`);
  $('#conversion-information').append(`<p>The going exchange rate from ${originCurrency} to ${targetCurrency} is ${exchangeRate}.</p>`);
}

function throwConversionError() {
  let originCurrency = $('#currency-origin option:selected').text();
  let sessionCurrencyKeys = Object.keys(sessionStorage);
  if (sessionCurrencyKeys.includes(originCurrency) === false) {
    $('#error').html(`<p>The requested currency either does not exist or the exchange rate is not available.</p>`);
  }
}

function clearOutputDivs() {
  $('#converted-currency').html("");
  $('#conversion-information').html("");
  $('#error').html("");
}

$(document).ready(function() {
  CurrencyConversion.getLatestConversionRates()
    .then(function(response) {
      storeCurrencies(response);
    });
  $('#convert-btn').click(function() {
    clearOutputDivs();
    let originCurrency = $('#currency-origin option:selected').text();
    let exchangeAmount = $('#currency-input').val();
    let originRate = $('#currency-origin').val();
    let targetRate = $('#currency-target').val();
    let convertedAmount = convertCurrency(exchangeAmount, originRate, targetRate);
    throwConversionError();
    showConversion(originCurrency, originRate, targetRate, convertedAmount);
  });
});