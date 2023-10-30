# Sistema de controle de acesso - SCA

## Ferramentas

1. Mysql 8
2. ASDF
3. Nodejs 20.9.0
4. yarn 1.22.19
5. Docker
6. Docker compose

## Banco de dados em docker

1. Iniciar (usaurio: root, senha: root, database: sca)

    docker compose up -d

## Variaveis de ambiente

1. Podem ser monitoradas em config/env.js

## Desenvolviento

1. Instalar dependências

    yarn install

2. Migrar database

    yarn db:migrate

3. Criar seeds

    yarn db:seed

4. Iniciar

    yarn dev