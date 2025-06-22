const noteController = require('../controllers/noteController');
const express = require('express');
const router = express.Router();

router.get('/',noteController.getNotes);
router.get('/:id', noteController.getNote);
router.post('/', noteController.createNote);    
router.put('/:id', noteController.updateNote);
router.delete('/:id', noteController.deleteNote);

module.exports = router;