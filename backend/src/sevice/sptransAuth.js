//controller
var request = require('request');

const auth = () => request.post(
    'http://api.olhovivo.sptrans.com.br/v2.1/Login/Autenticar?token=6306ec733d1e4e0c428318116972a2fd02ad7a83ac29adb450661dfaa01d8aca',
    (error, response, body) => {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
    }
);

export default { auth };