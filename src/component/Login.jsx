import React from 'react'

const Login = () => {
  return (
    <div className='container mt-5 con'>
        <form action="">
            <label htmlFor="">Name : </label>
            <input type="text" placeholder='Name' />
            <label htmlFor="">Email : </label>
            <input type="text" placeholder='Email' />
            <label htmlFor="">Password : </label>
            <input type="text" placeholder='Password' />
            <button className='btn btn-primary w-100'>Submit</button>
        </form>
    </div>
  )
}

export default Login