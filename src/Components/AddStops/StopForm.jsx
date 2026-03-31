// import React, { useState } from 'react';
// import {
//   Card, CardBody, CardHeader, Button,
//   Form, FormGroup, Label, Input,
//   Row, Col, FormText
// } from 'reactstrap';

// const StopFormWizard = ({ allStops, setAllStops }) => {

//   const [step, setStep] = useState(1);
//   const [errors, setErrors] = useState({});

//   const steps = [
//     { id: 1, title: 'Stop Details' }
//   ];

//   const states = [
//     { name: 'State 1', districts: ['District 1-1', 'District 1-2'] },
//     { name: 'State 2', districts: ['District 2-1', 'District 2-2'] }
//   ];

//   const [formData, setFormData] = useState([{
//     displayId: '',
//     stopName: '',
//     direction: '',
//     Route: '',
//     lat: '',
//     lon: '',
//     district: '',
//     state: ''
//   }]);

//   // Validation
//   const validateStep = () => {
//     let currentErrors = {};
//     formData.forEach((stop, idx) => {
//       if (!stop.displayId) currentErrors[`displayId_${idx}`] = 'Required';
//       if (!stop.stopName) currentErrors[`stopName_${idx}`] = 'Required';
//       if (!stop.direction) currentErrors[`direction_${idx}`] = 'Required';
//       if (!stop.Route) currentErrors[`Route_${idx}`] = 'Required';
//       if (!stop.lat) currentErrors[`lat_${idx}`] = 'Required';
//       if (!stop.lon) currentErrors[`lon_${idx}`] = 'Required';
//       if (!stop.state) currentErrors[`state_${idx}`] = 'Required';
//       if (!stop.district) currentErrors[`district_${idx}`] = 'Required';
//     });
//     setErrors(currentErrors);
//     return Object.keys(currentErrors).length === 0;
//   };

//   // Handle input change
//   const handleChange = (index, field, value) => {
//     const updatedStops = [...formData];
//     updatedStops[index][field] = value;

//     // Update districts if state changes
//     if (field === 'state') {
//       updatedStops[index].district = '';
//     }

//     setFormData(updatedStops);
//   };

//   // Add/Remove stops
//   const addStop = () => {
//     setFormData([...formData, {
//       displayId: '',
//       stopName: '',
//       direction: '',
//       Route: '',
//       lat: '',
//       lon: '',
//       district: '',
//       state: ''
//     }]);
//   };

//   const removeStop = (index) => {
//     setFormData(formData.filter((_, i) => i !== index));
//   };

//   const handleSubmit = () => {
//     if (validateStep()) {
//       setAllStops(prev => [...prev, ...formData]);
//       setFormData([{
//         displayId: '',
//         stopName: '',
//         direction: '',
//         Route: '',
//         lat: '',
//         lon: '',
//         district: '',
//         state: ''
//       }]);
//       alert('Stops saved! Check console.');
//       console.log('Submitted Stops 👉', formData);
//     }
//   };

//   return (
//     <div style={{ maxWidth: '700px', margin: '20px auto' }}>
//       <Card>
//         <CardHeader>
//           <h5>🚌 Add Bus Stops Wizard</h5>
//         </CardHeader>
//         <CardBody>

//           <div className="form-wizard">
//             <h4 className="text-center fw-bold mb-3">{steps[step - 1].title}</h4>

//             {/* STEP 1: STOP DETAILS */}
//             {step === 1 && (
//               <Form>
//                 {formData.map((stop, index) => (
//                   <Card key={index} className="mb-3 p-3 border">
//                     <Row className="mb-2">
//                       <Col md={6}>
//                         <FormGroup>
//                           <Label>Display ID *</Label>
//                           <Input
//                             value={stop.displayId}
//                             onChange={e => handleChange(index, 'displayId', e.target.value)}
//                             invalid={!!errors[`displayId_${index}`]}
//                           />
//                           <FormText color="danger">{errors[`displayId_${index}`]}</FormText>
//                         </FormGroup>
//                       </Col>

//                       <Col md={6}>
//                         <FormGroup>
//                           <Label>Stop Name *</Label>
//                           <Input
//                             value={stop.stopName}
//                             onChange={e => handleChange(index, 'stopName', e.target.value)}
//                             invalid={!!errors[`stopName_${index}`]}
//                           />
//                           <FormText color="danger">{errors[`stopName_${index}`]}</FormText>
//                         </FormGroup>
//                       </Col>
//                     </Row>

