function openOrSenior(data){
  return data.map((age, gandicap) => age >= 55 && gandicap > 7 ? 'Senior': 'Open')
}
