const { generatePassword } = require('../dist');

const preferences = {
  length: 16,
  initialText: 'blabla',
  cases: {
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  },
};

const password = generatePassword(preferences);

console.log(password);
