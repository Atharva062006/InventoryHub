import swaggerJsdoc from "swagger-jsdoc";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "InventoryHub API",
            version: "1.0.0",
            description: "Swagger documentation for the InventoryHub backend API",
        },
        servers: [
            {
                url: "/",
                description: "Current server",
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
            schemas: {
                ApiResponse: {
                    type: "object",
                    properties: {
                        success: {
                            type: "boolean",
                            example: true,
                        },
                        message: {
                            type: "string",
                            example: "Request completed successfully",
                        },
                        data: {
                            nullable: true,
                        },
                    },
                },
            },
        },
    },
    apis: ["./src/routes/*.js"],
};

export const swaggerSpec = swaggerJsdoc(options);