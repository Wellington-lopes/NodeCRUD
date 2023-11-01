let {bd} = require('../databases/users')

const getUsers = () => {

    return bd;

}

const getUsersById = (idUser) => {
    
   return bd.filter((usuario) => usuario.id === idUser);
}
//criar um novo objeto a partir desse corpo
 //adicionar esse novo objeto no banco
const createUser = (body) => {
    const newUser = {
        id: (bd.length+1).toString(),
        name: body.name
    }
    bd.push(newUser);
    return newUser;
}

const deleteUser = (idUser) => {
      //percorrer o banco e encontrar quem tem o id da requisição
    bd = bd.filter((usuario) => usuario.id != idUser);
    return null;
}

const updateUser = (idUser, body) => {

    //percorrer o banco
bd = bd.map((usuario) => {

    if(usuario.id === idUser){
      //atualizar as informações  
      usuario.name = body.name;
    }
    return usuario
  })
  //responder a requisição com o banco
  return bd;

}

module.exports = {
    getUsers,
    getUsersById,
    createUser,
    deleteUser,
    updateUser
}
