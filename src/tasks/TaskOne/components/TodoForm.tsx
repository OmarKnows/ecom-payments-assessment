import Button from '@components/Button';
import Input from '@components/Input';
import { ChangeEvent, FC, FormEvent, useState } from 'react';

interface ITodoFormProps {
	addTodo: (title: string, description: string) => void;
}

const TodoForm: FC<ITodoFormProps> = ({ addTodo }) => {
	const [title, setTitle] = useState<string>('');
	const [description, setDescription] = useState<string>('');
	const [error, setError] = useState<string>('');

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		if (title.trim() === '' || description.trim() === '') {
			setError('Both title and description are required');
			return;
		}
		addTodo(title, description);
		setTitle('');
		setDescription('');
		setError('');
	};

	const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
	const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => setDescription(e.target.value);

	return (
		<form
			onSubmit={handleSubmit}
			className='flex flex-col p-6 gap-3 w-[400px] items-center shadow-lg rounded-lg bg-white'
		>
			<Input type='text' value={title} onChange={handleTitleChange} placeholder='Title' />
			<Input type='text' value={description} onChange={handleDescriptionChange} placeholder='Description' />
			{error && <p className='text-red-500'>{error}</p>}
			<Button type='submit' className='w-fit'>
				Add Todo
			</Button>
		</form>
	);
};

export default TodoForm;
