import express from "express";
import { CreateOrder } from "../../../domain/src/use-cases/CreateOrder";
import { OrderRepositoryMemory } from "../../../domain/src/repository/OrderRepository";
import { UserRepositoryMemory } from "../../../domain/src/repository/UserRepository";
import { RegisterUser } from "../../../domain/src/use-cases/RegisterUser";

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Server on http://localhost:3000");
});
