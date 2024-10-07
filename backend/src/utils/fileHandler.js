 const fs = require('fs');
const path = require('path');

 const readJSON = (file) => {
  const filePath = path.join(__dirname, '..', 'data', file);
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
};

 const writeJSON = (file, data) => {
  const filePath = path.join(__dirname, '..', 'data', file);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
};

module.exports = {
  readJSON,
  writeJSON,
};
