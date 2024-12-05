import './MainMenu/Sidebar.css';

function Sidebar() {
    const menuItems = [
        { icon: 'fas fa-home', text: 'Home', active: true },
        { icon: 'fas fa-search', text: 'Search' },
        { icon: 'fas fa-book', text: 'Your Library' },
        { icon: 'fas fa-plus-square', text: 'Create Playlist' },
        { icon: 'fas fa-heart', text: 'Liked Songs' },
        { icon: 'fas fa-podcast', text: 'Your Episodes' },
    ];

    const favoriteItems = [
        'FAV',
        'Daily Mix 1',
        'Discover Weekly',
        'Malayalam',
        'Dance / Electronic Mix',
        'EDM / Popular',
    ];

    return (
        <div className="sidebar">
            <img alt="Spotify Logo" height="40" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Spotify%20logo.png?raw=true" width="131" />
            {menuItems.map((item, index) => (
                <a key={index} className={item.active ? 'active' : ''} href="#">
                    <i className={item.icon}></i>
                    {item.text}
                </a>
            ))}
            <div style={{ marginTop: '20px' }}>
                {favoriteItems.map((item, index) => (
                    <a key={index} href="#">{item}</a>
                ))}
            </div>
            <a href="#" style={{ marginTop: '20px' }}>
                <i className="fas fa-download"></i>
                Install App
            </a>
        </div>
    );
}

export default Sidebar;
