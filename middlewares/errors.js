exports.notFound = (req, res, next) => {
  const err = new Error('404 page not found');
  err.status = 404;
  next(err);
};

exports.catchAsync = (fn) => (
  (req, res, next) => { fn(req, res, next).catch(err => next(err)) }
);

exports.catchErrors = (err, req, res, next) => {
  if (err.code === '42703') {
    res.render('home', { formMessage: 'oooops sth went wrong'}) ;
  } else {
    res.status(err.status || 500)
    res.render('error', {
      message: err.message
    });
  }
};
