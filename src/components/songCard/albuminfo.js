import React from 'react'
import './albuminfo.css';

export default function AlbumInfo({ album }) {
  // console.log(album);

  const artists = [];
  album?.album?.artists?.forEach(element => {
    artists.push(element.name);
  });

  return (
    <div className='albumInfo-card'>
      <div className='albumName-container'>
        <div className='marquee'>
          <p>{album?.album?.name + " - " + artists?.join(", ")}</p>
        </div>
      </div>
      <div className='album-info'>
        <p>{`${album?.album?.name} is an ${album?.album?.album_type} by ${artists?.join(
          ", "
        )} with ${album?.album?.total_tracks} track(s)`}</p>
      </div>
      <div className='album-release'>
        <p> Release Date : {album?.album?.release_date}</p>
      </div>
    </div>
  )
}
