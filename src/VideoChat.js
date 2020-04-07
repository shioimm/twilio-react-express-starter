import React, { useState } from 'react';

const VideoChat = () => {
  const [username, setUsername] = useState('');
  const [roomName, setRoomName] = useState('');
  const [token, setToken] = useState(null);

  const handleUsernameChange = event => {
    setUsername(event.target.value);
  };

  const handleRoomNameChange = event => {
    setRoomName(event.target.value);
  };

  return <div></div> // we'll build up our response later
};

export default VideoChat;
