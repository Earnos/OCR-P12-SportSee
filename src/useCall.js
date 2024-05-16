import { useState } from 'react'
import axios from 'axios'
import data from './data.json'

const useMockedApi = (initialData) => {
    const [data, setData] = useState(initialData)
    const [error, setError] = useState(null)

    const fetchData = async () => {
        try {
            const response = await axios.get('./data.json')
            setData(response.data)
        } catch (error) {
            setError(error)
        }
    }

    fetchData()
    console.log(data)
    return { data, error }
}

export default useMockedApi
