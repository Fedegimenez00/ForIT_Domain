export interface Book {
  id: number;
  name: string;
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
