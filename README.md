# Segundo Desafio em JavaScript: Projeto Calculadora de Partidas Rankeadas 🏁

📌 Desafio feito pela [DIO](https://web.dio.me/) e proposto pelo professor: [Felipe Aguiar](https://www.instagram.com/felipeaguiar.exe/).
Projeto simples que consiste em criar uma calculadora de partidas ranqueadas. Jogando o valor das vitórias ganhas (-) menos o valor das derrotas, obtemos um número inteiro. Com esse número resultante, o rank do herói é impresso, indo do nível Ferro ao Imortal.

## 📖 Como funciona:
Pense em um jogo fictício onde ocorre uma batalha entre heróis e monstros. Cada monstro derrotado gera um ponto **positivo** de nível, enquanto cada derrota resulta em um ponto **negativo** de nível. Com essa ideia em mente, criaremos um sistema de classificação. Com base nas batalhas ganhas (-) menos as derrotas, um valor X será impresso. Esse valor resultante determinará o rank do nosso herói, que pode variar desde o *mais baixo (<= 10 Ferro) até o mais alto (>= 101 Imortal)*.

## 📝👨‍💻 Como foi criado:
Criei um processo de 4 passos simples em javascript que realiza as seguintes operações:

###  **🛠️ Primeiro Passo:**
Declaração da variável level:
<div align="center">
<img src="https://github.com/EzauLira/Desafio-DIO/assets/149651629/54299604-d57d-4a8d-838a-cbb1ade3414c" height="50" />
</div>
Aqui, a variável level está sendo inicializada com o resultado da chamada da função sum(200, 90). A função sum recebe dois parâmetros (victory e lose) e retorna a diferença entre eles.

### **🛠️ Segundo Passo:**
Função sum:
<div align="center">
<img src="https://github.com/EzauLira/Desafio-DIO/assets/149651629/baa87ee3-24af-4bb0-867c-5eb56c8ffd42" height="95" />
</div>
A função sum recebe dois parâmetros (victory e lose), subtrai lose de victory e retorna o resultado.

### **🛠️ Terceiro Passo:**
Estrutura de decisão para determinar o rank com base no valor de level:
<div align="center">
<img src="https://github.com/EzauLira/Desafio-DIO/assets/149651629/6272656a-606e-4ce4-ac61-c36185817b0a" height="250" />
</div>
Esta estrutura de decisão utiliza o valor calculado em level para determinar o rank do herói com base em intervalos predefinidos. Se level estiver dentro de um determinado intervalo, a variável rank recebe o correspondente título ("IRON", "BRONZE", etc.).

### **🛠️ Quarto e último Passo:**
Saída no console:
<div align="center">
<img src="https://github.com/EzauLira/Desafio-DIO/assets/149651629/114e9181-f85a-4784-b178-9079f311b208" height="80" />
</div>
Estes comandos de console exibem uma mensagem parabenizando o herói pelo seu rank e nível, utilizando as variáveis rank e level. A formatação da mensagem é estilizada com alguns espaçamentos e caracteres especiais.

### 💻 Saída no console:
Por fim, no output do console, aparece a seguinte mensagem:
<div align="center">
<img src="https://github.com/EzauLira/Desafio-DIO/assets/149651629/aa074d93-47c7-4206-976e-3e940987c034" height="50" />
</div>


## 🤝 Agradecimentos:
Obrigado a Equipe [DIO](https://web.dio.me/) e professor: [Felipe Aguiar](https://www.instagram.com/felipeaguiar.exe/), por me proporcionar essa experiência incrível de aprendizado e evolução 😎🤝

## 💻 Tecnologias usadas: 
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="50" height="30" />    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" width="30" height="30" />    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="50" height="30" />
