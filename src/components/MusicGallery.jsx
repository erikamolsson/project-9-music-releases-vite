import React, { useEffect, useState } from 'react';
import data from '../data.json';
import './MusicGallery.css';


const MusicGallery = () => {
    const [albums, setAlbums] = useState([]);

    // Load the data directly from the imported JSON file
    useEffect(() => {
        setAlbums(albumData); // Directly use the imported data
    }, []);

    return (
        <div className="album-grid-container">
            {albums.map((album, index) => (
                <div key={index} className="album-card">
                    <img src={album.images[0]?.url} alt={album.name} className="album-image" />
                    <h3 className="album-name">{album.name}</h3>
                    <p className="album-artist">{album.artist}</p>
                </div>
            ))}
        </div>
    );
};

export default MusicGallery