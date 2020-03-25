let exportKey;

if (process.env.NODE_ENV === 'production') {
    exportKey = process.env.COINMARKETCAP_API_KEY;
  } else {
    exportKey = require('./keys_dev');
}

export default exportKey;