const findArr = (arrNum, a, b) => {
  const arrResult = [];
  for (let i = (a - 1); i < arrNum[b - 1]; i++) {
    arrResult.push(arrNum[i]);
  }
  return arrResult;
}

const arrNum = [46, 73, 3, 4, 5, 6, 24];
console.log(findArr(arrNum, 3, 6));