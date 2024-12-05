import './MainMenu/PlayControls.css'

function PlayControls () {
    return (
        <>
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
        </>
    )
}

export default PlayControls;