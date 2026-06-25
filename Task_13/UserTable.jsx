import React from 'react'
import useFetchData from '../hooks/useFetchData';
export default function UserTable() {
  const { data, loading, error } = useFetchData(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <h2 className="message">Loading...</h2>;

  if (error) return <h2 className="message error">{error}</h2>;

  return (
    <div className="container">
      <h1>User Details</h1>
    <div className="table-wrapper">
        <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>

        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      
    </div>
  );
}
