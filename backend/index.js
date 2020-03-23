const express = require('express');
const app = express();

app.get('/api', (req, res) => {
    return res.json(
        { 
            message: 'Bem vindo ao Mundo Node',
            aplicação: 'Semana OmniStack 11.0',
            envolvidos: [{
                instrutor: 'Diego Fernandes',
                aluno: 'Erisvaldo Correia'
            }]
        }
    );
});

app.listen(3333);