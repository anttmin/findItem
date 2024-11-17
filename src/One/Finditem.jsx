import React, { useState } from 'react'


const Finditem = (props) => {
    let [name, setUserOne] = useState('')
    let [email, setUserTwo] = useState('')
    let [live, setUserThree] = useState('')
    const addUser = (e) => {
        e.preventDefault();
       
        const userInfo = {
            name,
            live,
            email
        }

       
        
        if (name.trim().length===0||live.trim().length===0||e.trim().length===0) {
            alert('Please Enter Valid Value')
            return;
        }

        

        props.getDatas(userInfo)

        setUserOne('')
        setUserTwo('')
        setUserThree('')



       
       

    }




    return (
        <>
            <form onSubmit={addUser}>
                <div className='bg-slate-100 p-[2rem] max-w-[350px] rounded-lg shadow-2xl'>
                    <h2 className='font-bold text-2xl'>Input Box</h2>
                    <div className='mb-2 mt-2'><p>Name</p>
                        <input className='text-black p-2 focus:outline outline-cyan-500 rounded-sm shadow w-[250px]' placeholder='enter your name' value={name} onChange={(e) => {
                            setUserOne(e.target.value)

                        }} type='text' /></div>

                    <div className='mb-2'>
                        <p>Email</p>
                        <input className='text-black p-2 focus:outline outline-cyan-500  rounded-sm shadow w-[250px]' placeholder='enter your email' value={email} onChange={(e) => {
                            setUserTwo(e.target.value)

                        }} type='text' />
                    </div>

                    <div className='mb-2'>
                        <p>Live</p>
                        <input className='text-black p-2 focus:outline outline-cyan-500  rounded-sm shadow w-[250px]' placeholder='enter your live' value={live} onChange={(e) => {
                            setUserThree(e.target.value)

                        }} type='text' />
                    </div>

                    <div>
                        <button className='mt-2 p-2 text-cyan-500 outline outline-cyan-500 rounded-md text-sm transition hover:bg-cyan-400 hover:text-white hover:outline-none'>Add User</button>
                    </div>
                </div>

            </form>

        </>
    )
}

export default Finditem

// value inside in input is really import for this moment 