const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const stockCtrl = require('../controllers/stock');

router.get('/', auth, stockCtrl.getAllStuff);
router.post('/', auth, stockCtrl.createThing);
router.get('/:id', auth, stockCtrl.getOneThing);
router.put('/:id', auth, stockCtrl.modifyThing);
router.delete('/:id', auth, stockCtrl.deleteThing);

module.exports = router;