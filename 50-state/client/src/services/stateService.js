import axios from 'axios'

export default {
    getAll() {
        return axios.get('/api/states/').then( response => {
            return response.data
        })
    },

    setVisited(stateName, visited) {
        return axios.patch('/api/state/'+ stateName, {visited: visited}).then(response => {
            return response.data
        })
    },

    /*getOne function to make requests to new API route, take stateName as an argument and build URL to request*/
    getOne(stateName) {
        return axios.get('/api/states/' + stateName).then( response => {
            return response.data
        })
    }
}