import './MainMenu/Sidebar.css'

function Sidebar () {
    return (
        <>
        <div className="sidebar">
                <img alt="Spotify Logo" height="40" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Spotify%20logo.png?raw=true" width="131" />
                <a className="active" href="#">
                    <i className="fas fa-home"></i>
                    Home
                </a>
                <a href="#">
                    <i className="fas fa-search"></i>
                    Search
                </a>
                <a href="#">
                    <i className="fas fa-book"></i>
                    Your Library
                </a>
                <a href="#">
                    <i className="fas fa-plus-square"></i>
                    Create Playlist
                </a>
                <a href="#">
                    <i className="fas fa-heart"></i>
                    Liked Songs
                </a>
                <a href="#">
                    <i className="fas fa-podcast"></i>
                    Your Episodes
                </a>
                <div style={{ marginTop: '20px' }}>
                    <a href="#">FAV</a>
                    <a href="#">Daily Mix 1</a>
                    <a href="#">Discover Weekly</a>
                    <a href="#">Malayalam</a>
                    <a href="#">Dance / Electronic Mix</a>
                    <a href="#">EDM / Popular</a>
                </div>
                <a href="#" style={{ marginTop: '20px' }}>
                    <i className="fas fa-download"></i>
                    Install App
                </a>
            </div>
        </>
    )
}

export default Sidebar;