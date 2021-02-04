const express = require('express');
const movieController = require('../controller/movie');

const router = express.Router();

router.get('/', movieController.retrieveAllMovie);

router.get('/:id', movieController.retrieveById);

router.post('/', movieController.createMovie);

router.put('/:id', movieController.updateMovie);

router.delete('/:id', movieController.deleteMovie);

module.exports = router;