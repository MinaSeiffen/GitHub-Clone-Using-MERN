import { Route, Routes } from "react-router-dom"

// pages
import HomePage from "./Pages/HomePage"
import LoginPage from "./Pages/LoginPage"
import SignUpPage from "./Pages/SignupPage"
import LikesPage from "./Pages/LikesPage"
import ExplorePage from "./Pages/ExplorePage"

//Components
import SideBar from "./Components/SideBar"

function App() {

  return (
    <>
      <div className="flex">
        <SideBar/>
        <div className="max-w-5xl mx-auto my-5 text-white transition-all duration-300 flex-1">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/signup" element={<SignUpPage/>} />
          <Route path="/likes" element={<LikesPage/>} />
          <Route path="/explore" element={<ExplorePage/>} />
        </Routes>
        </div>
      </div>
    </>
  )
}

export default App
