import Link from 'next/link'
import React, { useRef, useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

const FoodDelivery = () => {
    const [dateRange, setDateRange] = useState<[Date?, Date?] | null>(null);

  return (
    <div className='food-delivery-sec'>
        <div className='top-search-filter-box d-flex gap-2 justify-content-between flex-wrap mt-4'>
            <div className='right-filter overflow-auto'>
                <div className='scrollbar-box w-100 d-flex align-items-center gap-2'>
                    
                    <div className='list-status'>
                        <div className="form-group">
                            <Form.Label  className='d-none'>Supreme Upper Crust</Form.Label>
                            <Form.Select aria-label="Default select example" className='btn-select-top'>
                                <option value="1">Supreme Upper Crust</option>
                                <option value="2">Supreme Upper Crust </option>
                                <option value="3">Karoo Grillhouse </option>
                                <option value="4">Karoo Grillhouse</option>
                                <option value="4">Select Your Restaurant</option>
                            </Form.Select>
                        </div>
                    </div>
                    <div className='list-status'>
                        <div className="form-group">
                            <Form.Label  className='d-none'>Dine Out</Form.Label>
                            <Form.Select aria-label="Default select example" className='btn-select-top'>
                                <option>Dine Out</option>
                                <option value="2">Food Delivery </option>
                            </Form.Select>
                        </div>
                    </div>

                    <div className='list-status'>
                        <div className="form-group">
                            <Form.Label  className='d-none'>All Orders</Form.Label>
                            <Form.Select aria-label="Default select example" className='btn-select-top'>
                                <option>All Orders</option>
                                <option value="2">Select Orders </option>
                                <option value="3">New Orders</option>
                                <option value="4">active Orders </option>
                                <option value="5">Ready Orders </option>
                                <option value="6">Preparing Orders </option>
                                <option value="7">Out for Delivery </option>
                                <option value="8">Completed Orders </option>
                                <option value="9">Rejected Orders </option>
                            </Form.Select>
                        </div>
                    </div>
                    <div className='calendy-box'>
                        <div className="d-flex align-items-center gap-2">

                            {/* RSuite DateRangePicker */}
                            <div className="calendar ">
                                <DateRangePicker
                                value={dateRange}
                                onChange={setDateRange}
                                format="MM/dd/yyyy"
                                placeholder="MM/DD/YYYY - MM/DD/YYYY"
                                appearance="subtle"
                                size="lg"
                                style={{
                                    borderRadius: '9999px',
                                    border: 'none',
                                    padding: '6px 12px',
                                }}
                                menuClassName="custom-range-menu"
                                />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default FoodDelivery