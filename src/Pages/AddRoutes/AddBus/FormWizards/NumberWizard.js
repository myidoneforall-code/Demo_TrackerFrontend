// import React, { useState } from 'react';
// import { Card, CardBody, CardHeader, Button, Form, FormGroup, Label, Input, Row, Col, FormText } from 'reactstrap';

// const NumberWizard = () => {
//     const [step, setStep] = useState(1);
//     const [errors, setErrors] = useState({});
//     const [formData, setFormData] = useState({
//         fname: '',
//         lname: '',
//         contactNum: '',
//         address: '',
//         city: '',
//         state: '',
//         zip: '',
//         email: '',
//         password: '',
//         confirmPassword: ''
//     });

//     const handleNext = () => {
//         if (validateStep(step)) {
//             setStep(step + 1);
//         }
//     };

//     const handlePrev = () => setStep(step - 1);

//     const validateStep = (step) => {
//         let currentErrors = {};

//         // Step 1 validation (Personal Information)
//         if (step === 1) {
//             if (!formData.fname) currentErrors.fname = 'First name is required';
//             if (!formData.lname) currentErrors.lname = 'Last name is required';
//             if (!formData.contactNum) currentErrors.contactNum = 'Contact number is required';
//         }

//         // Step 2 validation (Address Information)
//         if (step === 2) {
//             if (!formData.address) currentErrors.address = 'Address is required';
//             if (!formData.city) currentErrors.city = 'City is required';
//             if (!formData.state) currentErrors.state = 'State is required';
//             if (!formData.zip || formData.zip.length !== 5) currentErrors.zip = 'Zip code must be 5 digits';
//         }

//         // Step 3 validation (Account Information)
//         if (step === 3) {
//             if (!formData.email) currentErrors.email = 'Email is required';
//             if (!formData.password) currentErrors.password = 'Password is required';
//             if (formData.password !== formData.confirmPassword) currentErrors.confirmPassword = 'Passwords must match';
//         }

//         setErrors(currentErrors);
//         return Object.keys(currentErrors).length === 0;
//     };

//     const handleChange = (e) => {
//         const { id, value } = e.target;
//         setFormData({
//             ...formData,
//             [id]: value
//         });
//     };

//     return (
//         <>
//             <Card>
//                 <CardHeader>
//                     <h5> Wizard With Number</h5>
//                 </CardHeader>
//                 <CardBody>
//                     <div className="form-wizard ">
//                         <div className="form-wizard-header">

//                             <ul className="form-wizard-steps">
//                                 <li className={`${step >= 1 ? 'activated' : ''} ${step === 1 ? 'active' : ''}`}>
//                                     <span className="wizard-steps">1</span>
//                                 </li>
//                                 <li className={`${step >= 2 ? 'activated' : ''} ${step === 2 ? 'active' : ''}`}>
//                                     <span className="wizard-steps">2</span>
//                                 </li>
//                                 <li className={`${step >= 3 ? 'activated' : ''} ${step === 3 ? 'active' : ''}`}>
//                                     <span className="wizard-steps">3</span>
//                                 </li>
//                             </ul>

//                         </div>

