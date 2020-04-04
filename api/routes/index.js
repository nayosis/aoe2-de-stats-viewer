var express = require('express');
var router = express.Router();


var ENV = (process.env.NODE_ENV || 'prod');

var url = ""

if (ENV === "development"){
  url = "http://localhost:1234"
}


/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'Express', urlPrefixe : url });
});

module.exports = router;


/*
<html>
  <body>
    <div id="root"></div>
    plom
    <script src="index.js"></script>
  </body>
</html>

*/