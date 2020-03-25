import CoinMarketCapAPIKey from './keys_dev';

let exportKey;

if (process.env.NODE_ENV === 'production') {
    exportKey = process.env.COINMARKETCAP_API_KEY;
  } else {
    exportKey = CoinMarketCapAPIKey;
}

export default exportKey;