//                     <Row className="mb-2">
//                       <Col md={6}>
//                         <FormGroup>
//                           <Label>Direction *</Label>
//                           <Input
//                             value={stop.direction}
//                             onChange={e => handleChange(index, 'direction', e.target.value)}
//                             invalid={!!errors[`direction_${index}`]}
//                           />
//                           <FormText color="danger">{errors[`direction_${index}`]}</FormText>
//                         </FormGroup>
//                       </Col>

//                       <Col md={6}>
//                         <FormGroup>
//                           <Label>Route *</Label>
//                           <Input
//                             type="select"
//                             value={stop.Route}
//                             onChange={e => handleChange(index, 'Route', e.target.value)}
//                             invalid={!!errors[`Route_${index}`]}
//                           >
//                             <option value="">Select Route</option>
//                             <option value="YELLOW">YELLOW</option>
//                             <option value="BLUE">BLUE</option>
//                           </Input>
//                           <FormText color="danger">{errors[`Route_${index}`]}</FormText>
//                         </FormGroup>
//                       </Col>
//                     </Row>

//                     <Row className="mb-2">
//                       <Col md={6}>
//                         <FormGroup>
//                           <Label>Latitude *</Label>
//                           <Input
//                             type="number"
//                             value={stop.lat}
//                             onChange={e => handleChange(index, 'lat', e.target.value)}
//                             invalid={!!errors[`lat_${index}`]}
//                           />
//                           <FormText color="danger">{errors[`lat_${index}`]}</FormText>
//                         </FormGroup>
//                       </Col>

//                       <Col md={6}>
//                         <FormGroup>
//                           <Label>Longitude *</Label>
//                           <Input
//                             type="number"
//                             value={stop.lon}
//                             onChange={e => handleChange(index, 'lon', e.target.value)}
//                             invalid={!!errors[`lon_${index}`]}
//                           />
//                           <FormText color="danger">{errors[`lon_${index}`]}</FormText>
//                         </FormGroup>
//                       </Col>
//                     </Row>

//                     <Row className="mb-2">
//                       <Col md={6}>
//                         <FormGroup>
//                           <Label>State *</Label>
//                           <Input
//                             type="select"
//                             value={stop.state}
//                             onChange={e => handleChange(index, 'state', e.target.value)}
//                             invalid={!!errors[`state_${index}`]}
//                           >
//                             <option value="">Select State</option>
//                             {states.map(s => (
//                               <option key={s.name} value={s.name}>{s.name}</option>
//                             ))}
//                           </Input>
//                           <FormText color="danger">{errors[`state_${index}`]}</FormText>
//                         </FormGroup>
//                       </Col>

//                       <Col md={6}>
//                         <FormGroup>
//                           <Label>District *</Label>
//                           <Input
//                             type="select"
//                             value={stop.district}
//                             onChange={e => handleChange(index, 'district', e.target.value)}
//                             invalid={!!errors[`district_${index}`]}
//                           >
//                             <option value="">Select District</option>
//                             {states.find(s => s.name === stop.state)?.districts.map(d => (
//                               <option key={d} value={d}>{d}</option>
//                             ))}
//                           </Input>
//                           <FormText color="danger">{errors[`district_${index}`]}</FormText>
//                         </FormGroup>
//                       </Col>
//                     </Row>

//                     <div className="text-end mt-2">
//                       {formData.length > 1 && (
//                         <Button color="danger" size="sm" onClick={() => removeStop(index)}>Remove</Button>
//                       )}
//                     </div>
//                   </Card>
//                 ))}

//                 <Button color="secondary" className="me-2" onClick={addStop}>+ Add Stop</Button>
//                 <Button color="success" onClick={handleSubmit}>Submit Stops</Button>
//               </Form>
//             )}

//           </div>
//         </CardBody>
//       </Card>
//     </div>
//   );
// };

// export default StopFormWizard;


// import React, { useState, useMemo } from 'react';
// import {
//   Card, CardBody, CardHeader, Button,
//   Form, FormGroup, Label, Input,
//   Row, Col, FormText
// } from 'reactstrap';

// export default function StopFormWizard() {
//   const [formData, setFormData] = useState([{
//     displayId: '',
//     stopName: '',
//     direction: '',
//     route: '',
//     lat: '',
//     lon: '',
//     district: '',
//     state: ''
//   }]);
//   const [allStops, setAllStops] = useState([]);
//   const [errors, setErrors] = useState({});
//   const [stateFilter, setStateFilter] = useState('');
//   const [districtFilter, setDistrictFilter] = useState('');
//   const [editingIndex, setEditingIndex] = useState(null);

