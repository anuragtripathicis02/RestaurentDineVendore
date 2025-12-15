import React, { useState } from "react";
import "../../../app/flags.css";
import { Form, Button, Dropdown } from "react-bootstrap";

const ItemDetails = () => {
        const [selected, setSelected] = useState('Delivery only');
  return (
    <div className="item-details-sec card-box p-16">
      <div className="row">
        <div className="col-md-12 mb-3">
            <h2>Item Details</h2>
        </div>
        <div className="col-md-6">
          <div className="form-group mb-24">
            <Form.Label>Item name</Form.Label>
            <Form.Control type="text" placeholder="Enter Item name" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group mb-24">
            <Form.Label>Category</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Select Category</option>
              <option value="1">Select Category</option>
              <option value="2">Select Category</option>
              <option value="3">Select Category</option>
            </Form.Select>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group mb-24">
            <Form.Label>Sub-category</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Select Sub-Category</option>
              <option value="1">Select Sub-Category One</option>
              <option value="2">Select Sub-Category Two</option>
              <option value="3">Select Sub-Category Three</option>
            </Form.Select>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group mb-24">
            <Form.Label>Specialty tags</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Select specialty tag</option>
              <option value="1">Select specialty tag One</option>
              <option value="2">Select specialty tag Two</option>
              <option value="3">Select specialty tag Three</option>
            </Form.Select>
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <Form.Label>Item description</Form.Label>
            <Form.Control as="textarea" placeholder="Description" style={{ height: '160px' }} className=""/>
          </div>
        </div>
        <div className="col-md-12">
            <div className='flex-box-column radio-border-active d-flex flex-wrap align-items-center gap-3'>
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
            </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
