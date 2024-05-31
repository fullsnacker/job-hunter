import React from 'react';
import { Link } from 'react-router-dom';

const TopMenu = () => {
	return (
		<>
			<div className="flex justify-center items-center gap-x-4">
				<Link reloadDocument to="/jobs">
					<button className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg">
						Jobs
					</button>
				</Link>

				<Link reloadDocument to="/">
					<button className="bg-sky-400 px-4 py-1 rounded-lg">Sites</button>
				</Link>
			</div>
		</>
	);
};

export default TopMenu;
