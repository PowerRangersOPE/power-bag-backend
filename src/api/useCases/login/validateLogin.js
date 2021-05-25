const { compare: comparePassword } = require('bcrypt');
const jwt = require('jsonwebtoken');

class validateLogin {
  constructor({ findClienteByCPF }) {
    this.findClienteByCPF = findClienteByCPF;
  }

  async execute({ cpf, senha }) {
    try {
      const {
        id: clienteId,
        cpf: clienteCPF,
        senha: clienteSenha,
        adm,
      } = await this.findClienteByCPF.execute({ cpf });

      const match = await comparePassword(senha, clienteSenha);

      if (!match) throw new Error('Senha didnt match');

      const token = jwt.sign(
        {
          cliente: { id: clienteId, cpf: clienteCPF, adm },
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
