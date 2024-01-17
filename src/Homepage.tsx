import React, { useState } from 'react';
import './Homepage.css';

const Homepage: React.FC = () => {
  const [log, setLog] = useState<string | null>(null);

  const handleCreateRoom = () => {
    setLog('Create Room clicked');
  };

  const handleJoinRoom = () => {
    setLog('Join Room clicked');
  };

  return (
    <div className="home-page">
      <h1>Welcome to the Room Page</h1>
      <div className="button-container">
        <button className="button" onClick={handleCreateRoom}>
          Create Room
        </button>
        <button className="button" onClick={handleJoinRoom}>
          Join Room
        </button>
      </div>
      {log && <p>{log}</p>}
    </div>
  );
};

export default Homepage;
