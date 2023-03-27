import { set } from 'mongoose';
import React, { useState, useEffect, useRef } from 'react';
import ReconnectingWebSocket from 'reconnecting-websocket';
import VideoChatComponent from './VideoComponent';
import VideoHelper from './VideoHelper';

const websocketURL = "ws://localhost:8000";

const VideoChat = () => {
    const [videoSocket, setVideoSocket] = useState(null);
    const [pc, setPC] = useState(null);
    const [controls, setControls] = useState({ video: true, audio: true });
    const [peerConnected, setPeerConnected] = useState(false);
    const [gotMediaDevice, setGotMediaDevice] = useState(false);
    const [connecting, setConnecting] = useState(false);

    const remoteRef = useRef(null);
    const localRef = useRef(null);
    const draggableRef = useRef(null);

    useEffect(() => {
        const videoSocket = new ReconnectingWebSocket(websocketURL + '/foo');

        videoSocket.addEventListener('open', event => {
            console.log('connected to video server')
        });

        let pc = VideoHelper.peerConnectionInit(videoSocket);
        pc.ontrack = addTrack;

        const mediaStreamConstraints = {
            video: true,
            audio: true
        };

        // Initializes media stream.
        let localMediaStream = null;
        navigator.mediaDevices.getUserMedia(mediaStreamConstraints).then(mediaStream => {
            // Handles success by adding the MediaStream to the video element.
            setVideoSocket(videoSocket);
            setPC(pc);
            
            setGotMediaDevice(true);

            // localRef.current.srcObject = mediaStream;
            remoteRef.current.srcObject = mediaStream;
            localMediaStream = mediaStream;

            mediaStream.getTracks().forEach(track => {
                pc.addTrack(track, mediaStream);
            });
            // pc.addStream(mediaStream);
        }).catch(VideoHelper.handleLocalMediaStreamError);

        videoSocket.addEventListener('message', event => {
            const on = JSON.parse(event.data);
            if (on['offerMade']) {
                setConnecting(true);
                console.log('offer made');
                // other person listens to offerMade
                pc.setRemoteDescription(new RTCSessionDescription(on['offerMade'].offer)).then(() => {
                    console.log('remote description set');
                    createAnswer(localMediaStream);
                }).catch(VideoHelper.error);

            }
            else if (on['answerMade']) {
                console.log('answer made');
                // I listen to answerMade
                pc.setRemoteDescription(new RTCSessionDescription(on['answerMade'].answer)).then(() => {
                    console.log('remote description set')
                    localRef.current.srcObject = localMediaStream;
                    setPeerConnected(true);
                }).catch(VideoHelper.error);
            }
            else if (on['candidate']) {
                console.log(`adding ${on['candidate'].length} candidates`);
                on['candidate'].map(candidate => VideoHelper.addIceCandidate(candidate));
                setConnecting(false);
            }
        });

        return () => {
            if (localRef.current.srcObject)
                localRef.current.srcObject.getTracks().forEach(track => track.stop());
            if (remoteRef.current.srcObject)
                remoteRef.current.srcObject.getTracks().forEach(track => track.stop());
            pc.close();
            videoSocket.close();
        }
    }, []);

    const addTrack = event => {
        console.log('connect to peer');
        remoteRef.current.srcObject = event.streams[0];
    }

    const createOffer = () => {
        setConnecting(true);
        VideoHelper.createOffer();
    }

    const createAnswer = (localMediaStream) => {
        console.log('answer');
        pc.createAnswer().then(sdp => {
            pc.setLocalDescription(new RTCSessionDescription(sdp)).then(() => {
                videoSocket.send(JSON.stringify({ makeAnswer: { answer: sdp } }));
                localRef.current.srcObject = localMediaStream;
                setPeerConnected(true);
            }).catch(VideoHelper.error)
        }).catch(VideoHelper.error);
    }

    const toggleVideo = () => {
        const controls = { ...this.state.controls };
        localRef.current.srcObject.getVideoTracks()[0].enabled = !controls.video;
        setControls({ video: !controls.video, audio: controls.audio });
    }

    const toggleAudio = () => {
        const controls = { ...this.state.controls };
        localRef.current.srcObject.getAudioTracks()[0].enabled = !controls.audio;
        setControls({ ...this.state.controls, audio: !controls.audio });
    }

    return (
            <VideoChatComponent
                draggableRef={draggableRef}
                remoteRef={remoteRef}
                localRef={localRef}
                peerConnected={peerConnected}
                controls={controls}
                gotMediaDevice={gotMediaDevice}
                connecting={connecting}
                toggleVideo={toggleVideo}
                toggleAudio={toggleAudio}
                createOffer={createOffer}
            />
    );
    }

export default VideoChat;
