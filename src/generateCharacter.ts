const randInt = (max: number, min: number) => Math.floor(Math.random() * min) + max;

const generateRandomCharacter = {
  uppercase() {
    return String.fromCharCode(randInt(26, 65));
  },
  lowercase() {
    return String.fromCharCode(randInt(26, 97));
  },
  numbers() {
    return String.fromCharCode(randInt(10, 48));
  },
  symbols() {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[randInt(0, symbols.length)];
  },
};

export default generateRandomCharacter;
