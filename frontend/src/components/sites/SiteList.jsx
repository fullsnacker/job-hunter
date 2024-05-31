import SiteSingleCard from './SiteSingleCard';

const SiteList = ({ sites }) => {
	return (
		<>
			<h1 className="text-3xl my-8">Site List</h1>
			<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{sites.map((site) => (
					<SiteSingleCard key={site.id} site={site} />
				))}
			</div>
		</>
	);
};

export default SiteList;
