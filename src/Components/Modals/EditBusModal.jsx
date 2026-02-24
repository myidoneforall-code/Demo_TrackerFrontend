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



// EditBusModal.jsx
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
  const [formData, setFormData] = useState(bus);
  const [errors, setErrors] = useState({});

  // When the modal opens, initialize form data
  useEffect(() => {
    setFormData(bus);
    setStep(1);
    setErrors({});
    console.log("aaaaaaaaaaaa",bus);
  }, [bus]);

  // --- Step Navigation ---
  const handleNext = () => {
    if (validateStep(step)) setStep(step + 1);
  };
  const handlePrev = () => setStep(step - 1);

  // --- Validation ---
  const validateStep = (step) => {
    let currentErrors = {};

    if (step === 1) {
      if (!formData.deviceId) currentErrors.deviceId = "Device ID required";
      if (!formData.name) currentErrors.name = "Bus name required";
      if (!formData.busNumber) currentErrors.busNumber = "Bus number required";
      if (!formData.totalTrips || formData.totalTrips < 1)
        currentErrors.totalTrips = "Total trips must be at least 1";
    }

    if (step === 2) {
      if (!formData.forwardRoute.from) currentErrors.forwardFrom = "From required";
      if (!formData.forwardRoute.to) currentErrors.forwardTo = "To required";
    }

    if (step === 3) {
      if (!formData.returnRoute.from) currentErrors.returnFrom = "From required";
      if (!formData.returnRoute.to) currentErrors.returnTo = "To required";
    }

    setErrors(currentErrors);
    return Object.keys(currentErrors).length === 0;
  };

  // --- Handlers ---
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleRouteChange = (route, field, value) => {
    setFormData({
      ...formData,
      [route]: { ...formData[route], [field]: value },
    });
  };

  // const handleStopChange = (route, index, value) => {
  //   const stops = [...formData[route].stops];
  //   stops[index] = value;
  //   setFormData({ ...formData, [route]: { ...formData[route], stops } });
  // };
    const handleStopChange = (route, index, value) => {
    const stops = [...formData[route].stops];
    stops[index] = { ...stops[index], name: value };
    setFormData({ 
      ...formData, 
      [route]: { ...formData[route], stops } 
    });
  };


  const addStop = (route) => {
    setFormData({
      ...formData,
      [route]: { ...formData[route], stops: [...formData[route].stops, { name: "" }]
 },
    });
  };

  const removeStop = (route, index) => {
    const stops = formData[route].stops.filter((_, i) => i !== index);
    setFormData({ ...formData, [route]: { ...formData[route], stops } });
  };
  

  // --- Save ---
  const handleSave = () => {
    if (validateStep(step)) {
      onSave(formData);
      toggle(); // close modal
    }
  };
  const handleUpdateBus = async (updatedBus) => {
   await updateBusApi(updatedBus._id, updatedBus);
   fetchBuses();
};


  return (
    <Modal isOpen={isOpen} toggle={toggle} size="lg">
      <ModalHeader toggle={toggle}>Edit Bus: {bus.name}</ModalHeader>
      <ModalBody>
        {/* Step Indicator */}
        <div className="mb-3 d-flex gap-2">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`badge ${step === s ? "bg-primary" : "bg-secondary"}`}
            >
              Step {s}
            </div>
          ))}
        </div>

        {/* Step 1: Bus Details */}
        {step === 1 && (
          <Form>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label>Device ID *</Label>
                  <Input
                    id="deviceId"
                    value={formData.deviceId}
                    onChange={handleChange}
                    invalid={!!errors.deviceId}
                  />
                  <FormText color="danger">{errors.deviceId}</FormText>
                </FormGroup>
              </Col>

              <Col md={6}>
                <FormGroup>
                  <Label>Bus Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    invalid={!!errors.name}
                  />
                  <FormText color="danger">{errors.name}</FormText>
                </FormGroup>
              </Col>

              <Col md={6}>
                <FormGroup>
                  <Label>Bus Number *</Label>
                  <Input
                    id="busNumber"
                    value={formData.busNumber}
                    onChange={handleChange}
                    invalid={!!errors.busNumber}
                  />
                  <FormText color="danger">{errors.busNumber}</FormText>
                </FormGroup>
              </Col>

              <Col md={6}>
                <FormGroup>
                  <Label>Bus Type</Label>
                  <Input id="type" value={formData.type} onChange={handleChange} />
                </FormGroup>
              </Col>

              <Col md={6}>
                <FormGroup>
                  <Label>Total Trips *</Label>
                  <Input
                    type="number"
                    min="1"
                    id="totalTrips"
                    value={formData.totalTrips}
                    onChange={handleChange}
                    invalid={!!errors.totalTrips}
                  />
                  <FormText color="danger">{errors.totalTrips}</FormText>
                </FormGroup>
              </Col>
            </Row>
          </Form>
        )}

        {/* Step 2: Forward Route */}
        {step === 2 && (
          <Form>
            <h5>Forward Route</h5>
            <Row>
              <Col md={6}>
                <Input
                  placeholder="From"
                  value={formData.forwardRoute.from}
                  onChange={(e) =>
                    handleRouteChange("forwardRoute", "from", e.target.value)
                  }
                  invalid={!!errors.forwardFrom}
                />
              </Col>
              <Col md={6}>
                <Input
                  placeholder="To"
                  value={formData.forwardRoute.to}
                  onChange={(e) =>
                    handleRouteChange("forwardRoute", "to", e.target.value)
                  }
                  invalid={!!errors.forwardTo}
                />
              </Col>

              <Col xs={12} className="mt-3">
                <Label>Stops</Label>
                {/* {formData.forwardRoute.stops.map((stop, i) => (
                  <div key={i} className="d-flex mb-2 gap-2">
                    <Input
                      value={stop.name}
                      onChange={(e) => handleStopChange("forwardRoute", i, e.target.value)}
                    />
                    <Button color="danger" onClick={() => removeStop("forwardRoute", i)}>
                      X
                    </Button>
                  </div>
                ))} */}
                {formData.forwardRoute.stops.map((stop, i) => (
                  <div key={i} className="d-flex mb-2 gap-2">
                    <Input
                      value={stop.name}
                      onChange={(e) =>
                        handleStopChange("forwardRoute", i, e.target.value)
                      }
                    />
                    <Button
                      color="danger"
                      onClick={() => removeStop("forwardRoute", i)}
                    >
                      X
                    </Button>
                  </div>
                ))}

                <Button color="secondary" onClick={() => addStop("forwardRoute")}>
                  Add Stop
                </Button>
              </Col>
            </Row>
          </Form>
        )}

        {/* Step 3: Return Route */}
        {step === 3 && (
          <Form>
            <h5>Return Route</h5>
            <Row>
              <Col md={6}>
                <Input
                  placeholder="From"
                  value={formData.returnRoute.from}
                  onChange={(e) =>
                    handleRouteChange("returnRoute", "from", e.target.value)
                  }
                  invalid={!!errors.returnFrom}
                />
              </Col>
              <Col md={6}>
                <Input
                  placeholder="To"
                  value={formData.returnRoute.to}
                  onChange={(e) =>
                    handleRouteChange("returnRoute", "to", e.target.value)
                  }
                  invalid={!!errors.returnTo}
                />
              </Col>

              <Col xs={12} className="mt-3">
                <Label>Stops</Label>
                {formData.returnRoute.stops.map((stop, i) => (
                  <div key={i} className="d-flex mb-2 gap-2">
                    <Input
                      value={stop.name}
                      onChange={(e) => handleStopChange("returnRoute", i, e.target.value)}
                    />
                    <Button color="danger" onClick={() => removeStop("returnRoute", i)}>
                      X
                    </Button>
                  </div>
                ))}
                <Button color="secondary" onClick={() => addStop("returnRoute")}>
                  Add Stop
                </Button>
              </Col>
            </Row>
          </Form>
        )}
      </ModalBody>

      <ModalFooter>
        {step > 1 && <Button onClick={handlePrev}>Previous</Button>}
        {step < 3 && <Button color="primary" onClick={handleNext}>Next</Button>}
        {step === 3 && <Button color="success" onClick={handleSave}>Save</Button>}
      </ModalFooter>
    </Modal>
  );
}
