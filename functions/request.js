require('dotenv').config()
const axios = require('axios')
const { API_END_POINT, API_KEY } = process.env

exports.handler = async (event) => {
  const options = JSON.parse(event.body)
  const { method, params } = options
  const { data } = await axios({
    url: `${API_END_POINT}`,
    method,
    params: {
      ...params,
      apiKey: API_KEY
    }
  })
  
  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
}