const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

const cors = {
    origin: true
}

// // // Create and Deploy Your First Cloud Functions
// // // https://firebase.google.com/docs/functions/write-firebase-functions
// //
// // exports.helloWorld = functions.https.onRequest((request, response) => {
// //   functions.logger.info("Hello logs!", {structuredData: true});
// //   response.send("Hello from Firebase!");
// // });

const gmailEmail = functions.config().gmail.email;

const gmailPassword = functions.config().gmail.password;

const mailTransport = nodemailer.createTransport({
    service: 'gmnail',
    auth: {
        user: gmailEmail,
        password: gmailPassword,
    },
});

exports.submit = function.https.onRequest((req,res) =>{
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS');
    res.set('Access-Control-Allow-Headers', '*');

    if(req.method === 'OPTIONS'){
        res.end();
    }else{
        cors(req, res, () => {
            if(req.method === 'POST'){
                return;
            }

            const mailOption = {
                from: req.body.email,
                replyTo: req.body.email,
                to: gmailEmail,
                subject: `${req.body.name} just messaged me from my Portfolio Site`,
                text: req.body.message,
                html: `<p>${req.body.message}</p>`,
            };

            return mailTransport.sendMail(mailOption).then(() => {
                console.log('New mail sent to:', gmailEmail);
                res.status(200).send({
                    isEmailSend: true
                });
            return;
            }); 
        });
    }
});

