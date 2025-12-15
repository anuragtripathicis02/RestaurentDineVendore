import { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import TopDashboard from './TopDashboard';
import ActiveOrders from './ActiveOrders';
import Overview from './Overview';
import TotalRidesChart from './TotalRidesChart';
import BarChart from './BarChart';
import TopMenu from './TopMenu';
import CustomerComplaints from './CustomerComplaints';
import TopDashboardDineOut from './TopDashboardDineOut';
import OverViewDineOut from './OverViewDineOut';
import ActiveOrdersDineOut from './ActiveOrdersDineOut';


const PartnerDashboardTabs = () => {
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
                    <TopDashboard />
                    <ActiveOrders />
                    <Overview />
                    <div className='chart-dashboard-sec row mt-4'>
                        <div className='col-md-12'>
                            <div className='heading-com mb-3'>
                                <h2>Business Insights</h2>
                            </div>
                        </div>
                        <div className='col-xl-4 col-lg-5 mb-lg-0 mb-4'>
                            <TotalRidesChart />
                        </div>
                        <div className='col-xl-8 col-lg-7'>
                            <BarChart />
                        </div>
                    </div>
                    <div className='chart-dashboard-sec row mt-4'>
                        <div className='col-xl-8 col-lg-12'>
                            <TopMenu />
                        </div>
                        <div className='col-xl-4 col-lg-12 mt-xl-0 mt-4'>
                            <CustomerComplaints />
                        </div>
                    </div>
                </div>
            </div>
        </Tab>

        <Tab eventKey="GuestDetails" title={renderTitle('Dine Out (1)')}>
            <div className="top-dashboard tabs-booking">
                <div className="inner-tabs-booking-box">
                    <TopDashboardDineOut />
                    <ActiveOrdersDineOut />
                    <OverViewDineOut />
                    <div className='chart-dashboard-sec row mt-4'>
                        <div className='col-md-12'>
                            <div className='heading-com mb-3'>
                                <h2>Dine-Out Business Insights</h2>
                            </div>
                        </div>
                        <div className='col-xl-4 col-lg-5 mb-lg-0 mb-4'>
                            <TotalRidesChart />
                        </div>
                        <div className='col-xl-8 col-lg-7'>
                            <BarChart />
                        </div>
                    </div>
                    <div className='chart-dashboard-sec row mt-4'>
                        <div className='col-xl-8 col-lg-12'>
                            <TopMenu />
                        </div>
                        <div className='col-xl-4 col-lg-12 mt-xl-0 mt-4'>
                            <CustomerComplaints />
                        </div>
                    </div>
                </div>
            </div>
        </Tab>

        </Tabs>
    </div>
  )
}

export default PartnerDashboardTabs