import React from 'react';
// import ReactAudioPlayer from 'react-audio-player';

export const Shots: React.FC = () => {
    return (
        <div>
            <audio id='tracks' controls>
                <source src='everybody-shots.mp3'/>
            </audio>
        </div>
    )
}