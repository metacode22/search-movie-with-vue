const request = async (options) => {
  return await fetch('/.netlify/functions/request', {
    method: 'POST',
    body: JSON.stringify(options)
  }).then(result => result.json())
}

export default request
