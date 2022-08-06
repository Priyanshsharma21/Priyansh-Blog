import React, { useState } from 'react'
import {getPosts, getPostDetails} from '../../services'
import {PostDetail, Categories, PostWidget,Author, Comments,CommentsForm} from '../../components'
import {AdjacentPost} from '../../section'
import LoadingBar from 'react-top-loading-bar'

const PostDetails = ({post}) => {
  const [progress, setProgress] = useState(0)

  return (
    <div className="container mx-auto px-10 mb-8">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col col-span-1 lg:col-span-8">
        <LoadingBar
        color='#ff01a6'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        height={8}

    />
            <PostDetail post={post} setProgress={setProgress} />
            <Author author={post.author} setProgress={setProgress} />
            <AdjacentPost slug={post.slug} createdAt={post.createdAt} setProgress={setProgress}/>
            <CommentsForm slug={post.slug} setProgress={setProgress}/>
            <Comments slug={post.slug} setProgress={setProgress}/>
        </div>
        <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
                <PostWidget setProgress={setProgress} slug={post.slug} categories={post.categories.map((cato)=>cato.slug)}/>
                <Categories />
            </div>
        </div>
    </div>
    
    </div>
  )
}

export default PostDetails

export async function getStaticProps({params}){
    const data = await getPostDetails(params.slug)
  
    return {
      props : {post:data}
    }
}

export async function getStaticPaths(){
    const posts = await getPosts()
  
    return {
      paths : posts.map(({node : {slug}})=>({params:{slug}})),
      fallback: false,
    }
  }