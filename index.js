const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const folderType = args[0] || '';
const folderName = args[1] || '';

const validFolderTypes = ['components', 'pages'];

if (!validFolderTypes.includes(folderType)) {
    console.error('Tipo de pasta inválido. Use "components" ou "pages".');
    process.exit(1);
}

if (!folderName.trim()) {
    console.error('Nome da pasta não pode estar vazio, deve ser ex: "npm run create-folder components NomeDaPasta"');
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
            console.log(`Arquivo "${file}" criado com sucesso em "${folderPath}"`);
        } else {
            console.error(`Arquivo "${file}" já existe na pasta "${folderPath}"`);
        }
    });
} catch (err) {
    console.error('Erro ao criar a pasta:', err);
    process.exit(1);
}
