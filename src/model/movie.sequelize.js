module.exports = (sequelize, Sequelize) => {
    const Movie = sequelize.define("movie", {
        title: {
            type: Sequelize.STRING,
        },
        description: {
            type: Sequelize.STRING,
        },
        url: {
            type: Sequelize.STRING,
        },
        checked: {
            type: Sequelize.INTEGER,
        }
    });
    return Movie;
}