import axios from 'axios';

export async function fetchUserData({ username = '', location = '', minRepos = '' }) {
  let query = '';

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos}`;

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}&per_page=10`;

  const res = await axios.get(url);

  // For each user, fetch additional details (like public_repos & location)
  const usersWithDetails = await Promise.all(
    res.data.items.map(async (user) => {
      const userRes = await axios.get(`https://api.github.com/users/${user.login}`);
      return userRes.data;
    })
  );

  return usersWithDetails;
}
