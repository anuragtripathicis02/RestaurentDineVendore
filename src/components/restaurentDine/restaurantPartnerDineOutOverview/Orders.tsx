import React from 'react'
import ActiveOrderstop from './ActiveOrderstop'
import DeliveredOrders from './DeliveredOrders'
import FoodDelivery from './FoodDelivery'
import NewBooking from './NewBooking'

const Orders = () => {
  return (
    <div className='over-view-dshboard-sec'>
        <div className='row'>
            <div className='col-md-12 mb-4'>
                <FoodDelivery />
            </div>
            <div className='col-md-12'>
                <NewBooking />
                <ActiveOrderstop />
                <DeliveredOrders />
            </div>
        </div>
    </div>
  )
}

export default Orders