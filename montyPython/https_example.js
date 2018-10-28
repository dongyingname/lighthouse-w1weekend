const https = require('https');
console.log('i did it');

const options = {
  host: 'stream-large-file.herokuapp.com',
  path: '/give-me-stuff-now'
};

// callback called by https when request is made

const callBack = res => {
  console.log('In response handler callback');
  console.log('response:', res);
  res.on('data', function(chunk) {
    console.log('[-- CHUNK OF LENGTH ' + chunk.length + ' --]');
    console.log(chunk.toString());
  });
};

console.log('i am about to make a request');

https.request(options, callBack).end();

console.log('i have amde the request');
