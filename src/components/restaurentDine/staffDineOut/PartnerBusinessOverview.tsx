import { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import DineOutTiming from './DineOutTiming';
import ManageTableBooking from './ManageTableBooking';


const PartnerBusinessOverview = () => {
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
        <Tab eventKey="DatePlace" title={renderTitle('Restaurant Overview')}>
          <div className="top-dashboard tabs-booking">
            <div className="inner-tabs-booking-box">
                <div className='mt-4'>
                    <ManageTableBooking />
                </div>
            </div>
          </div>
        </Tab>

        <Tab eventKey="DineOutTiming" title={renderTitle('Dine out timing')}>
            <div className="top-dashboard tabs-booking">
                <div className="inner-tabs-booking-box">
                    <div className='mt-4'>
                        <DineOutTiming />
                    </div>
                </div>
            </div>
        </Tab>

      </Tabs>
    </div>
  )
}

export default PartnerBusinessOverview