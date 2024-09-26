# Servindo o projeto
Considerando que você já tenha clonado o projeto, basta seguir os comandos abaixo:

* Para atualizar as dependências utilizadas no projeto e evitar erros na inicialização do mesmo:
```shell
npm install
```

* Para inicializar o projeto:
```shell
npm start
```

# Deploy
O deploy é realizado na branch "gh-pages" e, automaticamente, através do comando:

```shell
npm run deploy #que já envia o build para a branch remota do gh-pages
```
Obs: A navegação em deploy não funciona com a utilização do BrowserRouter, sendo necessária a sua substituição para o HashRouter.
