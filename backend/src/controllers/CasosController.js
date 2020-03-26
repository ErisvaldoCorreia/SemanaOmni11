const connection = require('../database/connection');

module.exports = {
    async list(req, res) {
        const casos = await connection('casos').select('*');
        return res.json(casos);
    },
    async create(req, res) {
        const { title, description, value } = req.body;
        const ong_id = req.headers.authorization;

        const [id] = await connection('casos').insert({
            title,
            description,
            value,
            ong_id
        });

        return res.json({ id });
    },

    async remove(req, res) {
        const { id } = req.params;
        const ong_id = req.headers.authorization;

        const caso = await connection('casos')
            .where('id', id)
            .select('ong_id')
            .first();

        if(caso.ong_id !== ong_id) {
            return res.status(401).json({ error: 'Not Authorized operation '})
        };

        await connection('casos').where('id', id).delete();
        return res.status(204).send();
    }
}