//   const states = [
//     { name: 'State 1', districts: ['District 1-1', 'District 1-2'] },
//     { name: 'State 2', districts: ['District 2-1', 'District 2-2'] }
//   ];

//   // ---- Form Logic ----
//   const validateStep = () => {
//     let currentErrors = {};
//     formData.forEach((stop, idx) => {
//       if (!stop.displayId) currentErrors[`displayId_${idx}`] = 'Required';
//       if (!stop.stopName) currentErrors[`stopName_${idx}`] = 'Required';
//       if (!stop.direction) currentErrors[`direction_${idx}`] = 'Required';
//       if (!stop.route) currentErrors[`route_${idx}`] = 'Required';
//       if (!stop.lat) currentErrors[`lat_${idx}`] = 'Required';
//       if (!stop.lon) currentErrors[`lon_${idx}`] = 'Required';
//       if (!stop.state) currentErrors[`state_${idx}`] = 'Required';
//       if (!stop.district) currentErrors[`district_${idx}`] = 'Required';
//     });
//     setErrors(currentErrors);
//     return Object.keys(currentErrors).length === 0;
//   };

//   const handleChange = (index, field, value) => {
//     const updatedStops = [...formData];
//     updatedStops[index][field] = value;
//     if (field === 'state') updatedStops[index].district = '';
//     setFormData(updatedStops);
//   };

//   const addStop = () => {
//     setFormData([...formData, {
//       displayId: '',
//       stopName: '',
//       direction: '',
//       route: '',
//       lat: '',
//       lon: '',
//       district: '',
//       state: ''
//     }]);
//     setEditingIndex(null);
//   };

//   const removeStop = (index) => setFormData(formData.filter((_, i) => i !== index));

//   const handleSubmit = () => {
//     if (!validateStep()) return;

//     if (editingIndex !== null) {
//       // Update existing stop
//       const updatedStops = [...allStops];
//       updatedStops[editingIndex] = formData[0]; // single stop edit
//       setAllStops(updatedStops);
//       setEditingIndex(null);
//     } else {
//       setAllStops(prev => [...prev, ...formData]);
//     }

//     setFormData([{
//       displayId: '',
//       stopName: '',
//       direction: '',
//       route: '',
//       lat: '',
//       lon: '',
//       district: '',
//       state: ''
//     }]);
//   };

//   // ---- Table Logic ----
//   const columns = allStops[0] ? Object.keys(allStops[0]) : [];

//   const districts = useMemo(() => {
//     if (!stateFilter) return [...new Set(allStops.map((s) => s.district))];
//     return [...new Set(allStops.filter((s) => s.state === stateFilter).map(s => s.district))];
//   }, [allStops, stateFilter]);

//   const filteredStops = useMemo(() => {
//     return allStops
//       .map((stop, idx) => ({ id: idx, ...stop })) // id is index
//       .filter(stop =>
//         (!stateFilter || stop.state === stateFilter) &&
//         (!districtFilter || stop.district === districtFilter)
//       );
//   }, [allStops, stateFilter, districtFilter]);

//   const selectStyle = { borderRadius: "8px", padding: "6px 10px", border: "1px solid #ccc", outline: "none" };
//   const tableStyle = { width: "100%", borderCollapse: "separate", borderSpacing: 0, border: "1px solid #ddd", borderRadius: "10px", overflow: "hidden" };
//   const thTdStyle = { padding: "10px", textAlign: "left", whiteSpace: "nowrap" };
//   const buttonStyle = { borderRadius: "6px", padding: "4px 10px", border: "none", cursor: "pointer" };

//   // ---- Edit/Delete handlers ----
//   const handleEdit = (idx) => {
//     setFormData([allStops[idx]]);
//     setEditingIndex(idx);
//     window.scrollTo({ top: 0, behavior: 'smooth' }); // scroll to form
//   };

//   const handleDelete = (idx) => {
//     setAllStops(allStops.filter((_, i) => i !== idx));
//     if (editingIndex === idx) {
//       setFormData([{
//         displayId: '',
//         stopName: '',
//         direction: '',
//         route: '',
//         lat: '',
//         lon: '',
//         district: '',
//         state: ''
//       }]);
//       setEditingIndex(null);
//     }
//   };

