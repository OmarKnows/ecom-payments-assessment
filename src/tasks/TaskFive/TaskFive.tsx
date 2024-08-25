import Button from '@components/Button';
import Container from '@components/Container';
import { Profiler, useState } from 'react';
import Optimized from './components/optimized/Optimized';
import Unoptimized from './components/unoptimized/Unoptimized';
import { Link } from 'react-router-dom';

const TaskFive = () => {
	const [rerender, setRerender] = useState(true);
	return (
		<Container title='Task Five: Optimize a React Component'>
			<Link to='https://github.com/OmarKnows/ecom-payments-assessment'>
				Click Here to navigate to the documentation where everything regarding this task is explained under the "Task 5"
				section
			</Link>
			<Button className='my-5' onClick={() => setRerender((prev) => !prev)}>
				Rerender
			</Button>
			<div className='flex gap-10'>
				<Profiler
					id='Optimized'
					onRender={(id, phase, actualDuration, baseDuration, startTime, commitTime) =>
						console.table({
							id,
							phase,
							actualDuration,
							baseDuration,
							startTime,
							commitTime,
						})
					}
				>
					<Optimized />
				</Profiler>
				<Profiler
					id='Unoptimized'
					onRender={(id, phase, actualDuration, baseDuration, startTime, commitTime) =>
						console.table({
							id,
							phase,
							actualDuration,
							baseDuration,
							startTime,
							commitTime,
						})
					}
				>
					<Unoptimized />
				</Profiler>
			</div>
		</Container>
	);
};

export default TaskFive;
