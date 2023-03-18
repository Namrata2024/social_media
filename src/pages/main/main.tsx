import React, { useEffect, useState } from 'react'
import './main.css'
import {getDocs,collection} from 'firebase/firestore';
import {db} from '../../config/firebase';
import Post from './Post';

 export interface Post{
  title:string,
  description:string,
  user_id:string,
  username:string
}

export function Main() {
  const [postList,setPostList]=useState<Post[]| null>(null);
  const postRef=collection(db,"posts");

  const getPost=async()=>{
    const data=await getDocs(postRef);
setPostList(data.docs.map((doc)=>({...doc.data(),user_id:doc.id})) as Post[]);
  }
  useEffect(()=>{
    getPost();
  },[]);

    {if(postList==null)
   return <div className='main'>
    <h1>WELCOME TO SOCIO!!</h1>
    <img src={require('./home_img.png')} /></div>}
   return (
    <div>

     {postList?.map((p)=>(<Post post={p}/>))}
    </div>
  )
}