//   return (
//     <>
//       {/* Form */}
//       <div style={{ maxWidth: '600px', margin: '20px auto' }}>
//         <Card className="mb-4">
//           <CardHeader><h5>🚌 Add Bus Stops Wizard</h5></CardHeader>
//           <CardBody>
//             <h4 className="text-center fw-bold mb-3">{editingIndex !== null ? 'Edit Stop' : 'Stop Details'}</h4>
//             <Form>
//               {formData.map((stop, index) => (
//                 <Card key={index} className="mb-3 p-3 border">
//                   <Row className="mb-2">
//                     <Col md={6}>
//                       <FormGroup>
//                         <Label>Display ID *</Label>
//                         <Input value={stop.displayId} onChange={e => handleChange(index, 'displayId', e.target.value)} invalid={!!errors[`displayId_${index}`]} />
//                         <FormText color="danger">{errors[`displayId_${index}`]}</FormText>
//                       </FormGroup>
//                     </Col>
//                     <Col md={6}>
//                       <FormGroup>
//                         <Label>Stop Name *</Label>
//                         <Input value={stop.stopName} onChange={e => handleChange(index, 'stopName', e.target.value)} invalid={!!errors[`stopName_${index}`]} />
//                         <FormText color="danger">{errors[`stopName_${index}`]}</FormText>
//                       </FormGroup>
//                     </Col>
//                   </Row>
//                   <Row className="mb-2">
//                     <Col md={6}>
//                       <FormGroup>
//                         <Label>Direction *</Label>
//                         <Input value={stop.direction} onChange={e => handleChange(index, 'direction', e.target.value)} invalid={!!errors[`direction_${index}`]} />
//                         <FormText color="danger">{errors[`direction_${index}`]}</FormText>
//                       </FormGroup>
//                     </Col>
//                     <Col md={6}>
//                       <FormGroup>
//                         <Label>Route *</Label>
//                         <Input type="select" value={stop.route} onChange={e => handleChange(index, 'route', e.target.value)} invalid={!!errors[`route_${index}`]}>
//                           <option value="">Select Route</option>
//                           <option value="YELLOW">YELLOW</option>
//                           <option value="BLUE">BLUE</option>
//                         </Input>
//                         <FormText color="danger">{errors[`route_${index}`]}</FormText>
//                       </FormGroup>
//                     </Col>
//                   </Row>
//                   <Row className="mb-2">
//                     <Col md={6}>
//                       <FormGroup>
//                         <Label>Latitude *</Label>
//                         <Input type="number" value={stop.lat} onChange={e => handleChange(index, 'lat', e.target.value)} invalid={!!errors[`lat_${index}`]} />
//                         <FormText color="danger">{errors[`lat_${index}`]}</FormText>
//                       </FormGroup>
//                     </Col>
//                     <Col md={6}>
//                       <FormGroup>
//                         <Label>Longitude *</Label>
//                         <Input type="number" value={stop.lon} onChange={e => handleChange(index, 'lon', e.target.value)} invalid={!!errors[`lon_${index}`]} />
//                         <FormText color="danger">{errors[`lon_${index}`]}</FormText>
//                       </FormGroup>
//                     </Col>
//                   </Row>
//                   <Row className="mb-2">
//                     <Col md={6}>
//                       <FormGroup>
//                         <Label>State *</Label>
//                         <Input type="select" value={stop.state} onChange={e => handleChange(index, 'state', e.target.value)} invalid={!!errors[`state_${index}`]}>
//                           <option value="">Select State</option>
//                           {states.map(s => <option key={s.name} value={s.name}>{s.name}</option>)}
//                         </Input>
//                         <FormText color="danger">{errors[`state_${index}`]}</FormText>
//                       </FormGroup>
//                     </Col>
//                     <Col md={6}>
//                       <FormGroup>
//                         <Label>District *</Label>
//                         <Input type="select" value={stop.district} onChange={e => handleChange(index, 'district', e.target.value)} invalid={!!errors[`district_${index}`]}>
//                           <option value="">Select District</option>
//                           {states.find(s => s.name === stop.state)?.districts.map(d => <option key={d} value={d}>{d}</option>)}
//                         </Input>
//                         <FormText color="danger">{errors[`district_${index}`]}</FormText>
//                       </FormGroup>
//                     </Col>
//                   </Row>
//                   <div className="text-end mt-2">
//                     {formData.length > 1 && <Button color="danger" size="sm" onClick={() => removeStop(index)}>Remove</Button>}
//                   </div>
//                 </Card>
//               ))}
//               <div className="d-flex justify-content-end mt-3 gap-2">
//                 <Button color="secondary" onClick={addStop}>+ Add Stop</Button>
//                 <Button color="success" onClick={handleSubmit}>
//                     {editingIndex !== null ? 'Update Stop' : 'Submit Stops'}
//                 </Button>
//                 </div>
//             </Form>
//           </CardBody>
//         </Card>
//       </div>

