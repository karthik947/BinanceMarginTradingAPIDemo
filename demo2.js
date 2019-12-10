//Get list of coins/pairs for each market
const rp = require('request-promise');
const log = console.log;

const getMarginSymbols = async () => {
  const resp = JSON.parse(await rp('https://api.binance.com/api/v3/exchangeInfo'));
  return resp.symbols.filter(d => d.isMarginTradingAllowed).map(s => s.symbol);
}

const getMarketCount = (symbols) => {
  return symbols.reduce((a,d) => {
    const market = d.slice(-3).includes('SD') ? d.slice(-4) : d.slice(-3);
    if(!a[market]){a[market] = 0;}
    a[market]++;
    return a;
  },{});
}

getMarginSymbols().then(k => log(getMarketCount(k))).catch(err => log(err));
