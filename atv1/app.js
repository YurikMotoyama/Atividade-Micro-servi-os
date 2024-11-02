const express = require ('express')
const bcrypt = require("bcrypt");
const userSchema = require("./schemas/userSchema");
const { User } = require("./models");

const app = express()
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Rodando...")
})

app.post("/signup", async (req, res) => {
    try {
        const validatedData = userSchema.parse(req.body);

        const hashedPassword = await bcrypt.hash(validatedData.senha, 10);

        const newUser = await User.create({
            email: validatedData.email,
            nome: validatedData.nome,
            senha: hashedPassword
        });

        res.status(201).json({ message: "Usuário criado com sucesso!", user: newUser });
    } catch (error) {
        if (error.name === "ZodError") {
            res.status(400).json({ errors: error.errors });
        } else {
            res.status(500).json({ error: "Erro ao criar usuário" });
        }
    }
});

app.listen(3000, () => {
    console.log("Aplicação online")
})