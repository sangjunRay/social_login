module.exports = {
    HOST: "localhost",
    USER: "ray",
    PASSWORD: "tkdwns12",
    DB: "social",
    dialect: "postgres",
    pool: {
        max:5,
        min:0,
        acquire: 30000,
        idle: 10000,
    }
}