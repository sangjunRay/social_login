const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const db = require('./models')
let corOptions = {
    origin: "http://localhost:8081",
};
app.use(bodyParser.json());
app.use(cors(corOptions));
app.use(bodyParser.urlencoded({extended: true}));
const apiRoutes = require('../social_login_backend/routes/userApi');
app.use('/api', apiRoutes)

const PORT = process.env.PORT || 8080;
db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`server is running on PORT ${PORT}`)
    })
})
