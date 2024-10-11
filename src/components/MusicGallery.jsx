import React, { useEffect, useState } from 'react';
import data from '../data.json';
import './MusicGallery.css';



console.log(data);

const MusicGallery = () => {
    
  /*   const [albums, setAlbums] = useState([]);

    // Load the data directly from the imported JSON file
    useEffect(() => {
        setAlbums(data); // Directly use the imported data
    }, []);
 */
    return (
        <>
        <div className="album-grid-container">
          {data.albums.items.map((album) => (
            <div key={album} className="album-card">
                <img src={data.albums.images?.[0]?.url} alt={album.name} className="album-image" />
                <h3 className="album-name">{data.albums.name}</h3>
                <p className="album-artist">{data.albums.artist}</p>
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