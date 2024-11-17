import React, { useState } from 'react'
import Finditem from './One/Finditem'
import Show from './One/Show'

const App = () => {
  const[getDatass,setGetdata] = useState([])

  const getDatas = (getInfo) => {

  setGetdata([...getDatass,getInfo])

  }

  return (
    <div className='flex justify-center items-center flex-col h-[100vh]'>
        <Finditem getDatas={getDatas} />
        {
          getDatass.length < 1 ? <p className='bg-yellow-400 text-black mt-2 rounded-md p-2'>Please Enter Valid data!!</p> :getDatass.map((getDatass)=>(
            <Show  getDatas={getDatas} name={getDatass.name} live={getDatass.live} email={getDatass.email} key={getDatass.live}/>
          ))
        }
    </div>
  )
}

export default App