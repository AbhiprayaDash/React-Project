import React,{Component} from 'react';

import './stylejob.css';

class jobs extends Component
{
    render()
    {
        return(
            <body className="division">
            <nav className="top">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Resume</a></li>
                    <li><a href="">Filter</a></li>
                    <li><a href="">Help</a></li>
                   
                </ul>
            </nav>
    
            <div className="container">
                
            <div className="card">
                <div className="box">
                    <div className="img">
                        <img src="mi.png"/>
                    </div>
                    <h2><a href="#">MI India<span/></a></h2>
                    <br/>
                    <p className="para"><h3>Job:Software design</h3>
                    <h3>Skills:programming Skills</h3>
                    <h3>Email:MI_india@gmail.com</h3>
                    <h3>contact:+91 8345671234</h3></p>
                    <ul>
                        <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
            </div>
                </div>
                </body>
        )}
    }
    export default jobs;