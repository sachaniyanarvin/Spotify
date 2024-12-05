import './MainMenu/PlayControls.css';

function PlayControls() {
    const controls = [
        { src: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/bx_bxs-heart.png?raw=true', alt: 'green heart', height: '10', width: '10' },
        { src: 'Music Player Options.png', alt: 'Music Player Options', style: { width: '30vw', height: '45px' } },
        { src: 'Right options.png', alt: 'Right options', style: { width: '15vw', height: '3vh' } },
    ];

    return (
        <div className="footer">
            <div>
                <img alt="Dreaming on" height="50" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image11.png?raw=true" width="50" />
                <p className="container">
                    Dreaming On <br />
                    NEFFEX
                    <div className="image-wrapper">
                        {controls.slice(0, 1).map((control, index) => (
                            <img key={index} alt={control.alt} height={control.height} src={control.src} width={control.width} />
                        ))}
                    </div>
                </p>
                {controls.slice(1).map((control, index) => (
                    <div key={index} className={`image-${index + 2}`}>
                        <img style={control.style} src={control.src} alt={control.alt} />
                    </div>
                ))}
            </div>
            <div className="Underline" style={{ backgroundColor: '#1DB954' }}></div>
        </div>
    );
}

export default PlayControls;
