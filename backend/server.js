import setupApp from './src/app';
import auth from './src/sevice/sptransAuth';

auth.auth();

let port = 3000;

setupApp()
    .then(app => app.listen(port), () => console.log('app running on port ${port}')).catch(error => {
            console.error(error);
            process.exit(1);
        });