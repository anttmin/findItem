import React from 'react'

const Show = (props) => {

  return (
    <>
      <div className='bg-slate-100 shadow-2xl mt-4 max-w-[350px] p-4 rounded-md'>
      <p>Name:{props.name}</p>
      <p>Email:{props.email}</p>
      <p>Live:{props.live}</p>
    </div>
    </>
  )
}

export default Show