import { ITodo } from '@/shared/types/Todo';
import Button from '@components/Button';
import Table from '@components/Table';
import { FC } from 'react';

interface ITodoListProps {
	todos: ITodo[];
	toggleTodo: (id: number) => void;
	deleteTodo: (id: number) => void;
}

const TodoList: FC<ITodoListProps> = ({ todos, toggleTodo, deleteTodo }) => {
	return (
		<div className='w-[400px] border-collapse text-center'>
			<Table<ITodo>
				headers={['Completed', 'Title', 'Description', 'Actions']}
				data={todos}
				renderRow={(todo) => (
					<>
						<td className='border p-2'>
							<input type='checkbox' checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
						</td>
						<td className='border p-2'>{todo.title}</td>
						<td className='border p-2'>{todo.description}</td>
						<td className='border p-2'>
							<Button variant='red' onClick={() => deleteTodo(todo.id)}>
								Delete
							</Button>
						</td>
					</>
				)}
				emptyMessage='No todos available'
			/>
		</div>
	);
};

export default TodoList;
