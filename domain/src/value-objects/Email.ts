export class Email {
  private readonly value: string;

  constructor(email: string) {
    if (!this.IsEmailValid(email)) {
      throw new Error("Formato de email inválido");
    }
    this.value = email;
  }

  private IsEmailValid(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  toString(): string {
    return this.value;
  }
}
