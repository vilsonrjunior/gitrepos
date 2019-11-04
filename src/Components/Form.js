import React, { useState } from 'react';

export default function Form() {

const [user, setUser] = useState()


const handleChange = e => {
  e.preventDefault()
  const {value} = e.target
  console.log(value)
  setUser(value)
}

const handleSubmit = e => {
  e.preventDefault()
  // const {value} = e.target
  // setUser(value)
  console.log(user)
}

 return (
    <div>
       <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="for ex: vilsorjunior"
          value={user}
          name="user"
          onChange={handleChange}
          />
          <button type='submit'>Submit</button>
        </form>
     </div>
  )
}
