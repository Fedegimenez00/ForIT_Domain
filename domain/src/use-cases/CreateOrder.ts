import { Order, OrderStatus } from "../entities/Order";
import { Book } from "../entities/Book";
import { User } from "../entities/User";

export class CreateOrder {
  static execute(member: User, items: Book[]): Order {
    if (items.length === 0) {
      throw new Error("La solicitud no puede estar vacía");
    }

    return {
      id: Date.now(),
      member,
      items,
      status: "in-progress",
      date: new Date(),
    };
  }
}
