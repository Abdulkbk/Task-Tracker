function Form({ changeHandler, submitHandler }) {
  return (
    <form className='flex w-full justify-around pt-5 ' onSubmit={submitHandler}>
      <div className='w-2/3 p-1 mx-1'>
        <input
          type='text'
          placeholder='Write the activity here!'
          className='cus-bg-1 p-2 ml-2 rounded w-full focus:outline-none border border-2 border-cus-8'
          onChange={e => changeHandler(e.target.value)}
          minLength={3}
        />
      </div>
      <div className='w-1/3 p-1 mr-1 flex justify-center mx-1'>
        <button
          className='cus-bg-8 p-2 rounded w-full cus-text'
          // onClick={() => submitHandler()}
        >
          Add
        </button>
      </div>
    </form>
  )
}

export default Form
