const express = require('express');
const githubController = require('../controllers/githubController');

const router = express.Router();

router.get('/repositories/github', githubController.getRepositories); 

module.exports = router;