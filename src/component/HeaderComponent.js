import React, { Component  } from 'react';
import profile from "./image/profile.jpg";


class HeaderComponent extends Component {
    // const profilePic = require("./image/profile-pic.jpg");
  
    componentDidMount(){
        const changeTheme = this.props.changeTheme;
        console.log("It's working")
        let theme = localStorage.getItem('theme');
        if(theme == null){
            changeTheme("light");
        }else{
            changeTheme(theme);
        }
        let themeDots = document.getElementsByClassName("theme-dot");
        for (let i = 0; i < themeDots.length; i++){
            themeDots[i].addEventListener("click",function(){
                let mode = this.dataset.mode;
                console.log('option clicked', mode);
                changeTheme(mode);
            });
        } 
    }

    render() {
        return (
            <React.Fragment>
                <section className="section1">
                    <div className="main-container">
                        <div className="greeting-wrapper">
                            <h1>Hi! I'm Bikram Singh</h1>
                        </div>

                        <div className="intro-wrapper">
                            <div className="nav-wrapper">
                                <div className="dot-wrapper">
                                    <div id="dot-1" className="browser-dot"></div>
                                    <div id="dot-2" className="browser-dot"></div>
                                    <div id="dot-3" className="browser-dot"></div>
                                </div>
                                <ul id="navigation">
                                    <li><a href="indext#contact">Contact</a></li>
                                </ul>
                            </div>
                            <div className="left-column">
                                <img id="profile-pic" src={profile} alt="Profile" />
                                <div className="theme-option-wrapper">
                                    <div data-mode="light" id="light-mode" className="theme-dot"></div>
                                    <div data-mode="blue" id="blue-mode" className="theme-dot"></div>
                                    <div data-mode="green" id="green-mode" className="theme-dot"></div>
                                    <div data-mode="purple" id="purple-mode" className="theme-dot"></div>
                                </div>
                                <p id="setting-note">*Theme setting will be saved for<br />your next visit</p>
                            </div>
                            <div className="right-column">
                                <div className="preview-shadow">
                                    <div id="preview">
                                        <div id="corner-tl" className="corner"></div>
                                        <div id="corner-tr" className="corner"></div>
                                        <h3>What I Do</h3>
                                        <p>I am SAP ABAP developer with 4+years of experience, now I am learning web development.</p>
                                        <div id="corner-br" className="corner"></div>
                                        <div id="corner-bl" className="corner"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default HeaderComponent;
