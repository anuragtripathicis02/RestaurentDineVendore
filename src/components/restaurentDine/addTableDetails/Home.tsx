'use client'
import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import GalleryUpdateBox from './GalleryUpdateBox';
import ItemDetails from './ItemDetails';
import ItemPreferences from './ItemPreferences';
import Schedule from './Schedule';

const Home = () => {
  return (
    <div className='vehicle-page'>
      <div className='booking-sec height-fixed-main d-flex flex-column'>
          <div className='dashboard-pages-heading Breadcrumb-sec'>
            <div className='page-details d-flex align-items-center gap-2'>
                <Link href="" className="btn-back mb-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.56951 5.92969L3.49951 11.9997L9.56951 18.0697" stroke="#652669" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.5004 12H3.67041" stroke="#652669" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </Link>
                <div className='left-details-heading p-0 m-0 position-static'>
                    <h2 className='m-0 p-0'>Add Table</h2>
                </div>
            </div>
          </div>
          <div className='delivery-order-sec mt-2'>
            <div className="top-dashboard tabs-booking">
              <div className="inner-tabs-booking-box">
                <div className='row'>
                  <div className='col-xl-6 col-md-12'>
                    <div className='mb-24 gallery-box'>
                      <GalleryUpdateBox />
                    </div>
                  </div>
                  <div className='col-xl-6 col-md-12'>
                    <div className='mb-24 table-item-details'>
                      <ItemDetails />
                    </div>
                  </div>
                  <div className='col-md-12'>
                    <div className='mb-24 table-item-details'>
                      <ItemPreferences />
                    </div>
                  </div>
                  <div className='col-md-12'>
                    <div className='schedule-box'>
                      <Schedule />
                    </div>
                  </div>
                  <div className='col-lg-12 mt-4'>
                      <div className='footer-boottom-btn d-flex align-items-center justify-content-md-end justify-content-center gap-2'>
                          <Link href="" className='btn btn-primary bg-white text-gray'>Clear all</Link>
                          <Link href="" className='btn btn-secondary'>Save & Continue</Link>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className='footer-vendor text-center pt-4 pb-4'>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
