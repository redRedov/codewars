function squareDigits(num){
  return Number(num.toString().split('').map((x) => Number(x) ** 2).join(''))
}
