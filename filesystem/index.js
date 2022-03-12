const fs = require('fs');

// nama file, encoding type, callback function
fs.readFile('./notes.txt', 'utf-8', (error, data) => {
    if (error) {
        console.log('Gagal membaca notes');
        return;
    }
    console.log(data);
});