//       {/* Filterable Table */}
//       <div style={{ maxWidth: '1000px', margin: '20px auto' }}>
//         {allStops.length > 0 && (
//           <Card>
//             <CardHeader>
//               <div className="d-flex justify-content-between align-items-center">
//                 <h5>📋 Submitted Stops</h5>
//                 <div className="d-flex gap-2">
//                   <select style={selectStyle} value={stateFilter} onChange={e => { setStateFilter(e.target.value); setDistrictFilter(''); }}>
//                     <option value="">All States</option>
//                     {[...new Set(allStops.map(s => s.state))].map(s => <option key={s} value={s}>{s}</option>)}
//                   </select>
//                   <select style={selectStyle} value={districtFilter} onChange={e => setDistrictFilter(e.target.value)} disabled={!stateFilter}>
//                     <option value="">All Districts</option>
//                     {districts.map(d => <option key={d} value={d}>{d}</option>)}
//                   </select>
//                 </div>
//               </div>
//             </CardHeader>
//             <CardBody style={{ overflowX: 'auto', minHeight: '400px' }}>
//               <table style={tableStyle}>
//                 <thead style={{ background: '#f5f5f5' }}>
//                   <tr>
//                     {columns.map((col, i) => (
//                       <th key={col} style={{ ...thTdStyle, textTransform: 'capitalize', borderBottom: '1px solid #ddd', ...(i === 0 ? { borderTopLeftRadius: '10px' } : {}), ...(i === columns.length - 1 ? { borderTopRightRadius: '10px' } : {}) }}>
//                         {col.replace(/_/g, ' ')}
//                       </th>
//                     ))}
//                     <th style={{ ...thTdStyle, borderBottom: '1px solid #ddd', borderTopRightRadius: '10px' }}>Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredStops.length > 0 ? filteredStops.map((stop, idx) => (
//                     <tr key={stop.id}>
//                       {columns.map(col => <td key={col} style={{ ...thTdStyle, borderBottom: idx === filteredStops.length - 1 ? 'none' : '1px solid #ddd' }}>{stop[col]}</td>)}
//                       <td style={{ ...thTdStyle, borderBottom: idx === filteredStops.length - 1 ? 'none' : '1px solid #ddd' }}>
//                         <button style={{ ...buttonStyle, background: '#4CAF50', color: '#fff', marginRight: 5 }} onClick={() => handleEdit(stop.id)}>Edit</button>
//                         <button style={{ ...buttonStyle, background: '#f44336', color: '#fff' }} onClick={() => handleDelete(stop.id)}>Delete</button>
//                       </td>
//                     </tr>
//                   )) : (
//                     <tr>
//                       <td colSpan={columns.length + 1} style={{ textAlign: 'center', padding: 20 }}>No records found for selected state/district.</td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </CardBody>
//           </Card>
//         )}
//       </div>
//     </>
//   );
// }


// StopFormWizard.jsx
import React, { useState, useMemo } from 'react';
import {
  Card, CardBody, CardHeader, Button,
  Form, FormGroup, Label, Input,
  Row, Col, FormText
} from 'reactstrap';
// import EditStopModal from "../Modals/EditStopModal";
import{addStopApi,fetchStopsApi} from "../../Services/api/addStop.api";
import QRScanner from '../../utils/QRscanner';
import DeviceIdInput from '../../Components/DeviceInput/DeviceInput';
import { getStates, getDistricts } from "../../Data/States&City/state&city";

