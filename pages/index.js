import { useState, useCallback, useEffect } from 'react'
import Head from 'next/head'
import Board from '../components/Board'
import { getTodos, addTodo, deleteTodo, toggleTodo } from '../helper'
import Navbar from '../components/Navbar'

export default function Home() {
  const [todos, setTodos] = useState([])

  const [content, setContent] = useState('')

  // console.log(content)

  useEffect(() => {
    getTodos().then(data => {
      setTodos(data)
    })
  }, [])

  const submitHandler = async e => {
    e.preventDefault()
    const { data } = await addTodo(content)
    setTodos([...todos, data])
    console.log(data)
  }

  const changeHandler = useCallback(
    title => {
      setContent(title)
      console.log(content)
    },
    [content]
  )

  const handleDelete = async id => {
    const { data } = await deleteTodo(id)
    const newTodos = todos.filter(todo => {
      return todo._id !== data
    })
    setTodos(newTodos)
  }

  const handleToggle = async (id, com) => {
    const { data } = await toggleTodo(id, com)
    const updatedTodos = todos.map(todo => {
      return todo._id === data._id ? data : todo
    })
    setTodos(updatedTodos)
  }

  return (
    <div className='container wrapper relative flex flex-col justify-around items-center p-2'>
      <Head>
        <title>MERN Todo App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <Board
        todos={todos}
        changeHandler={changeHandler}
        submitHandler={submitHandler}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
      />
    </div>
  )
}