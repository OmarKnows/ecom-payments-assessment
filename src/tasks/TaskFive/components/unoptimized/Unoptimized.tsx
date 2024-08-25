import UnoptimizedItemList from './components/UnoptimizedItemList';

const sampleItems = Array.from({ length: 100 }, (_, index) => ({
	id: index + 1,
	data: `Item ${index + 1}`,
}));

const Unoptimized = () => {
	return <UnoptimizedItemList items={sampleItems} />;
};

export default Unoptimized;
