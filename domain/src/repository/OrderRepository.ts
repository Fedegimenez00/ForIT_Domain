import { Order } from "../entities/Order";

export interface IOrderRepository {
  save(order: Order): Promise<void>;
  searchFromId(id: number): Promise<Order | null>;
  listFromUser(userId: number): Promise<Order[]>;
}

export class OrderRepositoryMemory implements IOrderRepository {
  private orders: Order[] = [];

  async save(order: Order): Promise<void> {
    this.orders.push(order);
  }

  async searchFromId(id: number): Promise<Order | null> {
    return this.orders.find((o) => o.id === id) || null;
  }

  async listFromUser(userId: number): Promise<Order[]> {
    return this.orders.filter((o) => o.member.id === userId);
  }
}
