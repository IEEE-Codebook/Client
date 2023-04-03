import React, { useEffect, useRef } from 'react';
import SimpleWebRTC from 'simplewebrtc';

const VideoChat = ({ roomId, userId }) => {
  const videoRef = useRef(null);
  const webrtc = useRef(null);

  useEffect(() => {
    const webrtcOptions = {
      roomName: roomId,
      autoRequestMedia: true,
      nick: userId,
    };
    webrtc.current = new SimpleWebRTC(webrtcOptions);

    webrtc.current.on('readyToCall', () => {
      webrtc.current.joinRoom(roomId);
    });

    webrtc.current.on('stream', (stream, peer) => {
      if (peer.nick === userId) {
        const video = videoRef.current;
        video.srcObject = stream;
        video.play();
      }
    });

    return () => {
      webrtc.current.leaveRoom();
    };
  }, [roomId, userId]);

  return <video ref={videoRef} />;
};

export default VideoChat;
