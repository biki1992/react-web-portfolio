import React, { Component } from 'react';
import  follow from './image/follow.png';

export class AboutComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="section2">
                    <div className="main-container">
                        <div className="about-wrapper">
                            <div className="about-me">
                                <h4>About Me</h4>
                                <p>I have work on various development and support projects in SAP ABAP technical consultant. 
                                    Currently I am working with NTT Data GDS India private Limited. I am very much enthusiast 
                                    to learn web developement. In my free time I am learning React and other web development 
                                    application</p>
                                <p>While I am working as SAP ABAP technical consultant, I learning Frontend development as one 
                                    my dream is to become full stack developer.</p>
                                <hr />
                                <h4>TOP EXPERTISE</h4>
                                <p>SAP ABAP Developer with primary intrest on Fullstacke development with Django+ React: <a target="_blank" href="./docs/resume.pdf">Download Resume</a></p>
                                <div id="skill" className="skill">
                                    <ul>
                                        <li>SAP ABAP</li>
                                        <li>Python</li>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>Javascript</li>
                                        <li>React</li>
                                    </ul>

                                    <ul>
                                        <li>Google Maps API</li>
                                        <li>JS Charts</li>
                                        <li>AWS (RDS/S3)</li>
                                        <li>Heroku</li>
                                        <li>HTML/CSS</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="social-link">
                                <img id="social-img" src={follow} alt="social" />
                                <h3>Find me on Twitter & Facebook</h3>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/bikramp12?ref=bookmarks">Facebook: @Bikram Singh</a>
                                <br />
                                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/Biki921">Twitter: @Biki921</a>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default AboutComponent;
