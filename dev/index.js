const PasswordGenerator = require('../dist');

const preferences = {
  length: 9,
  initialText: 'abc',
  useChars: {
    pronounceable: false,
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  },
};

try {
  const password = PasswordGenerator.generatePassword(preferences);
  console.log(password);
} catch (error) {
  console.error(error.message);
}
