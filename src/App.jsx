import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import Sidebar from './components/Sidebar'
import Rightpanel from './components/Rightpanel'
import Feed from './components/Feed'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, background: "#111" }}>
        <Feed/>
        {/* Main content later */}
      </div>
      <Rightpanel/>
    </div>
  )
}

export default App
