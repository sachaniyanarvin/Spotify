import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Spotify from './spotify.jsx'
import Sidebar from './components/Sidebar.jsx'
import PlayControls from './components/PlayControls.jsx'
import MainMenu from './components/MainMenu.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Spotify /> */}
    <Sidebar />
    <PlayControls />
    <MainMenu />
  </StrictMode>,
)
