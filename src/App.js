import React, { useState, useEffect } from 'react';

export default function App() {
  const [repositories, setRepositories] = useState([])

  useEffect(async () => {
    const response = await fetch('https://api.github.com/users/vilsonrjunior/repos')
    const data = await response.json();

    setRepositories(data)
  }, []);

function handleFavourite(id) {
  const newRepositories = repositories.map(repo => {
    return repo.id === id ? { ...repo, favourite: !repo.favourite } : repo
  })

  setRepositories(newRepositories)
}

  return (

      <ul>
        { repositories.map(repo => (
          <li key={repo.id}>
          {repo.name}
          {repo.favourite && <span>(Favourite)</span>}
          <button onClick={() => handleFavourite(repo.id)}>Favourite</button>
          </li>
          ))}
      </ul>
  )
}
