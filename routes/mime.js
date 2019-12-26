let express = require('express');
let router = express.Router();
let path = require('path');

router.get('/', function(req, res) {
  return res.status(200).send("12월 25일 과제: MIME");
});

router.post('/', function(req, res) {
  const cntType = req.get('Content-type');
  return res.status(200).send(`etc: ${cntType}`);
});

router.post('/homework', function(req, res) {
    const cntType = req.get('Content-type');
    if(cntType === 'text/html') {
      return res.status(200).render('mime');
    }
    if(cntType === 'text/html') {
      return res.status(200).json({hello: true});
    }
    if(cntType === 'text/plain' && req.query.image === 'y') {
      console.log(path.dirname(__filename) + '/../public/waas.png');
      return res.status(200).sendFile(
        path.resolve(
          path.dirname(__filename) + 
          '/../public/waas.png'
        )
      );
    }
    if(cntType === 'text/plain') {
      return res.status(200).send('I AM text');
    }
    return res.status(200).send(`etc: ${cntType}`);
  });

module.exports = router;
