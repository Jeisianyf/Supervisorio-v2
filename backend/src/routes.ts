import express from 'express';
import db from './database/connection';

const routes = express.Router()

routes.get('/general', async (request, response) => {
    const general_datas = await db('general_datas');

    return response.json(general_datas);
});

routes.post('/general', async (request, response) => {
    const {
        Iin,
        Iout,
        Vin
    } = request.body;

    const trx = await db.transaction();

    try {
        await trx('general_datas').insert({
            Iin,
            Iout,
            Vin
        });

        await trx.commit();

        return response.status(201).send();
    } catch (err) {
        await trx.rollback();

        console.log(err);

        return response.status(400).json({
            error: 'Ocorreu um erro inesperado ao tentar inserir os dados'
        })
    }


});

export default routes;
