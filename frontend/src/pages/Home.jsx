import { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';

const Home = () => {
	const [jobs, setJobs] = useState([]);
	const [sites, setSites] = useState([]);
	const [loading, setLoading] = useState(false);
	const [showType, setShowType] = useState('card');

	useEffect(() => {
		setLoading(true);
		axios
			.get('http://localhost:8081/jobs')
			.then((response) => {
				setJobs(response.data.data);
			})
			.catch((error) => {
				console.log(error);
				setLoading(false);
			});
		axios
			.get('http://localhost:8081/sites')
			.then((response) => {
				setSites(response.data.data);
				setLoading(false);
			})
			.catch((error) => {
				console.log(error);
				setLoading(false);
			});
	}, []);

	return (
		<div className="p-4">
			<div className="flex justify-center items-center gap-x-4">
				<button
					className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
					onClick={() => setShowType('table')}
				>
					Jobs
				</button>
				<button
					className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
					onClick={() => setShowType('card')}
				>
					Sites
				</button>
			</div>
			{loading ? (
				<Spinner />
			) : showType === 'table' ? (
				<BooksTable books={jobs} />
			) : (
				<BooksCard books={sites} />
			)}
		</div>
	);
};

export default Home;
