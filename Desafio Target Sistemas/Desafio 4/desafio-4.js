//Desafio 4 -> Escreva um programa que inverta os caracteres de um string.  IMPORTANTE: a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código; b) Evite usar funções prontas, como, por exemplo, reverse;

const stringReverse = (str) => {
  let chars = str.split("")
  let newStr = ""
  
  for (let i = chars.length - 1; i >= 0; i--) {
    newStr += chars[i]
  }
  
  return console.log(newStr)
}

stringReverse("Gabriel Vinhas")
stringReverse("Target Sistemas")