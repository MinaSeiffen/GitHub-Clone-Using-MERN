import { Navigate, Route, Routes } from "react-router-dom"
import {Toaster} from "react-hot-toast"

// pages
import HomePage from "./Pages/HomePage"
import LoginPage from "./Pages/LoginPage"
import SignUpPage from "./Pages/SignupPage"
import LikesPage from "./Pages/LikesPage"
import ExplorePage from "./Pages/ExplorePage"

//Components
import SideBar from "./Components/SideBar"
import { useAuthContext } from "./Context/AuthContext"

function App() {
  const { authUser, loading } = useAuthContext();
	console.log("Authenticated user:", authUser);

	if (loading) return null;

  return (
    <>
      <div className="flex">
        <SideBar/>
        <div className="max-w-5xl mx-auto my-5 text-white transition-all duration-300 flex-1">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={!authUser ? <LoginPage/> : <Navigate to={"/"} />} />
          <Route path="/signup" element={!authUser ? <SignUpPage/> : <Navigate to={"/"} />} />
          <Route path="/likes" element={authUser ? <LikesPage/> : <Navigate to={"/login"} />} />
          <Route path="/explore" element={authUser ? <ExplorePage/> : <Navigate to={"/login"} />} />
        </Routes>
        <Toaster/>
        </div>
      </div>
    </>
  )
}

export default App
