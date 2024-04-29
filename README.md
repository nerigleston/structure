# Estrutura de Pasta

Este é um script Node.js simples para criar uma estrutura de pasta básica em um projeto, especificamente para os tipos 'components' e 'pages'.

## Uso

Este script cria automaticamente uma estrutura de pasta com arquivos necessários para o desenvolvimento de componentes ou páginas em um projeto React. Siga estas etapas para usar o script:

1. **Pré-requisitos:** Certifique-se de ter o Node.js instalado em seu sistema.

2. **Instalar o Pacote:** Instale o pacote a partir do GitHub com o seguinte comando:
    ```bash
    npm install https://github.com/nerigleston/structure
    ```

3. **Instalar Dependências:** Instale as dependências do projeto com o seguinte comando:

    ```bash
    npm install
    ```

4. **Executar o Script:** Execute o script com o seguinte comando:

    ```bash
    npm run create-folder [components ou pages]
    ```

5. **Siga as Instruções:** Siga as instruções no terminal para inserir o nome da pasta e o tipo de pasta ('components' ou 'pages').

6. **Estrutura de Pasta Criada:** A estrutura de pasta será criada no diretório `src` do seu projeto, contendo os arquivos necessários para o tipo de pasta especificado.

## Estrutura de Arquivos

A estrutura de pasta criada pelo script será semelhante a:

```
src/
│
├── components/
│   └── [NomeDaPasta]/
│       ├── index.jsx
│       └── style.js
│
└── pages/
    └── [NomeDaPasta]/
        ├── index.jsx
        ├── model.jsx
        ├── view.jsx
        └── style.js
```

## Scripts

- `npm run create-folder [components ou pages]`: Executa o script para criar a estrutura de pasta, solicitando o nome da pasta e o tipo de pasta ('components' ou 'pages').

## Dependências

Este projeto usa as seguintes dependências:

- `fs`: Para manipular arquivos e diretórios.
- `readline-sync`: Para ler a entrada do usuário no terminal.
- `mkdirp`: Para criar diretórios recursivamente.
- `touch-cli`: Para criar arquivos vazios.
