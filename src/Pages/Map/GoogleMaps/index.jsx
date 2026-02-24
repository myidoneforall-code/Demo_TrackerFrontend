// import React, {useEffect, useRef} from 'react';
// import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";

// const GoogleMaps = () => {
//     const mapRef = useRef();
//     const satelliteMapRef = useRef();
//     const polygonMapRef = useRef();
//     const fusionTableMapRef = useRef();
//     const markerMapRef = useRef();
//     const overlayMapRef = useRef();
//     const streetViewMapRef = useRef();

//     useEffect(() => {
//         const loadGoogleMapsScript = () => {
//             const existingScript = document.getElementById('googleMaps');
//             if (!existingScript) {
//                 const script = document.createElement('script');
//                 script.src = `https://maps.google.com/maps/api/js?libraries=places`;
//                 script.id = 'googleMaps';
//                 document.body.appendChild(script);
//                 script.onload = () => {
//                     initMaps();
//                 };
//             } else {
//                 initMaps();
//             }
//         };

//         const initMaps = () => {
//             const {google} = window;

//             new google.maps.Map(mapRef.current, {
//                 center: {lat: -12.043333, lng: -77.028333},
//                 zoom: 12,
//                 mapTypeId: google.maps.MapTypeId.TERRAIN,
//             });

//             new google.maps.Map(satelliteMapRef.current, {
//                 center: {lat: -12.043333, lng: -77.028333},
//                 zoom: 12,
//                 mapTypeId: google.maps.MapTypeId.SATELLITE,
//             });

//             const polygonMap = new google.maps.Map(polygonMapRef.current, {
//                 center: {lat: -12.043333, lng: -77.028333},
//                 zoom: 12,
//             });
//             const path = [
//                 {lat: -12.040397656836609, lng: -77.03373871559225},
//                 {lat: -12.040248585302038, lng: -77.03993927003302},
//                 {lat: -12.050047116528843, lng: -77.02448169303511},
//                 {lat: -12.044804866577001, lng: -77.02154422636042},
//             ];
//             const polygon = new google.maps.Polygon({
//                 paths: path,
//                 strokeColor: '#BBD8E9',
//                 strokeOpacity: 1,
//                 strokeWeight: 3,
//                 fillColor: '#BBD8E9',
//                 fillOpacity: 0.6,
//             });
//             polygon.setMap(polygonMap);

//             const fusionTableMap = new google.maps.Map(fusionTableMapRef.current, {
//                 center: {lat: 41.850033, lng: -87.6500523},
//                 zoom: 11,
//             });
//             const layer = new google.maps.FusionTablesLayer({
//                 query: {
//                     from: 'your_table_id',
//                     select: 'column1, column2',
//                 },
//                 styles: [
//                     {
//                         polygonOptions: {
//                             fillColor: '#BBD8E9',
//                             fillOpacity: 0.6,
//                         },
//                     },
//                 ],
//             });
//             layer.setMap(fusionTableMap);

//             const markerMap = new google.maps.Map(markerMapRef.current, {
//                 center: {lat: -12.043333, lng: -77.028333},
//                 zoom: 12,
//             });
//             const marker = new google.maps.Marker({
//                 position: {lat: -12.043333, lng: -77.028333},
//                 title: 'Gmap',
//             });
//             marker.setMap(markerMap);

//             const overlayMap = new google.maps.Map(overlayMapRef.current, {
//                 center: {lat: -12.043333, lng: -77.028333},
//                 zoom: 12,
//             });
//             const overlay = new google.maps.OverlayView();
//             overlay.draw = function () {
//                 const div = document.createElement('div');
//                 div.className = 'map-overlay';
//                 div.innerHTML = 'Map<div class="overlay-arrow above"></div>';
//                 this.getPanes().overlayLayer.appendChild(div);
//             };
//             overlay.setMap(overlayMap);

//             new google.maps.StreetViewPanorama(streetViewMapRef.current, {
//                 position: {lat: 42.3455, lng: -71.0983},
//                 pov: {heading: 100, pitch: 0},
//             });
//         };

//         loadGoogleMapsScript();
//     }, []);

//     return (
//         <Container fluid>
//             <Row className="m-1">
//                 <Col xs={12}>
//                     <h4 className="main-title">Google Maps</h4>
//                     <ul className="app-line-breadcrumbs mb-3">
//                         <li className="">
//                             <a href="#" className="f-s-14 f-w-500">
//                       <span>
//                         <i className="ph-duotone  ph-map-pin-line f-s-16"></i> Map
//                       </span>
//                             </a>
//                         </li>
//                         <li className="active">
//                             <a href="#" className="f-s-14 f-w-500">Google Maps</a>
//                         </li>
//                     </ul>
//                 </Col>
//             </Row>

