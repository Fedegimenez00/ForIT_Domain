import { User } from "./User";
import { Book } from "./Book";

export type OrderStatus = "in-progress" | "accepted" | "rejected";

export interface Order {
  id: number;
  member: User;
  items: Book[];
  status: OrderStatus;
  date: Date;
}
