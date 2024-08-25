import React from 'react';
import { IItem } from '@/shared/types/Item';
import UnoptimizedItem from './UnoptimizedItem';

interface IUnoptimizedItemListProps {
	items: IItem[];
}

const UnoptimizedItemList: React.FC<IUnoptimizedItemListProps> = ({ items }) => {
	const handleClick = (id: number) => {
		console.log(`Item ${id} clicked`);
	};

	const renderedItems = items.map((item) => <UnoptimizedItem key={item.id} item={item} onClick={handleClick} />);

	return <div className='bg-white p-4 rounded shadow-md'>{renderedItems}</div>;
};

export default UnoptimizedItemList;
