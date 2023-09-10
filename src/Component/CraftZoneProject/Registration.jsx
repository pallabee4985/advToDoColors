import React from 'react'
import "../Style/Form.css"

function Registration() {
  return (
    <>
      <form className="form" foaction="">
        <h1><b>Registration form</b></h1>
        <div>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" />
        </div>
        <div>
            <label htmlFor="Email">Email</label>
            <input type="text" id="Email" name="Email" />
        </div>
        <div>
            <label htmlFor="phone">phone</label>
            <input type="text" id="phone" name="phone" />
        </div>
        <div>
            <label htmlFor="Password">Password</label>
            <input type="text" id="Password" name="Password" />
        </div>
        <div>
            <label htmlFor="Confirm Password">Confirm Password</label>
            <input type="text" id="Confirm Password" name="Confirm Password" />
        </div>
        <button type="submit">Registration</button>
      </form>
    </>
  )
}

export default Registration
