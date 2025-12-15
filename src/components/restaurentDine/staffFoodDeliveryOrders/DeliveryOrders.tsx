import { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import FoodDelivery from './FoodDelivery';
import ActiveOrders from './ActiveOrders';
import DeliveredOrders from './DeliveredOrders';
import DineOut from './DineOut';
import DineOutCompleted from './DineOutCompleted';

const DeliveryOrders = () => {
  const [key, setKey] = useState('DatePlace');

  const handleTabSelect = (selectedKey) => {
    setKey(selectedKey);
  };

  const renderTitle = (label) => (
    <span className="tab-title d-flex align-items-center gap-2 justify-content-center">
      {label}
    </span>
  );

  return (
    <div className="order-tabs-sec">
      <Tabs
        activeKey={key}
        onSelect={handleTabSelect}
        className="tabs-nav-box align-items-center text-center flex-nowrap overflow-auto d-flex gap-0"
      >
        <Tab eventKey="DatePlace" title={renderTitle('Food Delivery (2)')}>
          <div className="top-dashboard tabs-booking">
            <div className="inner-tabs-booking-box">
                <FoodDelivery />
                <div className='mt-4'>
                    <ActiveOrders />
                </div>
                <div className='mt-4'>
                    <DeliveredOrders />
                </div>
            </div>
          </div>
        </Tab>

        <Tab eventKey="GuestDetails" title={renderTitle('Dine Out (1)')}>
          <div className="top-dashboard tabs-booking">
            <div className="inner-tabs-booking-box">
              <FoodDelivery />
              <div className='mt-4'>
                <DineOut />
              </div>
              <div className='mt-4'>
                <DineOutCompleted />
              </div>
            </div>
          </div>
        </Tab>

      </Tabs>
    </div>
  );
};

export default DeliveryOrders;
