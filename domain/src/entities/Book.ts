export interface Book {
  id: number;
  nombre: string;
  category:
    | "terror"
    | "history"
    | "drama"
    | "comedy"
    | "sci-fi"
    | "romance"
    | "self-help"
    | "philosophy";
  availability: boolean;
}
