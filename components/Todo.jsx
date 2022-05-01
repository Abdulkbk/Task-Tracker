function Todo({ todo, handleDelete, handleToggle, id }) {
  return (
    <div className='flex w-full justify-around items-center cus-bg-5 my-1 rounded'>
      <div
        className={`text-3xl cus-text w-4/5 pl-2 ${
          todo.completed ? 'line-through' : ''
        }`}
      >
        {todo.text}
      </div>
      <div className='flex flex-col w-full w-1/5 p-3'>
        <span className='w-full flex justify-center'>
          <img
            className='h-5'
            src='/checked.svg'
            alt=''
            onClick={() => handleToggle(id, todo.completed)}
          />
        </span>
        <span className='w-full flex justify-center'>
          <img
            className='h-5'
            src='/delete.svg'
            alt=''
            onClick={() => handleDelete(id)}
          />
        </span>
      </div>
    </div>
  )
}

export default Todo
