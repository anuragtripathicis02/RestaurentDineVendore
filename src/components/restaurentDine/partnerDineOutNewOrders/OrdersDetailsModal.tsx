import React, { useState } from 'react'
import Image from "next/image";
import '../../../app/flags.css'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import CloseModal from "../../../../public/images/close-modal.png";
import PartnerFoodDeliveryConfirmationModal from './PartnerFoodDeliveryConfirmationModal';
import PartnerFoodRejectOrderModal from './PartnerFoodRejectOrderModal';
import PartnerOutOfStockModal from './PartnerOutOfStockModal';

const OrdersDetailsModal = ({ show, handleClose }: any) => {
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const [showRejectModal, setShowRejectModal] = useState(false);
    const [showOutOfStockModal, setShowOutOfStockModal] = useState(false);

    const handleCloseAll = () => {
        setShowConfirmationModal(false);
        setShowRejectModal(false);
        setShowOutOfStockModal(false);
        handleClose();
    };

    const handleAcceptOrder = () => {
        handleClose();
        setShowConfirmationModal(true); 
    };

    const handleRejectOrder = () => {
        handleClose(); 
        setShowRejectModal(true); 
    };

    const handleOutOfStockModal = () => {
        handleClose(); 
        setShowOutOfStockModal(true); 
    };

    

    return (
        <>
            <Modal show={show && !showConfirmationModal && !showRejectModal} onHide={handleCloseAll} centered className="host-profile-modal common-modal-sec pt-4">
                <Modal.Header className='border-0'>
            <Button variant="close-btn" onClick={handleClose}>
                <Image src={CloseModal} alt="" />
            </Button>
        </Modal.Header>
        <Modal.Body className="common-modal-body p-0">
            <div className='modal-box'>
                <div className='heading p-3 pt-4 pb-0'>
                    <h2 className='border-0 m-0 p-0'>Table Booking Details</h2>
                </div>
               <hr className='light-bg mt-3 mb-3'/>   
                <div className='modal-body-box p-3'>
                    <div className='top-details-modal-box d-flex justify-content-between flex-wrap gap-3'> 
                        <div className='order-modal-details'>
                            <h5>Order Id</h5>
                            <p className='m-0 p-0'>#12356</p>
                        </div>
                        <div className='order-modal-details'>
                            <h5>Order Date & Time</h5>
                            <p className='m-0 p-0'>24-03-2025 | 08:30 pm </p>
                        </div>
                        <div className='order-modal-details'>
                            <h5>Lunch</h5>
                            <p className='m-0 p-0'>12:00 PM - 03:00 PM</p>
                        </div>
                        <div className='order-modal-details'>
                            <h5>Number of Guest</h5>
                            <p className='m-0 p-0'>02</p>
                        </div>
                    </div>
                    <div className='bottom-details-modal-box'>
                        <div className='row'>
                            <div className='col-md-6 mb-3 mb-md-0'>
                                <div className='payment-right-details'>
                                    <div className='payment-box'>
                                        <h4 className='text-green'>Payment Summary</h4>
                                        <ul className='d-flex align-items-center flex-wrap justify-content-between gap-3'>
                                            <li>
                                                <span className='text-top-h d-block'>Amount</span>
                                                <span className='text-botton-h d-block'>₵59.15</span>
                                            </li>
                                            <li>
                                                <span className='text-top-h d-block'>Payment Method</span>
                                                <span className='text-botton-h d-block'>online ( Orange Money)</span>
                                            </li>
                                            <li>
                                                <span className='text-top-h d-block'>payment status</span>
                                                <span className='text-top-h text-green d-block'>Paid</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='payment-box'>
                                        <h4>Customer details</h4>
                                        <ul className='d-flex align-items-center flex-wrap justify-content-between gap-3'>
                                            <li>
                                                <span className='text-top-h d-block'>Customer Name</span>
                                                <span className='text-botton-h d-block'>Jaydon Frankie</span>
                                            </li>
                                            <li>
                                                <span className='text-top-h d-block'>Phone Number</span>
                                                <span className='text-botton-h d-block'>+27 683 055 690</span>
                                            </li>
                                            <li>
                                                <span className='text-top-h d-block'>Email Id</span>
                                                <span className='text-botton-h d-block'>Jaydon.frankie@gmail.com</span>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <div className='payment-box'>
                                        <h4>Delivery Executive Details</h4>
                                        <ul className='d-flex border-0 pb-0 align-items-center flex-wrap justify-content-between gap-3'>
                                            <li>
                                                <span className='text-top-h d-block'>Executive Name</span>
                                                <span className='text-botton-h d-block'>#123456</span>
                                            </li>
                                            <li>
                                                <span className='text-top-h d-block'>Phone Number</span>
                                                <span className='text-botton-h d-block'>+27 683 055 690</span>
                                            </li>
                                        </ul>
                                    </div> */}
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='payment-summary-modal grey-bg p-16'>
                                    <h4>Payment Summary</h4>
                                    <div className='payment-box top-box border-0 pb-0'>
                                        <span className='small d-block mb-2'>Table Details</span>
                                        <ul className='d-flex align-items-center justify-content-between gap-2'>
                                            <li className='d-flex align-items-center gap-2'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 20L7.5 16.25C7.65 15.8667 7.89167 15.5623 8.225 15.337C8.55833 15.1117 8.93333 14.9993 9.35 15H11V10.975C8.45 10.8917 6.31233 10.5167 4.587 9.85C2.86167 9.18333 1.99933 8.4 2 7.5C2 6.53333 2.975 5.70833 4.925 5.025C6.875 4.34167 9.23333 4 12 4C14.7833 4 17.146 4.34167 19.088 5.025C21.03 5.70833 22.0007 6.53333 22 7.5C22 8.4 21.1373 9.18333 19.412 9.85C17.6867 10.5167 15.5493 10.8917 13 10.975V15H14.65C15.05 15 15.421 15.1127 15.763 15.338C16.105 15.5633 16.3507 15.8673 16.5 16.25L18 20H16L14.8 17H9.2L8 20H6ZM12 9C13.6167 9 15.1417 8.85833 16.575 8.575C18.0083 8.29167 19.0583 7.93333 19.725 7.5C19.0583 7.06667 18.0083 6.70833 16.575 6.425C15.1417 6.14167 13.6167 6 12 6C10.3833 6 8.85833 6.14167 7.425 6.425C5.99167 6.70833 4.94167 7.06667 4.275 7.5C4.94167 7.93333 5.99167 8.29167 7.425 8.575C8.85833 8.85833 10.3833 9 12 9Z" fill="#6D6D6D"/></svg> 1 x Lawn Table </li>
                                            <li>₵200.00</li>
                                        </ul>
                                    </div>
                                    
                                    <div className='payment-box top-box'>
                                        <span className='small d-block mb-2'>Food Items</span>
                                        <ul className='d-flex align-items-center justify-content-between gap-2'>
                                            <li className='d-flex align-items-center gap-2'><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.410526" y="0.410526" width="11.1789" height="11.1789" rx="2.11579" stroke="#20A66A" stroke-width="0.821053"/><circle cx="5.99835" cy="5.99933" r="2.84211" fill="#20A66A"/></svg> 1 x Butter Paneer </li>
                                            <li>₵20.00</li>
                                        </ul>
                                        <ul className='d-flex align-items-center justify-content-between gap-2'>
                                            <li className='d-flex align-items-center gap-2'><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.410526" y="0.410526" width="11.1789" height="11.1789" rx="2.11579" stroke="#20A66A" stroke-width="0.821053"/><circle cx="5.99835" cy="5.99933" r="2.84211" fill="#20A66A"/></svg> 1 x Dal Makhani </li>
                                            <li>₵24.00</li>
                                        </ul>
                                        <ul className='d-flex align-items-center justify-content-between gap-2'>
                                            <li className='d-flex align-items-center gap-2'><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.410526" y="0.410526" width="11.1789" height="11.1789" rx="2.11579" stroke="#20A66A" stroke-width="0.821053"/><circle cx="5.99835" cy="5.99933" r="2.84211" fill="#20A66A"/></svg> 1 x Aloo Tikki </li>
                                            <li>₵24.00</li>
                                        </ul>
                                        <ul className='d-flex align-items-center justify-content-between gap-2'>
                                            <li className='d-flex align-items-center gap-2'><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.410526" y="0.410526" width="11.1789" height="11.1789" rx="2.11579" stroke="#20A66A" stroke-width="0.821053"/><circle cx="5.99835" cy="5.99933" r="2.84211" fill="#20A66A"/></svg> 1 x Aloo Mattar </li>
                                            <li>₵24.00</li>
                                        </ul>
                                    </div>
                                    <div className='payment-box bottom-box'>
                                        <ul className='d-flex align-items-center justify-content-between gap-2'>
                                            <li>Items Total</li>
                                            <li>₵44.00</li>
                                        </ul>
                                        <ul className='d-flex align-items-center justify-content-between gap-2'>
                                            <li>Taxes</li>
                                            <li>₵5.15</li>
                                        </ul>
                                        <ul className='d-flex align-items-center justify-content-between gap-2'>
                                            <li>Discount</li>
                                            <li>₵0.00</li>
                                        </ul>
                                    </div>
                                    <div className='payment-box total-box'>
                                        <div className='d-flex align-items-center justify-content-between gap-2'>
                                            <h3>Total</h3>
                                            <h3>₵59.15</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer className="footer-step-form modal-footer-box d-flex align-items-center gap-2 justify-content-between ">
                    <div className='btn-right-footer-box'>
                        <button className='btn btn-primary btn-orange m-0' onClick={handleRejectOrder}>
                            Reject Order
                        </button>
                    </div>
                    <div className='btn-right-footer-box d-flex align-items-center gap-2'>
                        <button type='button' className='btn btn-primary btn-gray bg-grey text-gray m-0' onClick={handleOutOfStockModal}>
                            Mark Out of Stock
                        </button>
                        <button className='btn btn-secondary m-0' onClick={handleAcceptOrder}>
                            Accept Order
                        </button>
                    </div>
                </Modal.Footer>
            </Modal>

        <PartnerFoodDeliveryConfirmationModal show={showConfirmationModal} handleClose={handleCloseAll} />
        <PartnerFoodRejectOrderModal show={showRejectModal} handleClose={handleCloseAll} />
        <PartnerOutOfStockModal show={showOutOfStockModal} handleClose={handleCloseAll} />
  
    </>
  )
}

export default OrdersDetailsModal