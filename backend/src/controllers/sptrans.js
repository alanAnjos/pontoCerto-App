import request from 'request';
class SpTransController {
    
    getStop(filter, res) {
        console.log(filter);
        let uri = 'http://api.olhovivo.sptrans.com.br/v2.1/Login/Autenticar?token=6306ec733d1e4e0c428318116972a2fd02ad7a83ac29adb450661dfaa01d8aca';
        var cookiejar = request.jar();
        return request.post({url:uri,jar:cookiejar}, (error, response, body) => {
            let uri = 'http://api.olhovivo.sptrans.com.br/v2.1/Parada/Buscar?termosBusca=' + filter;
            request.get({url:uri,jar:cookiejar}, (error, response, body) => {
                var jsonResp = JSON.parse(body);
                res.send(jsonResp[0]); //returns only the first element to simulate a filter
            })
        })
    }
}

export default SpTransController;