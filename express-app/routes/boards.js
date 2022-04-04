var express = require('express');
const res = require('express/lib/response');
var router = express.Router();
var controller = require('../controllers/boardsController')
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/', async function (req, res, next) {
  const response = await controller.postController(req.body)
  if (response.success) {
    res.status(201).json(response.success)
  } else {
    res.status(500)
  }
})

router.put('/', async function (req, res, next) {
  const response = await controller.putController(req.body)
  console.log('response is: ', response);
  response.success && res.status(200).json(response.success)
  response.error && res.status(500).json({ error: response.error })
})
module.exports = router;
