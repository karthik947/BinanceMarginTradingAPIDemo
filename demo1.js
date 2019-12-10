//Get list of coins/pairs that support margin trading.
const rp = require('request-promise');
const log = console.log;

const getMarginSymbols = async () => {
  const resp = JSON.parse(await rp('https://api.binance.com/api/v3/exchangeInfo'));
  return resp.symbols.filter(d => d.isMarginTradingAllowed).map(s => s.symbol);
}

getMarginSymbols().then(k => log(k.length)).catch(err => log(err));
