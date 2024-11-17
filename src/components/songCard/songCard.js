import React from 'react'
import './songCard.css'
import AlbumImage from './albumimage'
import AlbumInfo from './albuminfo'

export default function SongCard(album) {
  // console.log(album.album.images[0].url);
  console.log("In songCard : ",album?.album?.images[0]?.url);

  return (
    <div className='songcard-body flex'>
      <AlbumImage url={album?.album?.images[0]?.url} />
      <AlbumInfo album={album}/>
    </div>
  )
}
