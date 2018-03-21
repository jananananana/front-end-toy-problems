const inArr = [2, 4, 5, 9];
// slow way
const multiplyNums = (arr) => {
  let multiArr = [];
  for (let i=0; i < inArr.length; i++) {
    let multiNum = 1;
    for (let t=0; t < inArr.length; t++) {
      if (t === i) {
      } else {
        multiNum =  multiNum*inArr[t];
      }
    }
    multiArr.push(multiNum);
  }
  console.log(multiArr);
  return multiArr;
};
multiplyNums(inArr);

// faster way
const multiplyNumsTwo = (arrTwo) => {
  const multiArrTwo = [];
  const allMult = arrTwo.reduce(function(a,b){return a*b;});
  for (let i=0; i < arrTwo.length; i++) {
    let newNum = allMult/arrTwo[i];
    multiArrTwo.push(newNum);
  }
  console.log(multiArrTwo);
  return multiArrTwo;
};
multiplyNumsTwo(inArr);
