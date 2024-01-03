# Documentação da API Lubtech

Ao clonar o repositório do github, baixe e instale as dependências rodando o seguinte código no terminal:

```node
$ npm install
```

## Extensões

Instale as extensões necessárias

- Prisma:
  ![Prisma Extensão](./assets/prisma_extension.png)

- DotENV:
  ![DotENV Extensão](assets/dotenv_extension.png)

## Configurações de usuário

Abra as configurações JSON do usuário apertando **CRTL + SHIFT + P** e digite "user json"
![User config](./assets/user_json.png)
Adicione a seguinte linha no código:

```json
"[prisma]": {
"editor.formatOnSave": true
},
```

## Instalação do PostgreSQL

- Entre no [link](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads) e baixe a versão que se adeque ao seu sistema operacional.
- Instale o aplicativo que foi baixado e configure com a senha que desejar.

## Configuração Prisma + PostgreSQL

- Abra o pgAdmin 4 e crie um banco de dados

![Criando banco de dados no pgAdmin 4](./assets/create_db.png)

Adicione o nome que deseja ao banco de dados e clique em salvar

![Nome do banco de dados](assets/create_db_2.png)

- Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis:

```json
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
PORT=3000
HOST="0.0.0.0"
```

No **DATABASE_URL** troque o "johndoe" por "postgres"

O "randompassword" deverá ser substituido pela senha criada por você na instalação do postgreSQL;

"mydb" deverá ser substituido pelo nome do banco que você criou.

Com o banco criado e as variáveis de ambientes definidas, você deverá rodar o seguinte código no terminal

```node
$ npx prisma migrate dev
```

Dê um nome para a sua migration, aperte enter.

## Conclusão

That's it, a configuração inicial está concluída e para rodar o servidor, basta usar o comando

```node
$ npm run dev
```