export default function StopFormWizard({ allStops = [], setAllStops }) {
  const [formData, setFormData] = useState([{
    deviceID:'',
    displayId: '',
    stopName: '',
    direction: '',
    route: '',
    lat: '',
    lon: '',
    district: '',
    state: ''
  }]);

  // const [manualEntry, setManualEntry] = useState(false);
  // const [scanActive, setScanActive] = useState(false); // IMPORTANT
  // const [allStops, setAllStops] = useState([]);
  const [errors, setErrors] = useState({});
  // const [stateFilter, setStateFilter] = useState('');
  // const [districtFilter, setDistrictFilter] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  // const states = [
  //   { name: 'State 1', districts: ['Coimbatore', 'Vellore'] },
  //   { name: 'State 2', districts: ['District 2-1', 'District 2-2'] }
  // ];
  const states = getStates();

  // ---- Form Logic ----
  const validateStep = () => {
    let currentErrors = {};
    formData.forEach((stop, idx) => {
      if (!stop.deviceID) currentErrors[`displayId_${idx}`] = 'Required';
      if (!stop.displayId) currentErrors[`displayId_${idx}`] = 'Required';
      if (!stop.stopName) currentErrors[`stopName_${idx}`] = 'Required';
      if (!stop.direction) currentErrors[`direction_${idx}`] = 'Required';
      if (!stop.route) currentErrors[`route_${idx}`] = 'Required';
      if (!stop.lat) currentErrors[`lat_${idx}`] = 'Required';
      if (!stop.lon) currentErrors[`lon_${idx}`] = 'Required';
      if (!stop.state) currentErrors[`state_${idx}`] = 'Required';
      if (!stop.district) currentErrors[`district_${idx}`] = 'Required';
    });
    setErrors(currentErrors);
    return Object.keys(currentErrors).length === 0;
  };

  const handleChange = (index, field, value) => {
    const updatedStops = [...formData];
    updatedStops[index][field] = value;
    if (field === 'state') updatedStops[index].district = '';
    setFormData(updatedStops);
  };

  // const addStop = () => {
  //   setFormData([...formData, {
  //     displayId: '',
  //     stopName: '',
  //     direction: '',
  //     route: '',
  //     lat: '',
  //     lon: '',
  //     district: '',
  //     state: ''
  //   }]);
  //   setEditingIndex(null);
  // };

  const removeStop = (index) => setFormData(formData.filter((_, i) => i !== index));

  // const handleSubmit = () => {
  //   if (!validateStep()) return;

  //   if (editingIndex !== null) {
  //     // Update existing stop (from top form)
  //     const updatedStops = [...allStops];
  //     updatedStops[editingIndex] = formData[0]; // single stop edit
  //     setAllStops(updatedStops);
  //     setEditingIndex(null);
  //   } else {
  //     setAllStops(prev => [...formData, ...prev]);
  //   }

  //   setFormData([{
  //     displayId: '',
  //     stopName: '',
  //     direction: '',
  //     route: '',
  //     lat: '',
  //     lon: '',
  //     district: '',
  //     state: ''
  //   }]);
  // };
  const handleSubmit = async () => {
  if (!validateStep()) return;

  try {

    const stop = formData[0];

    const routeMap = {
      YELLOW: "FORWARD",
      BLUE: "BACKWARD"
    };

    const route = routeMap[stop.route];

    const payload = {
      stopName: stop.stopName,
      deviceID: stop.deviceID,
      stopId: stop.displayId,
      direction: stop.direction,
      route: route,
      district: stop.district,
      state: stop.state,
      location: {
        type: "Point",
        coordinates: [
          parseFloat(stop.lon),
          parseFloat(stop.lat)
        ]
      }
    };

    await addStopApi(payload);

    // 🔥 fetch fresh DB data
    const stops = await fetchStopsApi();
    // console.log("stops data",stops);
    setAllStops(stops);

    setFormData([{
      displayId: '',
      deviceID: '',
      stopName: '',
      direction: '',
      route: '',
      lat: '',
      lon: '',
      district: '',
      state: ''
    }]);

    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Stop saved successfully",
      timer: 2000,
      showConfirmButton: false
    });

  } catch (error) {

    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Failed to save stop"
    });

  }
};



//   // ---- Table Logic ----
//  const columns = Array.isArray(allStops) && allStops.length > 0
//   ? Object.keys(allStops[0])
//   : [];


  // const districts = useMemo(() => {
  //   if (!stateFilter) return [...new Set(allStops.map((s) => s.district))];
  //   return [...new Set(allStops.filter((s) => s.state === stateFilter).map(s => s.district))];
  // }, [allStops, stateFilter]);
//   const districts = useMemo(() => {
//     if (!stateFilter) {
//       return [
//         ...new Set(
//           allStops
//             .filter(Boolean)
//             .map((s) => s?.district)
//             .filter(Boolean)
//         ),
//       ];
//     }

