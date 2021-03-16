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
  - In your terminal: ` npm i ` or `yarn`

# Environment

Create file with name: `.env`

Insert into .env: 

```
PORT=3000
```

# Init project 
- In your terminal: ` npm run dev ` or `yarn dev`

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

## List Router

**Copy:**

```
curl --request GET \
  --url http://localhost:3000/test
```

## Create route

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