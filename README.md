# How the architecture works:

```
src
│   app.js          # Configurações da api
│   server.js       # Server para iniciar o api
└───api
  └───controllers   # Funções da controllers do express route
  └───models        # Modelos do banco de dados
  └───services      # Regras de negócio
  └───database      # Conexão com banco de dados
  └───models        # Modelos do banco de dados
└───config          # Configuração das variaveis de ambiente
└───test            # Testes unitários e de integração
└───utils           # Trechos de código pequeno
└───routes          # Definição de rotas express
```

# How you use:

- clone the repository
- install dependencies:
  - In your terminal: `npm i` or `yarn`

# Environment

Create file with name: `.env`

Insert into .env:

```
PORT=3000
```

# To enable ESLint

## Configure settings.json for VSCode

- Open configurations with `CTRL + SHIFT + P`
- Add in the end of file:

  ```
  "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
  },
  "emmet.syntaxProfiles": {
      "javascript": "jsx"
  },
  "editor.formatOnSave": true,

  ```

- Install Plugins:
  - ESLint
  - EditorConfig for VS Code
  - Prettier - Code formatter

# Init project

- In your terminal: `npm run dev` or `yarn dev`

# Routes

For use api's routes, you need software Insomnia Core

## Tutorial

- Copy the curl of router bellow
- On Insomnia:
  - Click in arrow beside workspace's name
  - Click in:
    - Import/Export
    - Import Data
    - From Clipboard
    - Current

## List

**Copy:**

```
curl --request GET \
  --url http://localhost:3000/test
```

## Create

**Copy:**

```
curl --request POST \
  --url http://localhost:3000/test \
  --header 'Content-Type: application/json' \
  --data '{
	"name": "Cleiton",
	"age": 29
}'
```

# Power Bag

## Credit Card

```json
curl --request GET \
 --url http://localhost:3000/cartao \
 --header 'Content-Type: application/json'
```

```json
curl --request GET \
 --url http://localhost:3000/cartao \
 --header 'Content-Type: application/json'
```

```json
curl --request POST \
 --url http://localhost:3000/cartao \
 --header 'Content-Type: application/json' \
 --data '{
"numero": "2222222",
"nome": "Ricardo Wojciechowski",
"cpf": "111111111",
"validade": "22/22",
"cliente_id": 1
}'

```

```json
curl --request PUT \
 --url http://localhost:3000/cartao/4 \
 --header 'Content-Type: application/json' \
 --data '{
"numero": "2222222",
"nome": "Ricardo Wojciechowski",
"cpf": "111111111",
"validade": "22/22"
}'

```

## Address

```json
curl --request GET \
 --url http://localhost:3000/endereco \
 --header 'Content-Type: application/json'

```

```json
curl --request POST \
 --url http://localhost:3000/endereco \
 --header 'Content-Type: application/json' \
 --data '{
"rua": "José Nogueira Filho",
"numero": "119",
"bairro": "Fernão Dias",
"cidade": "Belo Horizonte",
"uf": "MG",
"cep": "06509012",
"complemento": "Próximo a escola estadual",
"observacoes": "Não estou disponível em casa nas quarta-feira",
"cliente_id": 1
}'
```

## Profile

```json
curl --request GET \
 --url http://localhost:3000/perfil \
 --header 'Content-Type: application/json'

```

```json
curl --request POST \
 --url http://localhost:3000/perfil \
 --header 'Content-Type: application/json' \
 --data '{
"necessidade": "teste",
"genero": "teste",
"cor": "teste",
"tipo_estampa": "teste",
"tipo_tenis": "teste",
"tipo_estilo": "teste",
"tamanho_sapato": "teste",
"tamanho_calca": "teste",
"tamanho_camisa": "teste",
"tamanho_tenis": "teste",
"estacao_ano": "teste",
"frequencia": "teste",
"n_quero": "teste",
"fx_taria": "teste",
"observacoes": "teste",
"cliente_id": 1
}'

```

## User

```json
curl --request GET \
 --url http://localhost:3000/cliente \
 --header 'Content-Type: application/json'

```

```json
curl --request POST \
 --url http://localhost:3000/cliente \
 --header 'Content-Type: application/json' \
 --data '{
"nome": 1,
"email": "ricardowoj@hotmail.com",
"cpf": "01212332199",
"identificacao": "Rick",
"tel_cel1": "11942692333",
"tel_cel2": "1144321121",
"dat_nasc": "23/01/1985",
"status": "ativo",
"pontuacao": "5"
}'

```

```json
curl --request POST \
 --url http://localhost:3000/cliente \
 --header 'Content-Type: application/json' \
 --data '{
"nome": "Ricardo Wojciechowski",
"email": "ricardowoj@hotmail.com",
"cpf": "01212332199",
"identificacao": "Rick",
"tel_cel1": "11942692333",
"tel_cel2": "1144321121",
"dat_nasc": "23/01/1985",
"status": "ativo",
"pontuacao": "5",
"cartao_id": 1,
"endereco_id": 1,
"perfil_id": 1
}'

```

## Bag

```json
curl --request GET \
 --url http://localhost:3000/bag \
 --header 'Content-Type: application/json'

curl --request POST \
 --url http://localhost:3000/bag \
 --header 'Content-Type: application/json' \
 --data '{
"status": "ativo",
"observacoes": "teste",
"valor": "1000",
"cliente_id": 1
}'

```

## Product

```json
curl --request GET \
 --url http://localhost:3000/produto \
 --header 'Content-Type: application/json'

curl --request POST \
 --url http://localhost:3000/produto \
 --header 'Content-Type: application/json' \
 --data '{
"valor": "teste",
"tipo": "teste",
"genero": "teste",
"fx_etaria": "teste",
"estacao_ano": "teste",
"necessidade": "teste",
"cor": "teste",
"tipo_estampa": "teste",
"tipo_estilo": "teste",
"tipo_tenis": "teste",
"tamanho_camisa": "teste",
"tamanho_sapato": "teste",
"tamanho_calca": "teste"
}'

```

## Itens Bag

```json
curl --request GET \
 --url http://localhost:3000/itensBag \
 --header 'Content-Type: application/json'
```

```json
curl --request POST \
 --url http://localhost:3000/itensBag \
 --header 'Content-Type: application/json' \
 --data '{
"bag_id": 1,
"produto_id": [1,2,3,4]
}'
```
