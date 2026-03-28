// // EditBusModal.jsx
// import React from "react";
// import {
//   Modal,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   Button,
//   Form,
//   FormGroup,
//   Label,
//   Input,
//   Row,
//   Col,
// } from "reactstrap";

// export default function EditBusModal({ isOpen, toggle, busData, onChange, onSave }) {
//   if (!busData) return null;

//   return (
//     <Modal isOpen={isOpen} toggle={toggle} size="lg">
//       <ModalHeader toggle={toggle}>Edit Bus</ModalHeader>

//       <ModalBody>
//         <Form>
//           <Row className="g-2">
//             <Col md="6">
//               <FormGroup>
//                 <Label>Bus Name</Label>
//                 <Input
//                   type="text"
//                   value={busData.name}
//                   style={{ fontSize: "0.85rem", height: "32px" }}
//                   onChange={(e) => onChange({ ...busData, name: e.target.value })}
//                 />
//               </FormGroup>
//             </Col>

//             <Col md="6">
//               <FormGroup>
//                 <Label>Bus ID</Label>
//                 <Input
//                   type="text"
//                   value={busData.id}
//                   style={{ fontSize: "0.85rem", height: "32px" }}
//                   onChange={(e) => onChange({ ...busData, id: e.target.value })}
//                 />
//               </FormGroup>
//             </Col>

//             <Col md="6">
//               <FormGroup>
//                 <Label>Bus Type</Label>
//                 <Input
//                   type="select"
//                   value={busData.type}
//                   style={{ fontSize: "0.85rem", height: "32px" }}
//                   onChange={(e) => onChange({ ...busData, type: e.target.value })}
//                 >
//                   <option>AC</option>
//                   <option>NON_AC</option>
//                   <option>BLUE</option>
//                   <option>PINK</option>
//                   <option>RED</option>
//                 </Input>
//               </FormGroup>
//             </Col>

//             <Col md="6">
//               <FormGroup>
//                 <Label>Route Type</Label>
//                 <Input
//                   type="select"
//                   value={busData.isReturning ? "RETURN" : "FORWARD"}
//                   style={{ fontSize: "0.85rem", height: "32px" }}
//                   onChange={(e) =>
//                     onChange({ ...busData, isReturning: e.target.value === "RETURN" })
//                   }
//                 >
//                   <option value="FORWARD">Forward</option>
//                   <option value="RETURN">Return</option>
//                 </Input>
//               </FormGroup>
//             </Col>

//             {/* Optional fields: from/to, totalTrips, completedTrips */}
//             <Col md="6">
//               <FormGroup>
//                 <Label>From</Label>
//                 <Input
//                   type="text"
//                   value={busData.from || ""}
//                   style={{ fontSize: "0.85rem", height: "32px" }}
//                   onChange={(e) => onChange({ ...busData, from: e.target.value })}
//                 />
//               </FormGroup>
//             </Col>

//             <Col md="6">
//               <FormGroup>
//                 <Label>To</Label>
//                 <Input
//                   type="text"
//                   value={busData.to || ""}
//                   style={{ fontSize: "0.85rem", height: "32px" }}
//                   onChange={(e) => onChange({ ...busData, to: e.target.value })}
//                 />
//               </FormGroup>
//             </Col>
//           </Row>
//         </Form>
//       </ModalBody>

//       <ModalFooter>
//         <Button color="primary" size="sm" onClick={onSave}>
//           Save
//         </Button>{" "}
//         <Button color="secondary" size="sm" onClick={toggle}>
//           Cancel
//         </Button>
//       </ModalFooter>
//     </Modal>
//   );
// }

import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  FormText,
} from "reactstrap";

