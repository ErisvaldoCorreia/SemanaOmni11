const connection = require('../database/connection');

module.exports = {
    async list(req, res) {
        const { page = 1 } = req.query;
        const [count] = await connection('casos').count();
        const casos = await connection('casos')
            .join('ongs', 'ongs.id', '=', 'casos.ong_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select([
                'casos.*',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf'
            ]);

        res.header('X-Total-Count', count['count(*)'])
        return res.json(casos);
    },

    async listByOng(req, res) {
        const ong_id = req.headers.authorization;
        const casos = await connection('casos')
            .where('ong_id', ong_id)
            .select('*');

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
    },

    async session(req, res) {
        const { id } = req.body;
        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first();

        if(!ong) {
            return res.status(400).json({ error: 'Not ONG found with this id' });
        };

        return res.json(ong);
    }
}
