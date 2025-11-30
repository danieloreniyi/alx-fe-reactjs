import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);

  const handleSearch = async () => {
    if (!query) return;
    try {
      const res = await axios.get(`https://api.github.com/search/users?q=${query}`);
      setUsers(res.data.items);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>GitHub User Search</h1>
      <input 
        type="text" 
        placeholder="Search GitHub users..." 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {users.map(user => (
          <div key={user.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
            <img src={user.avatar_url} alt={user.login} width="50" />
            <h3>{user.login}</h3>
            <a href={user.html_url} target="_blank" rel="noreferrer">Profile</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
