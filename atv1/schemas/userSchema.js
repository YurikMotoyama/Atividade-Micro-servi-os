const { z } = require("zod");

const userSchema = z.object({ //define o "molde" a ser seguido para os campos
    email: z.string({message: "Campo obrigatório."}).email({ message: "Email inválido" }), //define o tipo do "molde" e uma mensagem caso haja algum erro. 
    nome: z.string({message: "Campo obrigatório."}).min(2, { message: "Nome deve ter pelo menos 2 caracteres" }), //tambem define o tipo e uma mensagem, e em seguida uma qiantade minima de caracteres
    senha: z.string({message: "Campo obrigatório."}).min(6, { message: "Senha deve ter pelo menos 6 caracteres" })
});

module.exports = userSchema;