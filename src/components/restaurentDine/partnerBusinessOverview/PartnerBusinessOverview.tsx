import { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Overview from './Overview';
import AdminEarning from './AdminEarning';
import EarningReport from './EarningReport';
import RestaurantProfile from './RestaurantProfile';
import RestaurantMenu from './RestaurantMenu';
import ManageTableBooking from './ManageTableBooking';
import DineOutTiming from './DineOutTiming';


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
                   <Overview />
                </div>
                <div className='mt-4'>
                    <div className='inner-financial-detail'>
                        <div className='row'>
                            <div className='col-lg-7 col-md-12'>
                                <div className='admin-earning-box'>
                                    <AdminEarning />
                                </div>
                            </div>
                            <div className='col-lg-5 col-md-12 mt-lg-0 mt-4'>
                                <div className='earning-report-box'>
                                    <EarningReport />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </Tab>

        <Tab eventKey="GuestDetails" title={renderTitle('Restaurant Profile')}>
            <div className="top-dashboard tabs-booking">
                    <div className="inner-tabs-booking-box">
                        <div className='mt-4'>
                            <RestaurantProfile />
                        </div>
                    </div>
            </div>
        </Tab>

        <Tab eventKey="RestaurantMenu" title={renderTitle('Restaurant Menu')}>
            <div className="top-dashboard tabs-booking">
                <div className="inner-tabs-booking-box">
                    <div className='mt-4'>
                        <RestaurantMenu />
                    </div>
                </div>
            </div>
        </Tab>

        <Tab eventKey="ManageTable" title={renderTitle('Manage Table')}>
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