import React from "react";
import {FcLike,FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = ({cours , likedCourses , setLikedCourses}) =>{

    function clickHandler(){
        if(likedCourses.includes(cours.id))
        {
            setLikedCourses((prev)=>prev.filter((cid)=>(cid!==cours.id)));
            toast.warn("Liked Removed");
        }
        else
        {
            if(likedCourses.length===0)
            {
                setLikedCourses([cours.id]);
            }
            else{
                setLikedCourses((prev)=>[...prev,cours.id]);
            }
            toast.success("Liked Successfully");
        }
    }

    return(
        <div className="w-[300px] bg-black bg-opacity-50 rounded-md overflow-hidden ">
            <div className="relative">
                <img src={cours.image.url} alt=""></img>
            <div className="absolute w-[40px] h-[40px] bg-white rounded-full right-2 bottom-[-20px] grid place-items-center">
                <button onClick={clickHandler}>
                    {
                        likedCourses.includes(cours.id)?(<FcLike fontSize="1.75rem"/>):(<FcLikePlaceholder fontSize="1.75rem"/>)
                    }
                </button>
            </div>
            </div>
            <div className= "p-4 text-white" >
                <p className="font-semibold text-lg leading-6 mb-3">{cours.title}</p>
                <p >{(cours.description.length>100)?cours.description.substring(0,100)+"....":cours.description}</p>
            </div>
        </div>
    );
}

export default Card;