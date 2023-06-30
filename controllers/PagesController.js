exports.home = (req, res) => {
  res.render('home', { formMessage: req.flash('form') });  
};
exports.contact = (req, res) => {
  res.render('contact');  
};
