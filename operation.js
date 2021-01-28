const express = require('express');
const router = express.Router();

const coolman = require('../controllers/coolman');

router.get('/',coolman.index);

router.get('/updata',coolman.coolmanUpdata);

router.get('/delete',coolman.coolmanDelete);

module.exports=router;