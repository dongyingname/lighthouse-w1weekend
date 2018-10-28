const fs = require('fs');
const filePath = process.argv.slice(2)[0];
console.log(typeof filePath, filePath);

fs.readFile(filePath, (err, data) => {
  if (err) return console.log(err);
  console.log(data.toString());
});
