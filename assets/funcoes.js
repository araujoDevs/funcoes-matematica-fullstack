function clearOutput() {
  const output = document.getElementById("output");
  if (output) {
    output.value = "";
  }
}

function appendOutput(text) {
  const output = document.getElementById("output");
  if (output) {
    output.value += text + "\n";
  }
}

function somar() {
  let n1 = parseFloat(document.getElementById("n1").value);
  let n2 = parseFloat(document.getElementById("n2").value);
  let resultado = n1 + n2;
  document.getElementById("resultado").value = resultado;
}

function subtrair() {
  let n1 = parseFloat(document.getElementById("n1").value);
  let n2 = parseFloat(document.getElementById("n2").value);
  let resultado = n1 - n2;
  document.getElementById("resultado").value = resultado;
}

function multiplicar() {
  let n1 = parseFloat(document.getElementById("n1").value);
  let n2 = parseFloat(document.getElementById("n2").value);
  let resultado = n1 * n2;
  document.getElementById("resultado").value = resultado;
}

function dividir() {
  clearOutput();
  let n1 = parseFloat(document.getElementById("n1").value);
  let n2 = parseFloat(document.getElementById("n2").value);
  if (n2 === 0) {
    appendOutput("Erro: divisão por zero");
  } else {
    let resultado = n1 / n2;
    appendOutput("Resultado da divisão: " + resultado.toFixed(2));
  }
}

function calcularResto() {
  clearOutput();
  let n1 = parseFloat(prompt("Digite o primeiro número: "));
  let n2 = parseFloat(prompt("Digite o segundo número: "));
  let resultado = n1 % n2;
  appendOutput(
    "O resto da divisão de " + n1 + " % " + n2 + " é igual a " + resultado
  );
}

function calcularPotencia() {
  clearOutput();
  let n1 = parseFloat(prompt("Digite a base: "));
  let n2 = parseFloat(prompt("Digite o expoente: "));
  let resultado = n1 ** n2;
  appendOutput(
    "A potência de " + n1 + " elevado a " + n2 + " é igual a " + resultado
  );
}

function calcularRaizQuadrada() {
  clearOutput();
  let n1 = parseFloat(
    prompt("Digite o número para calcular a raiz quadrada: ")
  );
  let resultado = Math.sqrt(n1);
  appendOutput("A raiz quadrada de " + n1 + " é igual a " + resultado);
}

function calcularMediaAritmetica() {
  clearOutput();
  let n1 = parseFloat(prompt("Digite o primeiro número: "));
  let n2 = parseFloat(prompt("Digite o segundo número: "));
  let n3 = parseFloat(prompt("Digite o terceiro número: "));
  let resultado = (n1 + n2 + n3) / 3;
  appendOutput(
    "A média aritmética de " +
      n1 +
      ", " +
      n2 +
      " e " +
      n3 +
      " é igual a " +
      resultado
  );
}

function calcularMediaMovel() {
  clearOutput();
  let input = prompt("Digite uma série de números separados por vírgula:");
  if (!input) {
    appendOutput("Nenhuma entrada fornecida.");
  }
  let numeros = input
    .split(",")
    .map((x) => parseFloat(x.trim()))
    .filter((x) => !isNaN(x));
  if (numeros.length === 0) {
    appendOutput("Nenhum número válido fornecido.");
  }
  let windowSize = parseInt(
    prompt("Digite o tamanho da janela para a média móvel:")
  );
  if (isNaN(windowSize) || windowSize <= 0) {
    appendOutput("Tamanho da janela inválido.");
  }
  if (windowSize > numeros.length) {
    appendOutput("Tamanho da janela maior que o número de elementos.");
  }
  appendOutput("Média móvel com janela de tamanho " + windowSize + ":");
  for (let i = 0; i <= numeros.length - windowSize; i++) {
    let windowSlice = numeros.slice(i, i + windowSize);
    let sum = windowSlice.reduce((acc, val) => acc + val, 0);
    let avg = sum / windowSize;
    appendOutput(
      "Índice " + i + " a " + (i + windowSize - 1) + ": " + avg.toFixed(4)
    );
  }
}

