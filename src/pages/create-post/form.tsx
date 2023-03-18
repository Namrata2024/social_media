import React from 'react'
import './form.css'
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";
import {addDoc,collection} from "firebase/firestore";
import {db,auth} from "../../config/firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

interface createFormData{
    title:string,
    description:string,
}

 export function CreateForm() {

    const [user]=useAuthState(auth);
    const navigate=useNavigate();
    const schema=yup.object().shape({
title:yup.string().required("You must add a title"),
description:yup.string().required("You must add description")
    });
const{register,handleSubmit,formState:{errors}}=useForm<createFormData>({
    resolver:yupResolver(schema),
});

const postRef=collection(db,"posts");

const onCreatePost=async(data:createFormData)=>{
    await addDoc(postRef,{
        title:data.title,
        description:data.description,
        username:user?.displayName,
        user_id:user?.uid,
    });
    navigate('/');
}

  return (
<div className='form-box'>
   <form onSubmit={handleSubmit(onCreatePost)}>
    <div className='heading'><h1>CREATE POST...</h1></div>
<input placeholder='Title....'{...register("title")}/>
<p style={{color:"red",}}>{errors.title?.message}</p>
<textarea placeholder='description...'{...register("description")}/>
<p style={{color:"red",}}>{errors.description?.message}</p>
<input className="btn"type="submit"/>
   </form></div>
  )
}


