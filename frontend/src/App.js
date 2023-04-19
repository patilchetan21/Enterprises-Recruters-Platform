import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
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


const candidates = [
  {
    id: 1,
    position: 'Software Developer',
    email: 'john.doe@example.com',
    contact: '+1 123 456 7890',
    status: 'Pending',
    commission: 10,
    agency: 'ABC Staffing',
    agencyContact: 'Jane Smith'
  },
  {
    id: 2,
    position: 'UI/UX Designer',
    email: 'jane.doe@example.com',
    contact: '+1 234 567 8901',
    status: 'Interviewing',
    commission: 15,
    agency: 'XYZ Staffing',
    agencyContact: 'John Smith'
  },
  {
    id: 3,
    position: 'Data Analyst',
    email: 'jim.smith@example.com',
    contact: '+1 345 678 9012',
    status: 'Hired',
    commission: 20,
    agency: 'DEF Staffing',
    agencyContact: 'Mark Johnson'
  },
  // add more candidate objects as needed
];


const commissions = [
  { number: 1, company: 'ABC Inc.', hiredNumber: 3, amount: 5000 },
  { number: 2, company: 'XYZ Ltd.', hiredNumber: 5, amount: 7500 },
  { number: 3, company: 'PQR LLC', hiredNumber: 2, amount: 3000 },
];
const companies = [
  { name: 'ABC Company', hired: 10, amount: 5000 },
  { name: 'XYZ Corporation', hired: 5, amount: 2500 },
  { name: '123 Enterprises', hired: 20, amount: 10000 },
];


const App = () => {
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