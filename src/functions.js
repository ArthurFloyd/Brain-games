const getRandomNumber = (min, max) => {
  const minNum = Math.ceil(min);
  const maxNum = Math.floor(max);
  return Math.floor(Math.random() * (maxNum - minNum) + minNum);
};

const getGcdNumber = (firstNumber, secondNumber) => {
  while (firstNumber !== secondNumber) {
    if (firstNumber > secondNumber) {
      // eslint-disable-next-line no-param-reassign
      firstNumber -= secondNumber;
    } else {
      // eslint-disable-next-line no-param-reassign
      secondNumber -= firstNumber;
    }
  }
  return firstNumber;
};

const isPrimeNumber = (num) => {
  if (num === 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export { getRandomNumber, getGcdNumber, isPrimeNumber };
