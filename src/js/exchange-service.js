export default class CurrencyConversion {
  static getLatestConversionRates() {
    return fetch(`https://v6.exchangerate-api.com/v6/thisisnotakey/latest/USD`)
      .then(function(response) {
        if(!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      })
  }
}

// template API call with key removed https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD