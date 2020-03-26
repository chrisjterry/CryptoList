let exportKey;

if (process.env.NODE_ENV === 'production') {
    exportKey = COINMARKETCAP_API_KEY;
  } else {
    exportKey = require('./keys_dev');
}

export default exportKey;