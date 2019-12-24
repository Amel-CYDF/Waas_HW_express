var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  const repeat = req.query.repeat || 0;
  if(req.query.phrase !== "killa") {
    return res.render('form', {method: 'get', success: false, repeat: repeat});
  }
  return res.render('form', {method: 'get', success: true, repeat: repeat});
});

router.post('/', function(req, res) {
  const repeat = req.body.repeat || 0;
  if(req.body.phrase !== "polar") {
    return res.render('form', {method: 'post', success: false, repeat: repeat});
  }
  return res.render('form', {method: 'post', success: true, repeat: repeat});
});

router.put('/', function(req, res) {
  const repeat = req.body.repeat || 0;
  if(req.body.phrase !== "pocky") {
    return res.render('form', {method: 'put', success: false, repeat: repeat});
  }
  return res.render('form', {method: 'put', success: true, repeat: repeat});
});

router.delete('/', function(req, res) {
  return res.render('form', {method: 'delete', success: true, repeat: 1});
});

module.exports = router;
