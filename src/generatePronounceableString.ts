import trigam from './lettersFrequencies';

const generatePronounceableString = (length: number): string => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  let randomNumber = Math.random() * 125729;
  let output = '';
  let sum = 0;
  let c1 = 0;
  let c2 = 0;
  let c3 = 0;

  for (c1 = 0; c1 < 26; c1 += 1) {
    for (c2 = 0; c2 < 26; c2 += 1) {
      for (c3 = 0; c3 < 26; c3 += 1) {
        sum += trigam[c1][c2][c3];
        if (sum > randomNumber) {
          output += alphabet.charAt(c1);
          output += alphabet.charAt(c2);
          output += alphabet.charAt(c3);
          c1 = 26;
          c2 = 26;
          c3 = 26;
        }
      }
    }
  }

  for (let l = 3; l < length; l += 1) {
    c1 = alphabet.indexOf(output.charAt(l - 2));
    c2 = alphabet.indexOf(output.charAt(l - 1));

    sum = 0;
    for (c3 = 0; c3 < 26; c3 += 1) {
      sum += trigam[c1][c2][c3];
    }

    if (sum === 0) break;

    randomNumber = Math.random() * sum;
    sum = 0;
    for (c3 = 0; c3 < 26; c3 += 1) {
      sum += trigam[c1][c2][c3];
      if (sum > randomNumber) {
        output += alphabet.charAt(c3);
        c3 = 26;
      }
    }
  }

  return output;
};

export default generatePronounceableString;
