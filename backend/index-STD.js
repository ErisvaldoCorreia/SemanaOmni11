/**
 * Código Inicial de Estudo.
 * Desenvolvedor: Erisvaldo Correia - 2020
 * Instrução: Diego Fernandes Rocketseat - Omni11
 * 
 * ARQUIVO DE EXECUÇÃO TRAVADA.
 * NOMEADO COM FINAL -STD PARA REPRESENTAR AS INFORMAÇÕES
 * ESTUDADAS ANTES DE DESENVOLVER A APLICAÇÃO COMPLETA.
 */

const express = require('express');
const app = express();
app.use(express.json());

/**
 * Métodos HTTP
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de Parametros:
  * 
  * Query Params: Parametros nomeados enviados na rota após uma ? para filtros e paginação
  * para coletar os dados de filtro, utilizamos o request.query desestruturando os params
  * 
  * Route Params: Parametros utilizados para identificar recursos de rotas, após /:
  * para coletar os dados de rota, utilizamos o request.params desestruturando os params
  * 
  * Body: Informações enviadas pelo corpo da nossa requisição - para cadastrar ou alterar algo.
  */

// Simulando rota de busca em api com rotas de id unico. 
app.get('/api/:id', (req, res) => {
  const { id } = req.params;
  console.log(id);

  return res.json({ 
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


/**
 * Bancos de Dados:
 * Relacionais -> SQL: MySQL, SQLite, PostgresSQL, etc.
 * Não Relacional -> NoSQL: MongoDB, CouchDB, etc.
 * 
 * Sistema de busca com SQL - Opção escolhida para aplicação.
 * DRIVER: SELECT * FROM 'USERS';
 * QUERY BUILDER: table('users').select('*');
 */

 