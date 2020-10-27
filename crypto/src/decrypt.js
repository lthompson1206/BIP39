const crypto = require('crypto');

const algorithm = 'aes-192-cbc';
const password = 'Password used to generate key';
const key = crypto.scryptSync(password, 'salt', 24);
const decipher = crypto.createDecipheriv(algorithm, key);

let decrypted = '';
decipher.on('readable', () => {
    while (null !== (chunk = decipher.read())) {
        decrypted += chunk.toString('utf8');
    }
});
decipher.on('end', () => console.log(encrypted));

const encrypted = '05379abdd858f9d302379e2d0e9a1d6dc3cbcde83c2f956066d57de6fe431714'
decipher.write(encrypted, 'hex');
decipher.end();
