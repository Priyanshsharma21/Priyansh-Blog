import React from 'react'
import img from './images/pic1.jpg'
import Image from 'next/image'
const Author = ({author}) => {
  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-white bg-opacity-5">
    <div className="absolute left-0 right-0 -top-14">
      <div className="inline-block max-w-full overflow-hidden relative box-border m-0">
      <img
          // unoptimized
          // loader={grpahCMSImageLoader}
          alt={author.name}
          height="100px"
          width="100px"
          className="align-middle rounded-full"
          src={author.photo.url}
        />
    </div>
      
    </div>
    <h3 className="text-white mt-4 mb-4 text-xl font-bold">{author.name}</h3>
    <p className="text-white text-ls">{author.bio}</p>
  </div>
  )
}

export default Author