import express from 'express';
import bodyparser from 'body-parser';
import routes from './routes'; 

const app = express();
app.use(bodyparser.json());

app.use('/', routes); 

export default app;