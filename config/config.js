module.exports = {
    development: {
        db: {
            username: "root",
            password: "",
            database: "openshift",
            host: "127.0.0.1",
            port:"3306",
            dialect: 'mysql',
        }
    },
    production: {
        db: {
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            host: process.env.DB_HOSTNAME,
            port:process.env.DB_PORT,
            dialect: 'mysql',
        }
    }
};
