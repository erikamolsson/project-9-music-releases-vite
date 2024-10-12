import React, { useEffect, useState } from 'react';
import data from '../data.json';
import './MusicGallery.css';
import dotsIcon from '../assets/icons/dots.svg'
import heartIcon from '../assets/icons/heart.svg'
import playIcon from '../assets/icons/play.svg'


console.log(data);

const MusicGallery = () => {
    
    /* const [albums, setAlbums] = useState([]);

    // Load the data directly from the imported JSON file
    useEffect(() => {
        setAlbums(data); // Directly use the imported data
    }, []); */

    return (
        <>
        <div className="album-grid-container">
          {data.albums.items.map((album) => (
            <div key={album} className="album-card">
                <div className="album-cover-hover">
                    <img src={album.images?.[0]?.url} alt={album.name} className="album-image" />
                    <div className="album-cover-icons">
                        <img src={heartIcon} width="30" alt="Icon - Like album" />
                        <img src={playIcon} className="play-icon" width="60" alt="Icon - Play album" />
                        <img src={dotsIcon} width="30" alt="Icon - Other" />
                    </div>
                </div>
                    <a href={album.external_urls.spotify} target='_blank'>
                        <h3 className="album-name">
                            {album.name}
                        </h3>
                    </a>
                <div>
                    <p className="album-artist">{album.artists.map((artist) => 
                        <a href={artist.external_urls.spotify} target='_blank'>{artist.name}</a>
                        )}
                    </p>
                </div>
            </div>
          ))}
        </div>
        </>
    );
};

export default MusicGallery