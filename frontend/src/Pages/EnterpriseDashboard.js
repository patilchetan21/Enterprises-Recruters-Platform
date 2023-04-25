import React from 'react'
import SidebarEnterprise from '../components/SidebarEnterprise'
import { HireCandidate } from '../components/HireCandidate'
import { SelectedStudent } from '../components/SelectedStudent'
import {SettingEnterprise} from '../components/SettingEnterprise'
import { HelpEnterprise } from '../components/HelpEnterprise'
import { UpdateInterviewStatus } from '../components/UpdateInterviewStatus'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { UploadResumes } from '../components/UploadResumes'
import { EnterpriseHome } from '../components/EnterpriseHome'
import { AgencyHome } from '../components/AgencyHome'



export const EnterpriseDashboard = () => {
  return (
    <div>
      <BrowserRouter>
        <SidebarEnterprise>
          <Routes>
            <Route path="/" element={<EnterpriseHome />} />
            <Route path="/" element={<AgencyHome />} />
            <Route path="/hire-candidate" element={<HireCandidate />} />
            <Route path='/upload-resumes' element={<UploadResumes />} />
            <Route path="/selected-student" element={<SelectedStudent />} />
            <Route path="/update-interview-status" element={<UpdateInterviewStatus />} />
            <Route path="/setting-enterprise" element={<SettingEnterprise />} />
            <Route path="/help-enterprise" element={<HelpEnterprise />} />
          </Routes>
        </SidebarEnterprise>
      </BrowserRouter>
    </div>
  )
}
