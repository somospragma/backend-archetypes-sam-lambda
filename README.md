
# Arquetipo SAM lambda javascript

Backend Archetypes SAM Lambda es un proyecto de código abierto que proporciona arquetipos para crear diferentes tipos de backends utilizando AWS Lambda y la arquitectura Serverless


![NPM](https://img.shields.io/npm/v/npm.svg?logo=npm)
![Joi](https://img.shields.io/badge/Joi-17.12.1-blue)
![@aws-sdk/client-dynamodb](https://img.shields.io/badge/aws%2Fsdk--client--dynamodb-3.506.0-blue)
![@aws-sdk/lib-dynamodb](https://img.shields.io/badge/aws--sdk/lib--dynamodb-3.506.0-blue)
![jest](https://img.shields.io/badge/jest-29.7.0-blue)
![SAM CLI Version](https://img.shields.io/github/release/aws/aws-sam-cli.svg?label=SAM%20CLI%20Version)


## Features

- Conexion con dynamoDB
- valida datos antes de guardar en dynamoDB
- pruebas unitarias con cobertura del 100%


## Estructura de proyecto
````
BACKEND-ARCHETYPES-SAM-LAMBDA
 ┣ events (json de datos para invocacion local)
 ┃  ┣ get.json
 ┃  ┗ save.json
 ┣ src (core del proyecto)
 ┃  ┣ app (Organiza la lógica de negocios, Se comunica con la capa de servicios)
 ┃  ┃  ┗ save.app.js
 ┃  ┣ config (Centraliza configuraciones y utilidades Ejemplos: esquema JSON, validaciones)
 ┃  ┃  ┣ schema
 ┃  ┃  ┃  ┗ save.schema.js
 ┃  ┃  ┗ aws.config.js
 ┃  ┣ handler (Entrada a la función lambda, No contiene lógica de negocios)
 ┃  ┃  ┗ save.handler.js
 ┃  ┗ service (Patrones de diseño, Servicios de terceros o AWS, Abstracción de librerías y módulos)
 ┃     ┗ dynamodb.service.js
 ┣ test
 ┃  ┗ unit
 ┃     ...
 ┣ .gitignore
 ┣ app.js (punto de entra de la aplicacion)
 ┣ env.json
 ┣ package.json
 ┣ README.md
 ┣ samconfig.toml
 ┗ template.yaml
````

## Environment Variables

To run this project, you will need to add the following environment variables to your env.json file

`SAMPLE_TABLE`


## Run Locally

Clone el project

```bash
  git clone https://github.com/somospragma/backend-archetypes-sam-lambda.git
```

Ir al directorio del proyecto

```bash
  cd backend-archetypes-sam-lambda
```

Instalar dependencias

```bash
  npm install
```

Inicie el servidor local sam
```bash
  npm run start-api
  curl http://localhost:3000/
```


## Authors

- [@Jamer Pinto](https://www.github.com/hammer.pinto)


## Despliegue

Desplegar el proyecto atraves de SAM

```bash
    sam build
    sam deploy --guided
```

