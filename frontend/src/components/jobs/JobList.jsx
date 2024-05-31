import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Spinner from '../Spinner';
import BooksTable from '../home/BooksTable';
import TopMenu from '../navigation/TopMenu';

const JobList = () => {
	const [jobs, setJobs] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		axios
			.get('http://localhost:8081/jobs')
			.then((response) => {
				setJobs(response.data.data);
				setLoading(false);
			})
			.catch((error) => {
				console.log(error);
				setLoading(false);
			});
	}, []);

	return (
		<div className="p-4">
			<TopMenu />
			{loading ? <Spinner /> : <BooksTable books={jobs} />}
		</div>
	);
};

export default JobList;
