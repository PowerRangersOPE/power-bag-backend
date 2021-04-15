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
      } = await this.findClienteByEmail.execute({ email });

      const match = await comparePassword(senha, clienteSenha);

      if (!match) throw new Error('Senha didnt match');

      console.log(process.env.SECRET);

      const token = jwt.sign(
        {
          cliente: { id: clienteId, email: clienteEmail },
        },
        process.env.SECRET,
        {
          expiresIn: 604800, // 1 semana
        }
      );

      return { token };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = validateLogin;
