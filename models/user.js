module.exports = (sequelize, type) => {
    var User = sequelize.define('User', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING
    });

    return User;
}
