import { EFilter, ITodo } from "@/shared/types/Todo";

export const loadTodos = (): ITodo[] => {
  return JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[];
};

export const saveTodos = (todos: ITodo[]): void => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

export const addNewTodo = (
  todos: ITodo[],
  title: string,
  description: string
): ITodo[] => {
  const newTodo: ITodo = {
    id: Date.now(),
    title,
    description,
    completed: false,
  };
  return [...todos, newTodo];
};

export const toggleTodoCompletion = (todos: ITodo[], id: number): ITodo[] => {
  return todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
};

export const deleteTodo = (todos: ITodo[], id: number): ITodo[] => {
  return todos.filter((todo) => todo.id !== id);
};

export const filterTodos = (todos: ITodo[], filter: EFilter): ITodo[] => {
  if (filter === EFilter.COMPLETE)
    return todos.filter((todo) => todo.completed);
  if (filter === EFilter.INCOMPLETE)
    return todos.filter((todo) => !todo.completed);
  return todos;
};
