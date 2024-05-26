const express = require('express');
const { addProperty, getProperties, updateProperty, deleteProperty, likeProperty } = require('../controllers/propertyController');
const authenticate = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authenticate, addProperty);
router.get('/', getProperties);
router.put('/:id', authenticate, updateProperty);
router.delete('/:id', authenticate, deleteProperty);
router.post('/:id/like', authenticate, likeProperty);

module.exports = router;
