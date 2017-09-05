/* GET home page. */
exports.index = function(req, res){
  res.render('index', { title: '51h5' });
};


exports.admin = function(req, res){
  res.render('admin', { title: '51h5' });
};

