const Bag = require('../useCases/bag');

const { findActiveBag } = Bag();

module.exports = async (req, res, next) => {
  try {
    const foundBag = await findActiveBag.execute(req.params.id);

    if (foundBag) {
      return res.status(400).json({
        message: 'Você não pode excluir a conta com uma bag ativa no sistema',
      });
    }
    next();
  } catch (error) {
    throw error;
  }
};
