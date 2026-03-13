// import React, { useEffect } from 'react';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";

// const LeafletMap = () => {
//     useEffect(() => {
//         // Leaflet on Mobile Map
//         const mobileMap = L.map('mobilemap').fitWorld();
//         L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(mobileMap);

//         // Accessible maps
//         const accessibleMap = L.map('accessiblemap').setView([51.505, -0.09], 13);
//         L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(accessibleMap);
//         const marker = L.marker([51.5, -0.09]).addTo(accessibleMap);
//         const circle = L.circle([51.508, -0.10], {
//             fillColor: '#467FFB',
//             fillOpacity: 0.6,
//             radius: 500
//         }).addTo(accessibleMap);
//         const polygon = L.polygon([
//             [51.509, -0.08],
//             [51.503, -0.06],
//             [51.51, -0.047],
//         ], {
//             fillColor: '#467FFB',
//             fillOpacity: 0.6,
//         }).addTo(accessibleMap);
//         marker.bindPopup("<b>Hello!</b><br>I am a popup.").openPopup();
//         circle.bindPopup("This is circle.");
//         polygon.bindPopup("This is polygon.");

//         // Markers, Circles and Polygons map
//         const markersMap = L.map('markersmap').setView([50.4501, 30.5234], 4);
//         L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//             maxZoom: 19,
//             attribution: '&copy; OpenStreetMap contributors'
//         }).addTo(markersMap);
//         L.marker([50.4501, 30.5234], { alt: 'Kyiv' }).bindPopup('Kyiv, Ukraine is the birthplace of Leaflet!').addTo(markersMap);

//         // Interactive Choropleth Map
//         const interactiveMap = L.map('interactivemap').setView([37.8, -96], 4);
//         L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//             maxZoom: 19,
//             attribution: '&copy; OpenStreetMap contributors'
//         }).addTo(interactiveMap);

//         // Markers with Custom Icons
//         const customIconsMap = L.map('customiconsmap').setView([51.5, -0.09], 13);
//         L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//             attribution: '&copy; OpenStreetMap contributors'
//         }).addTo(customIconsMap);

//         const LeafIcon = L.Icon.extend({
//             options: {
//                 shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',
//                 iconSize: [38, 95],
//                 shadowSize: [50, 64],
//                 iconAnchor: [22, 94],
//                 shadowAnchor: [4, 62],
//                 popupAnchor: [-3, -76]
//             }
//         });
//         const greenIcon = new LeafIcon({ iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-green.png' });
//         const redIcon = new LeafIcon({ iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-red.png' });
//         const orangeIcon = new LeafIcon({ iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-orange.png' });

//         L.marker([51.5, -0.09], { icon: greenIcon }).bindPopup('I am a green.').addTo(customIconsMap);
//         L.marker([51.495, -0.083], { icon: redIcon }).bindPopup('I am a red.').addTo(customIconsMap);
//         L.marker([51.49, -0.1], { icon: orangeIcon }).bindPopup('I am an orange.').addTo(customIconsMap);

//         // Layer Groups and Layers Control
//         const layersMap = L.map('layersmap', { scrollWheelZoom: false }).setView([-29.50, 145], 3.5);
//         const basemaps = {
//             StreetView: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; OpenStreetMap contributors' }),
//             Topography: L.tileLayer.wms('http://ows.mundialis.de/services/service?', { layers: 'TOPO-WMS' }),
//             Places: L.tileLayer.wms('http://ows.mundialis.de/services/service?', { layers: 'OSM-Overlay-WMS' })
//         };
//         L.control.layers(basemaps).addTo(layersMap);
//         basemaps.Topography.addTo(layersMap);

//         const markers = [
//             [-37.699450, 176.279420], [-27.643310, 153.305140], [-33.956330, 122.150270],
//             [-34.962390, 117.391220], [-17.961210, 122.214820], [-16.505960, 151.751520],
//             [-22.594400, 167.484440], [-37.977000, 177.057000], [-41.037600, 173.017000],
//             [-37.670300, 176.212000]
//         ];
//         markers.forEach(coord => L.marker(coord).addTo(layersMap));
//     }, []);

