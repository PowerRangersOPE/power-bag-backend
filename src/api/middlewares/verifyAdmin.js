module.exports = (req, res, next) => {
  const { adm } = req.cliente;

  if (!adm) return res.status(403).json({ message: 'Only available for ADMs' });

  return next();
};
