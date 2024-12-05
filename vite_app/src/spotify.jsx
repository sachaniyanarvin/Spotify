import './spotify.css';

function Spotify() {
    return (
        <>
        <div className='body'>
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
            <div className="main-content">
                <h1>Good morning</h1>
                <div className="playlist">
                    <div>
                        <img alt="Liked Songs" height="50" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Liked.png?raw=true" width="50" />
                        <p>Liked Songs</p>
                    </div>
                    <div>
                        <img alt="Neffex Playlist" height="50" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image4.png?raw=true" width="50" />
                        <p>Neffex Playlist</p>
                    </div>
                    <div>
                        <img alt="K/DA" height="50" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/palylist.png?raw=true" width="50" />
                        <p>K/DA</p>
                    </div>
                    <div>
                        <img alt="Liked Songs" height="50" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image1.png?raw=true" width="50" />
                        <p>Liked Songs</p>
                    </div>
                    <div>
                        <img alt="Dance / Electronic Mix" height="50" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image2.png?raw=true" width="50" />
                        <p>Dance / Electronic Mix</p>
                    </div>
                </div>
                <div className="shows">
                    <h2>Shows you might like</h2>
                    <div className="show-list">
                        <div>
                            <img alt="Weekly Motivation" height="150" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image9.png?raw=true" width="150" />
                            <p>Weekly Motivation</p>
                            <p>Ben Ina Scott</p>
                        </div>
                        <div>
                            <img alt="Meditation Self" height="150" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image8.png?raw=true" width="150" />
                            <p>Meditation Self</p>
                            <p>Ubn Hussein Aleen</p>
                        </div>
                        <div>
                            <img alt="Words beyond actions" height="150" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image7.png?raw=true" width="150" />
                            <p>Words beyond actions</p>
                            <p>Samuel Scott</p>
                        </div>
                        <div>
                            <img alt="Words beyond actions" height="150" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image6.png?raw=true" width="150" />
                            <p>Words beyond actions</p>
                            <p>Samuel Scott</p>
                        </div>
                        <div>
                            <img alt="Words beyond actions" height="150" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image5.png?raw=true" width="150" />
                            <p>Words beyond actions</p>
                            <p>Samuel Scott</p>
                        </div>
                        <div>
                            <img alt="Words beyond actions" height="150" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image10.png?raw=true" width="150" />
                            <p>Words beyond actions</p>
                            <p>Samuel Scott</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div>
                    <img alt="Dreaming on" height="50" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image11.png?raw=true" width="50" />
                    <p className="container">
                        Dreaming On <br />
                        NEFFEX
                        <div className="image-wrapper">
                            <img alt="green heart" height="10" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/bx_bxs-heart.png?raw=true" width="10" />
                        </div>
                    </p>
                    <div className="image-2">
                        <img style={{ width: '30vw', height: '45px' }} src="Music Player Options.png" alt="Music Player Options" />
                    </div>
                    <div className="image-3">
                        <img style={{ width: '15vw', height: '3vh' }} src="Right options.png" alt="Right options" />
                    </div>
                </div>
                <div className="Underline" style={{ backgroundColor: '#1DB954' }}></div>
            </div>
        </div>
        </>
    );
}

export default Spotify;
