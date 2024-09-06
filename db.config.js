module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "root",
    DB: "test_db",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idele: 10000
    }
}