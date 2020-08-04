import React , {useState} from 'react';
import { db } from '../firebase/firebaseConfig';
// import { Timestamp } from '@google-cloud/firestore';
// import Axios from 'axios';

function ContactComponent() {
    const alignCenter ={
        textAlign : 'center'
    };
    const [formData, setFormData] = useState({name:'',email:'',message:""});

    const updateInput = e =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

   
    
    const submitContact = (e) =>{
        console.log("submiting form");
        e.preventDefault();
        sendEmail();
        setFormData({
            name: '',
            email: '',
            message:'',
        })
        console.log(formData);
    };

    const sendEmail = () => {
        console.log(formData);
        // Axios.post(
        //     'https://us-central1-your-app-name.cloudfunctions.net/submit',
        //     formData
        // )
        // .then(res => {
            db.collection('contactform').add({
                name: formData.name,
                email: formData.email,
                message: formData.message,
                timestamp: new Date()
            });
            console.log("Message is added to database");
        // })
        // .catch((error) => {
        //     console.log(error);
        // })
    }
    return (
        <React.Fragment>
            <div id="contact" className="section2">
                <div className="main-container">
                    {/* <a target="_blank" href=""></a> */}
                    <h3 style={alignCenter}>Get in Touch</h3>
                    <form id="contact-form" onSubmit={submitContact}>
                        {/* <a name="label"></a> */}
                        <label>Name</label>
                        <input id="name" type="text" value={formData.name} className="input-field" name="name" onChange={updateInput}/>
                        <label>Email</label>
                        <input id="email" type="email" value={formData.email} className="input-field" name="email" onChange={updateInput}/>
                        <label>Message</label>
                        <textarea id="message" value={formData.message} className="input-field" name="message" onChange={updateInput}></textarea>
                        <input id="submit-butn" type="submit" value="send"/>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ContactComponent;
