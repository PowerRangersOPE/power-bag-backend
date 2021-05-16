const { compare: comparePassword } = require('bcrypt');
const jwt = require('jsonwebtoken');

class validateLogin {
  constructor({ FindClienteByEmail }) {
    this.findClienteByEmail = FindClienteByEmail;
  }

  async execute({ email, senha }) {
    try {
      const {
        id: clienteId,
        email: clienteEmail,
        senha: clienteSenha,
        adm,
      } = await this.findClienteByEmail.execute({ email });

      const match = await comparePassword(senha, clienteSenha);

      if (!match) throw new Error('Senha didnt match');

      const token = jwt.sign(
        {
          cliente: { id: clienteId, email: clienteEmail, adm },
        },
        process.env.SECRET,
        {
          expiresIn: 604800, // 1 semana
        }
      );

      return { token, clienteId };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = validateLogin;
