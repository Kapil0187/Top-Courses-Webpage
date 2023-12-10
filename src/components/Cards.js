import React,{useState} from "react";
import Card from "./Card";

function Cards({courses,category}){
     
    const [likedCourses,setLikedCourses] = useState([]);
    function getCourses(){
        if(category==="All")
        {
            let allCourses=[];
            Object.values(courses).forEach((array) => {
                array.forEach((courseData) => {
                    allCourses.push(courseData);
                })
            });
            return allCourses;
        }
        else
        {
            return courses[category];
        }
    }
    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourses().map((cours)=>
                {
                    return <Card Key={cours.id} cours={cours} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
                })
            }
        </div>
    );
}

export default Cards;