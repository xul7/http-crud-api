import http from "http";
import { router } from "./router/index";

const server = http.createServer((req, res) => {
  router(req, res);
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log("server started at http://localhost:" + PORT);
});