//                         {/* Step 1: Personal Information */}
//                         {step === 1 && (
//                             <div className="wizard-fieldset show">
//                                 <Form className="app-form">
//                                     <Row>
//                                         <Col md={6}>
//                                             <FormGroup>
//                                                 <Label for="fname">First Name*</Label>
//                                                 <Input
//                                                     type="text"
//                                                     id="fname"
//                                                     placeholder="Martin"
//                                                     value={formData.fname}
//                                                     onChange={handleChange}
//                                                     invalid={!!errors.fname}
//                                                 />
//                                                 {errors.fname && <FormText color="danger">{errors.fname}</FormText>}
//                                             </FormGroup>
//                                         </Col>
//                                         <Col md={6}>
//                                             <FormGroup>
//                                                 <Label for="lname">Last Name*</Label>
//                                                 <Input
//                                                     type="text"
//                                                     id="lname"
//                                                     placeholder="Payne"
//                                                     value={formData.lname}
//                                                     onChange={handleChange}
//                                                     invalid={!!errors.lname}
//                                                 />
//                                                 {errors.lname && <FormText color="danger">{errors.lname}</FormText>}
//                                             </FormGroup>
//                                         </Col>
//                                         <Col xs={12}>
//                                             <FormGroup>
//                                                 <Label for="contactNum">Contact*</Label>
//                                                 <div className="input-group">
//                                                     <span className="input-group-text">+91</span>
//                                                     <Input
//                                                         type="text"
//                                                         id="contactNum"
//                                                         placeholder="**********"
//                                                         value={formData.contactNum}
//                                                         onChange={handleChange}
//                                                         invalid={!!errors.contactNum}
//                                                     />
//                                                 </div>
//                                                 {errors.contactNum && <FormText color="danger">{errors.contactNum}</FormText>}
//                                             </FormGroup>
//                                         </Col>
//                                         <Col className="text-end">
//                                             <Button onClick={handleNext} className="btn-lg" color="primary">Next</Button>
//                                         </Col>
//                                     </Row>
//                                 </Form>
//                             </div>
//                         )}

//                         {/* Step 2: Address Information */}
//                         {step === 2 && (
//                             <div className="wizard-fieldset show">
//                                 <Form className="app-form">
//                                     <Row>
//                                         <Col xs={12}>
//                                             <FormGroup>
//                                                 <Label for="address">Address</Label>
//                                                 <Input
//                                                     type="textarea"
//                                                     id="address"
//                                                     placeholder="2107 Deer Ridge Drive"
//                                                     value={formData.address}
//                                                     onChange={handleChange}
//                                                     invalid={!!errors.address}
//                                                 />
//                                                 {errors.address && <FormText color="danger">{errors.address}</FormText>}
//                                             </FormGroup>
//                                         </Col>
//                                         <Col md={4}>
//                                             <FormGroup>
//                                                 <Label for="city">City</Label>
//                                                 <Input
//                                                     type="text"
//                                                     id="city"
//                                                     placeholder="US"
//                                                     value={formData.city}
//                                                     onChange={handleChange}
//                                                     invalid={!!errors.city}
//                                                 />
//                                                 {errors.city && <FormText color="danger">{errors.city}</FormText>}
//                                             </FormGroup>
//                                         </Col>
//                                         <Col md={4}>
//                                             <FormGroup>
//                                                 <Label for="state">State</Label>
//                                                 <Input
//                                                     type="text"
//                                                     id="state"
//                                                     placeholder="Enter State"
//                                                     value={formData.state}
//                                                     onChange={handleChange}
//                                                     invalid={!!errors.state}
//                                                 />
//                                                 {errors.state && <FormText color="danger">{errors.state}</FormText>}
//                                             </FormGroup>
//                                         </Col>
//                                         <Col md={4}>
//                                             <FormGroup>
//                                                 <Label for="zip">Zip</Label>
//                                                 <Input
//                                                     type="text"
//                                                     id="zip"
//                                                     maxLength="5"
//                                                     placeholder="Enter Zip"
//                                                     value={formData.zip}
//                                                     onChange={handleChange}
//                                                     invalid={!!errors.zip}
//                                                 />
//                                                 {errors.zip && <FormText color="danger">{errors.zip}</FormText>}
//                                             </FormGroup>
//                                         </Col>
//                                         <Col className="text-end">
//                                             <Button onClick={handlePrev} color="primary" className="me-2">Previous</Button>
//                                             <Button onClick={handleNext} color="primary">Next</Button>
//                                         </Col>
//                                     </Row>
//                                 </Form>
//                             </div>
//                         )}

