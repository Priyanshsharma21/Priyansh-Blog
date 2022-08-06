import React, { useEffect, useState } from 'react'
import moment from 'moment'
import {AdjacentPostCard} from '../components/index'
import {getAdjacentPost} from '../services'

const AdjacentPost = ({slug, createdAt,setProgress}) => {
  const [adjacentPost, setAdjacentPost] = useState([])
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(()=>{
    setProgress(50)
    getAdjacentPost(slug,createdAt).then((result)=>setAdjacentPost(result))
    setDataLoaded(true)
    setProgress(100)
  },[])



  return (
    <div className="grid grid-cols-1 lg:grid-cols-8 gap-12 mb-8">
      {dataLoaded && (
        <>
          {adjacentPost.previous && (
            <div className={`${adjacentPost.next ? 'col-span-1 lg:col-span-4' : 'col-span-1 lg:col-span-8'} adjacent-post rounded-lg relative h-72`}>
              <AdjacentPostCard post={adjacentPost.previous} position="LEFT" />
            </div>
          )}
          {adjacentPost.next && (
            <div className={`${adjacentPost.previous ? 'col-span-1 lg:col-span-4' : 'col-span-1 lg:col-span-8'} adjacent-post rounded-lg relative h-72`}>
              <AdjacentPostCard post={adjacentPost.next} position="RIGHT" />
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default AdjacentPost