export default function EditBusModal({ isOpen, toggle, bus, onSave }) {

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    deviceId: "",
    name: "",
    busNumber: "",
    state: "",
    district: "",
    type: "",
    totalTrips: 1,

    forwardRoute: { from: "", to: "", stops: [] },
    returnRoute: { from: "", to: "", stops: [] },

    forwardSchedules: [],
    returnSchedules: []
  });

  const [errors, setErrors] = useState({});


  /* ===============================
     LOAD DATA
  =============================== */

  // useEffect(() => {

  //   if (!bus) return;

  //   setFormData({
  //     deviceId: bus.gpsDeviceId || "",
  //     name: bus.busName || "",
  //     busNumber: bus.registrationNumber || "",
  //     state: bus.state || "",
  //     district: bus.district || "",
  //     type: bus.type || "",
  //     totalTrips: bus.trips?.length || 1,

  //     forwardRoute: {
  //       from: bus.route?.forwardStops?.[0]?.stopId || "",
  //       to: bus.route?.forwardStops?.slice(-1)?.[0]?.stopId || "",
  //       stops: bus.route?.forwardStops?.map(s => ({ name: s.stopId })) || []
  //     },

  //     returnRoute: {
  //       from: bus.route?.returnStops?.[0]?.stopId || "",
  //       to: bus.route?.returnStops?.slice(-1)?.[0]?.stopId || "",
  //       stops: bus.route?.returnStops?.map(s => ({ name: s.stopId })) || []
  //     },

  //     forwardSchedules:
  //       bus.trips
  //         ?.filter(t => t.direction === "FORWARD")
  //         .map(t => ({
  //           startTime: new Date(t.startTime).toISOString().slice(11,16)
  //         })) || [],

  //     returnSchedules:
  //       bus.trips
  //         ?.filter(t => t.direction === "RETURN")
  //         .map(t => ({
  //           startTime: new Date(t.startTime).toISOString().slice(11,16)
  //         })) || []
  //   });

  //   setStep(1);
  //   setErrors({});

  // }, [bus]);
  useEffect(() => {

      if (!bus) return;

      const forwardStops = bus.route?.forwardStops || [];
      const returnStops = bus.route?.returnStops || [];

      setFormData({
        _id: bus._id,

        deviceId: bus.gpsDeviceId || "",
        name: bus.busName || "",
        busNumber: bus.registrationNumber || "",
        state: bus.state || "",
        district: bus.district || "",
        type: bus.type || "",
        totalTrips: bus.trips?.length || 1,

        forwardRoute: {
          from: forwardStops[0]?.stopId || "",
          to: forwardStops[forwardStops.length - 1]?.stopId || "",
          stops: forwardStops.slice(1, -1).map(s => ({ name: s.stopId }))
        },

        returnRoute: {
          from: returnStops[0]?.stopId || "",
          to: returnStops[returnStops.length - 1]?.stopId || "",
          stops: returnStops.slice(1, -1).map(s => ({ name: s.stopId }))
        },

        forwardSchedules:
          bus.trips
            ?.filter(t => t.direction === "FORWARD")
            .map(t => ({
              startTime: t.startTime   // ✅ DIRECT STRING
            })) || [],

        returnSchedules:
          bus.trips
            ?.filter(t => t.direction === "RETURN")
            .map(t => ({
              startTime: t.startTime   // ✅ DIRECT STRING
            })) || []

      });

      setStep(1);
      setErrors({});

    }, [bus]);


  /* ===============================
     STEP NAVIGATION
  =============================== */

  const handleNext = () => {
    if (validateStep(step)) setStep(step + 1);
  };

  const handlePrev = () => setStep(step - 1);


  /* ===============================
     VALIDATION
  =============================== */

  const validateStep = (step) => {

    let currentErrors = {};

    if (step === 1) {
      if (!formData.deviceId) currentErrors.deviceId = "Device ID required";
      if (!formData.name) currentErrors.name = "Bus name required";
      if (!formData.busNumber) currentErrors.busNumber = "Bus number required";
    }

    if (step === 2) {
      if (!formData.forwardRoute.from) currentErrors.forwardFrom = "From required";
      if (!formData.forwardRoute.to) currentErrors.forwardTo = "To required";
    }

    if (step === 4) {
      if (!formData.returnRoute.from) currentErrors.returnFrom = "From required";
      if (!formData.returnRoute.to) currentErrors.returnTo = "To required";
    }

    setErrors(currentErrors);
    return Object.keys(currentErrors).length === 0;

  };


  /* ===============================
     BUS HANDLERS
  =============================== */

  const handleChange = (e) => {

    const { id, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };


  /* ===============================
     ROUTE HANDLERS
  =============================== */

  const handleRouteChange = (route, field, value) => {

    setFormData(prev => ({
      ...prev,
      [route]: {
        ...prev[route],
        [field]: value
      }
    }));
  };


  const handleStopChange = (route, index, value) => {

    const stops = [...formData[route].stops];

    stops[index] = { name: value };

    setFormData(prev => ({
      ...prev,
      [route]: { ...prev[route], stops }
    }));
  };


  const addStop = (route) => {

    setFormData(prev => ({
      ...prev,
      [route]: {
        ...prev[route],
        stops: [...prev[route].stops, { name: "" }]
      }
    }));
  };


  const removeStop = (route, index) => {

    const stops = formData[route].stops.filter((_, i) => i !== index);

    setFormData(prev => ({
      ...prev,
      [route]: { ...prev[route], stops }
    }));
  };


  /* ===============================
     TRIP HANDLERS
  =============================== */

  const handleTripChange = (type, index, value) => {

    const trips = [...formData[type]];

    trips[index].startTime = value;

    setFormData(prev => ({
      ...prev,
      [type]: trips
    }));
  };


  const addTrip = (type) => {

    setFormData(prev => ({
      ...prev,
      [type]: [...prev[type], { startTime: "" }]
    }));
  };


  const removeTrip = (type, index) => {

    const trips = formData[type].filter((_, i) => i !== index);

    setFormData(prev => ({
      ...prev,
      [type]: trips
    }));
  };


  /* ===============================
     SAVE
  =============================== */

  // const handleSave = () => {

  //   if (validateStep(step)) {

  //     onSave(formData);
  //     toggle();
  //   }

  // };
  const handleSave = () => {

    if (!validateStep(step)) return;

    const payload = {
      _id: formData._id,
      deviceId: formData.deviceId,
      name: formData.name,
      busNumber: formData.busNumber,
      state: formData.state,
      district: formData.district,
      type: formData.type,

      forwardRoute: {
        from: formData.forwardRoute.from,
        to: formData.forwardRoute.to,
        stops: formData.forwardRoute.stops.map(s => s.name),
        schedules: formData.forwardSchedules
      },

      returnRoute: {
        from: formData.returnRoute.from,
        to: formData.returnRoute.to,
        stops: formData.returnRoute.stops.map(s => s.name),
        schedules: formData.returnSchedules
      }
    };

    onSave(payload);
    toggle();
  };


  return (

    <Modal isOpen={isOpen} toggle={toggle} size="lg">

      <ModalHeader toggle={toggle}>
        Edit Bus: {bus?.busName}
      </ModalHeader>

      <ModalBody>

        {/* STEP INDICATOR */}

        <div className="mb-3 d-flex gap-2">

          {[1,2,3,4,5].map(s => (

            <div
              key={s}
              className={`badge ${step === s ? "bg-primary" : "bg-secondary"}`}
            >
              Step {s}
            </div>

          ))}

        </div>


        {/* STEP 1 BUS */}

        {step === 1 && (

          <Form>

            <Row>

              <Col md={6}>
                <Label>Device ID</Label>
                <Input id="deviceId" value={formData.deviceId} onChange={handleChange}/>
              </Col>

              <Col md={6}>
                <Label>Bus Name</Label>
                <Input id="name" value={formData.name} onChange={handleChange}/>
              </Col>

              <Col md={6}>
                <Label>Bus Number</Label>
                <Input id="busNumber" value={formData.busNumber} onChange={handleChange}/>
              </Col>

              <Col md={6}>
                <Label>Bus Type</Label>
                <Input id="type" value={formData.type} onChange={handleChange}/>
              </Col>

            </Row>

          </Form>

        )}


        {/* STEP 2 FORWARD ROUTE */}

        {step === 2 && (

          <Form>

            <h5>Forward Route</h5>

            <Row>

              <Col md={6}>
                <Input
                  placeholder="From"
                  value={formData.forwardRoute.from}
                  onChange={(e)=>handleRouteChange("forwardRoute","from",e.target.value)}
                />
              </Col>

              <Col md={6}>
                <Input
                  placeholder="To"
                  value={formData.forwardRoute.to}
                  onChange={(e)=>handleRouteChange("forwardRoute","to",e.target.value)}
                />
              </Col>

              <Col xs={12} className="mt-3">

                <Label>Stops</Label>

                {formData.forwardRoute.stops.map((stop,i)=>(
                  <div key={i} className="d-flex mb-2 gap-2">

                    <Input
                      value={stop.name}
                      onChange={(e)=>handleStopChange("forwardRoute",i,e.target.value)}
                    />

                    <Button color="danger" onClick={()=>removeStop("forwardRoute",i)}>
                      X
                    </Button>

                  </div>
                ))}

                <Button color="secondary" onClick={()=>addStop("forwardRoute")}>
                  Add Stop
                </Button>

              </Col>

            </Row>

          </Form>

        )}


        {/* STEP 3 FORWARD TRIPS */}

        {step === 3 && (

          <Form>

            <h5>Forward Trips</h5>

            {formData.forwardSchedules.map((t,i)=>(
              <Row key={i} className="mb-2">

                <Col md={4}>
                  <Input
                    type="time"
                    value={t.startTime}
                    onChange={(e)=>handleTripChange("forwardSchedules",i,e.target.value)}
                  />
                </Col>

                <Col md={2}>
                  <Button color="danger" onClick={()=>removeTrip("forwardSchedules",i)}>
                    Remove
                  </Button>
                </Col>

              </Row>
            ))}

            <Button color="secondary" onClick={()=>addTrip("forwardSchedules")}>
              Add Forward Trip
            </Button>

          </Form>

        )}


        {/* STEP 4 RETURN ROUTE */}

        {step === 4 && (

          <Form>

            <h5>Return Route</h5>

            <Row>

              <Col md={6}>
                <Input
                  placeholder="From"
                  value={formData.returnRoute.from}
                  onChange={(e)=>handleRouteChange("returnRoute","from",e.target.value)}
                />
              </Col>

              <Col md={6}>
                <Input
                  placeholder="To"
                  value={formData.returnRoute.to}
                  onChange={(e)=>handleRouteChange("returnRoute","to",e.target.value)}
                />
              </Col>

              <Col xs={12} className="mt-3">

                <Label>Stops</Label>

                {formData.returnRoute.stops.map((stop,i)=>(
                  <div key={i} className="d-flex mb-2 gap-2">

                    <Input
                      value={stop.name}
                      onChange={(e)=>handleStopChange("returnRoute",i,e.target.value)}
                    />

                    <Button color="danger" onClick={()=>removeStop("returnRoute",i)}>
                      X
                    </Button>

                  </div>
                ))}

                <Button color="secondary" onClick={()=>addStop("returnRoute")}>
                  Add Stop
                </Button>

              </Col>

            </Row>

          </Form>

        )}


        {/* STEP 5 RETURN TRIPS */}

        {step === 5 && (

          <Form>

            <h5>Return Trips</h5>

            {formData.returnSchedules.map((t,i)=>(
              <Row key={i} className="mb-2">

                <Col md={4}>
                  <Input
                    type="time"
                    value={t.startTime}
                    onChange={(e)=>handleTripChange("returnSchedules",i,e.target.value)}
                  />
                </Col>

                <Col md={2}>
                  <Button color="danger" onClick={()=>removeTrip("returnSchedules",i)}>
                    Remove
                  </Button>
                </Col>

              </Row>
            ))}

            <Button color="secondary" onClick={()=>addTrip("returnSchedules")}>
              Add Return Trip
            </Button>

          </Form>

        )}

      </ModalBody>


      <ModalFooter>

        {step > 1 && (
          <Button onClick={handlePrev}>Previous</Button>
        )}

        {step < 5 && (
          <Button color="primary" onClick={handleNext}>Next</Button>
        )}

        {step === 5 && (
          <Button color="success" onClick={handleSave}>Save</Button>
        )}

      </ModalFooter>

    </Modal>
  );

}