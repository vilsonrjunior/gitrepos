import React, { useState, useEffect } from 'react';
import Form from './Form'

export default function Repos() {
  const user = Form.user
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    async function fetchData() {
    const response = await fetch(`https://api.github.com/users/${user}/repos`)
    const data = await response.json();
    setRepositories(data)
    // console.log(data)
    // console.log(user)
    }
    fetchData()
  }, [user]);


function handleFavourite(id) {
  const newRepositories = repositories.map(repo => {
    return repo.id === id ? { ...repo, favourite: !repo.favourite } : repo
  })
  setRepositories(newRepositories)
}

  return (
    <div>
      <div>
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
