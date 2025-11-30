import React, { useState } from 'react';

function App() {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);

  const handleSearch = async () => {
    if (!query) return;
    try {
      const res = await fetch(`https://api.github.com/search/users?q=${query}`);
      const data = await res.json();
      setUsers(data.items);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <input
        type="text"
        placeholder="Search GitHub users..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {users?.map(user => (
          <div key={user.id}>
            <img src={user.avatar_url} alt={user.login} width="50" />
            <p>{user.login}</p>
            <a href={user.html_url} target="_blank" rel="noreferrer">Profile</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