function calcularMediaPonderada() {
  clearOutput();
  let n1 = parseFloat(prompt("Digite o primeiro número: "));
  let p1 = parseFloat(prompt("Digite o peso do primeiro número: "));
  let n2 = parseFloat(prompt("Digite o segundo número: "));
  let p2 = parseFloat(prompt("Digite o peso do segundo número: "));
  let n3 = parseFloat(prompt("Digite o terceiro número: "));
  let p3 = parseFloat(prompt("Digite o peso do terceiro número: "));
  let resultado = (n1 * p1 + n2 * p2 + n3 * p3) / (p1 + p2 + p3);
  appendOutput(
    "A média ponderada de " +
      n1 +
      ", " +
      n2 +
      " e " +
      n3 +
      " com pesos " +
      p1 +
      ", " +
      p2 +
      " e " +
      p3 +
      " é igual a " +
      resultado
  );
}

function calcularFatorial() {
  clearOutput();
  let n = parseInt(prompt("Digite um número para calcular o fatorial: "));
  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }
  appendOutput("O fatorial de " + n + " é igual a " + resultado);
}

function gerarTabuada() {
  clearOutput();
  let n = parseInt(prompt("Digite um número para gerar a tabuada: "));
  appendOutput("Tabuada de " + n + ":");
  for (let i = 1; i <= 10; i++) {
    appendOutput(n + " x " + i + " = " + n * i);
  }
}

function verificarParImpar() {
  clearOutput();
  let n = parseInt(
    prompt("Digite um número para verificar se é par ou ímpar: ")
  );
  if (n % 2 === 0) {
    appendOutput("O número " + n + " é par.");
  } else {
    appendOutput("O número " + n + " é ímpar.");
  }
}

function verificarMaiorMenor() {
  clearOutput();
  let n1 = parseFloat(prompt("Digite o primeiro número: "));
  let n2 = parseFloat(prompt("Digite o segundo número: "));
  if (n1 > n2) {
    appendOutput("O número " + n1 + " é maior que " + n2);
  } else if (n1 < n2) {
    appendOutput("O número " + n1 + " é menor que " + n2);
  } else {
    appendOutput("Os números são iguais.");
  }
}

function calcularIMC() {
  clearOutput();
  let peso = parseFloat(prompt("Digite o seu peso em kg: "));
  let altura = parseFloat(prompt("Digite a sua altura em metros: "));
  let imc = peso / (altura * altura);
  appendOutput("Seu IMC é " + imc.toFixed(2));
  if (imc < 18.5) {
    appendOutput("Você está abaixo do peso.");
  } else if (imc >= 18.5 && imc < 24.9) {
    appendOutput("Você está com o peso normal.");
  } else if (imc >= 25 && imc < 29.9) {
    appendOutput("Você está com sobrepeso.");
  } else {
    appendOutput("Você está com obesidade.");
  }
}

function calcularAreaCirculo() {
  clearOutput();
  let raio = parseFloat(prompt("Digite o raio do círculo: "));
  let area = Math.PI * raio * raio;
  appendOutput(
    "A área do círculo com raio " + raio + " é igual a " + area.toFixed(2)
  );
}

function calcularAreaRetangulo() {
  clearOutput();
  let largura = parseFloat(prompt("Digite a largura do retângulo: "));
  let altura = parseFloat(prompt("Digite a altura do retângulo: "));
  let area = largura * altura;
  appendOutput("A área do retângulo é igual a " + area.toFixed(2));
}

function calcularAreaTriangulo() {
  clearOutput();
  let base = parseFloat(prompt("Digite a base do triângulo: "));
  let altura = parseFloat(prompt("Digite a altura do triângulo: "));
  let area = (base * altura) / 2;
  appendOutput("A área do triângulo é igual a " + area.toFixed(2));
}

function calcularVolumeCilindro() {
  clearOutput();
  let raio = parseFloat(prompt("Digite o raio da base do cilindro: "));
  let altura = parseFloat(prompt("Digite a altura do cilindro: "));
  let volume = Math.PI * raio * raio * altura;
  appendOutput("O volume do cilindro é igual a " + volume.toFixed(2));
}

function calcularVolumeEsfera() {
  clearOutput();
  let raio = parseFloat(prompt("Digite o raio da esfera: "));
  let volume = (4 / 3) * Math.PI * Math.pow(raio, 3);
  appendOutput("O volume da esfera é igual a " + volume.toFixed(2));
}

function converterCelsiusFahrenheit() {
  clearOutput();
  let celsius = parseFloat(prompt("Digite a temperatura em Celsius: "));
  let fahrenheit = (celsius * 9) / 5 + 32;
  appendOutput(celsius + "°C é igual a " + fahrenheit.toFixed(2) + "°F");
}

