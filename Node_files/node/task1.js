const fs = require('fs');

fs.readFile('', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  const modifiedContent = data.toUpperCase();

  fs.writeFile('output.txt', modifiedContent, 'utf8', (err) => {
    if (err) {
      console.error("Error writing file:",err);
      return;
    }
    console.log('File successfully written');
  });
});
;