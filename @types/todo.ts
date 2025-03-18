export interface TodoItemSchema {
  id: string;
  todo: string;
  date: string;
}

export interface FieldValueSchema {
  [key: string]: string;
}