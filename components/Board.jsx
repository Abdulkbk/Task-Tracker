import { useState } from 'react'
import Form from './Form'
import Todos from './Todos'

function Board({
  todos,
  changeHandler,
  submitHandler,
  handleDelete,
  handleToggle,
}) {
  return (
    <div className='container px-2 relative h-4/5 lg:w-1/3 md:h-2/3 mt-8 cus-bg-1 rounded-lg'>
      <Form changeHandler={changeHandler} submitHandler={submitHandler} />
      <Todos
        todos={todos}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
      />
    </div>
  )
}

export default Board
