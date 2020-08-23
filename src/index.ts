import checkErros from './checkErros';
import generateRandomCharacter from './tools';
import { GeneratePassword, Result } from './types';

const generatePassword: GeneratePassword = ({ passwordLength, initialText, cases }) => {
  const result: Result = {
    success: true,
    password: '',
  };

  const initialTextLength = initialText.length;

  const checks: [string, boolean][] = Object.entries(cases);

  const errorToGenerate = checkErros({ passwordLength, initialText, cases });

  if (errorToGenerate.exists) {
    result.success = false;
    result.errorMessage = errorToGenerate.message;
    return result;
  }

  for (let c = 0, i = 0; c < passwordLength - initialTextLength; c += 1) {
    const target = checks[i][0];
    const value = checks[i][1];

    if (value === true) {
      result.password += generateRandomCharacter[target]();
    } else {
      c -= 1;
    }

    if (i === checks.length - 1) i = 0;
    else i += 1;
  }

  result.password = result.password
    .split('')
    .sort(() => 0.5 - Math.random())
    .join('');

  result.password = `${initialText}${result.password}`;

  return result;
};

export default generatePassword;
