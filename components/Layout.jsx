import React, { useState } from 'react'
import Header from './Header'
import LoadingBar from 'react-top-loading-bar'

const Layout = ({children}) => {
  const [progress, setProgress] = useState(0)

  return (
    <>
     <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        height={8}
    />
        <Header setProgress={setProgress}/>
        {children}
    </>
  )
}

export default Layout

//every react component have a children prop which is a component
// this means that when we wrap anything inside a layout fragent it have hader by default 