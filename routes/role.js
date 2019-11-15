var express = require('express');
var router = express.Router();
var pool = require('../db/pool')

/* GET role listing. */
router.get('/', function(req, res, next) {
  pool.query('SELECT * FROM role ORDER BY id ASC', (error, results) => {
    if (error) {
      console.log(error)
    }
    console.log(results)
    res.status(200).json(results.rows)
  })
});

module.exports = router;
