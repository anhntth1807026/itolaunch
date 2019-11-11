const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const Firestore = require('@google-cloud/firestore');
const db = new Firestore();
const cors = require('cors')({origin: true});

exports.newAdmin = functions.https.onRequest(async (req, res) => {
    async function setAdmin() {
        await cors(req, res, async () => {
            console.log('req body: ', req.body);
            const obj =  req.body.data;
            console.log('obj: ', obj);
            var idToken = obj['tk'];
            console.log('token: ', idToken);
            admin.auth().verifyIdToken(idToken).then(function (decodedToken) {
                console.log('decode token success.');
                let email = decodedToken.email;
                let uid = decodedToken.uid;
                console.log('email user: ', email);
                console.log('uid: ', uid);
                if (email === 'hoasunshine210620@gmail.com' || email === 'lexuanduy07@gmail.com') {
                    admin.auth().setCustomUserClaims(uid, {admin: true}).then(sc => {
                        return res.status(200).send({data: {
                                stt: true,
                                title: 'success!'
                            }});
                    });
                } else {
                    return res.status(200).send({data: {
                            stt: false,
                            title: 'error forbidden!'
                        }});
                }
            }).catch(err => {
                console.log('error verify token: ', err);
                return res.status(200).send({data: {stt: false}});
            });
        });
    }
    setAdmin();
});