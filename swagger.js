const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./swagger-output.json"; 
const endpointsFiles = ["./app.js"]; 

const config = {
    info: {
      title: "sca-backend",
      version: "1.0.0",
      description: "Sistema de controle de acesso backend",
    },
  };

swaggerAutogen(outputFile, endpointsFiles, config);
