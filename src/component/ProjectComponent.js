import React, { useState, useEffect } from 'react';
import { db } from '../firebase/firebaseConfig';


const ProjectComponent = () => {

    const initialState = {};
    var firstLoad = 0;
    const [isLoaded, setLoaded] =useState(false);
    const [Posts, setPosts] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(initialState);
    const [preSlide, setPreSlide] = useState(initialState);
    const [nextSlide, setNextSlide] = useState(initialState);
    const alignCenter = {
        textAlign: 'center'
    };


    useEffect(() => {
        
        db.collection('Projects').get().then(
            function (querySnapshot) {
                querySnapshot.forEach(function (doc) {

                    setPosts((Posts) => [...Posts, doc.data()]);
                    // console.log(doc.id, '=>', doc.data());  
                });
                setLoaded(true); 
            }  
        );   
    }, [])

    
    //set initial current page
    useEffect(() => {
        console.log(Posts);
        setCurrentSlide(Posts[firstLoad]);
        console.log(currentSlide);
        setNextSlide(Posts[(firstLoad + 1)]);
        console.log(nextSlide);
        return () => {
            //cleanup
        }
    }, [isLoaded])

    //Prevoius Function
    const previous = () => {
        if(firstLoad > 1){
            firstLoad = firstLoad -1
            setPreSlide(Posts[firstLoad -1 ])
            setCurrentSlide(Posts[firstLoad]);
            setNextSlide(Posts[(firstLoad + 2)]);
        }else if(firstLoad === 1){
            firstLoad = firstLoad -1
            setPreSlide({});
            setCurrentSlide(Posts[firstLoad]);
            setNextSlide(Posts[(firstLoad + 1)]);
        }
        
    };

    //Next Function
    const next = () => {
        if(firstLoad < Posts.length - 3 ){
            firstLoad = firstLoad + 1
            setPreSlide(Posts[firstLoad -1 ])
            setCurrentSlide(Posts[firstLoad]);
            setNextSlide(Posts[(firstLoad + 1)]);
        }else if(firstLoad === Posts.length - 2){
            firstLoad = firstLoad + 1
            setPreSlide(Posts[firstLoad - 1]);
            setCurrentSlide(Posts[firstLoad]);
            setNextSlide({});
        }
    };

    return (
        <React.Fragment>
            <section id="project" className="section1">
                <div className="main-container">
                    <h3 style={alignCenter}>Projects</h3>
                    <div className="project-container">
                        <div className="slide-holder">
                            <div className="slide previous-slide">
                                {preSlide?<div className="slide-thumbnail">
                                        <img className="thumbnail" src={"https://firebasestorage.googleapis.com/v0/b/portfolio-web-60e7e.appspot.com/o/customer-dash.jpg?alt=media&token=1ac2dfd5-d7cb-4aba-9732-874c5640c125"} alt={preSlide.title} />
                                        <div className="post-preview">
                                            <h6 className="post-title">{preSlide.Title}</h6>
                                            <p className="post-intro">{preSlide.description}</p>
                                            <a href={preSlide.ProjectLink}>Read More</a>
                                        </div>
                                    </div> : ""
                                }
                            </div>
                            <div className="slide current-slide">
                                {currentSlide?<div className="slide-thumbnail">
                                        <img className="thumbnail" src={"https://firebasestorage.googleapis.com/v0/b/portfolio-web-60e7e.appspot.com/o/customer-dash.jpg?alt=media&token=1ac2dfd5-d7cb-4aba-9732-874c5640c125"} alt={currentSlide.title} />
                                        <div className="post-preview">
                                            <h6 className="post-title">{currentSlide.Title}</h6>
                                            <p className="post-intro">{currentSlide.description}</p>
                                            <a href={currentSlide.PorjectLink}>Read More</a>
                                        </div>
                                    </div>: ""
                                }
                            </div>
                            <div className="slide next-slide">
                                {nextSlide?<div className="slide-thumbnail">
                                        <img className="thumbnail" src={"https://firebasestorage.googleapis.com/v0/b/portfolio-web-60e7e.appspot.com/o/customer-dash.jpg?alt=media&token=1ac2dfd5-d7cb-4aba-9732-874c5640c125"} alt={nextSlide.title} />
                                        <div className="post-preview">
                                            <h6 className="post-title">{nextSlide.Title}</h6>
                                            <p className="post-intro">{nextSlide.description}</p>
                                            <a href={nextSlide.ProjectLink}>Read More</a>
                                        </div>
                                    </div> : ""
                                }
                            </div>
                        </div>
                        <div className="slide-controller">
                            <span onClick={previous}>Previous</span>
                            <span onClick={next}>Next</span>
                        </div>
                    </div >
                </div >
            </section >
        </React.Fragment >
    );
}

export default ProjectComponent;
