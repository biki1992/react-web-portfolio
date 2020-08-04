import {createGlobalStyle} from "styled-components";

//Gloabal styling
export const GlobalStyle = createGlobalStyle`
body,html{
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
}

body * {
    transition: 0.3s;
}

h1, h2, h3, h4,h5,h6, strong{
    color: ${({theme}) => theme.mainText};
    font-family: 'Russo One', sans-serif;
    font-weight: 500;
}

p, li, span, label, input, textarea{
    color: ${({theme}) => theme.secondaryText}; 
    font-family: 'Russo One', monospace;
}

a{
    text-decoration: none;
    color: #17a2b8;
}

ul{
    list-style: none;
}

h1{ font-size: 56px;}
h2{ font-size: 36px;}
h3{ font-size: 28px;}
h4{ font-size: 24px;}
h5{ font-size: 20px;}
h6{ font-size: 16px;}

.section1{
    background-color: ${({theme}) => theme.mainColor}; 
    border-bottom: 1px solid ${({theme}) => theme.borderColor}; 
    overflow: auto;
}

.main-container{
    width: 1200px;
    margin: 0 auto;
}

.greeting-wrapper{
    display: grid;
    text-align: center;
    align-content: center;
    min-height: 10em;
}

.intro-wrapper{
    background-color:  ${({theme}) => theme.secondaryColor};
    border: 1px solid ${({theme}) => theme.borderColor};
    border-radius: 5px 5px 0 0;

    -webkit-box-shadow: -1px 1px 3px -1px rgba(0,0,0,0.75);
	-moz-box-shadow: -1px 1px 3px -1px rgba(0,0,0,0.75);
    box-shadow: -1px 1px 3px -1px rgba(0,0,0,0.75);
    
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 
    'nav-wrapper nav-wrapper'
    'left-column right-column';
}

.nav-wrapper{
    border-radius: 5px 5px 0 0;
    grid-area: nav-wrapper;
    border-bottom: 1px solid ${({theme}) => theme.borderColor};
    display: flex;
    justify-content: space-between;
    text-align: center;
    background-color: ${({theme}) => theme.mainColor}; 
}

#navigation a{
    color: ${({theme}) => theme.mainText}; 
}

#navigation{
    margin: 0;
    padding: 10px;
}

#navigation li{
    display: inline-block;
    margin-right: 5px;
    margin-left: 5px;
}

.dot-wrapper{
    display: flex;
    padding: 10px;
}

.browser-dot{
    background-color: black;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    margin: 5px;

    -webkit-box-shadow: -1px 1px 3px -1px rgba(0,0,0,0.75);
	-moz-box-shadow: -1px 1px 3px -1px rgba(0,0,0,0.75);
	box-shadow: -1px 1px 3px -1px rgba(0,0,0,0.75);
}

#dot-1{
    background-color: #fc6058;
}

#dot-2 {
    background-color: #fec02f;
}

#dot-3 {
    background-color: #2aca3e;
}

.left-column{
    grid-area: left-column;
    padding-top: 50px;
    padding-bottom: 50px;
}
#profile-pic{
    display: block;
    margin: 0 auto;
    height: 200px;
    width: 200px;
    object-fit: cover;
    border: 2px solid ${({theme}) => theme.borderColor}; 
}

.theme-option-wrapper{
    display: flex;
    justify-content: center;
}
.theme-dot{
    height: 30px;
    width: 30px;
    background-color: blcak;
    border-radius: 50%;
    margin: 5px;
    border: 2px solid  ${({theme}) => theme.themeDotBorder};
    -webkit-box-shadow: -1px 1px 3px -1px rgba(0,0,0,0.75);
	-moz-box-shadow: -1px 1px 3px -1px rgba(0,0,0,0.75);
	box-shadow: -1px 1px 3px -1px rgba(0,0,0,0.75);

	cursor: pointer;
}
.theme-dot:hover{
    border-width: 5px;
}


#light-mode{
	background-color: #fff;
}

#blue-mode{
	background-color: #192734;
}

#green-mode{
	background-color: #78866b;
}

#purple-mode{
	background-color: #7E4C74;
}
#setting-note{
    /* color: black; */
	font-size: 12px;
	font-style: italic;
	text-align: center;
}

.right-column{
    grid-area: right-column;
    display: grid;
    align-content: center;
    padding-top: 50px;
    padding-bottom: 50px;
}

.preview-shadow{
    background-color: ${({theme}) => theme.previewShadow}; 
    max-width: 300px;
    height: 180px;
    padding-left: 30px;
    padding-top: 30px;
}

#preview{
    border: 1.5px solid #17a2b8;
    width: 300px;
    background-color: ${({theme}) => theme.previewBg};
    padding: 15px;
    position: relative;
}

.corner{
    width: 7px;
    height: 7px;
    border-radius: 50%;
    border: 1.5px solid #17a2b8;
    background-color: #fff;
    position: absolute;
}

#corner-tl{
    top: -5px;
    left: -5px;
}
#corner-tr{
    top: -5px;
    right: -5px;
}

#corner-bl{
    bottom: -5px;
    left: -5px;
}
#corner-br{
    bottom: -5px;
    right: -5px;
}

.section2{
    background-color: ${({theme}) => theme.secondaryColor};
    border-bottom: 1px solid var(--borderColor);
    overflow: auto; 
}

.about-wrapper{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(320px,1fr));
    padding-bottom: 50px;
    padding-top: 50px;
    gap: 100px;
}

#skill {
    display: flex;
    justify-content: space-evenly;
    background-color: ${({theme}) => theme.previewShadow};
}

.social-link{
    display: grid;
    align-content: center;
    text-align: center;
}

#social-img{
    width: 100%
}

#contact-form{
    display: grid;
    max-width: 600px;
    margin: 0 auto;
    border: 1px solid ${({theme}) => theme.borderColor};
    padding: 15px;
    border-radius: 5px;
    background-color: ${({theme}) => theme.mainColor}; 
    margin-bottom: 50px;
}

#contact-form label{
    line-height: 2.7em;
}

#contac-form textarea{
    min-height: 100px;
    font-size: 14px;
}

.input-field{
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: ${({theme}) => theme.secondaryColor}; 
    border-radius: 5px;
    border: 1px solid ${({theme}) => theme.borderColor}; 
    font-size: 14px;
}

#submit-butn{
    cursor: pointer;
    margin-top: 10px;
    width: 100%;
    padding-right: 10px;
    padding-bottom: 10px;
    color: #fff;
    background-color: ${({theme}) => theme.buttonColor};
    border: none;
    border-radius: 5px;
}

.post-title{
    color: black;
    margin: 0;
}
.post-intro{
    color: #4b5156;
    font-size: 14px;
}
.project-container{
    width: 95%;
}
.thumbnail{
    width: 100%;
    object-fit: fill;
}

.slide-holder{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
}

.current-slide{
    max-width: 320px;
    height: 400px;
    margin: auto 10px;
}

.previous-slide,
.next-slide{
    max-width: 200px;
    max-height: 150px;
    overflow: hidden;
}

.slide,.slide-thumbnail{
    width: 100%;
    min-height: 200px;
    background-color: ${({theme}) => theme.secondaryColor}; 
    background-size: cover;
    background-position: center;
    border-radius: 6px;
    box-shadow: 5px 5px 6px ${({theme}) => theme.secondaryColor};
}
.slide-controller{
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
}
.slide-controller span{
    padding: 10px;
    width: 100px;
    border: none;
    border-radius: 6px;
    background-color: ${({theme}) => theme.buttonColor};
    color: #fff;
    cursor: pointer;
    text-align: center;
    box-shadow: 5px 5px 6px ${({theme}) => theme.secondaryColor};
    user-select: none;
}
@media screen and (max-width: 1200px){
    .main-container{
        width: 95%;
    }
}

@media screen and (max-width: 800px){
    .intro-wrapper{
        grid-template-columns: 1fr;
        grid-template-areas:
        'nav-wrapper' 
        'left-column'
        'right-column';
    }
    .right-column{
        justify-content: center;
    }
}

@media screen and (max-width: 400px){
    .preview-shadow{
        max-width: 280px;
        height: 180px;
        padding-left: 10px;
        padding-top: 10px;
    }

    .previous-slide,
    .next-slide{
    display: none;
    }

    #preview{
        width:260px;
    }
}`;
