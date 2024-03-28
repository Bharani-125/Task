const fs = require('fs').promises;


async function readFile(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    console.log(`File content: ${data}`);
    return data;
  } catch (error) {
    console.error(`Error reading file: ${error.message}`);
    throw error;
  }
}


async function writeFile(filePath, content) {
  try {
    await fs.writeFile(filePath, content);
    console.log('File written successfully');
  } catch (error) {
    console.error(`Error writing file: ${error.message}`);
    throw error;
  }
}

async function performOperations() {
  try {
   
    const data = await readFile('example.txt');

   
    const modifiedContent = data.toUpperCase();

    
    await writeFile('output.txt', modifiedContent);

    console.log('All operations completed successfully');
  } catch (error) {
    console.error(`Error performing operations: ${error.message}`);
  }
}


performOperations();
