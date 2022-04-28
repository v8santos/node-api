const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    return response.json({
        message: "API rodando lindamente"
    });
});

module.exports = router;
