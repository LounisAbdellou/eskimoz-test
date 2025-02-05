const SearchBar = ({ handleSearchQueries }) => {
	return (
		<div className="flex w-full rounded bg-white">
			<input
				className=" w-full border-none bg-transparent px-4 text-gray-400 outline-none focus:outline-none "
				onChange={(e) => handleSearchQueries(e.currentTarget.value)}
				placeholder="Search..."
			/>
		</div>
	);
};

export default SearchBar;
