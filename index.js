const axios = require('axios')

const IFRNSC_REPOSITORIOS_URL = 'https://api.github.com/orgs/IFRN-SC/repos'

module.exports = {
    getIfrnScRepositorios() {
        axios.get(IFRNSC_REPOSITORIOS_URL)
            .then(res => {
                const repositorios = res.data

                return repositorios.map(repo => { return repo.name })
            })
    }
}
