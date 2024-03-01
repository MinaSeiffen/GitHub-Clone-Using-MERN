import userModel from "../Models/user.model.js";

export const getUserData = async (req, res, next) => {
  const { username } = req.params;
  try {
    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    });
    const userProfile = await userRes.json();
    const reposRes = await fetch(userProfile.repos_url, {
      headers: {
        authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    });
    const repos = await reposRes.json();

    res.status(200).json({ userProfile, repos });
  } catch (error) {
    return res
      .status(400)
      .json({ MSG: "there is something wrong in fetching data from GitHub" });
  }
};

export const likeProfile = async(req, res, next) => {
  try {
    const { username } = req.params;
    const user = await userModel.findById(req.user._id.toString())
    const userToLike = await userModel.findOne({username})

    if (!userToLike) {
      return res.json({error: "that user is not a member"})
    }

    if (user.liked_profiles.includes(userToLike.username)) {
      return res.status(400).json({erorr:"That user you already liked before"})
    }

    userToLike.likedBy.push({username:user.username , avatar_url:user.avatar_url, likedDate:Date.now()})
    user.liked_profiles.push(userToLike.username)

    await Promise.all(userToLike.save(),user.save())

    res.status(200).json({MSG:"User Liked successfully"})

  } catch (error) {
    return res.status(404).json({MSG: "There is something wrong in like profile"})
  }
}

export const getLikes= async(req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id.toString())
    res.status(200).json({likedBy: user.likedBy})
  } catch (error) {
    res.status(400).json({MSG: "There is something wrong in like Section"})
  }
}