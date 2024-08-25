import { ITodo } from "@/shared/types/Todo";
import Button from "@components/Button";
import { FC } from "react";

interface TodoListProps {
  todos: ITodo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoList: FC<TodoListProps> = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <div className="w-[400px] border-collapse text-center">
      {todos.length === 0 ? (
        <p className="p-4 text-gray-500">No todos available</p>
      ) : (
        <table className="w-full border-collapse text-center">
          <thead>
            <tr>
              <th className="border p-2">Completed</th>
              <th className="border p-2">Title</th>
              <th className="border p-2">Description</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td className="border p-2">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                  />
                </td>
                <td className="border p-2">{todo.title}</td>
                <td className="border p-2">{todo.description}</td>
                <td className="border p-2">
                  <Button variant="red" onClick={() => deleteTodo(todo.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TodoList;
