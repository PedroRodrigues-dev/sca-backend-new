const express = require('express');
const { APP_PORT } = require('./config/env');
const { default: helmet } = require('helmet');
const swaggerUi = require("swagger-ui-express");
const router = require('./routes/router');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json());
helmet(app);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(require("./swagger-output.json")));

app.use("/api/v1", router);


app.listen(APP_PORT, () => {
  console.log(`Aplicação está rodando na porta ${APP_PORT}`);
});
