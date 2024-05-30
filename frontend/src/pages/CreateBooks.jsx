import { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const CreateBooks = () => {
	const [jobTitle, setJobTitle] = useState('');
	const [companyName, setCompanyName] = useState('');
	const [site, setSite] = useState('Linkedin');
	const [expertise, setExpertise] = useState('');
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const { enqueueSnackbar } = useSnackbar();

	const handleSaveJob = () => {
		const data = {
			site,
			jobTitle,
			companyName,
			expertise
		};
		setLoading(true);
		axios
			.post('http://localhost:8081/jobs', data)
			.then(() => {
				setLoading(false);
				enqueueSnackbar('Job Created successfully', { variant: 'success' });
				navigate('/');
			})
			.catch((error) => {
				setLoading(false);
				// alert('An error happened. Please Chack console');
				enqueueSnackbar('Error', { variant: 'error' });
				console.log(error);
			});
	};

	return (
		<div className="p-4">
			<BackButton />
			<h1 className="text-3xl my-4">Create Job</h1>
			{loading ? <Spinner /> : ''}
			<div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
				<div className="my-4">
					<label className="text-xl mr-4 text-gray-500">Title</label>
					<input
						type="text"
						value={jobTitle}
						onChange={(e) => setJobTitle(e.target.value)}
						className="border-2 border-gray-500 px-4 py-2 w-full"
					/>
				</div>
				<div className="my-4">
					<label className="text-xl mr-4 text-gray-500">Company</label>
					<input
						type="text"
						value={companyName}
						onChange={(e) => setCompanyName(e.target.value)}
						className="border-2 border-gray-500 px-4 py-2  w-full "
					/>
				</div>
				<div className="my-4">
					<label className="text-xl mr-4 text-gray-500">Expertise</label>
					<input
						type="text"
						value={expertise}
						onChange={(e) => setExpertise(e.target.value)}
						className="border-2 border-gray-500 px-4 py-2  w-full "
					/>
				</div>
				<div className="my-4">
					<label className="text-xl mr-4 text-gray-500">Site</label>
					<input
						type="text"
						value={site}
						onChange={(e) => setSite(e.target.value)}
						className="border-2 border-gray-500 px-4 py-2  w-full "
					/>
				</div>
				<button className="p-2 bg-sky-300 m-8" onClick={handleSaveJob}>
					Save
				</button>
			</div>
		</div>
	);
};

export default CreateBooks;
