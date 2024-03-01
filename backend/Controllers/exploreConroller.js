export const exploreRepos = async (req , res , next) =>{
    const {language} = req.params
    try {
        const response = await fetch(`https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&per_page=10`,{
				headers:{
					authorization: `token ${process.env.GITHUB_API_KEY}`
				}
			})
			const data = await response.json()
            res.status(201).json({repos: data.items})
    } catch (error) {
        return res.status(400).json({message: error.message});
    }
}