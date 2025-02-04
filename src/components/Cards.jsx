const Cards = ({ profiles }) => {
	return (
		<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 p-5">
			{profiles && profiles.length > 0 ? (
				profiles.map((profile, index) => (
					<div
						key={index}
						className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-5"
					>
						<img
							className="w-32 h-32 rounded-full mx-auto"
							src={`https://i.pravatar.cc/300?img=${index + 1}`}
							alt="Profile picture"
						/>
						<h2 className="text-center text-black text-2xl font-semibold mt-3">
							{profile.name}
						</h2>
						<p className="text-center text-gray-600 mt-1">{profile.job}</p>
						<div className="mt-5">
							<h3 className="text-xl text-black font-semibold">Bio</h3>
							<p className="text-gray-600 mt-2">
								{profile.name} is a {profile.job.toLowerCase()}, he/she is{" "}
								{profile.age} years old and he/she is based in{" "}
								{profile.location}
							</p>
						</div>
					</div>
				))
			) : (
				<div>
					<p>No results found.</p>
				</div>
			)}
		</div>
	);
};

export default Cards;