function converterFahrenheitCelsius() {
  clearOutput();
  let fahrenheit = parseFloat(prompt("Digite a temperatura em Fahrenheit: "));
  let celsius = ((fahrenheit - 32) * 5) / 9;
  appendOutput(fahrenheit + "°F é igual a " + celsius.toFixed(2) + "°C");
}

function calcularDesconto() {
  clearOutput();
  let preco = parseFloat(prompt("Digite o preço do produto: "));
  let descontoPercentual = parseFloat(
    prompt("Digite o percentual de desconto: ")
  );
  let desconto = (descontoPercentual / 100) * preco;
  let precoFinal = preco - desconto;
  appendOutput(
    "O preço final após um desconto de " +
      descontoPercentual +
      "% é igual a " +
      precoFinal.toFixed(2)
  );
}

function calcularJurosSimples() {
  clearOutput();
  let capital = parseFloat(prompt("Digite o capital inicial: "));
  let taxaJuros = parseFloat(prompt("Digite a taxa de juros (% ao período): "));
  let tempo = parseFloat(prompt("Digite o tempo (número de períodos): "));
  let juros = ((capital * taxaJuros) / 100) * tempo;
  appendOutput("Os juros simples são iguais a " + juros.toFixed(2));
}

function calcularJurosCompostos() {
  clearOutput();
  let capital = parseFloat(prompt("Digite o capital inicial: "));
  let taxaJuros = parseFloat(prompt("Digite a taxa de juros (% ao período): "));
  let tempo = parseFloat(prompt("Digite o tempo (número de períodos): "));
  let montante = capital * Math.pow(1 + taxaJuros / 100, tempo);
  let juros = montante - capital;
  appendOutput("Os juros compostos são iguais a " + juros.toFixed(2));
}

function calcularValorFuturo() {
  clearOutput();
  let valorPresente = parseFloat(prompt("Digite o valor presente: "));
  let taxaJuros = parseFloat(prompt("Digite a taxa de juros (% ao período): "));
  let tempo = parseFloat(prompt("Digite o tempo (número de períodos): "));
  let valorFuturo = valorPresente * Math.pow(1 + taxaJuros / 100, tempo);
  appendOutput("O valor futuro é igual a " + valorFuturo.toFixed(2));
}

function calcularValorPresente() {
  clearOutput();
  let valorFuturo = parseFloat(prompt("Digite o valor futuro: "));
  let taxaJuros = parseFloat(prompt("Digite a taxa de juros (% ao período): "));
  let tempo = parseFloat(prompt("Digite o tempo (número de períodos): "));
  let valorPresente = valorFuturo / Math.pow(1 + taxaJuros / 100, tempo);
  appendOutput("O valor presente é igual a " + valorPresente.toFixed(2));
}

function calcularTaxaCrescimento() {
  clearOutput();
  let valorInicial = parseFloat(prompt("Digite o valor inicial: "));
  let valorFinal = parseFloat(prompt("Digite o valor final: "));
  let tempo = parseFloat(prompt("Digite o tempo (número de períodos): "));
  let taxaCrescimento =
    (Math.pow(valorFinal / valorInicial, 1 / tempo) - 1) * 100;
  appendOutput(
    "A taxa de crescimento é igual a " + taxaCrescimento.toFixed(2) + "%"
  );
}

function calcularDistanciaPontos() {
  clearOutput();
  let x1 = parseFloat(prompt("Digite a coordenada x do primeiro ponto: "));
  let y1 = parseFloat(prompt("Digite a coordenada y do primeiro ponto: "));
  let x2 = parseFloat(prompt("Digite a coordenada x do segundo ponto: "));
  let y2 = parseFloat(prompt("Digite a coordenada y do segundo ponto: "));
  let distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  appendOutput("A distância entre os pontos é igual a " + distancia.toFixed(2));
}

function calcularAreaQuadrado() {
  clearOutput();
  let lado = parseFloat(prompt("Digite o lado do quadrado: "));
  let area = lado * lado;
  appendOutput("A área do quadrado é igual a " + area.toFixed(2));
}

