import React, { useEffect, useState, useCallback } from 'react';
import Posts from './Posts';
import { db } from "../../firebaseConfig";
import { serverTimestamp } from 'firebase/firestore';
import { collection, addDoc, getDocs, query, orderBy } from "firebase/firestore";
import CreatePost from './CreatePost';
import { useSelector } from "react-redux";

function MainBody() {
  const [posts, setPosts] = useState([]);
  
  const { name, profileUrl, email } = useSelector((store) => store.userDetails.user);

  const getData = useCallback(async () => {
    const sorted = query(collection(db, "userData"), orderBy("timeStamp", 'desc'));
    const snapshot = await getDocs(sorted);
    setPosts(
      snapshot.docs.map((doc) => ({
        key: doc.id,
        data: doc.data(),
        profileUrl: profileUrl,
        name: name,
      }))
    );
  }, [profileUrl, name]); // Dependencies: memoize based on profileUrl and name

  useEffect(() => {
    getData();
  }, [getData]); // Include getData as a dependency

  const addData = async (data) => {
    try {
      await addDoc(collection(db, "userData"), data);
      getData();
    } catch (e) {
      alert(e);
    }
  };

  const handlePostCreation = (e, postContent) => {
    e.preventDefault();
    addData({
      nameDetails: email,
      content: postContent,
      timeStamp: serverTimestamp(),
      profileUrl: profileUrl,
      name: name,
    });
  };

  const allPosts = posts.map((post) => (
    <Posts
      key={post.key}
      name={post.data.name}
      nameDetails={post.data.nameDetails}
      content={post.data.content}
      profileUrl={post.data.profileUrl}
    />
  ));

  return (
    <div className="flex flex-col w-full gap-4 main--body xl:w-7/12">
      <CreatePost handlePostCreation={handlePostCreation} />
      {allPosts}
    </div>
  );
}

export default MainBody;
