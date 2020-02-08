const startServer = require('./src/server');
const connectToDB = require('./src/modules/connectDB');

startServer();
connectToDB('mongodb://localhost/marketplace-test');