function calcularAreaLosango() {
  clearOutput();
  let diagonalMaior = parseFloat(
    prompt("Digite a diagonal maior do losango: ")
  );
  let diagonalMenor = parseFloat(
    prompt("Digite a diagonal menor do losango: ")
  );
  let area = (diagonalMaior * diagonalMenor) / 2;
  appendOutput("A área do losango é igual a " + area.toFixed(2));
}

function calcularAreaTrapezio() {
  clearOutput();
  let baseMaior = parseFloat(prompt("Digite a base maior do trapézio: "));
  let baseMenor = parseFloat(prompt("Digite a base menor do trapézio: "));
  let altura = parseFloat(prompt("Digite a altura do trapézio: "));
  let area = ((baseMaior + baseMenor) * altura) / 2;
  appendOutput("A área do trapézio é igual a " + area.toFixed(2));
}

function calcularVolumeCubo() {
  clearOutput();
  let aresta = parseFloat(prompt("Digite a aresta do cubo: "));
  let volume = Math.pow(aresta, 3);
  appendOutput("O volume do cubo é igual a " + volume.toFixed(2));
}

function calcularVolumeCone() {
  clearOutput();
  let raio = parseFloat(prompt("Digite o raio da base do cone: "));
  let altura = parseFloat(prompt("Digite a altura do cone: "));
  let volume = (1 / 3) * Math.PI * Math.pow(raio, 2) * altura;
  appendOutput("O volume do cone é igual a " + volume.toFixed(2));
}

function calcularVolumePiramide() {
  clearOutput();
  let areaBase = parseFloat(prompt("Digite a área da base da pirâmide: "));
  let altura = parseFloat(prompt("Digite a altura da pirâmide: "));
  let volume = (1 / 3) * areaBase * altura;
  appendOutput("O volume da pirâmide é igual a " + volume.toFixed(2));
}

function calcularVelocidadeMedia() {
  clearOutput();
  let distancia = parseFloat(prompt("Digite a distância percorrida (em km): "));
  let tempo = parseFloat(prompt("Digite o tempo gasto (em horas): "));
  let velocidadeMedia = distancia / tempo;
  appendOutput(
    "A velocidade média é igual a " + velocidadeMedia.toFixed(2) + " km/h"
  );
}

function calcularTempoViagem() {
  clearOutput();
  let distancia = parseFloat(
    prompt("Digite a distância a ser percorrida (em km): ")
  );
  let velocidadeMedia = parseFloat(
    prompt("Digite a velocidade média (em km/h): ")
  );
  let tempo = distancia / velocidadeMedia;
  appendOutput(
    "O tempo estimado de viagem é igual a " + tempo.toFixed(2) + " horas"
  );
}

function calcularConsumoCombustivel() {
  clearOutput();
  let distancia = parseFloat(prompt("Digite a distância percorrida (em km): "));
  let litrosConsumidos = parseFloat(
    prompt("Digite a quantidade de litros consumidos: ")
  );
  let consumoMedio = distancia / litrosConsumidos;
  appendOutput(
    "O consumo médio de combustível é igual a " +
      consumoMedio.toFixed(2) +
      " km/l"
  );
}

function converterMetrosParaCentimetros() {
  clearOutput();
  let metros = parseFloat(prompt("Digite o valor em metros: "));
  let centimetros = metros * 100;
  appendOutput(
    metros + " metros é igual a " + centimetros.toFixed(2) + " centímetros"
  );
}

function converterCentimetrosParaMetros() {
  clearOutput();
  let centimetros = parseFloat(prompt("Digite o valor em centímetros: "));
  let metros = centimetros / 100;
  appendOutput(
    centimetros + " centímetros é igual a " + metros.toFixed(2) + " metros"
  );
}

function converterQuilometrosParaMetros() {
  clearOutput();
  let quilometros = parseFloat(prompt("Digite o valor em quilômetros: "));
  let metros = quilometros * 1000;
  appendOutput(
    quilometros + " quilômetros é igual a " + metros.toFixed(2) + " metros"
  );
}

function converterMetrosParaQuilometros() {
  clearOutput();
  let metros = parseFloat(prompt("Digite o valor em metros: "));
  let quilometros = metros / 1000;
  appendOutput(
    metros + " metros é igual a " + quilometros.toFixed(2) + " quilômetros"
  );
}

