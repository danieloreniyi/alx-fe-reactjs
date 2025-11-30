import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

export default function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!username && !location && !minRepos) return;

    setLoading(true);
    setError(false);
    setUsers([]);

    try {
      const data = await fetchUserData({ username, location, minRepos });
      setUsers(data);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">GitHub User Search</h1>
      <form onSubmit={handleSearch} className="space-y-2">
        <input
          className="border rounded px-2 py-1 w-full"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="border rounded px-2 py-1 w-full"
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          className="border rounded px-2 py-1 w-full"
          type="number"
          placeholder="Min Repos (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
          type="submit"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-2">Loading...</p>}
      {error && <p className="mt-2 text-red-500">Looks like we cant find the user</p>}

      <div className="mt-4 space-y-4">
        {users.map((user) => (
          <div key={user.id} className="border p-2 rounded flex items-center space-x-2">
            <img src={user.avatar_url} alt={user.login} width="50" className="rounded-full"/>
            <div>
              <p className="font-semibold">{user.login}</p>
              {user.location && <p className="text-sm">Location: {user.location}</p>}
              {user.public_repos != null && <p className="text-sm">Repos: {user.public_repos}</p>}
              <a href={user.html_url} target="_blank" rel="noreferrer" className="text-blue-500 text-sm">
                Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
