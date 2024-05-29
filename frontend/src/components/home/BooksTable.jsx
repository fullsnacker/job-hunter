import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';

const BooksTable = ({ books }) => {
	const [page, setPage] = useState(1);

	return (
		<div className="container">
			<table className="w-full border-separate border-spacing-2">
				<thead>
					<tr>
						{/* <th className="border border-slate-600 rounded-md">No</th> */}
						<th className="border border-slate-600 rounded-md">Title</th>
						<th className="border border-slate-600 rounded-md max-md:hidden">
							Company
						</th>
						<th className="border border-slate-600 rounded-md max-md:hidden">
							Site
						</th>
						<th className="border border-slate-600 rounded-md max-md:hidden">
							Creation Date
						</th>
						<th className="border border-slate-600 rounded-md">Status</th>
						<th className="border border-slate-600 rounded-md">Operations</th>
					</tr>
				</thead>
				<tbody>
					{books.map((job) => (
						<tr key={job.id} className="h-8">
							{/* <td className="border border-slate-700 rounded-md text-center">
								{book.id}
							</td> */}
							<td className="border border-slate-700 rounded-md text-center">
								{job.title}
							</td>
							<td className="border border-slate-700 rounded-md text-center max-md:hidden">
								{job.company_name}
							</td>
							<td className="border border-slate-700 rounded-md text-center max-md:hidden">
								{job.site_name}
							</td>
							<td className="border border-slate-700 rounded-md text-center max-md:hidden">
								{job.creation_date}
							</td>
							<td className="border border-slate-700 bg-green-300 rounded-md text-center max-md:hidden">
								{'STATUS'}
							</td>
							<td className="border border-slate-700 rounded-md text-center">
								<div className="flex justify-center gap-x-4">
									<Link to={`/books/details/${job._id}`}>
										<BsInfoCircle className="text-2xl text-green-800" />
									</Link>
									<Link to={`/books/edit/${job._id}`}>
										<AiOutlineEdit className="text-2xl text-yellow-600" />
									</Link>
									<Link to={`/books/delete/${job._id}`}>
										<MdOutlineDelete className="text-2xl text-red-600" />
									</Link>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<div className="paginator align-middle">
				<nav>
					<ul className="flex">
						<li onClick={() => setPage(page - 1)}>
							<a
								className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
								href="#"
								aria-label="Previous"
							>
								<span className="material-icons text-sm">&lt;-</span>
							</a>
						</li>
						{/* <li>
							<a
								className="mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-pink-600 to-pink-400 p-0 text-sm text-white shadow-md shadow-pink-500/20 transition duration-150 ease-in-out"
								href="#"
							>
								1
							</a>
						</li>
						<li>
							<a
								className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
								href="#"
							>
								2
							</a>
						</li>
						<li>
							<a
								className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
								href="#"
							>
								3
							</a>
						</li> */}
						<li onClick={() => setPage(page + 1)}>
							<a
								className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
								href="#"
								aria-label="Next"
							>
								<span className="material-icons text-sm">-&gt;</span>
							</a>
						</li>
					</ul>
				</nav>
				{page}
				{/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
					Previous
				</button>
				// {page}
				<button onClick={() => setPage(page + 1)}>Next</button> */}
			</div>
		</div>
	);
};

export default BooksTable;