//     return [
//       ...new Set(
//         allStops
//           .filter((s) => s?.state === stateFilter)
//           .map((s) => s?.district)
//           .filter(Boolean)
//       ),
//     ];
//   }, [allStops, stateFilter]);


// const filteredStops = useMemo(() => {
//   return allStops
//     .filter(Boolean)
//     .map((stop, idx) => ({ id: idx, ...stop }))
//     .filter(stop =>
//       (!stateFilter || stop?.state === stateFilter) &&
//       (!districtFilter || stop?.district === districtFilter)
//     );
// }, [allStops, stateFilter, districtFilter]);


  // const selectStyle = { borderRadius: "8px", padding: "6px 10px", border: "1px solid #ccc", outline: "none" };
  // const tableStyle = { width: "100%", borderCollapse: "separate", borderSpacing: 0, border: "1px solid #ddd", borderRadius: "10px", overflow: "hidden" };
  // const thTdStyle = { padding: "10px", textAlign: "left", whiteSpace: "nowrap" };
  // const buttonStyle = { borderRadius: "6px", padding: "4px 10px", border: "none", cursor: "pointer" };


  const handleDelete = (idx) => {
    setAllStops(allStops.filter((_, i) => i !== idx));
    if (editingIndex === idx) {
      setFormData([{
        displayId: '',
        deviceID:'',
        stopName: '',
        direction: '',
        route: '',
        lat: '',
        lon: '',
        district: '',
        state: ''
      }]);
      setEditingIndex(null);
    }
  };


  return (
    <>
      {/* Form */}
      <div style={{ maxWidth: '600px', margin: '20px auto' }}>
        <Card className="mb-4">
          <CardHeader><h5>🚌 Add Bus Stops Wizard</h5></CardHeader>
          <CardBody>
            <h4 className="text-center fw-bold mb-3">Stop Details</h4>
            <Form>
              {formData.map((stop, index) =>{
                 const districts = getDistricts(stop.state); // ✅ ADD THIS
              return (
                <Card key={index} className="mb-3 p-3 border">
                  <Row className="mb-2">
                    <Col md={6}>
                      {/* <FormGroup>
                        <Label>Device ID *</Label>
                        <Input
                          value={stop.deviceID}
                          onChange={e => handleChange(index, 'deviceID', e.target.value)}
                          invalid={!!errors[`deviceID_${index}`]}
                        />
                        <FormText color="danger">{errors[`deviceID_${index}`]}</FormText>
                      </FormGroup> */}
                     <DeviceIdInput
                        value={stop.deviceID}
                        onChange={(val) =>
                          handleChange(index, "deviceID", val)
                        }
                        error={errors[`deviceID_${index}`]}
                      />
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label>Display ID *</Label>
                        <Input value={stop.displayId} onChange={e => handleChange(index, 'displayId', e.target.value)} invalid={!!errors[`displayId_${index}`]} />
                        <FormText color="danger">{errors[`displayId_${index}`]}</FormText>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label>Stop Name *</Label>
                        <Input value={stop.stopName} onChange={e => handleChange(index, 'stopName', e.target.value)} invalid={!!errors[`stopName_${index}`]} />
                        <FormText color="danger">{errors[`stopName_${index}`]}</FormText>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className="mb-2">
                    <Col md={6}>
                      <FormGroup>
                        <Label>Direction *</Label>
                        <Input value={stop.direction} onChange={e => handleChange(index, 'direction', e.target.value)} invalid={!!errors[`direction_${index}`]} />
                        <FormText color="danger">{errors[`direction_${index}`]}</FormText>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label>Route *</Label>
                        <Input type="select" value={stop.route} onChange={e => handleChange(index, 'route', e.target.value)} invalid={!!errors[`route_${index}`]}>
                          <option value="">Select Route</option>
                          <option value="YELLOW">YELLOW</option>
                          <option value="BLUE">BLUE</option>
                        </Input>
                        <FormText color="danger">{errors[`route_${index}`]}</FormText>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className="mb-2">
                    <Col md={6}>
                      <FormGroup>
                        <Label>Latitude *</Label>
                        <Input type="number" value={stop.lat} onChange={e => handleChange(index, 'lat', e.target.value)} invalid={!!errors[`lat_${index}`]} />
                        <FormText color="danger">{errors[`lat_${index}`]}</FormText>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label>Longitude *</Label>
                        <Input type="number" value={stop.lon} onChange={e => handleChange(index, 'lon', e.target.value)} invalid={!!errors[`lon_${index}`]} />
                        <FormText color="danger">{errors[`lon_${index}`]}</FormText>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className="mb-2">
                    <Col md={6}>
                      <FormGroup>
                        <Label>State *</Label>
                        <Input
                          type="select"
                          value={stop.state || ""}
                          onChange={(e) => handleChange(index, "state", e.target.value)}
                        >
                          <option value="">Select State</option>

                          {states.map((s) => (
                            <option key={s.isoCode} value={s.isoCode}>
                              {s.name}
                            </option>
                          ))}
                        </Input>
                        <FormText color="danger">{errors[`state_${index}`]}</FormText>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label>District *</Label>
                       <Input
                          type="select"
                          value={stop.district || ""}
                          disabled={!stop.state}
                          onChange={(e) => handleChange(index, "district", e.target.value)}
                        >
                          <option value="">
                            {stop.state ? "Select District" : "Select State First"}
                          </option>

                          {districts?.map((d) => (
                            <option key={d.name} value={d.name}>
                              {d.name}
                            </option>
                          ))}
                        </Input>
                        <FormText color="danger">{errors[`district_${index}`]}</FormText>
                      </FormGroup>
                    </Col>
                  </Row>
                  <div className="text-end mt-2">
                    {formData.length > 1 && <Button color="danger" size="sm" onClick={() => removeStop(index)}>Remove</Button>}
                  </div>
                </Card>
              );
              })}
              <div className="d-flex justify-content-end mt-3 gap-2">
                {/* <Button color="secondary" onClick={addStop}>+ Add Stop</Button> */}
                <Button color="success" onClick={handleSubmit}>Submit Stops</Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </div>

      {/* Filterable Table */}
      {/* <div style={{ maxWidth: '1000px', margin: '20px auto' }}>
        {allStops.length > 0 && (
          <Card>
            <CardHeader>
              <div className="d-flex justify-content-between align-items-center">
                <h5>📋 Stops Details List</h5>
                <div className="d-flex gap-2">
                  <select
                    style={selectStyle}
                    value={stateFilter}
                    onChange={e => {
                      setStateFilter(e.target.value);
                      setDistrictFilter('');
                    }}
                  >
                    <option value="">All States</option>
                    {[...new Set(
                      allStops
                        .filter(Boolean)
                        .map(s => s?.state)
                        .filter(Boolean)
                    )].map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>

                  <select style={selectStyle} value={districtFilter} onChange={e => setDistrictFilter(e.target.value)} disabled={!stateFilter}>
                    <option value="">All Districts</option>
                    {districts.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>
              </div>
            </CardHeader>
            <CardBody style={{ overflowX: 'auto', minHeight: '400px' }}>
              <table style={tableStyle}>
                <thead style={{ background: '#f5f5f5' }}>
                  <tr>
                    {columns.map((col, i) => (
                      <th key={col} style={{ ...thTdStyle, textTransform: 'capitalize', borderBottom: '1px solid #ddd', ...(i === 0 ? { borderTopLeftRadius: '10px' } : {}), ...(i === columns.length - 1 ? { borderTopRightRadius: '10px' } : {}) }}>
                        {col.replace(/_/g, ' ')}
                      </th>
                    ))}
                    <th style={{ ...thTdStyle, borderBottom: '1px solid #ddd', borderTopRightRadius: '10px' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStops.length > 0 ? filteredStops.map((stop, idx) => (
                    <tr key={stop.id}>
                      {columns.map(col => <td key={col} style={{ ...thTdStyle, borderBottom: idx === filteredStops.length - 1 ? 'none' : '1px solid #ddd' }}>{stop[col]}</td>)}
                      <td style={{ ...thTdStyle, borderBottom: idx === filteredStops.length - 1 ? 'none' : '1px solid #ddd' }}>
                        <button style={{ ...buttonStyle, background: '#4CAF50', color: '#fff', marginRight: 5 }} onClick={() => handleEdit(stop.id)}>Edit</button>
                        <button style={{ ...buttonStyle, background: '#f44336', color: '#fff' }} onClick={() => handleDelete(stop.id)}>Delete</button>
                      </td>
                    </tr>
                  )) : (
                    <tr>
                      <td colSpan={columns.length + 1} style={{ textAlign: 'center', padding: 20 }}>No records found for selected state/district.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </CardBody>
          </Card>
        )}
      </div> */}
    </>
  );
}
