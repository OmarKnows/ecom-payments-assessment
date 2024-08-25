import React, { useMemo, useCallback } from 'react';
import Item from './Item';
import { IItem } from '@/shared/types/Item';

interface ItemListProps {
	items: IItem[];
}

const OptimizedItemList: React.FC<ItemListProps> = ({ items }) => {
	const handleClick = useCallback((id: number) => {
		console.log(`Item ${id} clicked`);
	}, []);

	const renderedItems = useMemo(() => {
		return items.map((item) => <Item key={item.id} item={item} onClick={handleClick} />);
	}, [items, handleClick]);

	return (
		<div className='bg-white p-4 rounded shadow-md text-center'>
			Optimized
			{renderedItems}
		</div>
	);
};

export default OptimizedItemList;
