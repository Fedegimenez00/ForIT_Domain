import { User } from "../entities/User";

export interface IUserRepository {
  save(user: User): Promise<void>;
  searchFromEmail(email: string): Promise<User | null>;
}

export class UserRepositoryMemory implements IUserRepository {
  private users: User[] = [];

  async save(user: User): Promise<void> {
    this.users.push(user);
  }

  async searchFromEmail(email: string): Promise<User | null> {
    return this.users.find((u) => u.email === email) || null;
  }
}
