const intToRoman = (n) => {
  // setup roman characters
  const characters = {
     M: 1000,
     CM: 900,
     D: 500,
     CD: 400,
     C: 100,
     XC: 90,
     L: 50,
     XL: 40,
     X: 10,
     IX: 9,
     V: 5,
     IV: 4,
     III: 3,
     II: 2,
     I: 1
  }
  let res = ''
  for(let numeral in characters) {
    while(n >= characters[numeral]) {
      res += numeral
      n -= characters[numeral]
    }
  }
  return res
}
