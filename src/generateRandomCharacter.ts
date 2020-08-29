const generateRandomCharacter = {
  uppercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  },
  lowercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  },
  numbers() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  },
  symbols() {
    const symbolsString = '!@#$%^&*(){}[]=<>/,.';
    return symbolsString[Math.floor(Math.random() * symbolsString.length)];
  },
};

export default generateRandomCharacter;
