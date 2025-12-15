import React from 'react'
import ActiveOrderstop from './ActiveOrderstop'
import DeliveredOrders from './DeliveredOrders'
import FoodDelivery from './FoodDelivery'

const Orders = () => {
  return (
    <div className='over-view-dshboard-sec'>
        <div className='row'>
            <div className='col-md-12 mb-4'>
                <FoodDelivery />
            </div>
            <div className='col-md-12'>
                <ActiveOrderstop />
                <DeliveredOrders />
            </div>
        </div>
    </div>
  )
}

export default Orders