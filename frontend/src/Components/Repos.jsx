import Repo from "./Repo";

const Repos = ({repos , alwaysfullwidth=false}) => {
	const className = alwaysfullwidth ? "w-full" : "lg:w-2/3 w-full"
	return (
		<div className={`${className} bg-glass rounded-lg px-8 py-6`}>
			<ol className='relative border-s border-gray-200'>
                {repos.map(repo =>(
                    <Repo repo={repo} key={repo.id} />
                ))}
                {repos.length == 0 && <p className="flex justify-center items-center h-32"> No Repositories Found </p>}
			</ol>
		</div>
	);
};

export default Repos