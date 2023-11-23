const fs = require('fs');
const request = require('request');

let url = process.argv[2];
let path = process.argv[3];

const download = (url, path) => {
  request.get({url, encoding: null}, (error, response, body) => {
    if (error) {
      console.error('error:', error);
      return;
    }
      console.log('statusCode:', response && response.statusCode);
    fs.writeFile(path, body, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      const stats = fs.statSync(path);
      console.log(`Downloaded and saved ${stats.size} bytes to ${path}`)
    });
  });
};

download(url, path);