function calcularAreaParalelepipedo() {
  clearOutput();
  let comprimento = parseFloat(
    prompt("Digite o comprimento do paralelepípedo: ")
  );
  let largura = parseFloat(prompt("Digite a largura do paralelepípedo: "));
  let altura = parseFloat(prompt("Digite a altura do paralelepípedo: "));
  let area =
    2 * (comprimento * largura + comprimento * altura + largura * altura);
  appendOutput("A área do paralelepípedo é igual a " + area.toFixed(2));
}

function calcularVolumeParalelepipedo() {
  clearOutput();
  let comprimento = parseFloat(
    prompt("Digite o comprimento do paralelepípedo: ")
  );
  let largura = parseFloat(prompt("Digite a largura do paralelepípedo: "));
  let altura = parseFloat(prompt("Digite a altura do paralelepípedo: "));
  let volume = comprimento * largura * altura;
  appendOutput("O volume do paralelepípedo é igual a " + volume.toFixed(2));
}

function calcularHipotenusa() {
  clearOutput();
  let catetoA = parseFloat(prompt("Digite o valor do cateto A: "));
  let catetoB = parseFloat(prompt("Digite o valor do cateto B: "));
  let hipotenusa = Math.sqrt(Math.pow(catetoA, 2) + Math.pow(catetoB, 2));
  appendOutput("A hipotenusa é igual a " + hipotenusa.toFixed(2));
}

function calcularAreaCircunferencia() {
  clearOutput();
  let raio = parseFloat(prompt("Digite o raio da circunferência: "));
  let area = Math.PI * Math.pow(raio, 2);
  appendOutput("A área da circunferência é igual a " + area.toFixed(2));
}

function calcularComprimentoCircunferencia() {
  clearOutput();
  let raio = parseFloat(prompt("Digite o raio da circunferência: "));
  let comprimento = 2 * Math.PI * raio;
  appendOutput(
    "O comprimento da circunferência é igual a " + comprimento.toFixed(2)
  );
}

function calcularMediaGeometrica() {
  clearOutput();
  let n1 = parseFloat(prompt("Digite o primeiro número: "));
  let n2 = parseFloat(prompt("Digite o segundo número: "));
  let n3 = parseFloat(prompt("Digite o terceiro número: "));
  let mediaGeometrica = Math.cbrt(n1 * n2 * n3);
  appendOutput(
    "A média geométrica de " +
      n1 +
      ", " +
      n2 +
      " e " +
      n3 +
      " é igual a " +
      mediaGeometrica.toFixed(2)
  );
}

function calcularMediaHarmonica() {
  clearOutput();
  let n1 = parseFloat(prompt("Digite o primeiro número: "));
  let n2 = parseFloat(prompt("Digite o segundo número: "));
  let n3 = parseFloat(prompt("Digite o terceiro número: "));
  let mediaHarmonica = 3 / (1 / n1 + 1 / n2 + 1 / n3);
  appendOutput(
    "A média harmônica de " +
      n1 +
      ", " +
      n2 +
      " e " +
      n3 +
      " é igual a " +
      mediaHarmonica.toFixed(2)
  );
}

function calcularDesvioPadrao() {
  clearOutput();
  let n1 = parseFloat(prompt("Digite o primeiro número: "));
  let n2 = parseFloat(prompt("Digite o segundo número: "));
  let n3 = parseFloat(prompt("Digite o terceiro número: "));
  let media = (n1 + n2 + n3) / 3;
  let desvioPadrao = Math.sqrt(
    (Math.pow(n1 - media, 2) +
      Math.pow(n2 - media, 2) +
      Math.pow(n3 - media, 2)) /
      3
  );
  appendOutput(
    "O desvio padrão de " +
      n1 +
      ", " +
      n2 +
      " e " +
      n3 +
      " é igual a " +
      desvioPadrao.toFixed(2)
  );
}

function calcularFibonacci() {
  clearOutput();
  let termos = parseInt(
    prompt("Digite o número de termos da sequência de Fibonacci: ")
  );
  let a = 0,
    b = 1,
    proximo;
  appendOutput("Sequência de Fibonacci com " + termos + " termos:");
  for (let i = 1; i <= termos; i++) {
    appendOutput(a);
    proximo = a + b;
    a = b;
    b = proximo;
  }
}

function verificarNumeroPrimo() {
  clearOutput();
  let n = parseInt(prompt("Digite um número para verificar se é primo: "));
  let isPrimo = true;
  if (n <= 1) {
    isPrimo = false;
  } else {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        isPrimo = false;
        break;
      }
    }
  }
  if (isPrimo) {
    appendOutput("O número " + n + " é primo.");
  } else {
    appendOutput("O número " + n + " não é primo.");
  }
}

