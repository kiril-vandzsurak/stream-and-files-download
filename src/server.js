import express from "express";
import listEndpoints from "express-list-endpoints";
import filesRouter from "./api/files/index.js";

const server = express();
const port = 3001;

server.use("/files", filesRouter);

server.listen(port, () => {
  console.table(listEndpoints(server));
  console.log("Server is running on port:", port);
});
