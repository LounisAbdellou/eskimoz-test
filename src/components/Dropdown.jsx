import { useState } from "react";

const Dropdown = ({ jobs, jobFilter, setJobFilter }) => {
	const [show, setShow] = useState(false);

	return (
		<div className="relative inline-block text-left">
			<button
				onClick={() => setShow(!show)}
				className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
			>
				{jobFilter !== "" ? jobFilter : "Select Item"}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="w-5 h-5 ml-2 -mr-1"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fillRule="evenodd"
						d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
						clipRule="evenodd"
					/>
				</svg>
			</button>
			<div
				className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${!show && "hidden"}`}
			>
				<div className="py-2 p-2">
					{jobs && jobs.length > 0 ? (
						<>
							<p
								onClick={() => setJobFilter("")}
								className="block cursor-pointer px-4 py-2 mb-1 text-sm text-gray-700 rounded-md bg-white hover:bg-gray-300"
							>
								All
							</p>
							{jobs.map((job, index) => (
								<p
									key={index}
									onClick={() => setJobFilter(job)}
									className="block cursor-pointer px-4 py-2 mb-1 text-sm text-gray-700 rounded-md bg-white hover:bg-gray-300"
								>
									{job}
								</p>
							))}
						</>
					) : (
						<p className="block cursor-pointer px-4 py-2 mb-1 text-sm text-gray-700 rounded-md bg-white hover:bg-gray-300">
							No jobs found.
						</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default Dropdown;
