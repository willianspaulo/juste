import express from 'express';
import path from 'path';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

//Permite acesso a arquivos estáticos da aplicação. (Para download, visualização ou simplismente disponibilizar o link)
//http://localhost:3333/download/teste.pdf
app.use('/download', express.static(path.resolve(__dirname, 'content')))

app.listen(3333);