

module.exports = (req, res, next) => {    
    const status = req.body.status
    if (!process.env.STATUS_BAG
      .split(',')
      .includes(status)) return res.status(403).json({ message: 'Invalid status'});
      next();
      
}