//                         {/* Step 3: Account Information */}
//                         {step === 3 && (
//                             <div className="wizard-fieldset show">
//                                 <Form className="app-form">
//                                     <Row>
//                                         <Col xs={12}>
//                                             <FormGroup>
//                                                 <Label for="email">Email*</Label>
//                                                 <Input
//                                                     type="email"
//                                                     id="email"
//                                                     placeholder="example@domain.com"
//                                                     value={formData.email}
//                                                     onChange={handleChange}
//                                                     invalid={!!errors.email}
//                                                 />
//                                                 {errors.email && <FormText color="danger">{errors.email}</FormText>}
//                                             </FormGroup>
//                                         </Col>
//                                         <Col md={6}>
//                                             <FormGroup>
//                                                 <Label for="password">Password*</Label>
//                                                 <Input
//                                                     type="password"
//                                                     id="password"
//                                                     placeholder="******"
//                                                     value={formData.password}
//                                                     onChange={handleChange}
//                                                     invalid={!!errors.password}
//                                                 />
//                                                 {errors.password && <FormText color="danger">{errors.password}</FormText>}
//                                             </FormGroup>
//                                         </Col>
//                                         <Col md={6}>
//                                             <FormGroup>
//                                                 <Label for="confirmPassword">Confirm Password*</Label>
//                                                 <Input
//                                                     type="password"
//                                                     id="confirmPassword"
//                                                     placeholder="******"
//                                                     value={formData.confirmPassword}
//                                                     onChange={handleChange}
//                                                     invalid={!!errors.confirmPassword}
//                                                 />
//                                                 {errors.confirmPassword && <FormText color="danger">{errors.confirmPassword}</FormText>}
//                                             </FormGroup>
//                                         </Col>
//                                         <Col className="text-end">
//                                             <Button onClick={handlePrev} color="primary" className="me-2">Previous</Button>
//                                             <Button type="submit" color="primary">Submit</Button>
//                                         </Col>
//                                     </Row>
//                                 </Form>
//                             </div>
//                         )}
//                     </div>
//                 </CardBody>
//             </Card>
//         </>
//     );
// };

// export default NumberWizard;

import React, { useState,useEffect } from 'react';
import {
  Card, CardBody, CardHeader, Button,
  Form, FormGroup, Label, Input,
  Row, Col, FormText, Modal, ModalHeader, ModalBody, Table
} from 'reactstrap';
import { addBusApi } from "../../../../Services/api/addBus.api";
import {fetchStopsApi} from "../../../../Services/api/addStop.api";




