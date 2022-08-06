import React, { useState } from 'react'
import Head from 'next/head'
import {PostCard, Categories, PostWidget,NewsLetter} from '../components/index'
import {getPosts} from '../services'
import {FeaturedPost} from '../section'
import LoadingBar from 'react-top-loading-bar'



const Home = ({posts}) => {
  const [progress, setProgress] = useState(0)

  return (
    <div className="container mx-auto px-10 mb-8">
    <LoadingBar
        color='#ff01a6'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        height={8}

    />
      <Head>
          <title>Priyansh Blog</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>

      <FeaturedPost setProgress={setProgress} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1" >
        {posts.map((post)=>(
            <PostCard post={post?.node} key={post.title} setProgress={setProgress}/>
          ))}
        </div>

        <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">
                <PostWidget setProgress={setProgress}/>
                <Categories setProgress={setProgress}/>
                <NewsLetter setProgress={setProgress}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps(){
  const posts = await getPosts() || []

  return {
    props : {posts}
  }
}

export default Home