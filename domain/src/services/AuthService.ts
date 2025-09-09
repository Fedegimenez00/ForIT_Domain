import { User } from "../entities/User";

export class AuthService {
  static verifyRole(user: User, requireRole: string): boolean {
    return user.role === requireRole;
  }

  static generateToken(user: User): string {
    return Buffer.from(`${user.email}:${user.role}`).toString("base64");
  }
}
