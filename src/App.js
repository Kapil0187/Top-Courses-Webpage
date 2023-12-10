import React,{useState,useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Fillter from './components/Fillter';
import Spinner from './components/Spinner';
import { apiUrl,filterData } from './data';
import {toast} from "react-toastify";

function App() {
  const [loading,setLoading] = useState(true);
  const [courses,setCourses] = useState('');
  const [category,setCategory] = useState(filterData[0].title);
  async function fetchData(){
    setLoading(true);
    try{
      let respose = await fetch(apiUrl);
      let output = await respose.json();
      setCourses(output.data);
    }
    catch(error){
      toast.error("Somthing is Wrong");
    }
      setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className="min-h-screen flex flex-col ">
      <div>
          <Navbar/>
      </div>

      <div  className="min-h-screen bg-indigo-950 bg-opacity-60">
        <div>
            <Fillter filterData={filterData} category={category} setCategory={setCategory}/>
        </div>

        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
            {
              loading?(<Spinner/>):(<Cards courses={courses} category={category}/>)
            }
        </div>
      </div>
    </div>
  );
}

export default App;
