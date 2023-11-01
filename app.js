const express = require('express')
//passa uma informação(biblioteca express) para constante express
const userService = require('./services/users')
const app = express()
// a const app recebe uma função da biblioteca express com seus parametros
const port = 3005
//porta para ser usada no localhost pelo node
app.use(express.json());
//cria uma aplicação express que aceita informações json - podendo inserir informações

//get users - exibe/retorna/cria o acesso aos usuários, passando a rota /users
app.get('/users', (req, response) => {
  response.json(userService.getUsers());
})


//pega as informações de 1 usuário 
app.get('/users/:id', (req, response) => {

  //pegar o id da requisição
  const idUser = req.params.id;
  
  //encontrar o usuário correspondente no bd - toda vez que vc quiser algo menor que a lista(array) original usar o filter
  // se usar map ele iria retorna todos 

  //responder a requisição com as info do usuário
  response.json(userService.getUsersById(idUser));

})

//Adiciona uma nova informação ao banco de dados
app.post("/users", (request, response) =>{

 //pegar o corpo da requisição
  const body = request.body;
 //retorna a requisição com o banco atualizado/completo
  response.status(201).json(
    
  ); 

})

//Deleta uma informação no banco de dados
app.delete("/users/:id", (request, response) => {

  //pegar o id da requisição
  const idUser = request.params.id;

  userService.deleteUser(idUser);

  //deletar o condenado

  //responder com o meu banco atualizado
  response.json("Apagado com sucesso");
}) 

//Atualiza as informaçãos no banco de dados
app.patch("/users/:id", (request, response) => {

//pegar o id da requisição
const idUser = request.params.id;
//pegar o corpo da requisição
const body = request.body;
userService.updateUser(idUser, body);

response.status(200);

})


// cria o acesso ao localhost retornando um servidor node
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

