const express = require('express')
//passa uma informação para constante express
const app = express()
// a const app recebe uma função da biblioteca express com seus parametros
const port = 3005
//porta para ser usada no localhost
app.use(express.json());
//cria uma aplicação express

//get users - cria o acesso aos usuários
app.get('/users', (req, response) => {
  response.json(bd);
})

// cria o acesso ao localhost retornando um servidor node
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//pega as informações do usuário
app.get('/users/:id', (req, response) => {

  //pegar o id da requisição
  const idUser = req.params.id;
  
  //encontrar o usuário correspondente no bd
  const user = bd.filter((usuario) => usuario.id === idUser);

  //responder a requisição com as info do usuário
  response.json(user);

})

//Adiciona uma nova informação ao banco de dados
app.post("/users", (request, response) =>{

 //pegar o corpo da requisição
  const body = request.body;


 //criar um novo objeto a partir desse corpo
  const newUser = {
    id: (bd.length+1).toString(),
    name: body.name
  }
 //adicionar esse novo objeto no banco
  bd.push(newUser);

 //responder a requisição com o banco completo
  response.json(bd); 

})

//Deleta uma informação no banco de dados
app.delete("/users/:id", (request, response) => {

  //pegar o id da requisição
  const idUser = request.params.id;

  //percorrer o banco e encontrar quem tem o id da requisição
  bd = bd.filter((usuario) => usuario.id != idUser);

  //deletar o condenado

  //responder com o meu banco atualizado
  response.json(bd);
})

//Atualiza as informaçãos no banco de dados
app.patch("/users/:id", (request, response) => {

//pegar o id da requisição
const idUser = request.params.id;

//pegar o corpo da requisição
const body = request.body;

//percorrer o banco
bd = bd.map((usuario) => {

  if(usuario.id === idUser){
    //atualizar as informações  
    usuario.name = body.name;
  }
  return usuario
})

//responder a requisição com o banco
response.json(bd);
})

let bd = [
  {
    id: "1",
    name: "Well",
  },
  {
    id: "2",
    name: "Ray",
  }
]

