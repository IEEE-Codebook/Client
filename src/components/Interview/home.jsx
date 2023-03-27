import React, { useEffect, useState, useRef} from 'react';
import {v4 as uuidV4} from "uuid";
import { useSelector} from 'react-redux';
import { useNavigate, NavLink } from 'react-router-dom';
import roombackground from '../../assets/Backgrounds/rooms.svg';
import { socket} from "../../socket";
import "../../css/Rooms.css";
import Typewriter from 'typewriter-effect';
import Button from '@material-ui/core/Button';


const Interview_Home = (props) => {
    const history = useNavigate();
    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    ); 
        
    const [roomCode, setroomCode] = useState("");

    const generateRoomCode = () => {
        let text = uuidV4();
        setroomCode(text)
    }

    const socket = props.socket;

    useEffect(() => {
        if (roomCode !== "") {
            console.log(roomCode)
            socket.emit('created-room', roomCode)
            console.log('CREATED-ROOM')
            history(`/room/${roomCode}`)
        }
    
    }, [roomCode]);

    const [joinRoom, setJoinRoom] = useState("");
    const [roomLink, setRoomLink] = useState("");
    
    const generateJoinRoomCode = () => {
        if (joinRoom!=="") {
            setRoomLink(joinRoom);
        }
        
    }

    useEffect(() => {
        if (roomLink !== "") {
            socket.emit('create-room', roomLink);
            console.log('JOINED-ROOM');
            history(`/room/${roomLink}`);
        }
    
    }, [roomLink]);


    return (
        <div style={{height:"100vh", backgroundImage:`url(${roombackground})`, backgroundPosition: 'center', backgroundRepeat:'no-repeat', backgroundSize: '100%, 100%'}}>
                
            <header>
                <div className="container">
                <div className="banner-text">
                    <h2>Hey!! 
                        <Typewriter
                            onInit={(typewriter)=>{
                                typewriter
                                    .typeString("Create a new room")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("Join your friend's room")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .start();
                            }}

                            options={{autoStart: true, loop:true}}
                        />
                    </h2>

                    <p className="banner-btn">
                        <Button size="large" variant="contained" color="secondary" onClick={generateRoomCode} className="mr-2">
                           Create room 
                        </Button>
                        <Button size="large" variant="contained" color="secondary" data-toggle="modal" data-target="#exampleModal" data-show="true">
                            Join room 
                        </Button>
                    </p>
                    </div>
                </div>
            </header>
            <div className="container">
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Join Room</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group mb-0">
                                        {/* <label for="exampleFormControlInput1">Email address</label> */}
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            id="exampleFormControlInput1" 
                                            placeholder="Paste room code"
                                            value = {joinRoom}
                                            onChange = {(e)=>{
                                                setJoinRoom(e.target.value);
                                                console.log("jR-->"+joinRoom);
                                            }} />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary mr-auto" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={generateJoinRoomCode}>Join</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Interview_Home;