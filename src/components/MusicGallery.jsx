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
                        <img src={playIcon} width="60" alt="Icon - Play album" />
                        <img src={dotsIcon} width="30" alt="Icon - Other" />
                    </div>
                </div>
                <h3 className="album-name">{album.name}</h3>
                <div>
                    <p className="album-artist">{album.artists.map((artist) => 
                        <a href={artist.external_urls}>{artist.name}</a>
                        )}
                    </p>
                </div>
                {/* <p className="album-artist">{album.artists?.[0]}</p> */}
            </div>
          ))}
        </div>
        </>

    /* return (
        <div className="album-grid-container">
            {albums.map((album, index) => (
                <div key={index} className="album-card">
                    <img src={data.albums.images?.[0]?.url} alt={album.name} className="album-image" />
                    <h3 className="album-name">{data.albums.name}</h3>
                    <p className="album-artist">{data.albums.artist}</p>
                </div>
            ))}
        </div> */
    );
};

export default MusicGallery