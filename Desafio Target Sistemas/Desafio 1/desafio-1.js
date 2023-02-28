// Desafio 1 -> Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.  IMPORTANTE:  Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;   

const fibonacci = (num) => {
  let sequence = [0, 1];
  
  while (sequence[sequence.length - 1] < num) {
    let nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    sequence.push(nextNumber);
  }
  
  if (sequence.includes(num)) {
    console.log(`O número ${num} pertence à sequência de Fibonacci: ${sequence.join(', ')}`);
  } else {
    console.log(`O número ${num} NÃO pertence à sequência de Fibonacci.`);
  }
}

fibonacci(233)
fibonacci(788)