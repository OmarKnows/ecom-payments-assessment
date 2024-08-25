import {
  addNewTodo,
  deleteTodo,
  filterTodos,
  loadTodos,
  saveTodos,
  toggleTodoCompletion,
} from "@/services/todo.service";
import { EFilter, ITodo } from "@/shared/types/Todo";
import Container from "@components/Container";
import { useEffect, useState } from "react";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const TaskOne = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [filter, setFilter] = useState<EFilter>(EFilter.ALL);

  useEffect(() => {
    setTodos(loadTodos());
  }, []);

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const handleAddTodo = (title: string, description: string) => {
    setTodos(addNewTodo(todos, title, description));
  };

  const handleToggleTodo = (id: number) => {
    setTodos(toggleTodoCompletion(todos, id));
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(deleteTodo(todos, id));
  };

  const filteredTodos = filterTodos(todos, filter);

  return (
    <Container>
      <TodoForm addTodo={handleAddTodo} />
      <TodoFilter setFilter={setFilter} />
      <TodoList
        todos={filteredTodos}
        toggleTodo={handleToggleTodo}
        deleteTodo={handleDeleteTodo}
      />
    </Container>
  );
};

export default TaskOne;
