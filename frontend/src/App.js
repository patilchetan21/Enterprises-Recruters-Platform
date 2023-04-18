import './App.css';
// import { Homepage } from './Homepage';
import { useState,useEffect } from 'react';
import axios from 'axios'

function App() {
  const [resumes, setResumes] = useState([])
  // useEffect(async () => {
  //   try{
  //     const resumes = await axios.get("http://127.0.0.1:8000/api/resumeClf/")
  //     console.log(resumes.data)
  //     setResumes(resumes.data)
  //   } catch(error){
  //     console.log(error)
  //   }
  // },[])

  const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/resumeClf/")
      console.log(response.data)
      setResumes(response.data)
    } catch(error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    fetchData()
  }, [])
  console.log(resumes)

  return (
    <div className="App">
      {/* <Homepage />     */}
    </div>
  );
}

export default App;
