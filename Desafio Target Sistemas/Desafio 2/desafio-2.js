//Desafio 2 -> Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne: • O menor valor de faturamento ocorrido em um dia do mês; • O maior valor de faturamento ocorrido em um dia do mês; • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal. IMPORTANTE: a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal; b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

fetch('./dados.json')
  .then(response => response.json())
  .then(dados => {
    let menorFaturamento = Infinity;
    let maiorFaturamento = 0;
    let somaFaturamento = 0;
    let diasAcimaMedia = 0;

    for (let i = 0; i < dados.length; i++) {
      const faturamento = dados[i].valor;
      
      if (faturamento > maiorFaturamento) {
        maiorFaturamento = faturamento;
      }
      
      if (faturamento < menorFaturamento && faturamento > 0) {
        menorFaturamento = faturamento;
      }
      
      if (faturamento > 0) {
        somaFaturamento += faturamento;
      }
    }
    
    const mediaFaturamento = somaFaturamento / dados.length;
    
    for (let i = 0; i < dados.length; i++) {
      const faturamento = dados[i].valor;
      
      if (faturamento > mediaFaturamento) {
        diasAcimaMedia++;
      }
    }
    
    console.log(`Menor valor de faturamento ocorrido em um dia do mês: ${menorFaturamento}`);
    console.log(`Maior valor de faturamento ocorrido em um dia do mês: ${maiorFaturamento}`);
    console.log(`Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: ${diasAcimaMedia}`);
  })
  .catch(error => {
    console.error('Ocorreu um erro ao carregar o arquivo JSON: ', error);
  })