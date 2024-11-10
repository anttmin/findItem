import React, { useEffect, useState } from 'react'

const App = () => {
  const [id, setId] = useState('')
  let [State, setState] = useState(true)
  let [getDatas, setDatas] = useState([])

  let getData = async (e) => {
    e.preventDefault()
    let reposnse = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    let data = await reposnse.json()
    console.log(data)
    setDatas(data)
    setId('')
    setState(!true)


  }




  return (
    <div className='p-2'>

      <form onSubmit={getData}>
        <p>Find item</p>
        <input type='number' className='outline-none border rounded-md py-1 px-1 border-blue-500' value={id} onChange={(e) => {
          setId(e.target.value)
        }} />
        <button type='submit' className='bg-blue-500 text-white p-1 rounded-md ml-2'>Get Data</button>

        {
          State ? <p className='text-yellow-400 bg-black max-w-[200px] p-2 mt-2 rounded-md'>Please fill valid Value only numbers!!</p> : <div className='bg-blue-500 max-w-[280px] text-white p-2 rounded-md mt-2'>
          <p>Id:{getDatas.id}</p>
          <p>UserId:{getDatas.userId}</p>
          <p>Title:{getDatas.title}</p>
          <p>Complete:{getDatas.completed?<span className='text-green-500'>True</span>:<span className='text-red-500'>False</span>}</p>
        </div>
        }

      </form>


    </div>
  )
}

export default App
//userId,id,title,completed

