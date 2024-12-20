const axios = require('axios');
const config = require('../config');

const getRepositories = async () => {
    try {
        const response = await axios.get(`https://api.github.com/users/${config.GITHUB_USER}/repos`);
        const repositories = response.data;

        const csharpRepos = repositories.filter(repo => repo.language === 'C#');

        csharpRepos.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));

        const topFiveRepos = csharpRepos.slice(0, 5);

        return topFiveRepos.map(repo => ({
            title: repo.full_name,
            subtitle: repo.description || 'Nenhuma descrição fornecida.',
            image: config.BLIP_AVATAR_URL,
        }));
    } catch (error) {
        console.error('Erro ao buscar repositórios:', error);
        throw error;
    }
};

module.exports = { getRepositories };
