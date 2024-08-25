import { FC, ReactNode } from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

interface IContainerProps {
	children?: ReactNode;
	hideBackButton?: boolean;
	title: string;
}

const Container: FC<IContainerProps> = ({ children, title, hideBackButton = false }) => {
	const navigate = useNavigate();
	return (
		<div className='p-5'>
			<div className='flex flex-col gap-2'>
				<h1 className='text-3xl'>{title}</h1>
				{hideBackButton ? null : (
					<Button variant='orange' onClick={() => navigate('..')} className='w-fit'>
						Back
					</Button>
				)}
			</div>
			<div className='flex flex-col justify-center items-center '>{children}</div>
		</div>
	);
};

export default Container;
