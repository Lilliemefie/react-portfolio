import React from 'react';
import '../style/Contact.css';

export default function Contact (){
  return(
<div class="container-fluid text-center">
  <h1>Contact</h1>
  <br />
  <h5><em>I am currently available for full time work and / or part time projects. If you have something in mind, or just want to say hello, please drop me a line!</em></h5>
  <br />
  <div className="row">
    <div className="col-m-8"></div>
    <p><i class="fas fa-map-marker-alt"></i> Los Angeles, US</p>
  </div>
  <div className="col-m-8 text-center">
                    <a href="mailto:mygoodluckday@gmail.com" target="_blank" rel="noopender noreferrer" className="email"><i class="far fa-envelope"></i></a>
                    <a href="https://www.linkedin.com/in/lillie-jirapattanalak-69b82824" target="_blank" rel="noopender noreferrer" className="linkedin"><i class="fab fa-linkedin"></i></a>
                    <a href="https://github.com/Lilliemefie" target="_blank" rel="noopender noreferrer" className="github" ><i class="fab fa-github"></i></a>
                    <a href="https://www.instagram.com/lillie_paey/" target="_blank" rel="noopender noreferrer" className="instagram"><i class="fab fa-instagram"></i></a>
                </div>
                <div className="row">
    <div className="col-m-8">
    <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3300&q=80" alt="profile" className="contactimg" />
    </div>
    </div>
  </div>

  )

}
