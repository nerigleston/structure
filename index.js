const readlineSync = require('readline-sync');
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const folderType = args[0] || '';

const folderName = readlineSync.question('Digite o nome da pasta: ');

const validFolderTypes = ['components', 'pages'];

if (!folderName.trim()) {
    console.error('Nome da pasta não pode estar vazio.');
    process.exit(1);
}

if (!validFolderTypes.includes(folderType)) {
    console.error('Tipo de pasta inválido. Use "components" ou "pages".');
    process.exit(1);
}

const fileConfig = {
    components: ['index.jsx', 'style.js'],
    pages: ['index.jsx', 'model.jsx', 'view.jsx', 'style.js'],
};

const folderPath = path.join('src', folderType, folderName);

try {
    fs.mkdirSync(folderPath, { recursive: true });

    const filesToCreate = fileConfig[folderType];

    filesToCreate.forEach((file) => {
        const filePath = path.join(folderPath, file);
        let fileContent = '';

        switch (file) {
            case 'index.jsx':
                fileContent = folderType === 'components'
                    ? `import * as Styled from './style';\n\nexport default function ${folderName}() {\n  return (\n    <Styled.ContainerPage></Styled.ContainerPage>\n  );\n}\n`
                    : `import React from 'react';\nimport use${folderName} from './model';\nimport ${folderName}View from './view';\n\nexport default function ${folderName}() {\n  const ${folderName}Model = use${folderName}();\n\n  return <${folderName}View {...${folderName}Model} />;\n}\n`;
                break;
            case 'model.jsx':
                fileContent = `export default function use${folderName}() {\n  return {};\n}\n`;
                break;
            case 'view.jsx':
                fileContent = `import React from 'react';\nimport * as Styled from './style';\n\nexport default function ${folderName}View() {\n  return (\n    <Styled.ContainerPage></Styled.ContainerPage>\n  );\n}\n`;
                break;
            case 'style.js':
                fileContent = `import styled from 'styled-components';\n\nexport const ContainerPage = styled.div\`\`;`;
                break;
        }

        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, fileContent);
        } else {
            console.error(`O arquivo ${filePath} já existe. Pulando...`);
        }
    });

    console.log(`Estrutura de pasta criada com sucesso para "${folderName}"`);
} catch (err) {
    console.error(err);
}