//     return (
//         <div>
//             <Container fluid>
//                 <Row className=" m-1">
//                     <Col xs={12}>
//                         <h4 className="main-title">Leaflet Map</h4>
//                         <ul className="app-line-breadcrumbs mb-3">
//                             <li className="">
//                                 <a href="#" className="f-s-14 f-w-500">
//                       <span>
//                         <i className="ph-duotone  ph-map-pin-line f-s-16"></i> Map
//                       </span>
//                                 </a>
//                             </li>
//                             <li className="active">
//                                 <a href="#" className="f-s-14 f-w-500">Leaflet Map</a>
//                             </li>
//                         </ul>
//                     </Col>
//                 </Row>
//                 <Row>
//                     <Col lg={6}>
//                         <Card>
//                             <CardHeader>
//                                 <h5>Leaflet on Mobile Map</h5>
//                             </CardHeader>
//                             <CardBody>
//                                 <div className="w-100 h-280" id="mobilemap"></div>
//                             </CardBody>
//                         </Card>
//                     </Col>
//                     <Col lg={6}>
//                         <Card>
//                             <CardHeader>
//                                 <h5>Accessible maps</h5>
//                             </CardHeader>
//                             <CardBody>
//                                 <div className="w-100 h-280" id="markersmap"></div>
//                             </CardBody>
//                         </Card>
//                     </Col>
//                 </Row>
//                 <div className="row">
//                     <Col lg={6}>
//                         <Card>
//                             <CardHeader>
//                                 <h5>Markers, Circles and Polygons</h5>
//                             </CardHeader>
//                             <CardBody>
//                                 <div className="w-100 h-280" id="accessiblemap"></div>
//                             </CardBody>
//                         </Card>
//                     </Col>
//                     <Col lg={6}>
//                         <Card>
//                             <CardHeader>
//                                 <h5>Interactive Choropleth Map</h5>
//                             </CardHeader>
//                             <CardBody>
//                                 <div className="w-100 h-280" id="interactivemap"></div>
//                             </CardBody>
//                         </Card>
//                     </Col>
//                 </div>
//                 <div className="row">
//                     <Col lg={6}>
//                         <Card>
//                             <CardHeader>
//                                 <h5>Markers With Custom Icons</h5>
//                             </CardHeader>
//                             <CardBody>
//                                 <div className="w-100 h-280" id="customiconsmap"></div>
//                             </CardBody>
//                         </Card>
//                     </Col>
//                     <Col lg={6}>
//                         <Card>
//                             <CardHeader>
//                                 <h5>Layer Groups and Layers Control</h5>
//                             </CardHeader>
//                             <CardBody>
//                                 <div className="w-100 h-280" id="layersmap"></div>
//                             </CardBody>
//                         </Card>
//                     </Col>
//                 </div>
//             </Container>
//         </div>
//     );
// };

// export default LeafletMap;




import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import { getStopsData } from "../../../Data/StopDetails/Stops.Details";

