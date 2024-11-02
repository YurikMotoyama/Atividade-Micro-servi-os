const userSchema = require('../schemas/userSchema'); //puxando o esquema zod que foi definido nos esquemas da pasta Schemas

describe("User Schema", () => { // describe agrupa os testes
    it("should validate a valid user", () => {
        const validUser = {
            email: "user@example.com",
            nome: "User",
            senha: "password123"
        };
        
        expect(() => userSchema.parse(validUser)).not.toThrow();
    });

    it("should throw an error for an invalid email", () => {
        const invalidUser = {
            email: "invalid-email",
            nome: "User",
            senha: "password123"
        };

        expect(() => userSchema.parse(invalidUser)).toThrow("Email inválido");
    });

    it("should throw an error for a short name", () => {
        const invalidUser = {
            email: "user@example.com",
            nome: "U",
            senha: "password123"
        };

        expect(() => userSchema.parse(invalidUser)).toThrow("Nome deve ter pelo menos 2 caracteres");
    });

    it("should throw an error for a short password", () => {
        const invalidUser = {
            email: "user@example.com",
            nome: "User",
            senha: "123"
        };

        expect(() => userSchema.parse(invalidUser)).toThrow("Senha deve ter pelo menos 6 caracteres");
    });
});