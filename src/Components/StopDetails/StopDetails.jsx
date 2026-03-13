// // StopDetails.jsx
// import React from "react";
// import { Container } from "reactstrap";
// import { stopDetails } from "../../Data/StopDetails/Stops.Details";
// import "./StopDetails.css";
// import LedDisplay from "../LEDdisplay/LedDisplay";


// export default function StopDetails() {
//   return (
//     <Container className="mt-4">
//       <div className="row g-4 mx-auto">
//         {stopDetails.map((stop, index) => {
//           const isYellow = stop.line === "YELLOW";
//           const lineColor = isYellow ? "#ffc107" : "#0d6efd";

//           return (
//             <div
//               className="col-xl-4 col-lg-6 col-md-6"
//               key={`${stop.displayId}-${index}`}
//             >
//               <div
//                 className="card eshop-cards border-0 shadow-sm h-100"
//                 style={{
//                   borderRadius: 14,
//                   borderLeft: `6px solid ${lineColor}`,
//                 }}
//               >
//                 <div className="card-body d-flex flex-column">
//                   {/* ===== HEADER ===== */}
//                   <div className="d-flex align-items-start gap-3 mb-3">
//                     <span
//                       className="bg-primary h-45 w-45 d-flex-center b-r-15"

//                     >
//                       <i className="ph-bold ph-monitor fs-5"></i>
//                     </span>

//                     <div>
//                       <h6 className="mb-0 fw-semibold stop-title">
//                         {stop.stopName}
//                       </h6>

//                       <small>Display ID : {stop.displayId}</small>
//                     </div>
//                   </div>

//                   {/* ===== ROUTE INFO ===== */}
//                   <p className="small mb-2">
//                     Direction: <strong>{stop.direction}</strong>
//                   </p>

//                   {/* ===== LINE BADGE ===== */}
//                   <div className="mb-2 stop-badge">
//                   <span className="badge" style={{ backgroundColor: lineColor, color: "#000" }}>
//                     {stop.line} LINE
//                   </span>
//                   </div>


//                   {/* ===== ARRIVAL INFO =====
//                   <div className="mb-2">
//                     <strong>🚌 Bus:</strong> 95 <br />
//                     <strong>⏱ Arriving in:</strong>{" "}
//                     <span className="text-primary fw-bold">
//                       4 min
//                     </span>
//                   </div> */}

//                   {/* ===== FOOTER ===== */}
//                   {/* <div className="mt-auto d-flex justify-content-between">
//                     <small className="text-muted">
//                       📍 {stop.lat}, {stop.lon}
//                     </small>
//                     <small className="text-success fw-semibold">
//                       LIVE
//                     </small>
//                   </div> */}
//                 </div>
//                 <LedDisplay
//                 text={`🚌 Bus 95 → ${stop.stopName} | Arriving Soon`}
//                 color={stop.line === "YELLOW" ? "#ffc107" : "#0d6efd"}
//               />
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </Container>
//   );
// }


// StopDetails.jsx
import React, { useState,useEffect } from "react";
import {
  Container,
  Row,
  Col,
} from "reactstrap";
// import { stopDetails as initialStopDetails } from "../../Data/StopDetails/Stops.Details";
import { getStopsData } from "../../Data/StopDetails/Stops.Details";

import { buses } from "../../Data/BusDetails/LiveBuses.details";
import LedDisplay from "../LEDdisplay/LedDisplay";
import "./StopDetails.css";
import EditStopModal from "../Modals/EditStopModal";

