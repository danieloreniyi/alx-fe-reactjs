import React, { useState } from 'react';

export default function App() {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);

  const handleSearch = async () => {
    if (!query) return;
    const res = await fetch(`https://api.github.com/search/users?q=${query}`);
    const data = await res.json();
    setUsers(data.items);
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter GitHub username"
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {users.length > 0 && users.map((user) => (
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
