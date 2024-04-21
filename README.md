# API REST D&D 5ª edição

Uma API REST feita com Node.JS, Fastify e Mongoose, para a criação de fichas de personagens para D&D 5ª edição e cadastro de usuários no sistema.

## Instalação

É necessário o uso do [MongoDB](https://www.mongodb.com/pt-br/) e é recomendado o uso do MongoDB Compass, para melhor visualização do banco de dados. É recomendada a criação de um banco utilizando o [MongoDB Atlas](https://www.mongodb.com/pt-br/atlas), mas fica a seu critério a instalação do MongoDB ou criação de um container via Docker. Após ter o banco de dados pronto, crie um arquivo .env na raíz do projeto e adicione o seguinte campo:

```bash
MONGO_URL="endereço_do_seu_banco"
```

Após feito isso, vá para a raíz do projeto e digite:

```bash
# Necessário ter o Node.js instalado
npm i
```

E então no terminal:

```bash
# Para iniciar o servidor:
npm run dev
```

## TODO

- [ ] Criar a documentação das rotas com o Swagger
- [ ] Adicionar a validação dos dados da requisição com o Zod
- [ ] Acertar a tipagem
- [ ] Criar a rota para efetuar o login
- [ ] Criar validação com token JWT

## Feito

- [x] Criar a rota para criação de conta
- [x] Criar a rota para atualização de usuário
- [x] Criar a rota para deletar o usuário
- [x] Criar a rota para criar uma ficha de personagem do usuário
- [x] Criar a rota para listar as fichas de personagens criados pelo usuário
- [x] Criar a rota para editar uma ficha de personagem criada pelo usuário
- [x] Criar a rota para deletar uma ficha de personagem criada pelo usuário

## Notas

Esse projeto foi inicialmente criado utilizando o PostgreSQL, Prisma, Swagger e Zod. Mas por questão de praticidade, recriei o projeto utilizando o MongoDB e Mongoose. Por isso, ainda podem existir "resquícios" de valores relacionados ao Zod, Swagger e/ou Prisma.
