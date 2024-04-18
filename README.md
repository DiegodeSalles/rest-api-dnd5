# API REST D&D 5ª edição

Uma API REST feita com Node.JS, Fastify e Prisma, para a criação de fichas de personagens para D&D 5ª edição e cadastro de usuários no sistema.

## Instalação

É necessário o uso do [Docker](https://www.docker.com/products/docker-desktop/) para a instalação do PostgreSQL e pgadmin. Após feita a instalação do Docker, entre na pasta './docker' e crie um arquivo '.env':

```bash
POSTGRES_USER=seu_usuario_postgres
POSTGRES_PASSWORD=sua_senha_postgres
POSTGRES_DB=nome_do_banco
PGADMIN_EMAIL=email_login_pgadmin
PGADMIN_PASSWORD=sua_senha_pgadmin
```

Após feito isso, abra o terminal e digite:

```bash
docker compose up
```

Isso irá baixar e montar os containers necessários para o banco de dados.

Após feito isso, vá para a raíz do projeto e digite:

```bash
# Necessário ter o Node.js instalado
npm i
```

Crie na raíz do projeto um arquivo '.env':

```bash
# Substitua os valores em maiúsculo para os mesmo valores setados no arquivo .env usado na instalação do Docker
DATABASE_URL="postgresql://POSTGRES_USER:POSTGRES_PASSWORD@localhost:5432/POSTGRES_DB?schema=teste"
```

E então no terminal:

```bash
# Para criar o banco de dados:
npx prisma migrate dev

# Para iniciar o servidor:
npm run dev
```

## Swagger

O projeto utiliza o Swagger para facilitar nos testes e documentação dos endpoints. Para acessar a página de documentação entre em [http://127.0.0.1:3000/docs](http://127.0.0.1:3000/docs)

## TODO

- [x] Criar a rota para criação de conta
- [x] Criar a rota para efetuar o login
- [ ] Criar a rota para atualização de usuário
- [ ] Criar a rota para deletar o usuário
- [x] Criar a rota para criar uma ficha de personagem do usuário
- [ ] Criar a rota para listar as fichas de personagens criados pelo usuário
- [ ] Criar a rota para editar uma ficha de personagem criada pelo usuário
- [ ] Criar a rota para deletar uma ficha de personagem criada pelo usuário
