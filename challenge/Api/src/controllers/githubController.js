const githubService = require('../services/githubService');

const getRepositories = async (req, res) => {
    try {
        const repositories = await githubService.getRepositories('takenet');
        res.json(repositories);
    } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message});
    }
};

module.exports = { getRepositories };