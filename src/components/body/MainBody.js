import React, {  useEffect, useState } from 'react'
import Posts from './Posts'
import {db,} from "../../firebaseConfig"
import { serverTimestamp} from 'firebase/firestore'
import {collection,addDoc, getDocs, query, orderBy} from "firebase/firestore"
import CreatePost from './CreatePost'
import {useSelector} from "react-redux"

function MainBody() {
  const [posts,setPosts]=useState([])

  const {name,profileUrl,email}=useSelector((store)=>(store.userDetails.user))

  const getData=async()=>{
    const sorted=query(collection(db,"userData"),orderBy("timeStamp",'desc'))
    const snapshot=await getDocs(sorted);
    setPosts(
      snapshot.docs.map((doc)=>(
          {
            key:doc.id,
            data:doc.data(),
            profileUrl:profileUrl,
            name:name,
          }
        )
      )
    )    
  }

  useEffect(()=>{
    getData();
    
  },[])

  const addData=async(data)=>{
    try{
      addDoc(collection(db,"userData"),data)
        .then(()=>{
          getData()
        })
    }
    catch(e){
      alert(e)
    }
  }
  

  const handlePostCreation=(e,postContent)=>{
    e.preventDefault()
    addData({
      nameDetails:email,
      content:postContent,
      timeStamp:serverTimestamp(),
      profileUrl:profileUrl,
      name:name,
      
    })
    
  }

  const allPosts=posts.map((post)=>{
    return(
      <Posts
        key={post.key}
        name={post.data.name}
        nameDetails={post.data.nameDetails}
        content={post.data.content}
        profileUrl={post.data.profileUrl}
      />
    )
  })

  return (
    <div className="main--body w-full xl:w-7/12 flex flex-col gap-4">
        <CreatePost
          handlePostCreation={handlePostCreation}
        />
        {allPosts}
    </div>
  )
}

export default MainBody