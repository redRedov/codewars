const getPowerTenModThirteen = (count) => {
  result = [];
  for(let i = 0; i < count; i++) {
    result.push((10 ** i) % 13);
  }
  return result;
};


function thirt(n) {
  strNumber = n.toString()
  m = getPowerTenModThirteen(strNumber.length);
  newNum = strNumber.split('').reverse().map((x, i) => Number(x) * m[i]).reduce((a, b) => a + b);
  return n === newNum ? n : thirt(newNum);
}
