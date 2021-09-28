const Chance = require('chance');

const chance = Chance();

module.exports = async (req, res, next) => {
  try {
    req.body.email = chance.email();
    req.body.cpf = chance.cpf().replace(/[\W\s]/gi, '');
    req.body.nome = chance.name();
    req.body.dat_nasc = chance.birthday({ string: true });
    req.body.tel_cel1 = Math.floor(10000000000 + Math.random() * 90000000000);
    req.body.tel_cel2 = Math.floor(10000000000 + Math.random() * 90000000000);
    req.body.status = false;
    return next();
  } catch ({ message }) {
    return res.status(403).json({ message });
  }
};
