import axios from 'axios'

const BASE_URI = 'http://localhost:8000/api/activities'

export const getTodos = async () => {
  try {
    const params = { method: 'GET', url: BASE_URI }

    const data = await axios(params)

    return data.data
  } catch (error) {
    console.log(error)
  }
}

export const addTodo = async content => {
  console.log(content)
  const params = {
    method: 'POST',
    url: BASE_URI,
    data: { text: content },
  }

  const data = await axios(params)

  return data
}

export const toggleTodo = async (id, completed) => {
  const params = {
    method: 'PUT',
    url: `${BASE_URI}/completed/${id}`,
    data: { completed: !completed },
  }

  const data = await axios(params)

  return data
}

export const deleteTodo = async id => {
  const params = { method: 'DELETE', url: `${BASE_URI}/${id}` }
  console.log(`ID: ${id}`)
  const data = await axios(params)
  console.log(`Returned data ${data}`)
  return data
}
