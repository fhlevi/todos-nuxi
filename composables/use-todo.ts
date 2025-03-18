import { ref, onMounted } from 'vue';
import type { FieldValueSchema, TodoItemSchema } from '@/@types/todo';
import { prettyDate } from '@/utils/helper';
import { v4 as uuidv4 } from 'uuid';

const saveToLocalStorage = (payload: Array<TodoItemSchema>) => {
  localStorage.setItem('todo-list', JSON.stringify(payload));
};

export const useTodo = () => {
  const todoList = ref<TodoItemSchema[]>([]);

  const createTodo = (
    formVal: FieldValueSchema,
    callback: (date: string) => void,
  ) => {
    const arrPayload: Array<TodoItemSchema> = [...todoList.value];

    const payload = {
      todo: formVal.todo,
      id: uuidv4(),
      date: prettyDate(new Date()),
    };

    arrPayload.push(payload);

    saveToLocalStorage(arrPayload);
    todoList.value = arrPayload;
    callback(payload.date);
  };

  const updateTodo = (
    formVal: FieldValueSchema,
    callback: (date: string) => void,
  ) => {
    const storedTodoList = localStorage.getItem('todo-list');
    const arrPayload = storedTodoList ? JSON.parse(storedTodoList) : [];

    const index = arrPayload.findIndex(
      (item: TodoItemSchema) => item.id === formVal.id,
    );

    if (index !== -1) {
      arrPayload[index].todo = formVal.todo;

      saveToLocalStorage(arrPayload);
      todoList.value = arrPayload;
      callback(arrPayload[index].date);
    }
  };

  const deleteTodo = (id: string, callback: (date: string) => void) => {
    const arrPayload = [...todoList.value];
    const index = arrPayload.findIndex((item) => item.id === id);

    if (index !== -1) {
      const date = arrPayload[index].date;
      arrPayload.splice(index, 1);

      saveToLocalStorage(arrPayload);
      callback(date);
    }

    todoList.value = arrPayload;
  };

  onMounted(() => {
    const todos = localStorage.getItem('todo-list');
    todoList.value = todos ? JSON.parse(todos) : [];
  });

  return {
    createTodo,
    updateTodo,
    todoList,
    deleteTodo,
  };
};
