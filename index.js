const readlineSync = require('readline-sync');
const { mkdirp } = require('mkdirp');
const fs = require('fs');

const args = process.argv.slice(2);
const folderType = args[0] || '';

const folderName = readlineSync.question('Digite o nome da pasta: ');

if (folderType !== 'components' && folderType !== 'pages') {
    console.error('Tipo de pasta inválido. Use "components" ou "pages".');
    process.exit(1);
}

mkdirp(`src/${folderType}/${folderName}`).then(() => {
    const indexPath = `src/${folderType}/${folderName}/index.jsx`;
    const modelPath = `src/${folderType}/${folderName}/model.jsx`;
    const viewPath = `src/${folderType}/${folderName}/view.jsx`;
    const stylePath = `src/${folderType}/${folderName}/style.js`;

    const indexContent = `import React from 'react';\nimport use${folderName} from './model';\nimport ${folderName}View from './view';\n\nexport default function ${folderName}() {\n  const ${folderName}Model = use${folderName}();\n\n  return <${folderName}View {...${folderName}Model} />;\n}\n`;
    const modelContent = `export default function use${folderName}() {\n  return {};\n}\n`;
    const viewContent = `import React from 'react';\nimport * as Styled from './style';\n\nexport default function ${folderName}View() {\n  return (\n    <Styled.ContainerPage></Styled.ContainerPage>\n  );\n}\n`;
    const styleContent = `import styled from 'styled-components';\n\nexport const ContainerPage = styled.div\`\`;`;

    fs.writeFileSync(indexPath, indexContent);
    fs.writeFileSync(modelPath, modelContent);
    fs.writeFileSync(viewPath, viewContent);
    fs.writeFileSync(stylePath, styleContent);

    console.log(`Estrutura de pasta criada com sucesso para "${folderName}"`);
}).catch(err => console.error(err));