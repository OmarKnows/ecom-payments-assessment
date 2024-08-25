import React, { useMemo } from 'react';
import OptimizedItemList from './components/ItemList';

const Optimized = () => {
	const sampleItems = useMemo(
		() =>
			Array.from({ length: 100 }, (_, index) => ({
				id: index + 1,
				data: `Item ${index + 1}`,
			})),
		[]
	);

	return <OptimizedItemList items={sampleItems} />;
};

export default Optimized;
