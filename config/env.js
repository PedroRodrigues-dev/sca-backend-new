exports.APP_PORT = parseInt(process.env.APP_PORT) || 3000;
exports.APP_SECRET = process.env.APP_SECRET || "myultrasecret";
exports.DATABASE_HOST = process.env.DATABASE_HOST || "localhost";
exports.DATABASE_PORT = parseInt(process.env.DATABASE_PORT) || 3306;
exports.DATABASE_USERNAME = process.env.DATABASE_USERNAME || "root";
exports.DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || "root";
exports.DATABASE_NAME = process.env.DATABASE_NAME || "sca";
