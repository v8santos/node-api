const express = require('express');
const router = express.Router();

const { getAll } = require('../controllers/UserController');

router.get('/', getAll);

module.exports = router;