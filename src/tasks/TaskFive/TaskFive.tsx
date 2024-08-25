import Container from '@components/Container';
import ItemList from './components/ItemList';
import UnoptimizedItemList from './components/unoptimizedComponents/UnoptimizedItemList';

const sampleItems = Array.from({ length: 100 }, (_, index) => ({
	id: index + 1,
	data: `Item ${index + 1}`,
}));

const TaskFive = () => {
	return (
		<Container title='Task Five: Optimize a React Component'>
			<ItemList items={sampleItems} />
			{/* <UnoptimizedItemList items={sampleItems} /> */}
		</Container>
	);
};

export default TaskFive;