export default function StopDetails() {
  // const [stopDetails, setStopDetails] = useState(initialStopDetails);
  const [stopDetails, setStopDetails] = useState([]);

  const [selectedStop, setSelectedStop] = useState(null);
  const [matchingBuses, setMatchingBuses] = useState([]);
  const [displayIdFilter, setDisplayIdFilter] = useState("");
  const [stopNameFilter, setStopNameFilter] = useState("");

  // ================= EDIT MODAL STATE =================
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editStopData, setEditStopData] = useState(null);

  useEffect(() => {
  const loadStops = async () => {
    const data = await getStopsData();

    console.log("Stops from API:", data); 
    setStopDetails(data);
  };

  loadStops();
}, []);


  const handleStopClick = (stop) => {
    if (selectedStop?.stopId === stop.stopId) {
      setSelectedStop(null);
      setMatchingBuses([]);
      return;
    }

    setSelectedStop(stop);

    const filteredBuses = buses
      .map((bus) => {
        const isLineMatch =
          (stop.route === "BLUE" && bus.isReturning === false) ||
          (stop.route === "YELLOW" && bus.isReturning === true);

        if (!isLineMatch) return null;

        const route = bus.isReturning ? bus.returnRoute : bus.forwardRoute;

        const stopIndex = route.stops.findIndex(
          (s) => s.name.toLowerCase().trim() === stop.stopName.toLowerCase().trim()
        );

        if (stopIndex === -1) return null;
        if (route.currentStopIndex > stopIndex) return null;

        return {
          ...bus,
          route,
          stopIndex,
          distance: stopIndex - route.currentStopIndex,
        };
      })
      .filter(Boolean);

    filteredBuses.sort((a, b) => a.distance - b.distance);
    setMatchingBuses(filteredBuses);
  };

  // ================= FILTER STOPS =================
  const filteredStops = stopDetails.filter(
    (stop) =>
      String(stop.stopId || "").includes(displayIdFilter) &&
      String(stop.stopName || "").toLowerCase().includes(stopNameFilter.toLowerCase())
  );

  // ================= OPEN EDIT MODAL =================
  const openEditModal = (stop) => {
    setEditStopData({ ...stop }); // copy data for editing
    setIsEditModalOpen(true);
  };

  // ================= SAVE EDIT =================
  const saveEdit = () => {
    setStopDetails((prev) =>
      prev.map((s) => (s.stopId === editStopData.stopId ? editStopData : s))
    );

    setIsEditModalOpen(false);

    if (selectedStop?.stopId === editStopData.stopId) {
      setSelectedStop(editStopData);
    }
  };

  return (
    <Container className="mt-0 p-0">
      {/* ================= TITLE + SEARCH FILTERS ================= */}
      <Row className="mb-5 align-items-center">
        <Col xs="12" md="6" className="mb-2 mb-md-0">
          <h4 className="fw-semibold mb-0">Stop Details</h4>
        </Col>
        <Col xs="12" md="6">
          <div className="d-flex gap-2 justify-content-md-end search-filters">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Display ID"
              value={displayIdFilter}
              onChange={(e) => setDisplayIdFilter(e.target.value)}
              style={{ minWidth: 0 }}
            />
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Stop Name"
              value={stopNameFilter}
              onChange={(e) => setStopNameFilter(e.target.value)}
              style={{ minWidth: 0 }}
            />
            <button
              className="btn btn-outline-secondary btn-sm flex-shrink-0"
              onClick={() => {
                setDisplayIdFilter("");
                setStopNameFilter("");
              }}
            >
              Clear
            </button>
          </div>
        </Col>
      </Row>

      {/* ================= STOP CARDS ================= */}
      <div className="row g-4 mx-auto">
        {filteredStops.map((stop, index) => {
          const isYellow = stop.route === "YELLOW";
          const lineColor = isYellow ? "#ffc107" : "#0d6efd";
          const isActive = selectedStop?.stopId === stop.stopId;

          return (
            <div className="col-xl-4 col-lg-6 col-md-6" key={`${stop.stopId}-${index}`}>
              <div
                className={`card eshop-cards shadow-sm h-100 cursor-pointer ${isActive ? "selected-card" : ""}`}
                style={{
                  borderRadius: 14,
                  borderLeft: `6px solid ${lineColor}`,
                  border: "2px solid transparent",
                  position: "relative", // card as positioning context
                }}
                onClick={() => handleStopClick(stop)}
              >
                {/* ================= EDIT ICON TOP-RIGHT ================= */}
                <button
                  className="btn btn-sm bg-primary p-1 d-flex-center"
                  style={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    // borderRadius: "50%",
                    width: 28,
                    height: 28,
                    zIndex: 2,
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    openEditModal(stop);
                  }}
                  title="Edit Stop"
                >
                  <i className="ph ph-pencil"></i>
                </button>

                <div className="card-body d-flex flex-column"style={{ paddingRight: 48 }}>
                  <div className="d-flex align-items-start gap-3 mb-3 pe-4">
                    <span className="bg-primary h-45 w-45 d-flex-center b-r-15 flex-shrink-0">
                      <i className="ph-bold ph-monitor fs-5"></i>
                    </span>

                    <h6 className="mb-0 fw-semibold stop-title flex-grow-1">
                      {stop.stopName}
                    </h6>
                  </div>
                  <small>Display ID : {stop.stopId}</small>
                  <small>Direction : {stop.direction}</small>
                  <br />
                  <div className="mb-2">
                    <span className="badge" style={{ backgroundColor: lineColor, color: "#000" }}>
                      {stop.route} Route
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ================= SELECTED STOP DETAILS ================= */}
      {selectedStop && (
        <div className="mt-5">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h5 className="fw-bold mb-3 text-center">📺 Live Stop Display</h5>
              <LedDisplay stop={selectedStop} buses={matchingBuses} />
            </div>
          </div>
        </div>
      )}
      {/* ================= EDIT MODAL ================= */}
      <EditStopModal
        isOpen={isEditModalOpen}
        toggle={() => setIsEditModalOpen(false)}
        stopData={editStopData}
        onChange={setEditStopData}
        onSave={saveEdit}
      />
    </Container>
  );
}
