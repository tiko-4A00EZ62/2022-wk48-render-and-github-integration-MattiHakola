const app = require("./app");
require("dotenv").config();
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.info(`Backend is listening on port ${PORT}`);
});
