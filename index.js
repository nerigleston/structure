const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const config = require('./config.json');

const args = process.argv.slice(2);
const folderType = args[0] || '';
const folderName = args[1] || '';

const validFolderTypes = Object.keys(config.fileConfig);

if (!validFolderTypes.includes(folderType)) {
    console.error(`Tipo de pasta inválido. Use ${validFolderTypes.join(', ')}`);
    process.exit(1);
}

if (!folderName.trim()) {
    console.error(`Nome da pasta não pode estar vazio, deve ser ex: "npm run create-folder ${folderType} nome-da-pasta"`);
    process.exit(1);
}

if (folderName.includes('/') || folderName.includes('\\')) {
    console.error('Nome da pasta inválido.');
    process.exit(1);
}

const filesToCreate = config.fileConfig[folderType];

const folderPath = path.join('src', folderType, folderName);

try {
    fs.mkdirSync(folderPath, { recursive: true });

    filesToCreate.forEach((file) => {
        const filePath = path.join(folderPath, file);
        let fileContent = '';
    
        if (!config.fileContent[file]) {
            console.error(`Conteúdo do arquivo "${file}" não encontrado.`);
            return;
        }
    
        fileContent = ejs.render(config.fileContent[file], { folderType, folderName });
    
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

