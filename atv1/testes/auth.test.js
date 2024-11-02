const { hashPassword, comparePasswords } = require('../utils/auth');

describe('Password hashing and comparison', () => {
    it('should hash a password', async () => {
        const password = 'mySecretPassword';
        const hash = await hashPassword(password);
        expect(hash).not.toBe(password); 
    });

    it('should compare passwords correctly', async () => {
        const password = 'senhaIncrivelmenteDificil';
        const hash = await hashPassword(password);

        const match = await comparePasswords(password, hash);
        expect(match).toBe(true); // faz a comparação esperando que as senhas se coincidem, ou seja, se for igual, retornara true

        const wrongPassword = 'senhaErrada';
        const wrongMatch = await comparePasswords(wrongPassword, hash);
        expect(wrongMatch).toBe(false); //faz a comparação esperando que seja a senha errada, ou seja, se for a senha errada ele retornara true
    });
});