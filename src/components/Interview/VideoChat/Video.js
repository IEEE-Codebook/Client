import React from 'react';
import { useParams } from 'react-router';
import { ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'
import { useSelector } from 'react-redux';
import "../../../css/VideoChat.css"

const Video = () => {
    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    ); 
    
    let { id } =  useParams();
    const Meet = async (element) => {
        const appID = 2143791349;
        const serverSecret = "cd1c2f386d1b2a09948110958de546e0";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, id, user._id, user.name);
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
                container: element,
                turnOnMicrophoneWhenJoining: true,
                turnOnCameraWhenJoining: true,
                showMyCameraToggleButton: true,
                showMyMicrophoneToggleButton: true,
                showAudioVideoSettingsButton: true,
                showScreenSharingButton: true,
                showTextChat: false,
                showUserList: false,
                showPreJoinView: false,
                maxUsers: 2,
                layout: "Sidebar",
                showLayoutButton: false,
                scenario: {
                    mode: "VideoConference",
                    config: {
                        role: "Host",
                  },
              },
        });
    };

    return (
        <div className='room' >
            <div ref={Meet} className='meet'></div>
        </div>
    )
}

export default Video;