const express = require("express");

const { ServerConfig, Logger } = require("./config");
const log = Logger(__filename);
const apiRoutes = require("./routes");

const app = express();

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, () => {
  console.log(`PORT successfully started on server: ${ServerConfig.PORT}`);
  log.info("successfully started the folder");
});
