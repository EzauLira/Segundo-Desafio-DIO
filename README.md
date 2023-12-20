# Segundo Desafio em JavaScript: Projeto Calculadora de Partidas Rankeadas 🏁

📌 Desafio feito pela [DIO](https://web.dio.me/) e proposto pelo professor: [Felipe Aguiar](https://www.instagram.com/felipeaguiar.exe/).
Projeto simples que consiste em criar uma calculadora de partidas ranqueadas. Jogando o valor das vitórias ganhas (-) menos o valor das derrotas, obtemos um número inteiro. Com esse número resultante, o rank do herói é impresso, indo do nível Ferro ao Imortal.

## 📖 Como funciona:
Pense em um jogo fictício onde ocorre uma batalha entre heróis e monstros. Cada monstro derrotado gera um ponto **positivo** de nível, enquanto cada derrota resulta em um ponto **negativo** de nível. Com essa ideia em mente, criaremos um sistema de classificação. Com base nas batalhas ganhas (-) menos as derrotas, um valor X será impresso. Esse valor resultante determinará o rank do nosso herói, que pode variar desde o *mais baixo (<= 10 Ferro) até o mais alto (>= 101 Imortal)*.

## 📝 Como foi criado:
Criei um processo de 4 passos simples em javascrip que realiza as seguintes operações:

###  **🛠️ Primeiro Passo:**
Declaração da variável level:
<div align="center">
<img src="https://github.com/EzauLira/Segundo-Desafio-DIO/assets/1496516291e490db8-5456-42c5-891c-078dee4ce493" height="80" />
</div>
Aqui, a variável level está sendo inicializada com o resultado da chamada da função sum(200, 90). A função sum recebe dois parâmetros (victory e lose) e retorna a diferença entre eles.

### **🛠️ Segundo Passo:**
Função sum:
<div align="center">
<img src="https://github.com/EzauLira/Segundo-Desafio-DIO/assets/149651629/8a8c6133-803c-4710-b083-a56eb922b486" height="80" />
</div>
A função sum recebe dois parâmetros (victory e lose), subtrai lose de victory e retorna o resultado.

### **🛠️ Terceiro Passo:**
Estrutura de decisão para determinar o rank com base no valor de level:
<div align="center">
<img src="https://github.com/EzauLira/Segundo-Desafio-DIO/assets/149651629/ff41d644-bdeb-4f3a-b034-1f4d478f9ba3" height="80" />
</div>
Esta estrutura de decisão utiliza o valor calculado em level para determinar o rank do herói com base em intervalos predefinidos. Se level estiver dentro de um determinado intervalo, a variável rank recebe o correspondente título ("IRON", "BRONZE", etc.).

### **🛠️ Quarto e último Passo:**
Saída no console:
<div align="center">
<img src="https://github.com/EzauLira/Segundo-Desafio-DIO/assets/149651629/775b0d8a-0a5b-457b-b82a-b4f7a6583691" height="80" />
</div>
Estes comandos de console exibem uma mensagem parabenizando o herói pelo seu rank e nível, utilizando as variáveis rank e level. A formatação da mensagem é estilizada com alguns espaçamentos e caracteres especiais.

## 🤝 Agradecimentos:
Obrigado a Equipe [DIO](https://web.dio.me/) e professor: [Felipe Aguiar](https://www.instagram.com/felipeaguiar.exe/), por me proporcionar essa experiência incrível de aprendizado e evolução 😎🤝

## 💻 Tecnologias usadas: 
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="50" height="30" />    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" width="30" height="30" /> 
