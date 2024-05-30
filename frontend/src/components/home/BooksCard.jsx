import BookSingleCard from './BookSingleCard';

const BooksCard = ({ books }) => {
	return (
		<>
			<h1 className="text-3xl my-8">Site List</h1>
			<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{books.map((item) => (
					<BookSingleCard key={item.id} book={item} />
				))}
			</div>
		</>
	);
};

export default BooksCard;
