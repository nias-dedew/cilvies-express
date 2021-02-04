const MovieModel = require("../model").movie

module.exports = {
    retrieveAllMovie: async (req, res) => {
        try {
            const movies = await MovieModel.findAll();
            res.json(movies);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    },
    retrieveById: async (req, res) => {
        const id = parseInt(req.params.id);
        const selectedMovie = await MovieModel.findByPk(id);

        if (!selectedMovie) {
            res.status(404).send(`user with id ${id} was not found`)
        } else {
            res.json(selectedMovie);
        }
    },
    createMovie: async (req, res) => {
        const newMovie = {
            title: req.body.title,
            description: req.body.description,
            url: req.body.url,
            checked: req.body.checked,
        };
        await MovieModel.create(newMovie);
        res.sendStatus(201)
    },
    updateMovie: async (req, res) => {
        const payload = req.body;
        const id = parseInt(req.params.id);
        await MovieModel.update(payload, { where: { id: id } });
        res.json({ id, ...payload });
    },
    deleteMovie: async (req, res) => {
        const id = req.params.id;
        await MovieModel.destroy({ where: { id: id } });
        res.sendStatus(204);
    }
}