import React, { useState } from 'react'
import Image from "next/image";
import '../../../app/flags.css'
import { Accordion, Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Link from 'next/link';
import CloseModal from "../../../../public/images/close-modal.png";
import { DatePicker } from "rsuite";


const RestaurantAvailabilityModal = ({ show, handleClose }: any) => {
        /***check radio */
        const [selected, setSelected] = useState('Delivery only');
        /****check radio */
            
        const [time1, setTime1] = useState<Date | null>(null);
        const [time2, setTime2] = useState<Date | null>(null);
  return (
    
     
    <Modal show={show} onHide={handleClose} centered className="host-profile-modal common-modal-sec pt-4">
        <Modal.Header className='border-0'>
            <Button variant="close-btn" onClick={handleClose}>
                <Image src={CloseModal} alt="" />
            </Button>
        </Modal.Header>
        <Modal.Body className="common-modal-body p-0">
            <div className='modal-box-from'>
                <div className='heading p-3 pt-4 pb-0'>
                    <h2 className='border-0 m-0 p-0'>Restaurant Type & Availability</h2>
                </div>
                <hr className='light-bg mb-3 mb-0'/>
                <div className='form-modal-box card-box profile-availability bg-transparent shadow-none ps-0 pt-0 pe-0'>
                    <div className="profile-owner p-16 pt-0 pb-0">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="location-map-outlate mb-2">
                                    <h3>Establishment Type</h3>
                                    <p className="m-0 p-0 pt-2">Select most relevant category for your restaurant type</p>
                                </div>
                            </div>
                            <div className="col-md-12 mb-3">
                                <div className='flex-box-column d-flex flex-wrap align-items-center gap-md-5 gap-0'>
                                    <div className='radio-checkbox-box d-flex align-items-center gap-2'>
                                        <div className='btn-checkbox'>
                                            <label>
                                                <input type='radio' name='busradio' checked={selected === 'Delivery only'} onChange={() => setSelected('Delivery only')}/>
                                                <b className='d-block'></b>
                                            </label>
                                        </div>
                                        <div className='text-squch'>
                                            <p>Delivery only</p>
                                        </div>
                                    </div>

                                    <div className='radio-checkbox-box d-flex align-items-center gap-2'>
                                        <div className='btn-checkbox'>
                                            <label>
                                                <input type='radio' name='busradio' checked={selected === 'Dine-in only'} onChange={() => setSelected('Dine-in only')} />
                                                <b className='d-block'></b>
                                            </label>
                                        </div>
                                        <div className='text-squch'>
                                            <p>Dine-in only</p>
                                        </div>
                                    </div>

                                    <div className='radio-checkbox-box d-flex align-items-center gap-2'>
                                        <div className='btn-checkbox'>
                                            <label>
                                                <input type='radio' name='busradio' checked={selected === 'Both'} onChange={() => setSelected('Both')}/>
                                                <b className='d-block'></b>
                                            </label>
                                        </div>
                                        <div className='text-squch'>
                                            <p>Both, Delivery & Dine-in available</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 mb-4">
                                <div className="location-map-outlate mb-1">
                                    <h3>Type of food category</h3>
                                </div>
                                <div className="checkbox-inline d-flex flex-md-nowrap flex-wrap align-items-center gap-xl-5 gap-md-3 gap-4"> 
                                    <div className="customise-status">
                                        <Form.Check type="checkbox" id="custom-switch1" label="Pure-Veg" checked/>
                                    </div>
                                    <div className="customise-status">
                                        <Form.Check type="checkbox" id="custom-switch2" label="Non-Veg"/>
                                    </div>
                                    <div className="customise-status">
                                        <Form.Check type="checkbox" id="custom-switch3" label="Both"/>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12 mb-4">
                                <div className="location-map-outlate mb-24">
                                    <h3>Select Option Which Best Describe Your Restaurant</h3>
                                </div>
                                <div className="checkbox-inline "> 
                                    <div className="customise-status w-100">
                                        <Form.Check type="checkbox" id="custom-switch4" label="Bakery"/>
                                    </div>
                                    <div className="customise-status">
                                        <Form.Check type="checkbox" id="custom-switch5" label="Beverage shop"/>
                                    </div>
                                    <div className="customise-status">
                                        <Form.Check type="checkbox" id="custom-switch6" label="Casual Dining"/>
                                    </div>
                                    <div className="customise-status">
                                        <Form.Check type="checkbox" id="custom-switch7" label="Dhaba"/>
                                    </div>
                                    <div className="customise-status">
                                        <Form.Check type="checkbox" id="custom-switch8" label="Dessert Parlor"/>
                                    </div>
                                    <div className="customise-status">
                                        <Form.Check type="checkbox" id="custom-switch9" label="Food Court"/>
                                    </div>
                                    <div className="customise-status">
                                        <Form.Check type="checkbox" id="custom-switch10" label="Quick Bites"/>
                                    </div>
                                    <div className="customise-status">
                                        <Form.Check type="checkbox" id="custom-switch11" label="Quick Bites"/>
                                    </div>
                                    <div className="customise-status">
                                        <Form.Check type="checkbox" id="custom-switch12" label="Quick Bites" checked/>
                                    </div>
                                </div>
                                <Link className="seeAll" href="">See All</Link>
                            </div>

                            <div className="col-md-12 mb-4">
                                <div className="location-map-outlate mb-24">
                                    <h3>Type Of Cuisines</h3>
                                    <p className="m-0 p-0 pt-2">Select options which best describe food your serve</p>
                                </div>
                                <div className="checkbox-inline "> 
                                    <div className="customise-status w-100">
                                        <Form.Check type="checkbox" id="custom-switch13" label="Biryani"/>
                                    </div>
                                    <div className="customise-status">
                                        <Form.Check type="checkbox" id="custom-switch14" label="Beverage"/>
                                    </div>
                                    <div className="customise-status">
                                        <Form.Check type="checkbox" id="custom-switch15" label="South Inidan"/>
                                    </div>
                                    <div className="customise-status">
                                        <Form.Check type="checkbox" id="custom-switch16" label="Pizza" checked/>
                                    </div>
                                    <div className="customise-status">
                                        <Form.Check type="checkbox" id="custom-switch17" label="Dessert"/>
                                    </div>
                                    <div className="customise-status">
                                        <Form.Check type="checkbox" id="custom-switch18" label="Chinese"/>
                                    </div>
                                    <div className="customise-status">
                                        <Form.Check type="checkbox" id="custom-switch19" label="North Indian"/>
                                    </div>
                                    <div className="customise-status">
                                        <Form.Check type="checkbox" id="custom-switch20" label="North Indian"/>
                                    </div>
                                    <div className="customise-status">
                                        <Form.Check type="checkbox" id="custom-switch21" label="North Indian"/>
                                    </div>
                                </div>
                                <Link className="seeAll" href="">See All</Link>
                            </div>

                            <div className="col-md-12">
                                <div className="location-map-outlate mb-24">
                                    <h3>Mark availability</h3>
                                    <p className="m-0 p-0 pt-2">Don’t forget ti uncheck your day off</p>
                                </div>
                                <div className="checkbox-inline "> 
                                    <div className="customise-status w-100">
                                        <Form.Check type="checkbox" id="custom-switch22" label="Monday" checked/>
                                    </div>
                                    <div className="timmer-box-mid row">
                                        <div className="col-md-6">
                                            <div className="form-group mb-2">
                                                <Form.Label className="d-none">Start time</Form.Label>
                                                <DatePicker className="w-100" format="HH:mm:ss" value={time1} placeholder="-- : -- --" allowClear={false} showHour showMinute showSecond onChange={(value) => setTime1(value)} shouldDisableHour={(hour) => hour < 8 || hour > 18} shouldDisableMinute={(minute) => minute % 15 !== 0} shouldDisableSecond={(second) => second % 30 !== 0}/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-2">
                                                <Form.Label className="d-none">End Time</Form.Label>
                                                <DatePicker className="w-100" format="HH:mm:ss" value={time2} placeholder="-- : -- --" allowClear={false} showHour showMinute showSecond onChange={(value) => setTime2(value)} shouldDisableHour={(hour) => hour < 8 || hour > 18} shouldDisableMinute={(minute) => minute % 15 !== 0} shouldDisableSecond={(second) => second % 30 !== 0} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="customise-status">
                                        <Form.Check type="checkbox" id="custom-switch23" label="Tuesday"/>
                                    </div>
                                    <div className="customise-status">
                                        <Form.Check type="checkbox" id="custom-switch24" label="Wednesday"/>
                                    </div>
                                    <div className="customise-status">
                                        <Form.Check type="checkbox" id="custom-switch25" label="Thursday"/>
                                    </div>
                                    <div className="customise-status">
                                        <Form.Check type="checkbox" id="custom-switch26" label="Friday"/>
                                    </div>
                                    <div className="customise-status">
                                        <Form.Check type="checkbox" id="custom-switch27" label="Saturday"/>
                                    </div>
                                    <div className="customise-status">
                                        <Form.Check type="checkbox" id="custom-switch28" label="Sunday"/>
                                    </div>
                                </div>
                                
                                <div className="checkbox-inline d-flex align-items-center gap-2">
                                    <div className="customise-status small-text">
                                        <Form.Check type="checkbox" id="custom-switch29" label="Please confirm that you meet hygiene and quality standards."/>
                                    </div>
                                </div>

                            </div>
                            

                        </div>
                    </div>

                </div>

            </div>
        </Modal.Body>
        <Modal.Footer className="footer-step-form modal-footer-box d-flex align-items-center gap-2 justify-content-md-end justify-content-center mt-0 ">
            <Link href="" className='btn btn-primary btn-grey btn-full-grey' onClick={handleClose}>Cancel</Link>
            <button className='btn btn-secondary' >Save Details</button>
        </Modal.Footer>
    </Modal>
  )
}

export default RestaurantAvailabilityModal