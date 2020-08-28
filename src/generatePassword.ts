import checkErros from './checkErros';
import generateRandomCharacter from './tools';
import { GeneratePassword } from './types';

const generatePassword: GeneratePassword = ({ length, initialText = '', cases }) => {
  let password = '';

  checkErros({ length, initialText, cases });

  const checks: [string, boolean][] = Object.entries(cases);

  for (let c = 0, i = 0; c < length - initialText.length; c += 1) {
    const target = checks[i][0];
    const value = checks[i][1];

    if (value === true) {
      password += generateRandomCharacter[target]();
    } else {
      c -= 1;
    }

    if (i === checks.length - 1) i = 0;
    else i += 1;
  }

  password = password
    .split('')
    .sort(() => 0.5 - Math.random())
    .join('');

  password = `${initialText}${password}`;

  return password;
};

export default generatePassword;
