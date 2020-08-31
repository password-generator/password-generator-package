import { generatePassword, Preferences } from '../dist';

const preferences: Preferences = {
  length: 9,
  initialText: 'abc',
  cases: {
    pronounceable: false,
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  },
};

try {
  const password = generatePassword(preferences);
  console.log(password);
} catch (error) {
  console.error(error.message);
}