function calcularMMC(a, b) {
  clearOutput();
  let menor = a < b ? a : b;
  let mmc = (a * b) / calcularMDC(a, b);
  appendOutput("O MMC de " + a + " e " + b + " é igual a " + mmc);
}

function calcularMDC(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function converterDecimalParaBinario() {
  clearOutput();
  let decimal = parseInt(prompt("Digite um número decimal: "));
  let binario = decimal.toString(2);
  appendOutput("O número decimal " + decimal + " em binário é " + binario);
}

function converterBinarioParaDecimal() {
  clearOutput();
  let binario = prompt("Digite um número binário: ");
  let decimal = parseInt(binario, 2);
  appendOutput("O número binário " + binario + " em decimal é " + decimal);
}

function converterDecimalParaHexadecimal() {
  clearOutput();
  let decimal = parseInt(prompt("Digite um número decimal: "));
  let hexadecimal = decimal.toString(16).toUpperCase();
  appendOutput(
    "O número decimal " + decimal + " em hexadecimal é " + hexadecimal
  );
}

function converterHexadecimalParaDecimal() {
  clearOutput();
  let hexadecimal = prompt("Digite um número hexadecimal: ");
  let decimal = parseInt(hexadecimal, 16);
  appendOutput(
    "O número hexadecimal " + hexadecimal + " em decimal é " + decimal
  );
}

function calcularAreaEsfera() {
  clearOutput();
  let raio = parseFloat(prompt("Digite o raio da esfera: "));
  let area = 4 * Math.PI * Math.pow(raio, 2);
  appendOutput("A área da esfera é igual a " + area.toFixed(2));
}

function calcularCircunferencia() {
  clearOutput();
  let raio = parseFloat(prompt("Digite o raio da circunferência: "));
  let circunferencia = 2 * Math.PI * raio;
  appendOutput("A circunferência é igual a " + circunferencia.toFixed(2));
}

function calcularVolumeTetraedro() {
  clearOutput();
  let aresta = parseFloat(prompt("Digite a aresta do tetraedro: "));
  let volume = Math.pow(aresta, 3) / (6 * Math.sqrt(2));
  appendOutput("O volume do tetraedro é igual a " + volume.toFixed(2));
}

function calcularAreaTetraedro() {
  clearOutput();
  let aresta = parseFloat(prompt("Digite a aresta do tetraedro: "));
  let area = Math.sqrt(3) * Math.pow(aresta, 2);
  appendOutput("A área do tetraedro é igual a " + area.toFixed(2));
}

function calcularVolumeToroide() {
  clearOutput();
  let raioMaior = parseFloat(prompt("Digite o raio maior do toroide: "));
  let raioMenor = parseFloat(prompt("Digite o raio menor do toroide: "));
  let volume = 2 * Math.pow(Math.PI, 2) * raioMaior * Math.pow(raioMenor, 2);
  appendOutput("O volume do toroide é igual a " + volume.toFixed(2));
}

function calcularAreaToroide() {
  clearOutput();
  let raioMaior = parseFloat(prompt("Digite o raio maior do toroide: "));
  let raioMenor = parseFloat(prompt("Digite o raio menor do toroide: "));
  let area = 4 * Math.pow(Math.PI, 2) * raioMaior * raioMenor;
  appendOutput("A área do toroide é igual a " + area.toFixed(2));
}

function calcularVolumeElipsoide() {
  clearOutput();
  let raioA = parseFloat(prompt("Digite o raio A do elipsoide: "));
  let raioB = parseFloat(prompt("Digite o raio B do elipsoide: "));
  let raioC = parseFloat(prompt("Digite o raio C do elipsoide: "));
  let volume = (4 / 3) * Math.PI * raioA * raioB * raioC;
  appendOutput("O volume do elipsoide é igual a " + volume.toFixed(2));
}

function calcularAreaElipsoide() {
  clearOutput();
  let raioA = parseFloat(prompt("Digite o raio A do elipsoide: "));
  let raioB = parseFloat(prompt("Digite o raio B do elipsoide: "));
  let raioC = parseFloat(prompt("Digite o raio C do elipsoide: "));
  let area =
    4 *
    Math.PI *
    Math.pow(
      (Math.pow(raioA * raioB, 1.6) +
        Math.pow(raioA * raioC, 1.6) +
        Math.pow(raioB * raioC, 1.6)) /
        3,
      1 / 1.6
    );
  appendOutput("A área do elipsoide é igual a " + area.toFixed(2));
}

function calcularVolumePrisma() {
  clearOutput();
  let areaBase = parseFloat(prompt("Digite a área da base do prisma: "));
  let altura = parseFloat(prompt("Digite a altura do prisma: "));
  let volume = areaBase * altura;
  appendOutput("O volume do prisma é igual a " + volume.toFixed(2));
}

function calcularAreaPrisma() {
  clearOutput();
  let perimetroBase = parseFloat(
    prompt("Digite o perímetro da base do prisma: ")
  );
  let altura = parseFloat(prompt("Digite a altura do prisma: "));
  let areaBase = parseFloat(prompt("Digite a área da base do prisma: "));
  let area = perimetroBase * altura + 2 * areaBase;
  appendOutput("A área do prisma é igual a " + area.toFixed(2));
}

function calcularVolumeCuneo() {
  clearOutput();
  let areaBase = parseFloat(prompt("Digite a área da base do cuneo: "));
  let altura = parseFloat(prompt("Digite a altura do cuneo: "));
  let volume = (1 / 3) * areaBase * altura;
  appendOutput("O volume do cuneo é igual a " + volume.toFixed(2));
}

function calcularAreaCuneo() {
  clearOutput();
  let comprimentoBase = parseFloat(
    prompt("Digite o comprimento da base do cuneo: ")
  );
  let altura = parseFloat(prompt("Digite a altura do cuneo: "));
  let area =
    comprimentoBase * altura +
    2 *
      ((comprimentoBase *
        Math.sqrt(Math.pow(altura, 2) + Math.pow(comprimentoBase / 2, 2))) /
        2);
  appendOutput("A área do cuneo é igual a " + area.toFixed(2));
}

function calcularVolumeHexaedro() {
  clearOutput();
  let aresta = parseFloat(prompt("Digite a aresta do hexaedro: "));
  let volume = Math.pow(aresta, 3);
  appendOutput("O volume do hexaedro é igual a " + volume.toFixed(2));
}

function calcularAreaHexaedro() {
  clearOutput();
  let aresta = parseFloat(prompt("Digite a aresta do hexaedro: "));
  let area = 6 * Math.pow(aresta, 2);
  appendOutput("A área do hexaedro é igual a " + area.toFixed(2));
}

function calcularVolumeOctaedro() {
  clearOutput();
  let aresta = parseFloat(prompt("Digite a aresta do octaedro: "));
  let volume = (Math.sqrt(2) / 3) * Math.pow(aresta, 3);
  appendOutput("O volume do octaedro é igual a " + volume.toFixed(2));
}

function calcularAreaOctaedro() {
  clearOutput();
  let aresta = parseFloat(prompt("Digite a aresta do octaedro: "));
  let area = 2 * Math.sqrt(3) * Math.pow(aresta, 2);
  appendOutput("A área do octaedro é igual a " + area.toFixed(2));
}

function calcularVolumeDodecaedro() {
  clearOutput();
  let aresta = parseFloat(prompt("Digite a aresta do dodecaedro: "));
  let volume = ((15 + 7 * Math.sqrt(5)) / 4) * Math.pow(aresta, 3);
  appendOutput("O volume do dodecaedro é igual a " + volume.toFixed(2));
}

function calcularAreaDodecaedro() {
  clearOutput();
  let aresta = parseFloat(prompt("Digite a aresta do dodecaedro: "));
  let area = 3 * Math.sqrt(25 + 10 * Math.sqrt(5)) * Math.pow(aresta, 2);
  appendOutput("A área do dodecaedro é igual a " + area.toFixed(2));
}

function calcularVolumeIcosaedro() {
  clearOutput();
  let aresta = parseFloat(prompt("Digite a aresta do icosaedro: "));
  let volume = ((5 * (3 + Math.sqrt(5))) / 12) * Math.pow(aresta, 3);
  appendOutput("O volume do icosaedro é igual a " + volume.toFixed(2));
}

function calcularAreaIcosaedro() {
  clearOutput();
  let aresta = parseFloat(prompt("Digite a aresta do icosaedro: "));
  let area = 5 * Math.sqrt(3) * Math.pow(aresta, 2);
  appendOutput("A área do icosaedro é igual a " + area.toFixed(2));
}

function calcularVolumePrismaHexagonal() {
  clearOutput();
  let ladoBase = parseFloat(
    prompt("Digite o lado da base hexagonal do prisma: ")
  );
  let altura = parseFloat(prompt("Digite a altura do prisma: "));
  let areaBase = ((3 * Math.sqrt(3)) / 2) * Math.pow(ladoBase, 2);
  let volume = areaBase * altura;
  appendOutput("O volume do prisma hexagonal é igual a " + volume.toFixed(2));
}

function calcularAreaPrismaHexagonal() {
  clearOutput();
  let ladoBase = parseFloat(
    prompt("Digite o lado da base hexagonal do prisma: ")
  );
  let altura = parseFloat(prompt("Digite a altura do prisma: "));
  let perimetroBase = 6 * ladoBase;
  let areaBase = ((3 * Math.sqrt(3)) / 2) * Math.pow(ladoBase, 2);
  let area = perimetroBase * altura + 2 * areaBase;
  appendOutput("A área do prisma hexagonal é igual a " + area.toFixed(2));
}

function calcularVolumeCilindroOco() {
  clearOutput();
  let raioInterno = parseFloat(
    prompt("Digite o raio interno do cilindro oco: ")
  );
  let raioExterno = parseFloat(
    prompt("Digite o raio externo do cilindro oco: ")
  );
  let altura = parseFloat(prompt("Digite a altura do cilindro oco: "));
  let volume =
    Math.PI * altura * (Math.pow(raioExterno, 2) - Math.pow(raioInterno, 2));
  appendOutput("O volume do cilindro oco é igual a " + volume.toFixed(2));
}

function calcularAreaCilindroOco() {
  clearOutput();
  let raioInterno = parseFloat(
    prompt("Digite o raio interno do cilindro oco: ")
  );
  let raioExterno = parseFloat(
    prompt("Digite o raio externo do cilindro oco: ")
  );
  let altura = parseFloat(prompt("Digite a altura do cilindro oco: "));
  let area =
    2 * Math.PI * (raioExterno + raioInterno) * altura +
    2 * Math.PI * (Math.pow(raioExterno, 2) - Math.pow(raioInterno, 2));
  appendOutput("A área do cilindro oco é igual a " + area.toFixed(2));
}

function calcularVolumeHiperboloide() {
  clearOutput();
  let raioBase = parseFloat(prompt("Digite o raio da base do hiperboloide: "));
  let altura = parseFloat(prompt("Digite a altura do hiperboloide: "));
  let volume = (1 / 3) * Math.PI * Math.pow(raioBase, 2) * altura;
  appendOutput("O volume do hiperboloide é igual a " + volume.toFixed(2));
}

function calcularAreaHiperboloide() {
  clearOutput();
  let raioBase = parseFloat(prompt("Digite o raio da base do hiperboloide: "));
  let altura = parseFloat(prompt("Digite a altura do hiperboloide: "));
  let area =
    Math.PI *
    raioBase *
    (raioBase + Math.sqrt(Math.pow(altura, 2) + Math.pow(raioBase, 2)));
  appendOutput("A área do hiperboloide é igual a " + area.toFixed(2));
}

function calcularSeno() {
  clearOutput();
  let graus = parseFloat(
    prompt("Digite o ângulo em graus para calcular o seno: ")
  );
  let radianos = (graus * Math.PI) / 180;
  let resultado = Math.sin(radianos);
  appendOutput("O seno de " + graus + "° é " + resultado.toFixed(4));
}

function calcularCosseno() {
  clearOutput();
  let graus = parseFloat(
    prompt("Digite o ângulo em graus para calcular o cosseno: ")
  );
  let radianos = (graus * Math.PI) / 180;
  let resultado = Math.cos(radianos);
  appendOutput("O cosseno de " + graus + "° é " + resultado.toFixed(4));
}

function calcularTangente() {
  clearOutput();
  let graus = parseFloat(
    prompt("Digite o ângulo em graus para calcular a tangente: ")
  );
  let radianos = (graus * Math.PI) / 180;
  let resultado = Math.tan(radianos);
  appendOutput("A tangente de " + graus + "° é " + resultado.toFixed(4));
}

function clearBasicInputs() {
  document.getElementById("n1").value = "";
  document.getElementById("n2").value = "";
  document.getElementById("resultado").value = "";
}
