import { Route, BrowserRouter, Routes } from "react-router-dom"

import Details from "./screens/Details";
import Home from "./screens/Home";
import UserAuthentication from "./screens/userAuthentication";

import './index.css'
function App() {

  if (!localStorage.getItem('username')) return <UserAuthentication />

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserAuthentication />} />
          <Route path="/home" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
