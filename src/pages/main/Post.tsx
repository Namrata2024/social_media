import { addDoc,getDocs,collection,query ,where} from 'firebase/firestore';
import './post.css'
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { db,auth } from '../../config/firebase';
import {Post as Ipost} from "./main";
interface Props{
    post:Ipost;
}



export default function Post(props:Props) {
  const {post}=props;
  const postRef=collection(db,"posts");
 const [user]=useAuthState(auth);
 const [likeAmount,setLikeAmount]=useState<number |null>(null);
 const navigate=useNavigate();
  const likesRef=collection(db,"likes");

const likesDoc=query(likesRef,where("post_id","==",post.user_id))

const getLikes=async()=>{

    const data=await getDocs(likesDoc);
setLikeAmount(data.docs.length);
} 


const addlike=async()=>{
      await addDoc(likesRef,{
          user_id:user?.uid,
          post_id:post?.user_id,
      });
      navigate('/');
  }




useEffect(()=>{
getLikes();
console.log(likeAmount);
},[likeAmount]);


    return (
    <div className='post-box'>
      <p className="username">@{post.username}</p>
      <div className="title">
      
        <h1>{post.title}</h1>
      </div>
      <div className="body">
        <p>{post.description}</p>
      </div>
<div className="footer">
    
    <button onClick={addlike}>👍</button>
   {likeAmount &&  <p>Likes:{likeAmount}</p>}
   
</div>

    </div>
  )
}


