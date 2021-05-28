const getClienteUseCase = require('../useCases/cliente');

const { verifyClienteByCPF } = getClienteUseCase();

module.exports = async (req, res, next) => {
  try {
    const foundClientByCPF = await verifyClienteByCPF.execute(req.body);

    if (foundClientByCPF) {
      return res
        .status(400)
        .json({ message: 'CPF já cadastrados no sistema.' });
    }
    next();
  } catch (error) {
    throw error;
  }
};
