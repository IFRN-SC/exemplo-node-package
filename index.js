const axios = require('axios')

const IFRN_REPOSITORIOS_URL = 'https://api.github.com/orgs/IFRN-SC/repos'

module.exports = {
    getRepositorios() {
        axios.get(IFRN_REPOSITORIOS_URL)
            .then(res => {
                const repositorios = res.data

                repositorios.forEach(repo => {
                    console.log(repo.name)
                })
            })
    }   
}
