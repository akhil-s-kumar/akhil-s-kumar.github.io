import React, { useState } from "react"
import LoadingBar from "react-top-loading-bar"
import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer/Footer"

const Layout = ({ children }) => {
  const [progress, setProgress] = useState(100)
  return (
    <div className="layout">
      <LoadingBar
        color="linear-gradient(to right, #0D8ADD,#15D7C8)"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <NavBar />
      <div className="content">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
