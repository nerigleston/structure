Aqui está o README.md para o seu projeto:

---

# Estrutura de Pasta Automatizada para Projetos React

Este projeto oferece uma maneira fácil de criar estruturas de pasta personalizadas para seus projetos React. Com este script simples, você pode criar estruturas de pasta para componentes ou páginas React, incluindo arquivos `index.jsx`, `model.jsx`, `view.jsx` e `style.js`, com o conteúdo padrão pré-definido.

## Instalação

Para usar este script em seu projeto, você precisa instalar as dependências necessárias. Execute o seguinte comando:

```bash
npm install 
```

## Uso

Após instalar as dependências, você pode executar o script `create-folders.js` fornecido neste projeto para criar a estrutura de pasta desejada. O script solicitará que você insira o nome da pasta e o tipo de pasta (componentes ou páginas).

```bash
node create-folders.js <tipo-de-pasta>
```

Substitua `<tipo-de-pasta>` por `components` ou `pages`, dependendo do tipo de pasta que deseja criar.

Por exemplo, para criar uma estrutura de pasta para componentes:

```bash
node create-folders.js components
```

## Estrutura de Pasta Criada

O script criará a seguinte estrutura de pasta dentro do diretório `src` do seu projeto:

```
src/
├── components/
│   └── NomeDaPasta/
│       ├── index.jsx
│       ├── model.jsx
│       ├── view.jsx
│       └── style.js
└── pages/
    └── NomeDaPasta/
        ├── index.jsx
        ├── model.jsx
        ├── view.jsx
        └── style.js
```