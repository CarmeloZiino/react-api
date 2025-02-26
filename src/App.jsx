import { useState, useEffect } from 'react'

export default function App() {

  const [posts, setPosts] = useState([]);
  const fetchPosts = () => {
    fetch("http://localhost:3000/posts")
      .then(response => response.json())
      .then(data => setPosts(data));

  };
  useEffect(fetchPosts, []);

  return (
    <>
      <div>
        <h2>lista dei posts</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>TITOLO</th>
              <th>CONTENUTO</th>
              <th>IMAGINE</th>
            </tr>
          </thead>
          <tbody>
            {posts.map(post => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.content}</td>
                <td>{post.image}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}



