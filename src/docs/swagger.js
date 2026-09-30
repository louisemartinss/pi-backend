const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Recordar API",
      version: "1.0.0",
      description: "API acadêmica da plataforma Recordar."
    },
    servers: [{ url: "http://localhost:3000" }],
    components: {
      securitySchemes: {
        bearerAuth: { type: "http", scheme: "bearer", bearerFormat: "JWT" }
      }
    },
    security: [{ bearerAuth: [] }]
  },
  apis: ["./src/docs/swagger.docs.js"]
};

module.exports = swaggerJSDoc(options);
