# exemplo-node-package

Ao enviar um pacote Node.js no Github, é possível instalar o mesmo através da ferramenta *npm*.
Como exemplo, criei esse pacote que consegue retornar todos os repositórios do IFRN-SC aqui no Github.

# Como instalar esse pacote no seu projeto

```
npm i IFRN-SC/exemplo-node-package 
```

# Utilização

Node.js (Javascript)

```js
const enp = require('exemplo-node-package')

// espere a promise finalizar depois mostre no console o resultado da função
enp.getIfrnScRepositorios().then(console.log)
```
