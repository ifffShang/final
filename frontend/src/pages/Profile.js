import { useState, useContext, useEffect } from 'react';
import { UserContext } from '../context/userContext';
import axios from 'axios';
import './Profile.css';

export default function Profile() {
  const {user} = useContext(UserContext); // get the user info
  const [tweets, setTweets] = useState([]);

  // get users' tweets
  useEffect(() => {
    if (user) {
      axios.get(`/api/tweets/${user.id}`)
        .then(response => {
          setTweets(response.data);
        })
        .catch(error => {
          console.error("Error fetching tweets:", error);
        });
    }
  }, [user]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-page">
      <div className="profile-header">
        {/* avator and information */}
        <img src={user.avatarUrl || "/default-avatar.png"} alt="Profile Avatar" className="profile-avatar" />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.bio || "This user has no bio."}</p>
      </div>

      {/* tweets */}
      <div className="tweets-section">
        <h3>Recent Tweets</h3>
        {tweets.length === 0 ? (
          <p>No tweets yet.</p>
        ) : (
          <ul>
            {tweets.map((tweet, index) => (
              <li key={index} className="tweet">
                <p>{tweet.content}</p>
                <small>{new Date(tweet.createdAt).toLocaleString()}</small>
              </li>
            ))}
          </ul>
        )}
      </div>
      
      {/* settings */}
      {/* <div className="settings-link">
        <a href="/settings">Edit Profile</a>
      </div> */}
    </div>
  );
}