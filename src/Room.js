import React, { useState, useEffect } from 'react';
import Video from 'twilio-video';

const Room = ({ roomName, token, handleLogout }) => {
  const [room, setRoom] = useState(null);
  const [participants, setParticipants] = useState([]);

  const remoteParticipants = participants.map(participant => (
    <p key={participant.sid}>participant.identity</p>
  ));
});

export default Room;
