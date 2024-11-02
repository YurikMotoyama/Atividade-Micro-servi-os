const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
    const hash = await bcrypt.hash(password, 10); //10 é o "nivel" de encriptamento da senha 👌
    return hash//  a função recebe a senha, encripta ela baseado no nivel de encriptamento e retorna ela criptografada (mais ou menos isso 🥷)
}

const comparePasswords = async (password, hash) => {   // função para comparar um hash e uma senha (provavelmente retorna boolean)
    const match = await bcrypt.compare(password, hash);
    return match;
}

module.exports = {  //exportacao das funções para usar em outros projetos
    hashPassword,
    comparePasswords
};
