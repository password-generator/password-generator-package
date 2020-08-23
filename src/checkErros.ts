import { CheckErros, ErrorToGenerate } from './types';

const checkErrors: CheckErros = ({ passwordLength, initialText, cases }) => {
  const errorToGenerate: ErrorToGenerate = {
    exists: true,
  };

  const validCases: [string, boolean][] = Object.entries(cases).filter((value) => value[1]);

  if (passwordLength < 4 || passwordLength > 1024) {
    errorToGenerate.message = 'Invalid password length! [min=4|max=1024]';
    return errorToGenerate;
  }

  if (!validCases.length) {
    errorToGenerate.message = 'No checks has been selected!';
    return errorToGenerate;
  }

  if (initialText.length >= passwordLength) {
    errorToGenerate.message = 'Initial text cannot be greater than or equal to password length!';
    return errorToGenerate;
  }

  errorToGenerate.exists = false;

  return errorToGenerate;
};

export default checkErrors;