const NumberWizard = ({ allData, setAllData }) => {
  
  

  const [modalOpen, setModalOpen] = useState(false);

  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});

  const steps = [
    { id: 1, title: 'Bus Details' },
    { id: 2, title: 'Forward Route' },
    { id: 3, title: 'Return Route' }
  ];

  // State & District list
  const states = [
    { name: 'State 1', districts: ['District 1-1', 'District 1-2'] },
    { name: 'State 2', districts: ['District 2-1', 'District 2-2'] }
  ];

  const [districts, setDistricts] = useState([]);
  const [filteredStops, setFilteredStops] = useState([]);
  const [loadingStops, setLoadingStops] = useState(false);  
  

 const [formData, setFormData] = useState({
    deviceId: '',
    name: '',
    busNumber: '',
    type: '',
    totalTrips: 1,
    forwardTrips: 1,
    state: '',
    district: '',

    forwardRoute: {
      from: '',
      to: '',
      stops: [''],
      schedules: []   // ✅ NEW
    },

    returnRoute: {
      from: '',
      to: '',
      stops: [''],
      schedules: []   // ✅ NEW
    }
  });

  const handleNext = async () => {
    if (!validateStep(step)) return;

    if (step === 1) {
      try {
        setLoadingStops(true);

        const allStops = await fetchStopsApi(); // already array

        const filtered = allStops.filter(
          stop =>
            stop.state === formData.state &&
            stop.district === formData.district
        );

        setFilteredStops(filtered);

      } catch (error) {
        console.error("Error fetching stops:", error);
      } finally {
        setLoadingStops(false);
      }
    }

    setStep(step + 1);
  };

  const handlePrev = () => setStep(step - 1);

  const validateStep = (step) => {
    let currentErrors = {};

    if (step === 1) {
      if (!formData.deviceId) currentErrors.deviceId = 'Device ID required';
      if (!formData.name) currentErrors.name = 'Bus name required';
      if (!formData.busNumber) currentErrors.busNumber = 'Bus number required';
      if (!formData.totalTrips || formData.totalTrips < 1)
        currentErrors.totalTrips = 'Total trips must be at least 1';
      if (!formData.state) currentErrors.state = 'State required';
      if (!formData.district) currentErrors.district = 'District required';
    }

    if (step === 2) {
      if (!formData.forwardRoute.from) currentErrors.forwardFrom = 'From required';
      if (!formData.forwardRoute.to) currentErrors.forwardTo = 'To required';
    }

    if (step === 3) {
      if (!formData.returnRoute.from) currentErrors.returnFrom = 'From required';
      if (!formData.returnRoute.to) currentErrors.returnTo = 'To required';
    }

    setErrors(currentErrors);
    return Object.keys(currentErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;

    if (id === 'state') {
      const selectedState = states.find(s => s.name === value);
      setDistricts(selectedState ? selectedState.districts : []);
      setFormData({ ...formData, state: value, district: '' });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const handleRouteChange = (route, field, value) => {
    setFormData({
      ...formData,
      [route]: { ...formData[route], [field]: value }
    });
  };

  const handleStopChange = (route, index, value) => {
    const stops = [...formData[route].stops];
    stops[index] = value;
    setFormData({
      ...formData,
      [route]: { ...formData[route], stops }
    });
  };

  const addStop = (route) => {
    setFormData({
      ...formData,
      [route]: { ...formData[route], stops: [...formData[route].stops, ''] }
    });
  };

  const removeStop = (route, index) => {
    const stops = formData[route].stops.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      [route]: { ...formData[route], stops }
    });
  };
  // ===== Schedule Functions =====

const addSchedule = (route) => {
  const schedules = [...formData[route].schedules];

  schedules.push({
    trip: schedules.length + 1,
    startTime: ""
  });

  setFormData({
    ...formData,
    [route]: { ...formData[route], schedules }
  });
};

const removeSchedule = (route, index) => {
    const schedules = formData[route].schedules.filter((_, i) => i !== index);

    setFormData({
      ...formData,
      [route]: { ...formData[route], schedules }
    });
  };

  const handleScheduleChange = (route, index, value) => {
    const schedules = [...formData[route].schedules];

    schedules[index].startTime = value;

    setFormData({
      ...formData,
      [route]: { ...formData[route], schedules }
    });
  };



const buildAddBusPayload = (data) => {
  return {
    ...data,
    forwardRoute: {
      ...data.forwardRoute,
      stops: data.forwardRoute.stops
        .filter(s => s && s.trim() !== "")
        .map(s => s.trim()),   // ✅ FIX HERE
      schedules: data.forwardRoute.schedules
    },
    returnRoute: {
      ...data.returnRoute,
      stops: data.returnRoute.stops
        .filter(s => s && s.trim() !== "")
        .map(s => s.trim()),   // ✅ FIX HERE
      schedules: data.returnRoute.schedules
    }
  };
};

//   useEffect(() => {
//   const getStops = async () => {
//     try {
//       const response = await fetchStopsApi();
//       console.log("Stops Data:", response);
//     } catch (error) {
//       console.error("Error fetching stops:", error);
//     }
//   };

//   getStops();
// }, []);



  return (
    <>
        <Card>
          <CardHeader>
            <h5>Bus Route Wizard</h5>
          </CardHeader>

          <CardBody>
            <div className="form-wizard">
              {/* Step Numbers */}
              <div className="form-wizard-header">
                <ul className="form-wizard-steps">
                  {steps.map(s => (
                    <li
                      key={s.id}
                      className={`${step >= s.id ? 'activated' : ''} ${step === s.id ? 'active' : ''}`}
                    >
                      <span className="wizard-steps">{s.id}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Topic + Page Number */}
              <div className="text-center mb-4">
                <h4 className="fw-bold">{steps[step - 1].title}</h4>
                <p className="text-muted">Step {step} of {steps.length}</p>
              </div>

              {/* STEP 1: BUS DETAILS */}
              {step === 1 && (
                <Form>
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label>Device ID *</Label>
                        <Input id="deviceId" value={formData.deviceId} onChange={handleChange}
                          invalid={!!errors.deviceId} />
                        <FormText color="danger">{errors.deviceId}</FormText>
                      </FormGroup>
                    </Col>

                    <Col md={6}>
                      <FormGroup>
                        <Label>Bus Name *</Label>
                        <Input id="name" value={formData.name} onChange={handleChange}
                          invalid={!!errors.name} />
                        <FormText color="danger">{errors.name}</FormText>
                      </FormGroup>
                    </Col>

                    <Col md={6}>
                      <FormGroup>
                        <Label>Bus Number *</Label>
                        <Input id="busNumber" value={formData.busNumber} onChange={handleChange}
                          invalid={!!errors.busNumber} />
                        <FormText color="danger">{errors.busNumber}</FormText>
                      </FormGroup>
                    </Col>

                    <Col md={6}>
                      <FormGroup>
                        <Label>Bus Type</Label>
                        <Input id="type" value={formData.type} onChange={handleChange} />
                      </FormGroup>
                    </Col>

                    {/* <Col md={6}>
                      <FormGroup>
                        <Label>Total Trips (per day) *</Label>
                        <Input
                          type="number"
                          min="1"
                          id="totalTrips"
                          value={formData.totalTrips}
                          onChange={handleChange}
                          invalid={!!errors.totalTrips}
                        />
                        {errors.totalTrips && (
                          <FormText color="danger">{errors.totalTrips}</FormText>
                        )}
                      </FormGroup>
                    </Col> */}

                    <Col md={6}>
                      <FormGroup>
                        <Label>State *</Label>
                        <Input type="select" id="state" value={formData.state} onChange={handleChange}
                          invalid={!!errors.state}>
                          <option value="">Select State</option>
                          {states.map(s => (
                            <option key={s.name} value={s.name}>{s.name}</option>
                          ))}
                        </Input>
                        <FormText color="danger">{errors.state}</FormText>
                      </FormGroup>
                    </Col>

                    <Col md={6}>
                      <FormGroup>
                        <Label>District *</Label>
                        <Input type="select" id="district" value={formData.district} onChange={handleChange}
                          invalid={!!errors.district}>
                          <option value="">Select District</option>
                          {districts.map(d => (
                            <option key={d} value={d}>{d}</option>
                          ))}
                        </Input>
                        <FormText color="danger">{errors.district}</FormText>
                      </FormGroup>
                    </Col>

                    <Row className="mt-3">
                      <Col className="text-end">
                        <Button color="primary" onClick={handleNext}>
                          Next
                        </Button>
                      </Col>
                    </Row>
                  </Row>
                </Form>
              )}

              {/* STEP 2: FORWARD ROUTE */}
              {/* {step === 2 && (
                <Form>
                  <h5 className="mb-3 border-bottom pb-2">🚍 Forward Route</h5>
                  <Row>
                    <Col md={6}>
                      <Input placeholder="From" value={formData.forwardRoute.from}
                        onChange={e => handleRouteChange('forwardRoute', 'from', e.target.value)}
                        invalid={!!errors.forwardFrom} />
                    </Col>
                    <Col md={6}>
                      <Input placeholder="To" value={formData.forwardRoute.to}
                        onChange={e => handleRouteChange('forwardRoute', 'to', e.target.value)}
                        invalid={!!errors.forwardTo} />
                    </Col>

                    <Col xs={12} className="mt-3">
                      <Label>Stops</Label>
                      {formData.forwardRoute.stops.map((stop, i) => (
                        <div key={i} className="d-flex mb-2">
                          <Input
                            type="select"
                            value={stop}
                            onChange={e => handleStopChange('forwardRoute', i, e.target.value)}
                          >
                            <option value="">
                              {loadingStops ? "Loading..." : "Select Stop"}
                            </option>

                            {filteredStops.map(s => (
                              <option key={s._id} value={s.stopName}>
                                {s.stopName}
                              </option>
                            ))}
                          </Input>
                          <Button color="danger" onClick={() => removeStop('forwardRoute', i)}>X</Button>
                        </div>
                      ))}
                      <Button color="secondary" onClick={() => addStop('forwardRoute')}>Add Stop</Button>
                    </Col>

                    <Col className="text-end mt-3">
                      <Button className="me-2" onClick={handlePrev}>Previous</Button>
                      <Button onClick={handleNext}>Next</Button>
                    </Col>
                  </Row>
                </Form>
              )} */}
              {step === 2 && (
                <Form>
                  <h5 className="mb-3 border-bottom pb-2">🚍 Forward Route</h5>

                  {/* Row 1 */}
                  <Row>
                    <Col md={6}>
                      <Input
                        placeholder="From"
                        value={formData.forwardRoute.from}
                        onChange={e => handleRouteChange('forwardRoute', 'from', e.target.value)}
                        invalid={!!errors.forwardFrom}
                      />
                    </Col>

                    <Col md={6}>
                      <Input
                        placeholder="To"
                        value={formData.forwardRoute.to}
                        onChange={e => handleRouteChange('forwardRoute', 'to', e.target.value)}
                        invalid={!!errors.forwardTo}
                      />
                    </Col>
                  </Row>

                  {/* Row 2 - Trips */}
                  <Row className="mt-3">
                    <Col md={6}>
                      <FormGroup>
                        <Label>Total Trips (per day) *</Label>
                        <Input
                          type="number"
                          min="1"
                          id="forwardTrips"
                          value={formData.forwardTrips}
                          onChange={handleChange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  {/* Row 3 - Stops */}
                  <Row className="mt-3">
                    <Col xs={12}>
                      <Label>Stops</Label>
                      {formData.forwardRoute.stops.map((stop, i) => (
                        <div key={i} className="d-flex mb-2">
                          <Input
                            type="select"
                            value={stop}
                            onChange={e => handleStopChange('forwardRoute', i, e.target.value)}
                          >
                            <option value="">
                              {loadingStops ? "Loading..." : "Select Stop"}
                            </option>

                            {filteredStops.map(s => (
                              <option key={s._id} value={s.stopName}>
                                {s.stopName}
                              </option>
                            ))}
                          </Input>

                          <Button color="danger" onClick={() => removeStop('forwardRoute', i)}>
                            X
                          </Button>
                        </div>
                      ))}

                      <Button color="secondary" onClick={() => addStop('forwardRoute')}>
                        Add Stop
                      </Button>
                    </Col>
                  </Row>

                  {/* Forward Schedule */}
                  <Row className="mt-3">
                    <Col xs={12}>
                      <Label>Forward Trip Schedule</Label>

                      {formData.forwardRoute.schedules.map((trip, i) => (
                        <div key={i} className="d-flex mb-2">

                          <Input
                            type="time"
                            value={trip.startTime}
                            onChange={(e) =>
                              handleScheduleChange("forwardRoute", i, e.target.value)
                            }
                          />

                          <Button
                            color="danger"
                            onClick={() => removeSchedule("forwardRoute", i)}
                          >
                            X
                          </Button>

                        </div>
                      ))}

                      <Button
                        color="secondary"
                        onClick={() => addSchedule("forwardRoute")}
                      >
                        Add Trip
                      </Button>
                    </Col>
                  </Row>

                  {/* Row 4 - Buttons */}
                  <Row className="mt-3">
                    <Col className="text-end">
                      <Button className="me-2" onClick={handlePrev}>Previous</Button>
                      <Button onClick={handleNext}>Next</Button>
                    </Col>
                  </Row>

                </Form>
              )}

              {/* STEP 3: RETURN ROUTE */}
              {step === 3 && (
                <Form>
                  <h5 className="mb-3 border-bottom pb-2">🔁 Return Route</h5>
                  <Row>
                    <Col md={6}>
                      <Input placeholder="From" value={formData.returnRoute.from}
                        onChange={e => handleRouteChange('returnRoute', 'from', e.target.value)}
                        invalid={!!errors.returnFrom} />
                    </Col>
                    <Col md={6}>
                      <Input placeholder="To" value={formData.returnRoute.to}
                        onChange={e => handleRouteChange('returnRoute', 'to', e.target.value)}
                        invalid={!!errors.returnTo} />
                    </Col>
                    <Col xs={12} className="mt-3">
                      <Label>Stops</Label>
                      {formData.returnRoute.stops.map((stop, i) => (
                        <div key={i} className="d-flex mb-2 ">
                          <Input
                            type="select"
                            value={stop}
                            onChange={e => handleStopChange('returnRoute', i, e.target.value)}
                          >
                            <option value="">
                              {loadingStops ? "Loading..." : "Select Stop"}
                            </option>

                            {filteredStops.map(s => (
                              <option key={s._id} value={s.stopName}>
                                {s.stopName}
                              </option>
                            ))}
                          </Input>
                          <Button color="danger" onClick={() => removeStop('returnRoute', i)}>X</Button>
                        </div>
                      ))}
                      <Button color="secondary" onClick={() => addStop('returnRoute')}>Add Stop</Button>
                    </Col>
                      {/* Forward Schedule */}
                  <Row className="mt-3">
                    <Col xs={12}>
                      <Label>Return Trip Schedule</Label>

                      {formData.returnRoute.schedules.map((trip, i) => (
                        <div key={i} className="d-flex mb-2">

                          <Input
                            type="time"
                            value={trip.startTime}
                            onChange={(e) =>
                              handleScheduleChange("returnRoute", i, e.target.value)
                            }
                          />

                          <Button
                            color="danger"
                            onClick={() => removeSchedule("returnRoute", i)}
                          >
                            X
                          </Button>

                        </div>
                      ))}

                      <Button
                        color="secondary"
                        onClick={() => addSchedule("returnRoute")}
                      >
                        Add Trip
                      </Button>
                    </Col>
                  </Row>

                    <Col className="text-end mt-3">
                      <Button className="me-2" onClick={handlePrev}>Previous</Button>
                      {/* <Button color="success" onClick={() => console.log(formData)}>Submit</Button> */}
                      <Button
                          color="success"
                          onClick={async () => {
                            if (!validateStep(step)) return;

                            try {
                              const payload = buildAddBusPayload(formData);

                              console.log("payload",payload);

                              const res = await addBusApi(payload);

                              setAllData(prev => [res.bus, ...prev]);

                              setFormData({
                                deviceId: '',
                                name: '',
                                busNumber: '',
                                type: '',
                                totalTrips: 1,
                                forwardTrips: 1,
                                state: '',
                                district: '',
                                forwardRoute: { from: '', to: '', stops: [''], schedules: [] },
                                returnRoute: { from: '', to: '', stops: [''], schedules: [] }
                              });

                              setStep(1);
                              setModalOpen(true);

                            } catch (err) {
                              console.error("❌ Failed to save bus:", err);
                              alert(
                                err?.response?.data?.message || "Failed to save bus"
                              );
                            }
                          }}
                        >
                          Submit
                        </Button>
                    </Col>
                  </Row>
                </Form>
              )}

            </div>
          </CardBody>
        </Card>
        
      </>  
  );
};

export default NumberWizard;
