# Estrutura de Pasta Automática para Projetos React

Este projeto fornece um script Node.js para facilitar a criação de uma estrutura de pasta básica em projetos React. Ele é especialmente útil para os tipos de pasta 'components', 'pages', 'utils', 'services', 'hooks', e 'routes'. Este script ajuda a manter a organização do código e acelera o processo de configuração inicial.

## Instalação

1. **Pré-requisitos:** Verifique se você tem o Node.js instalado em seu sistema.

2. **Instalar o Pacote:** Instale o pacote diretamente do GitHub com o seguinte comando:

    ```bash
    npm install https://github.com/nerigleston/structure
    ```

3. **Instalar Dependências:** Instale as dependências do projeto com o seguinte comando:

    ```bash
    npm install
    ```

## Uso

Para usar o script, execute o seguinte comando, substituindo `[tipo-da-pasta]` e `[nome-da-pasta]` pelos valores desejados:

```bash
npm run create-folder [tipo-da-pasta] [nome-da-pasta]
```

O script irá criar a estrutura de pasta no diretório `src` do seu projeto, com os arquivos necessários para o tipo de pasta especificado.

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
│       ├── components/
│       │   └── [NomeDoComponente]/
│       │       ├── index.jsx
│       │       └── style.js
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

- `npm run create-folder components [nome-da-pasta]/[nome-do-componente]`: Executa o script para criar a estrutura de pasta de um componente dentro da pasta 'pages'.

## Dependências

Este projeto utiliza as seguintes dependências:

- `fs`: Para manipulação de arquivos e diretórios.
- `path`: Para manipulação de caminhos de arquivo.
- `ejs`: Para renderização de modelos EJS.
- `config.json`: Para configuração dos tipos de pasta e dos arquivos a serem criados.

Lembre-se de manter o `config.json` atualizado conforme necessário para atender às necessidades específicas do seu projeto.

## Ajuda

O script fornece um comando de ajuda para orientar o usuário. Para acessar a ajuda, execute o seguinte comando:

```bash
npm run create-folder help
```

Você pode obter ajuda sobre um tópico específico executando:

```bash
npm run create-folder help [tópico]
```

Os tópicos de ajuda disponíveis são: 'usage', 'examples', e 'types'.