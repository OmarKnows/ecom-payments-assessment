import { Outlet } from 'react-router-dom';

const DummyLayout = () => {
	return (
		<div>
			<div>DummyLayout</div>
			<Outlet />
		</div>
	);
};

export default DummyLayout;
