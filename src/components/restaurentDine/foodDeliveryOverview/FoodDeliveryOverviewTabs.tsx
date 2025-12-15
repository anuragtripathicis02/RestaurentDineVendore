import { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import OverviewDshboard from './OverviewDshboard';
import Orders from './Orders';
import Promocode from './Promocode';

const FoodDeliveryOverviewTabs = () => {
    
      const [key, setKey] = useState('Overview');
    
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
            <Tab eventKey="Overview" title={renderTitle('Overview')}>
              <div className="top-dashboard tabs-booking">
                <div className="inner-tabs-booking-box">
                    <OverviewDshboard />
                </div>
              </div>
            </Tab>
    
            <Tab eventKey="Orders" title={renderTitle('Orders')}>
              <div className="top-dashboard tabs-booking">
                <div className="inner-tabs-booking-box">
                    <Orders />
                </div>
              </div>
            </Tab>
    
            <Tab eventKey="Promocode" title={renderTitle('Promocode')}>
            <div className="top-dashboard tabs-booking">
                <div className="inner-tabs-booking-box">
                  <Promocode />
                </div>
            </div>
            </Tab>
    
          </Tabs>
        </div>
  )
}

export default FoodDeliveryOverviewTabs