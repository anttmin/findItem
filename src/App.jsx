import React from 'react'
import Child1 from './Components/Child1'
import Child2 from './Components/Child2'
import Child3 from './Components/Child3'
import FirstContentProvider, { FirstContent } from './FirstContent'



const App = () => {
  return (
    <div>

      <FirstContentProvider>
        <Child1 />
        <Child2 />
        <Child3 />
      </FirstContentProvider>


    </div>
  )
}

export default App