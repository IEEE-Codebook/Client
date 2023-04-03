import React, { useCallback, useEffect } from 'react';
import { ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'
import { useDispatch, useSelector } from 'react-redux';

import "../../../css/VideoChat.css"

function randomID(len) {
    let result = '';
    if (result) return result;
    var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
      maxPos = chars.length,
      i;
    len = len || 5;
    for (i = 0; i < len; i++) {
      result += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return result;
  }


const Video = (props) => {

    
  
    let Meet = async (element) => {
        const appID = 2143791349;
        const serverSecret = "cd1c2f386d1b2a09948110958de546e0";
        const userID = randomID(5);
        const userName = randomID(5);

        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, props.id, userID, userName);
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        console.log(zp)
        
        await zp.joinRoom({
                    container: element,
                    turnOnMicrophoneWhenJoining: false,
                    turnOnCameraWhenJoining: false,
                    showMyCameraToggleButton: true,
                    showMyMicrophoneToggleButton: true,
                    showAudioVideoSettingsButton: true,
                    showScreenSharingButton: true,
                    showTextChat: false,
                    showUserList: false,
                    showPreJoinView: true,
                    layout: "Sidebar",
                    showLayoutButton: false,
                    scenario: {
                        mode: "VideoConference"
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