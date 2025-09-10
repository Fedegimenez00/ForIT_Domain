import { User } from "../entities/User";
import { IUserRepository } from "../repository/UserRepository";
import { Email } from "../value-objects/Email";
import { Password } from "../value-objects/Password";

type RegisterUserDTO = {
  name: string;
  email: string;
  password: string;
  role: "member" | "admin";
};

export class RegisterUser {
  constructor(private userRepo: IUserRepository) {}

  async execute(dto: RegisterUserDTO): Promise<User> {
    const email = new Email(dto.email);

    const userExists = await this.userRepo.searchFromEmail(email.toString());
    if (userExists) {
      throw new Error("El usuario ya se encuentra registrado");
    }

    const password = await Password.create(dto.password);

    const user: User = {
      id: Date.now(),
      name: dto.name,
      email: email.toString(),
      password: password.toString(),
      role: dto.role,
    };

    await this.userRepo.save(user);
    return user;
  }
}
