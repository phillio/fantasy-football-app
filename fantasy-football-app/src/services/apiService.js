import axios from 'axios'
const apiKey = process.env.REACT_APP_API_TOKEN


const api = axios.create({
    baseURL: `https://api.sportradar.us/nfl-t1/teams/ari/2018/REG/statistics.json?api_key=${apiKey}`,
    headers: {
        'Access-Control-Allow-Origin':'*'
    }
})

export const fetchData = async () => {
    try {
        const resp = await api.get('')
        console.log(resp)
    } catch (error) {
        throw error
    }
}