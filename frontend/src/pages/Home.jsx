import { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import TopMenu from '../components/navigation/TopMenu';
import SiteList from '../components/sites/SiteList';

const Home = () => {
	const [sites, setSites] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);

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
			<TopMenu />
			{loading ? <Spinner /> : <SiteList sites={sites} />}
		</div>
	);
};

export default Home;
