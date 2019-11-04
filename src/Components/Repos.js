import React, { useState, useEffect } from 'react';

export default function Repos() {
  const [user, setUser] = useState()
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    async function fetchData() {
    const response = await fetch(`https://api.github.com/users/${user}/repos`)
    const data = await response.json();
    setRepositories(data)
    // console.log(data)
    console.log(user)
    }
    fetchData()
  }, [user]);


function handleFavourite(id) {
  const newRepositories = repositories.map(repo => {
    return repo.id === id ? { ...repo, favourite: !repo.favourite } : repo
  })
  setRepositories(newRepositories)
}

const handleChange = e => {
  e.preventDefault()
  const {value} = e.target
  // console.log(value)
  setUser(value)
}

const handleSubmit = e => {
  e.preventDefault()
  // console.log('user', {user})
}

  return (
    <div>
      <div>
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
          <ul>
            { repositories.map(repo => (
              <li key={repo.id}>
              {repo.name}
              {repo.favourite && <span>(Favourite)</span>}
              <button onClick={() => handleFavourite(repo.id)}>Favourite</button>
              </li>
              ))}
          </ul>
     </div>
    </div>
  )
}
