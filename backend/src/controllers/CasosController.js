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
    }
}