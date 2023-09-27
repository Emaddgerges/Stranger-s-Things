import React from 'react'
import { getPosts } from './api/axios'
import { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import ListPage from './ListPage'


const Render = () => {
    const [posts, setPosts] = useState([])
    const [searchResults, setSearchResults] = useState([])
  
    useEffect(() => {
      getPosts().then(json => {
        setPosts(json)
        setSearchResults(json)
        console.log(posts);
      })
    }, [])
  return (
    <>
    
    <SearchBar posts={posts} setSearchResults={setSearchResults} />
      <ListPage searchResults={searchResults} />
 
    </>
  )
}

export default Render;