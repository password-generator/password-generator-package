import { Preferences } from './types';

interface CheckErros {
  (preferences: Preferences): void
}

const checkErrors: CheckErros = ({ length, initialText = '', useChars }) => {
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

  if (useChars === undefined) {
    throw new Error('Characters not informed');
  }

  if (typeof useChars !== 'object') {
    throw new Error('Characters not is object');
  }

  const usedChars: [string, boolean][] = Object.entries(useChars)
    .filter((value) => value[1]);

  if (!usedChars.length) {
    throw new Error('Characters not has been selected');
  }

  if (usedChars.length > 1 && usedChars.indexOf(['pronounceable', true]) !== -1) {
    throw new Error('Pronounceable its checked with others chars');
  }
};

export default checkErrors;
