import Button from '@components/Button';
import Container from '@components/Container';
import { Profiler, useState } from 'react';
import Optimized from './components/optimized/Optimized';
import Unoptimized from './components/unoptimized/Unoptimized';

const TaskFive = () => {
	const [rerender, setRerender] = useState(true);
	return (
		<Container title='Task Five: Optimize a React Component'>
			<Button onClick={() => setRerender((prev) => !prev)}>Rerender</Button>
			<div className='flex gap-10 mt-5'>
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
