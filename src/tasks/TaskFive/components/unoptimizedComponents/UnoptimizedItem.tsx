import { IItem } from '@/shared/types/Item';
import { FC } from 'react';

interface IUnoptimizedItemProps {
	item: IItem;
	onClick: (id: number) => void;
}

const UnoptimizedItem: FC<IUnoptimizedItemProps> = ({ item, onClick }) => {
	console.log(`Rendering item ${item.id}`);

	const computedValue = computeExpensiveValue(item.data);

	return (
		<div onClick={() => onClick(item.id)} className='p-4 border-b border-gray-300 cursor-pointer hover:bg-gray-100'>
			<span>{item.data}</span>
			<span className='ml-4 text-gray-500'>{computedValue}</span>
		</div>
	);
};

const computeExpensiveValue = (data: string): string => {
	let result = 0;
	for (let i = 0; i < 1000000; i++) {
		result += i;
	}
	return `${data} (${result})`;
};

export default UnoptimizedItem;