const LeafletMap = () => {
  const mapRef = useRef(null);
  const stopsRef = useRef([]);
  const markersLayerRef = useRef(null);

  const liveBusMarkersRef = useRef({});
  const previousPositionsRef = useRef({});
  const animationRefs = useRef({});

  /* =========================================================
     1️⃣ MAP + STOPS (Independent)
  ========================================================= */
  useEffect(() => {
    const map = L.map("interactivemap").setView([11.0168, 76.9558], 13);
    mapRef.current = map;

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    const markersLayer = L.layerGroup().addTo(map);
    markersLayerRef.current = markersLayer;

    const stopIcon = L.icon({
      iconUrl:
        "https://cdn-icons-png.flaticon.com/512/1042/1042263.png",
      iconSize: [22, 22],
    });

    // Coordinate Control
    const coordsControl = L.control({ position: "bottomleft" });

    coordsControl.onAdd = function () {
      this._div = L.DomUtil.create("div", "coords-display");
      this._div.style.background = "white";
      this._div.style.padding = "6px 10px";
      this._div.style.fontSize = "14px";
      this._div.style.borderRadius = "5px";
      this._div.innerHTML = "X: -, Y: -";
      return this._div;
    };

    coordsControl.addTo(map);

    const updateCoords = (lat, lng) => {
      coordsControl._div.innerHTML =
        `<b>X:</b> ${lng.toFixed(6)} &nbsp; | &nbsp; <b>Y:</b> ${lat.toFixed(6)}`;
    };

    map.on("mousemove", function (e) {
      updateCoords(e.latlng.lat, e.latlng.lng);
    });

    const createPopupContent = (stop) => `
      <div style="font-size:14px">
        <b>🚌 Stop:</b> ${stop.stopName}<br/>
        <b>🛣 Route:</b> ${stop.route}<br/>
        <b>➡ Direction:</b> ${stop.direction}<br/>
        <b>📍 Lat:</b> ${stop.lat}<br/>
        <b>📍 Lon:</b> ${stop.lon}
      </div>
    `;

    const loadStops = async () => {
      try {

        const stops = await getStopsData();
        console.log("Stops:", stops);

        stopsRef.current = stops;

        stops.forEach((stop) => {

          if (!stop.location?.coordinates) return;

          const [lon, lat] = stop.location.coordinates;

          const marker = L.marker([lat, lon], {
            icon: stopIcon,
          }).addTo(markersLayer);

          marker.bindPopup(`
            <div style="font-size:14px">
              <b>🚌 Stop:</b> ${stop.stopName}<br/>
              <b>🛣 Route:</b> ${stop.route}<br/>
              <b>➡ Direction:</b> ${stop.direction}<br/>
              <b>📍 Lat:</b> ${lat}<br/>
              <b>📍 Lon:</b> ${lon}
            </div>
          `);

          marker.on("click", () => {
            updateCoords(lat, lon);
          });

        });

      } catch (err) {
        console.error("Error loading stops:", err);
      }
    };

    loadStops();

    return () => {
      map.remove();
    };
  }, []);

  /* =========================================================
     2️⃣ LIVE BUS + SMOOTH ANIMATION (Independent)
  ========================================================= */
  useEffect(() => {
    if (!mapRef.current) return;

    const liveBusIcon = L.icon({
      iconUrl:
        "https://cdn-icons-png.flaticon.com/512/6395/6395324.png",
      iconSize: [30, 30],
      iconAnchor: [15, 15],
    });

    const animateMarker = (busId, marker, from, to) => {
      if (animationRefs.current[busId]) {
        clearInterval(animationRefs.current[busId]);
      }

      let progress = 0;
      const duration = 3000;
      const frameRate = 100;
      const steps = duration / frameRate;
      const stepSize = 1 / steps;

      animationRefs.current[busId] = setInterval(() => {
        progress += stepSize;
        if (progress >= 1) progress = 1;

        const newLat = from.lat + (to.lat - from.lat) * progress;
        const newLon = from.lon + (to.lon - from.lon) * progress;

        marker.setLatLng([newLat, newLon]);

        if (progress === 1) {
          clearInterval(animationRefs.current[busId]);
        }
      }, frameRate);
    };

    const fetchLiveBuses = async () => {
      try {
        const res = await fetch("http://localhost:4000/api/buses/live");
        const data = await res.json();

        data.forEach((bus) => {
          if (!bus.location || !bus.location.coordinates) return;

          const lon = bus.location.coordinates[0];
          const lat = bus.location.coordinates[1];
          const busId = bus.busId;

          const newPosition = { lat, lon };

          // New Bus
          if (!liveBusMarkersRef.current[busId]) {
            const marker = L.marker([lat, lon], {
              icon: liveBusIcon,
            }).addTo(mapRef.current);

            marker.bindPopup(`
              <b>${busId}</b><br/>
              Speed: ${bus.speedKmph} km/h<br/>
              Heading: ${bus.heading.toFixed(2)}
            `);

            liveBusMarkersRef.current[busId] = marker;
            previousPositionsRef.current[busId] = newPosition;
          }
          // Existing Bus → Smooth Move
          else {
            const marker = liveBusMarkersRef.current[busId];
            const prev = previousPositionsRef.current[busId];

            if (prev) {
              animateMarker(busId, marker, prev, newPosition);
            }

            previousPositionsRef.current[busId] = newPosition;
          }
        });
      } catch (err) {
        console.error("❌ Live Fetch Error:", err);
      }
    };

    fetchLiveBuses();
    const interval = setInterval(fetchLiveBuses, 3000);

    return () => {
      clearInterval(interval);
      Object.values(animationRefs.current).forEach(clearInterval);
    };
  }, []);

  return (
    <Container fluid>
      <Row className="m-1">
        <Col xs={12}>
          <h4 className="main-title">Bus Stops Map</h4>
        </Col>
      </Row>

      <Row>
        <Col lg={12}>
          <Card>
            <CardHeader>
              <h5>Mandatory Stop Details + Live Buses (Smooth)</h5>
            </CardHeader>
            <CardBody>
              <div
                id="interactivemap"
                style={{ width: "100%", height: "600px" }}
              ></div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LeafletMap;