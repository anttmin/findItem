import React, { useEffect, useState } from 'react'

const App = () => {
    let [getDatas, SetgetDatas] = useState({})
    let [id, setId] = useState('')
    let FetchDatas = async (e) => {
        e.preventDefault()
        if (id < 1) {
            alert('please enter value atleast from 1')
            return;
        }
        let reponse = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        let data = await reponse.json();
        SetgetDatas(data)
        setId('')

    }
    console.log(getDatas)





    return (
        <div>

            <form onSubmit={FetchDatas}>
                <input type='number' min={1} value={id} className='focus:outline-none border border-blue-600 p-2 rounded' onChange={(e) => {
                    setId(e.target.value)
                }} />
                <button type='submit' className='bg-blue-500 p-2 text-white rounded-md'>Get Data</button>
                {

                        <div key={getDatas.id}>
                            <p>Id: {getDatas.id}</p>
                            <p>Title: {getDatas.title}</p>
                            <p>Completed: {getDatas.completed ? <p className='text-green-400'>True</p> : <p className='text-red-500'>False</p>}</p>
                        </div>

                } 
            </form>

        </div>
    )
}

export default App
// let [getDatas, SetgetDatas] = useState({})
// if you use useState([]) you get error because in input  we have only object that's why we shouldn't use arr method