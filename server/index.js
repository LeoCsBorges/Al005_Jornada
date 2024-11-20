const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({
    extended: true
}));


const makeTransporter = function () {
    return nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'lucascamparaujo@gmail.com',
            pass: 'nsch nifc vaqm owhn',
        },
    })
}

app.get('/', async function (request, response) {
    return response
        .status(200)
        .render('home', {
            engine: {
                nome: 'Leo',
                idade: 34,
                vivo: true,
            }
        });
});

app.post('/salvar-formulario', async function (request, response) {
    const htmlMail = await ejs.renderFile('views/email.ejs', request.body);
    const backURL = (request.header('Referer') || 'http://localhost:5500/contato.html') + '?email_enviado=true';

    await makeTransporter().sendMail({
        from: 'lucascamparaujo@gmail.com',
        to: 'leo_borgess@live.com',
        subject: 'testando api de envio de dados do formulario',
        html: htmlMail,
    });

    return response
        .status(302)
        .setHeader('Location', backURL)
        .end();
})

app.listen(3000, function () {
    console.log('Servidor rodando em http://localhost:3000/');
});


