import { ChangeEvent, FC } from 'react';

interface IInputProps {
	type?: string;
	name?: string;
	value: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	placeholder: string;
	className?: string;
	error?: string;
}

const Input: FC<IInputProps> = ({ type = 'text', name = '', value, onChange, placeholder, className = '', error }) => {
	return (
		<div className='mb-4 w-full'>
			<input
				type={type}
				name={name}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				className={`p-2 border rounded-md shadow-sm transition-all duration-300 outline-none focus:ring-2 focus:ring-blue-500 w-full ${className} ${
					error ? 'border-red-500' : ''
				}`}
			/>
			{error && <p className='text-red-500 text-sm mt-1'>{error}</p>}
		</div>
	);
};

export default Input;
