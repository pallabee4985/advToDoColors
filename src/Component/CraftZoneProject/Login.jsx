import React from 'react'

function Login() {
  return (
    <>
          <form className="form" foaction="">
        <h1><b>Login form</b></h1>
        <div>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" />
        </div>
        <div>
            <label htmlFor="Password">Password</label>
            <input type="text" id="Password" name="Password" />
        </div>
        
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default Login
