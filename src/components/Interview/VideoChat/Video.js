import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'
import { useDispatch, useSelector } from 'react-redux';
import { getProfile, addAtcoder, addCodeforces } from "../../../api/profileSlice";
import "../../../css/VideoChat.css"


const Video = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(
        (state) => state.auth
    ); 

    const {name} = useSelector(
        (state) => state.profile
    )

    useEffect(() => {
        dispatch(getProfile(user));
    }, [user, dispatch])

    let { id } =  useParams();

    const Meet = async (element) => {
        const appID = 2143791349;
        const serverSecret = "cd1c2f386d1b2a09948110958de546e0";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, id, user, name);
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        console.log(zp)
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