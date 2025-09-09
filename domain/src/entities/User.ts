export type Role = "admin" | "librarian" | "member";

export interface User {
  id: number;
  name: string;
  email: string;
  rol: Role;
  password: string;
}
