const fs = require('fs')
const path = require('path')
const ejs = require('ejs')
const config = require('./config.json')

const args = process.argv.slice(2)
const command = args[0]

if (command === 'help') {
  const helpTopic = args[1] || 'default'

  const helpTopics = {
    usage: () => {
      console.log(`
Comando: npm run create-folder <tipo-da-pasta> <nome-da-pasta>
            
Cria uma nova pasta com arquivos baseados no tipo de pasta especificado.
            `)
    },
    examples: () => {
      console.log(`
Exemplos:
- Criar uma página: npm run create-folder pages MinhaPagina
- Criar um componente dentro de uma página: npm run create-folder pages MinhaPagina/MeuComponente
- Criar um componente: npm run create-folder components MeuComponente
            `)
    },
    types: () => {
      console.log(`
Tipos de pasta disponíveis:
- components
- pages
- utils
- services
- hooks
- routes
            `)
    },
    default: () => {
      console.log(`
Comandos disponíveis:
- usage: Exibe como usar o comando.
- examples: Exemplos de como usar o comando.
- types: Lista os tipos de pasta disponíveis.
            
Para mais informações sobre um tópico específico, use "npm run create-folder help <tópico> ou 
acesse a documentação em: https://github.com/nerigleston/structure/blob/master/README.md"
            `)
    }
  }

  if (helpTopic in helpTopics) {
    helpTopics[helpTopic]()
  } else {
    console.error(`Erro: Tópico de ajuda desconhecido "${helpTopic}"`)
    console.log('Para mais informações, use "npm run create-folder help"')
  }

  process.exit(0)
}

const folderType = args[0] || ''
let folderName = args[1] || ''
let parentFolderName = ''

if (folderName.includes('/')) {
  ;[parentFolderName, folderName] = folderName.split('/')
}

const validFolderTypes = Object.keys(config.fileConfig)

if (!validFolderTypes.includes(folderType)) {
  console.error(`Tipo de pasta inválido. Use ${validFolderTypes.join(', ')}`)
  process.exit(1)
}

if (!folderName.trim()) {
  console.error(
    `Nome da pasta não pode estar vazio, deve ser ex: "npm run create-folder ${folderType} nome-da-pasta"`
  )
  process.exit(1)
}

let filesToCreate = config.fileConfig[folderType]

let folderPath = path.join('src', folderType, folderName)

if (folderType === 'pages' && parentFolderName.trim()) {
  folderPath = path.join(
    'src',
    folderType,
    parentFolderName,
    'components',
    folderName
  )
  filesToCreate = ['index.jsx', 'style.js']
}

try {
  fs.mkdirSync(folderPath, { recursive: true })

  filesToCreate.forEach((file) => {
    const filePath = path.join(folderPath, file)
    let fileContent = ''

    if (!config.fileContent[file]) {
      console.error(`Conteúdo do arquivo "${file}" não encontrado.`)
      return
    }

    fileContent = ejs.render(config.fileContent[file], {
      folderType,
      folderName
    })

    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, fileContent)
      console.log(`Arquivo "${file}" criado com sucesso em "${folderPath}"`)
    } else {
      console.error(`Arquivo "${file}" já existe na pasta "${folderPath}"`)
    }
  })
} catch (err) {
  console.error('Erro ao criar a pasta:', err)
  process.exit(1)
}
