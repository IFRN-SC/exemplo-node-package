const axios = require('axios')

const IFRNSC_REPOSITORIOS_URL = 'https://api.github.com/orgs/IFRN-SC/repos'

module.exports = {
    /**
     * Função assíncrona que retorna uma array com todos os repositórios do IFRN-SC no Github
     * 
     * @author isaacmsl
     */ 
    async getIfrnScRepositorios() {
        const response = await axios.get(IFRNSC_REPOSITORIOS_URL)
        const repositorios = response.data
        
        return repositorios.map(repo => { return repo.name })
    }
}
