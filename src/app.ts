import Fastify from "fastify";
import userRoutes from "./modules/user/user.route";

const server = Fastify();

server.get("/healthcheck", async function (request, response) {
  return { status: "ok" };
});

async function main() {
  server.register(userRoutes, { prefix: "api/users" });
  try {
    await server.listen(3000, "0.0.0.0");
    console.log(`Server ready at http://localhost:3000`);
  } catch (e) {
    server.log.error(e);
    process.exit(1);
  }
}

main();
