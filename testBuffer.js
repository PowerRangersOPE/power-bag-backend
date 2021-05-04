const fs = require('fs');

const content = fs.readFileSync('./src/temp/ProdutosParaBag.pdf', {
  encoding: 'base64',
});

console.log(content);
