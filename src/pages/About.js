import React from 'react';
import '../style/About.css'

export default function About (){
    return (
        <div className="container-fluid text-center">    
        <div className="row content">
          <div className="col-sm-2 sidenav">
          </div>
          <div className="col-sm-8 text-left aboutme"> 
            <h1> About Lillie</h1>
            <br />
            <img src="https://github.com/Lilliemefie/react-portfolio/blob/main/src/assets/lillie%20avatar.PNG?raw=true" alt="profile" className="aboutpic" />
            <p className="card-text">My name is Lillie and I graduated from the University of California, Los Angeles with Full Stack Development
                    Certificate – 3 months full-time immersive program bootcamp. I am looking for new opportunities
                    to practice and develop my skills.</p>
                <p className="card-text">I have had a passion in web design since I was young, I wrote the online diary and
                    felt like the page’s look was so boring, so I tried to find the way how to make its nicer. Therefore, I had a chance to adjust the
                    code on the template.
                    At that time, I did not know much about HTML, CSS, etc. But I knew that I was enjoys doing it. Now I
                    am learning and eager to learn more.</p>
                <p className="card-text">When I am not studying or working, you can find me at the beach or, at the
                    mountain, or in the kitchen trying out new cooking recipes.</p>
            <hr />
            <div className="container-fluid text-center">
                <br />
  <h3>SKILLS</h3>
  <h5>What do I do?</h5>
  <br />
  <div className="row">
    <div className="col-m-8">
            <p>HTML | CSS | JavaScript | jQuery  | Node.JS | APIs | MySQL/Sequelize | Express | Git | React | MongoDB  </p>
          </div>
          </div>
          <div className="row">
    <div className="col-m-8">
    <img src="https://github.com/Lilliemefie/react-portfolio/blob/main/src/assets/aboutImg.JPG?raw=true" alt="profile" className="aboutimg" />
    </div>
    </div>
            </div>
          </div>
       </div>
       </div>
    )
}