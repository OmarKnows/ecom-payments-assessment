import App from '@/App';
import Home from '@/Home';
import TaskFive from '@/tasks/TaskFive';
import TaskFour from '@/tasks/TaskFour';
import TaskOne from '@/tasks/TaskOne/TaskOne';
import TaskTwo from '@/tasks/TaskTwo';
import { ROUTES } from '@/constants/routes';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import TaskThree from '@/tasks/TaskThree/TaskThree';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: ROUTES.TASK_ONE,
				element: <TaskOne />,
			},
			{
				path: ROUTES.TASK_TWO,
				element: <TaskTwo />,
			},
			{
				path: ROUTES.TASK_THREE,
				element: <TaskThree />,
			},
			{
				path: ROUTES.TASK_FOUR,
				element: <TaskFour />,
			},
			{
				path: ROUTES.TASK_FIVE,
				element: <TaskFive />,
			},
			{
				path: '*',
				element: <Navigate to={ROUTES.HOME} replace />,
			},
		],
	},
]);
