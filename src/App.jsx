import React, { useEffect, useState } from 'react'

const App = () => {
  let [itemData, setItemdata] = useState([])
  useEffect((_) => {
    async function usEfhok() {
      let reponse = await fetch('https://jsonplaceholder.typicode.com/todos');
      let data = await reponse.json();
      setItemdata(data)

    }
    usEfhok()
  })

  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
      <table className="w-full text-sm text-left rtl:text-right text-gray-700 dark:text-gray-400">
        <thead className='text-xs  uppercase bg-gray-800 text-white '>
          <tr>
            <th scope="col" className="px-6 py-3">ID</th>
            <th scope="col" className="px-6 py-3">Title</th>
            <th scope="col" className="px-6 py-3">Complete</th>
          </tr>
        </thead>
        <tbody>
          {
            itemData.map((itemData) => (
              <tr className='text-xs text-black  uppercase border duration-100 hover:bg-slate-100 ' key={itemData
                .id}>
                <td scope="col" className="px-6 py-3">{itemData.id}</td>
                <td scope="col" className="px-6 py-3">{itemData.title}</td>
                {itemData.completed?<td><p className='text-green-600'>Yes</p></td>:<td><p className='text-red-500'>No</p></td>}
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default App

// completed
// : 
// false
// id
// : 
// 1
// title
// : 
// "delectus aut autem"
// userId
// : 
// 1