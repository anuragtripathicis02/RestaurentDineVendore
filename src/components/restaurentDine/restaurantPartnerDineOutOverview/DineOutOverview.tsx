import React from 'react'
import TopDashboard from './TopDashboard'
import DineOutOverviewTabs from './DineOutOverviewTabs'


const DineOutOverview = () => {
  return (
    <div className='overview-delivery-sec'>
        <div className='top-dashboard mb-4'>
            <TopDashboard />
        </div>
        <div className='tabs-dashboard-sec'>
            <DineOutOverviewTabs />
        </div>
    </div>
  )
}

export default DineOutOverview