const userRepository= require("../repositories/users")

const getUsers = () => {
    return userRepository.getUsers();
}

const getUsersById = (idUser) => {
   return userRepository.getUsersById(idUser);
}

const createUser = (body) => {
    return userRepository.createUser(body);
}

const deleteUser = (idUser) => {
    return userRepository.deleteUser(idUser);
}

const updateUser = (idUser, body) => {
    return userRepository.updateUser(idUser, body);
}

module.exports = {
    getUsers,
    getUsersById,
    createUser,
    deleteUser,
    updateUser
}

