import { Preferences } from './types';

interface CheckErros {
  (preferences: Preferences): void
}

const checkErrors: CheckErros = ({ length, initialText = '', cases }) => {
  if (length === undefined) {
    throw new Error('Password length not informed');
  }

  if (Number.isNaN(Number(length))) {
    throw new Error('Password length not is number');
  }

  if (length < 4 || length > 1024) {
    throw new Error('Invalid password length [min=4|max=1024]');
  }

  if (typeof initialText !== 'string') {
    throw new Error('Initial text not is string');
  }

  if (initialText?.length >= length) {
    throw new Error('Initial text cannot be greater than or equal to password length');
  }

  if (cases === undefined) {
    throw new Error('Cases checks not informed');
  }

  if (typeof cases !== 'object') {
    throw new Error('Cases not is object');
  }

  const usedCases: [string, boolean][] = Object.entries(cases)
    .filter((value) => value[1]);

  if (!usedCases.length) {
    throw new Error('No cases checks has been selected');
  }

  if (usedCases.length > 1 && usedCases.indexOf(['pronounceable', true]) !== -1) {
    throw new Error('Pronounceable its checked with others cases');
  }
};

export default checkErrors;
