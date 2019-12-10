//Borrow  funds
const log = console.log;
const api = require('binance');

const brest = new api.BinanceRest({
    key: 'Lh4Oo7vlglF18ms5mOpgtAdGl2gfp0xYtwQkApvaYMBcimkKMqMjufQ7suEtDOpx', // Get this from your account on binance.com
    secret: 'MXnIkrMCHDF37yGKbEujdnTABxxsLoUwvPmr0fYXSO0buAyEeVzRLLVEYkKQo9cU', // Same for this
    timeout: 15000, // Optional, defaults to 15000, is the request time out in milliseconds
    recvWindow: 20000, // Optional, defaults to 5000, increase if you're getting timestamp errors
    disableBeautification: false,
    handleDrift: true
});

const asset = 'USDT';
const amount = 20;

brest.marginBorrow({asset,amount}).then(k => log(k)).catch(err => log(err));
