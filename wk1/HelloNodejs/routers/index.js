var express = require('express'),
    index   = require('../controllers/index'),
    read    = require('../controllers/read'),
    router  = express.Router();

    router.route('/').get(index);

    router.route('/person')
      .get(read);

module.exports = router;
