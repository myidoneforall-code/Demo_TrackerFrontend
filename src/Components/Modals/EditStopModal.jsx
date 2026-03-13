// // EditStopModal.jsx
// import React from "react";
// import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input } from "reactstrap";

// export default function EditStopModal({ isOpen, toggle, stopData, onChange, onSave }) {
//   if (!stopData) return null;

//   return (
//     <Modal isOpen={isOpen} toggle={toggle} size="lg">
//       <ModalHeader toggle={toggle}>Edit Stop</ModalHeader>
//       <ModalBody>
//         <Form className="row gx-3 gy-2">
//           <FormGroup className="col-md-6">
//             <Label>Stop Name</Label>
//             <Input type="text" value={stopData.stopName} onChange={(e) => onChange({ ...stopData, stopName: e.target.value })} />
//           </FormGroup>
//           <FormGroup className="col-md-6">
//             <Label>Display ID</Label>
//             <Input type="text" value={stopData.displayId} onChange={(e) => onChange({ ...stopData, displayId: e.target.value })} />
//           </FormGroup>
//           <FormGroup className="col-md-6">
//             <Label>Direction</Label>
//             <Input type="text" value={stopData.direction} onChange={(e) => onChange({ ...stopData, direction: e.target.value })} />
//           </FormGroup>
//           <FormGroup className="col-md-6">
//             <Label>Route</Label>
//             <Input type="select" value={stopData.Route} onChange={(e) => onChange({ ...stopData, Route: e.target.value })}>
//               <option>YELLOW</option>
//               <option>BLUE</option>
//             </Input>
//           </FormGroup>
//           <FormGroup className="col-md-6">
//             <Label>District</Label>
//             <Input type="text" value={stopData.district || ""} onChange={(e) => onChange({ ...stopData, district: e.target.value })} />
//           </FormGroup>
//           <FormGroup className="col-md-6">
//             <Label>State</Label>
//             <Input type="text" value={stopData.state || ""} onChange={(e) => onChange({ ...stopData, state: e.target.value })} />
//           </FormGroup>
//         </Form>
//       </ModalBody>
//       <ModalFooter>
//         <Button color="primary" onClick={onSave}>Save</Button>{" "}
//         <Button color="secondary" onClick={toggle}>Cancel</Button>
//       </ModalFooter>
//     </Modal>
//   );
// }


import React, { useState, useEffect } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input, FormText, Row, Col } from "reactstrap";

export default function EditStopModal({ isOpen, toggle, stopData, onSave }) {
  const [stop, setStop] = useState(stopData || {});
  const [errors, setErrors] = useState({});

  const states = [
    { name: 'State 1', districts: ['District 1-1', 'District 1-2'] },
    { name: 'State 2', districts: ['District 2-1', 'District 2-2'] }
  ];

  // useEffect(() => {
  //   setStop(stopData || {});
  //   setErrors({});
  // }, [stopData]);
useEffect(() => {
  if (!stopData) return;

  const normalizedStop = {
    ...stopData,

    // convert GeoJSON → form fields
    lat: stopData.location?.coordinates?.[1] || "",
    lon: stopData.location?.coordinates?.[0] || "",

    // map DB fields
    displayId: stopData.stopId || "",
    direction: stopData.direction || "",
    route: stopData.route || ""
  };

  setStop(normalizedStop);
  setErrors({});
}, [stopData]);

  const handleChange = (field, value) => {
    setStop(prev => ({ ...prev, [field]: value, ...(field === 'state' ? { district: '' } : {}) }));
  };

  const validate = () => {
    const currentErrors = {};
    if (!stop.displayId) currentErrors.displayId = 'Required';
    if (!stop.stopName) currentErrors.stopName = 'Required';
    if (!stop.direction) currentErrors.direction = 'Required';
    if (!stop.route) currentErrors.route = 'Required';
    if (!stop.lat) currentErrors.lat = 'Required';
    if (!stop.lon) currentErrors.lon = 'Required';
    if (!stop.state) currentErrors.state = 'Required';
    if (!stop.district) currentErrors.district = 'Required';
    setErrors(currentErrors);
    return Object.keys(currentErrors).length === 0;
  };

  // const handleSave = () => {
  //   if (!validate()) return;
  //   onSave(stop);
  //   toggle();
  // };
  const handleSave = () => {
    if (!validate()) return;

    const payload = {
      ...stop,
      location: {
        type: "Point",
        coordinates: [
          parseFloat(stop.lon),
          parseFloat(stop.lat)
        ]
      }
    };

    onSave(payload);
    toggle();
  };

  if (!stop) return null;

  return (
    <Modal isOpen={isOpen} toggle={toggle} size="lg">
      <ModalHeader toggle={toggle}>Edit Stop</ModalHeader>
      <ModalBody>
        <Form>
          <Row className="mb-2">
            <Col md={6}>
              <FormGroup>
                <Label>Stop Name *</Label>
                <Input value={stop.stopName || ""} onChange={(e) => handleChange("stopName", e.target.value)} invalid={!!errors.stopName} />
                <FormText color="danger">{errors.stopName}</FormText>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>Display ID *</Label>
                <Input value={stop.displayId || ""} onChange={(e) => handleChange("displayId", e.target.value)} invalid={!!errors.displayId} />
                <FormText color="danger">{errors.displayId}</FormText>
              </FormGroup>
            </Col>
          </Row>

          <Row className="mb-2">
            <Col md={6}>
              <FormGroup>
                <Label>Direction *</Label>
                <Input value={stop.direction || ""} onChange={(e) => handleChange("direction", e.target.value)} invalid={!!errors.direction} />
                <FormText color="danger">{errors.direction}</FormText>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>Route *</Label>
                <Input type="select" value={stop.route || ""} onChange={(e) => handleChange("route", e.target.value)} invalid={!!errors.route}>
                  <option value="">Select Route</option>
                  <option value="YELLOW">YELLOW</option>
                  <option value="BLUE">BLUE</option>
                </Input>
                <FormText color="danger">{errors.route}</FormText>
              </FormGroup>
            </Col>
          </Row>

          <Row className="mb-2">
            <Col md={6}>
              <FormGroup>
                <Label>Latitude *</Label>
                <Input type="number" value={stop.lat || ""} onChange={(e) => handleChange("lat", e.target.value)} invalid={!!errors.lat} />
                <FormText color="danger">{errors.lat}</FormText>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>Longitude *</Label>
                <Input type="number" value={stop.lon || ""} onChange={(e) => handleChange("lon", e.target.value)} invalid={!!errors.lon} />
                <FormText color="danger">{errors.lon}</FormText>
              </FormGroup>
            </Col>
          </Row>

          <Row className="mb-2">
            <Col md={6}>
              <FormGroup>
                <Label>State *</Label>
                <Input type="select" value={stop.state || ""} onChange={(e) => handleChange("state", e.target.value)} invalid={!!errors.state}>
                  <option value="">Select State</option>
                  {states.map(s => <option key={s.name} value={s.name}>{s.name}</option>)}
                </Input>
                <FormText color="danger">{errors.state}</FormText>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>District *</Label>
                <Input type="select" value={stop.district || ""} onChange={(e) => handleChange("district", e.target.value)} invalid={!!errors.district}>
                  <option value="">Select District</option>
                  {states.find(s => s.name === stop.state)?.districts.map(d => <option key={d} value={d}>{d}</option>)}
                </Input>
                <FormText color="danger">{errors.district}</FormText>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSave}>Save</Button>{" "}
        <Button color="secondary" onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
}
