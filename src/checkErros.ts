import { CheckErros } from './types';

const checkErrors: CheckErros = ({ length, initialText = '', cases }) => {
  if (Number.isNaN(Number(length))) {
    throw new Error('Password length not is number');
  }

  if (typeof initialText !== 'string') {
    throw new Error('Initial text not is string');
  }

  if (typeof cases !== 'object') {
    throw new Error('Cases not is object');
  }

  const usedCases: [string, boolean][] = Object.entries(cases)
    .filter((value) => value[1]);

  if (length < 4 || length > 1024) {
    throw new Error('Invalid password length [min=4|max=1024]');
  }

  if (!usedCases.length) {
    throw new Error('No cases checks has been selected');
  }

  if (initialText?.length >= length) {
    throw new Error('Initial text cannot be greater than or equal to password length');
  }
};

export default checkErrors;
