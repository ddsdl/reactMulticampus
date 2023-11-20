const crypto = require('crypto');

// 단방향 암호화. 복호화가 안된다(원래 값으로 복원 안됨)
const password = 'abc123';
console.log(crypto.createHash('sha256').update(password).digest('base64'));
console.log(crypto.createHash('sha256').update(password).digest('base64'));
console.log('')

console.log(crypto.createHash('sha256').update(password).digest('hex'));
console.log(crypto.createHash('sha256').update(password).digest('hex'));
console.log('')

// PBKDF2(Password-Based Key Derivation Function Version 2
const salt = crypto.randomBytes(64).toString('base64');
const createKey = (password) => {
  return crypto.pbkdf2Sync(password, salt, 10, 64, 'sha256').toString('base64');
}
console.log(createKey(password));
