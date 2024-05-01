# Estrutura de Pasta

Este é um script Node.js simples para criar uma estrutura de pasta básica em um projeto, especificamente para os tipos 'components', 'pages' e outros.

## Uso

Este script cria automaticamente uma estrutura de pasta com arquivos necessários para o desenvolvimento de componentes, páginas ou outros tipos de arquivos em um projeto React. Siga estas etapas para usar o script:

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
    npm run create-folder [tipo-da-pasta] [nome-da-pasta]
    ```

5. **Siga as Instruções:** Siga as instruções no terminal para inserir o nome da pasta e o tipo de pasta desejado.

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
├── pages/
│   └── [NomeDaPasta]/
│       ├── index.jsx
│       ├── model.jsx
│       ├── view.jsx
│       └── style.js
│
└── [TipoOutro]/
    └── [NomeDaPasta]/
        ├── index.jsx
        └── style.js
```

## Scripts

- `npm run create-folder [tipo-da-pasta] [nome-da-pasta]`: Executa o script para criar a estrutura de pasta, solicitando o nome da pasta e o tipo de pasta ('components', 'pages' ou outro).

## Dependências

Este projeto usa as seguintes dependências:

- `fs`: Para manipular arquivos e diretórios.
- `path`: Para lidar com caminhos de arquivo.
- `ejs`: Para renderizar modelos EJS.
- `config.json`: Para configurar os tipos de pasta e os arquivos a serem criados.
  
Lembre-se de manter o `config.json` atualizado conforme necessário.