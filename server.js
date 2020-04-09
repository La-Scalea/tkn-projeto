const server = require('./server/app');
const PORT = process.env.PORT || 3300;
server.listen(PORT, () => console.log(`Server is live at localhost:${PORT}`));
