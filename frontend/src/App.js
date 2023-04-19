import React from 'react'
import { BrowserRouter,Routes,Route, useAsyncError } from 'react-router-dom'
import { Homepage } from './components/Homepage'
import Dasboardenterprise from './components/Dasboardenterprise'
import HireCandidates from './components/Hirecandidates'
import CommissionPage from './components/CommissionPage'
import ProfileForm from './components/ProfileForm'
import LandingPage from './components/LandingPage'
import SigningJob from './components/SigningJob'
import RecruitmentPage from './components/RecruitmentPage'
import Dash from './Dash'
import HiringPage from './components/HiringPage'
// import HireCandidates from './HireCandidates';
import { useState,useEffect } from 'react';
import axios from 'axios'


// const commissions = [
//   { number: 1, company: 'ABC Inc.', hiredNumber: 3, amount: 5000 },
//   { number: 2, company: 'XYZ Ltd.', hiredNumber: 5, amount: 7500 },
//   { number: 3, company: 'PQR LLC', hiredNumber: 2, amount: 3000 },
// ];
const companies = [
  { name: 'ABC Company', hired: 10, amount: 5000 },
  { name: 'XYZ Corporation', hired: 5, amount: 2500 },
  { name: '123 Enterprises', hired: 20, amount: 10000 },
];


const App = () => {
  const [resumes, setResumes] = useState([])
  const [candidates, setcandidates] = useState([])
  const [commissions, setcommission] = useState([])
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
      const hiredCan = await axios.get("http://127.0.0.1:8000/api/hiredCanditate/")
      const commissionRes = await axios.get("http://127.0.0.1:8000/api/commission/")
      // console.log(response.data)
      setResumes(response.data)
      setcandidates(hiredCan.data)
      setcommission(commissionRes.data)
    } catch(error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    fetchData()
  },[])
  console.log(resumes)
  return (
    <>
      {/* <Homepage /> */}
      {/* <Dasboardenterprise/> */}
      {/* <HireCandidates candidates={candidates} />
   <CommissionPage/>
    */}
    {/* <Dash/> */}
      {/* <CommissionPage commissions={commissions} /> */}
      {/* <LandingPage/> */}
      {/* <SigningJob/> */}
      {/* <RecruitmentPage/> */}
      {/* <CommissionPage /> */}
       {/* <ProfileForm/> */}

       
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/profile' element={<ProfileForm/>}/>
        <Route path='/homepage' element={<Homepage/>}/>
        <Route path='/hiringpage' element={<HiringPage/>}/>
        <Route path='/commission' element={<CommissionPage commissions={commissions} />}/>
        <Route path='/hiringcandidates' element={<HireCandidates candidates={candidates} />}/>

        <Route path='/recruitment' element={<RecruitmentPage />}/>
      
       </Routes>
       </BrowserRouter>
    
    </>
  )
}

export default App