//             <Row>
//                 <Col lg={6}>
//                     <Card>
//                         <CardHeader>
//                             <h5>Terrain Type Map</h5>
//                         </CardHeader>
//                         <CardBody>
//                             <div className="w-100 h-400" ref={mapRef}></div>
//                         </CardBody>
//                     </Card>
//                 </Col>
//                 <Col lg={6}>
//                     <Card>
//                         <CardHeader>
//                             <h5>Satellite Type Map</h5>
//                         </CardHeader>
//                         <CardBody>
//                             <div className="w-100 h-400" ref={satelliteMapRef}></div>
//                         </CardBody>
//                     </Card>
//                 </Col>
//             </Row>

//             <div className="row">
//                 <Col lg={6}>
//                     <Card>
//                         <CardHeader>
//                             <h5>Polygons</h5>
//                         </CardHeader>
//                         <CardBody>
//                             <div className="w-100 h-400" ref={polygonMapRef}></div>
//                         </CardBody>
//                     </Card>
//                 </Col>
//                 <Col lg={6}>
//                     <Card>
//                         <CardHeader>
//                             <h5>Fusion Tables Layers</h5>
//                         </CardHeader>
//                         <CardBody>
//                             <div className="w-100 h-400" ref={fusionTableMapRef}></div>
//                         </CardBody>
//                     </Card>
//                 </Col>
//             </div>

//             <div className="row">
//                 <Col lg={6}>
//                     <Card>
//                         <CardHeader>
//                             <h5>Markers Map</h5>
//                         </CardHeader>
//                         <CardBody>
//                             <div className="w-100 h-400" ref={markerMapRef}></div>
//                         </CardBody>
//                     </Card>
//                 </Col>
//                 <Col lg={6}>
//                     <Card>
//                         <CardHeader>
//                             <h5>Overlays Map</h5>
//                         </CardHeader>
//                         <CardBody>
//                             <div className="w-100 h-400" ref={overlayMapRef}></div>
//                         </CardBody>
//                     </Card>
//                 </Col>
//             </div>

//             <div className="row">
//                 <Col lg={6}>
//                     <Card>
//                         <CardHeader>
//                             <h5>Street View Map</h5>
//                         </CardHeader>
//                         <CardBody>
//                             <div className="w-100 h-400" ref={streetViewMapRef}></div>
//                         </CardBody>
//                     </Card>
//                 </Col>
//             </div>
//         </Container>
//     );
// };

// export default GoogleMaps;


import React, { useEffect, useRef, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const GoogleMaps = () => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mapType, setMapType] = useState("TERRAIN");

  const toggle = () => setDropdownOpen(!dropdownOpen);

  useEffect(() => {
    const loadGoogleMapsScript = () => {
      if (!document.getElementById("googleMaps")) {
        const script = document.createElement("script");
        script.id = "googleMaps";
        script.src = "https://maps.google.com/maps/api/js";
        script.async = true;
        document.body.appendChild(script);
        script.onload = initMap;
      } else {
        initMap();
      }
    };

    const initMap = () => {
      if (!window.google || !mapRef.current) return;

      mapInstance.current = new window.google.maps.Map(mapRef.current, {
        center: { lat: -12.043333, lng: -77.028333 },
        zoom: 12,
        mapTypeId: window.google.maps.MapTypeId.TERRAIN,
      });
    };

    loadGoogleMapsScript();
  }, []);

  // Change map type from dropdown
  const changeMapType = (type) => {
    setMapType(type);
    if (mapInstance.current && window.google) {
      mapInstance.current.setMapTypeId(
        window.google.maps.MapTypeId[type]
      );
    }
  };

  return (
    <Container fluid>
      {/* Header */}
      {/* <Row className="mb-3">
        <Col xs={12}>
          <h4 className="main-title">Google Maps</h4>
          <ul className="app-line-breadcrumbs">
            <li>
              <span className="f-s-14 f-w-500">
                <i className="ph-duotone ph-map-pin-line f-s-16"></i> Map
              </span>
            </li>
            <li className="active">
              <span className="f-s-14 f-w-500">Interactive View</span>
            </li>
          </ul>
        </Col>
      </Row> */}

      {/* Full Width Map */}
      <Row>
        <Col xs={12}>
          <Card>
            <CardHeader className="d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Map View</h5>

              {/* Dropdown */}
              <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret color="primary">
                  {mapType}
                </DropdownToggle>
                <DropdownMenu end>
                  <DropdownItem onClick={() => changeMapType("TERRAIN")}>
                    Terrain
                  </DropdownItem>
                  <DropdownItem onClick={() => changeMapType("ROADMAP")}>
                    Roadmap
                  </DropdownItem>
                  <DropdownItem onClick={() => changeMapType("SATELLITE")}>
                    Satellite
                  </DropdownItem>
                  <DropdownItem onClick={() => changeMapType("HYBRID")}>
                    Hybrid
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </CardHeader>

            <CardBody className="p-0">
              <div
                ref={mapRef}
                style={{
                  width: "100%",
                  height: "400px",
                }}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default GoogleMaps;
