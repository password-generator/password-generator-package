import { Preferences } from './types';

const checkErrors = ({ length, initialText = '', useChars }: Preferences) => {
  const usedChars: [string, boolean][] = Object.entries(useChars).filter(
    value => value[1]
  );

  switch (true) {
    case length === undefined:
      throw new Error('Password length not informed');

    case Number.isNaN(Number(length)):
      throw new Error('Password length not is number');

    case length < 4 || length > 1024:
      throw new Error('Invalid password length [min=4|max=1024]');

    case typeof initialText !== 'string':
      throw new Error('Initial text not is string');

    case initialText?.length >= length:
      throw new Error('Initial text cannot be greater than or equal to password length');

    case useChars === undefined:
      throw new Error('Characters not informed');

    case typeof useChars !== 'object':
      throw new Error('Characters not is object');

    case !usedChars.length:
      throw new Error('Characters not has been selected');

    case usedChars.length > 1 && usedChars.indexOf(['pronounceable', true]) !== -1:
      throw new Error('Pronounceable its checked with others chars');
  }
};

export default checkErrors;
