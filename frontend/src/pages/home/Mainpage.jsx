// src/pages/Homepage.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate} from 'react-router-dom';
import axios from 'axios'; 

function Mainpage() {
  const [posts, setPosts] = useState([]); // State to hold posts
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const navigate = useNavigate();


  const handleCreate = () => {
    navigate('/create');  
  }

  useEffect(() => {
    async function fetchPosts() {
      try {
        // Fetch posts from the backend API
        const response = await axios.get('http://localhost:8000/api/posts');
        setPosts(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch posts.');
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);


  if (loading) {
    return <p>Loading posts...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (posts.length === 0) {
    return (
        <div>
        <button
            onClick={() => handleCreate()}>
            Create Post
            </button>
        {/* <Link to={'./create'}>Create Post</Link> */}
        <p>No posts available.</p>
        </div>
    
    )
  }
  const getTimeDiff = (createdAt, updatedAt) => {
    const createdDate = new Date(createdAt);
    const updatedDate = new Date(updatedAt);
    const diffInMs = updatedDate - createdDate;
    const diffInHours = diffInMs / (1000 * 60 * 60);
    const roundedDiffInHours = diffInHours.toFixed(0);
    console.log(`Hour Difference: ${roundedDiffInHours} hours`);
    return roundedDiffInHours

  }

  const handleDelete = async (postId) => {
    if(!window.confirm("Are you sure to delete?")){
        return;
    }
    try{
        await axios.delete(`http://localhost:8080/api/posts/${postId}`)
        setPosts((prevPosts) => prevPosts.filter((post) => post._id !== postId));

    }catch(err){
        console.error(err);
        setError('Failed to delete posts.');
    }

  }

  const handleEdit = async (postId) => {
    navigate(`/edit/${postId}`)

  }

  return (
    <div>
    <button
        onClick={() => handleCreate()}>
        Create Post
        </button>
        {/* <Link to={'./create'}>Create Post</Link> */}
      <h1>Posts</h1>
      
      <ul>
        {posts.map(post => (
            
          <li key={post._id}>
            
            <h2>Post ID: {post._id}</h2>
            <p>{`Posted ${getTimeDiff(post.createdAt, post.updatedAt)} hours ago`}</p>
            <p>{post.text}</p>
            <button
                onClick={() => handleEdit(post._id)}
            >Edit</button>
            <button
                onClick={() => handleDelete(post._id)}
            >Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Mainpage;
