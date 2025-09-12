import express from "express";
import { CreateOrder } from "../../../domain/src/use-cases/CreateOrder";
import { OrderRepositoryMemory } from "../../../domain/src/repository/OrderRepository";
import { UserRepositoryMemory } from "../../../domain/src/repository/UserRepository";
import { RegisterUser } from "../../../domain/src/use-cases/RegisterUser";

const app = express();

const orderRepo = new OrderRepositoryMemory();
const userRepo = new UserRepositoryMemory();

app.use(express.json());

async function seedDatabase() {
  await new RegisterUser(userRepo).execute({
    name: "Member example",
    email: "member@test.com",
    password: "password123",
    role: "member",
  });
}

seedDatabase();

function handleError(res: express.Response, error: unknown) {
  const errorMessage =
    error instanceof Error ? error.message : "Error desconocido";
  res.status(400).json({ error: errorMessage });
}

app.post("/orders", async (req, res) => {
  try {
    const { memberId, items } = req.body;

    const member = await userRepo.searchFromEmail(memberId);
    if (!member) {
      return res.status(404).json({ error: "Miembro no encontrado" });
    }

    const order = CreateOrder.execute(member, items);

    await orderRepo.save(order);

    res.status(201).json(order);
  } catch (error) {
    handleError(res, error);
  }
});

app.post("/auth/register", async (req, res) => {
  try {
    const user = await new RegisterUser(userRepo).execute(req.body);
    res.status(201).json({
      id: user.id,
      email: user.email,
      role: user.role,
    });
  } catch (error) {
    handleError(res, error);
  }
});

app.listen(3000, () => {
  console.log("Server on http://localhost:3000");
});
