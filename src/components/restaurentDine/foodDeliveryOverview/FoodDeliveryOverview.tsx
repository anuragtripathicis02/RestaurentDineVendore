import React from 'react'
import TopDashboard from './TopDashboard'
import FoodDeliveryOverviewTabs from './FoodDeliveryOverviewTabs'

const FoodDeliveryOverview = () => {
  return (
    <div className='overview-delivery-sec'>
        <div className='top-dashboard mb-4'>
            <TopDashboard />
        </div>
        <div className='tabs-dashboard-sec'>
            <FoodDeliveryOverviewTabs />
        </div>
    </div>

  )
}

export default FoodDeliveryOverview