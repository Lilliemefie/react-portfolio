import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import '../style/Home.css'

export default function Home () {
    return (
        <div className="condiv home">
            <div className="col-m-8 ">
            <ReactTypingEffect text={['I am Lillie Jirapattanalak', 'I am a Web Developer']} speed={80} eraseDelay={200} className="typingeffect" />
            </div>
            <img src="https://github.com/Lilliemefie/react-portfolio/blob/main/src/assets/lillie%20avatar.PNG?raw=true" alt="profile" className="profilepic" />
            <div className="row">
            <div className="col-m-8 ">
            <h5 className="hometext">Detail Oriented  |  Active Learning  |  Problem Solving  |  Collaboration</h5>
            </div>
            </div>
        </div>
        
    )
};