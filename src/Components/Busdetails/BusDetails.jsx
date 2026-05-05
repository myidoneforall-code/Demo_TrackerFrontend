// import { useState, useEffect } from "react";
// import { buses } from "../../Data/BusDetails/Buses.details";
// import Timeline from "../../Pages/Apps/Timeline";

// /* ================= MAIN ================= */
// export default function BusDetails() {
//   const [selectedBus, setSelectedBus] = useState(null);
//   const [stopShape, setStopShape] = useState("circle");

//   return (
//     <div className="container-fluid py-4">
//       <h4 className="fw-semibold mb-4">Bus Details</h4>

//       <div className="row g-4">
//         {buses.map((bus) => {
//           const isRoundRoute =
//             bus.stops[0].name === bus.stops[bus.stops.length - 1].name;

//           return (
//             <div className="col-xl-3 col-lg-4 col-md-6" key={bus.id}>
//               <div
//                 className="card border-0 shadow-sm h-100 cursor-pointer"
//                 onClick={() => setSelectedBus(bus)}
//               >
//                 <div className="card-body">
//                   {/* ICON */}
//                   <div className="d-flex align-items-center gap-3 mb-3">
//                     <div className="h-45 w-45 d-flex-center rounded text-bg-primary">
//                       <i className="ph-bold ph-bus fs-5"></i>
//                     </div>

//                     <div>
//                       <h6 className="mb-0 fw-semibold">{bus.name}</h6>
//                       <small className="text-secondary">{bus.id}</small>
//                     </div>
//                   </div>

//                   {/* ROUTE */}
//                   <p className="small text-secondary mb-3">
//                     {bus.from} → {bus.to}
//                   </p>

//                   {/* MINI TIMELINE */}
//                   <MiniTimeline
//                     stops={bus.stops}
//                     currentIndex={bus.currentStopIndex}
//                   />

//                   {/* TAG */}
//                   <span
//                     className={`badge mt-3 ${
//                       isRoundRoute
//                         ? "bg-warning-subtle text-warning"
//                         : "bg-success-subtle text-success"
//                     }`}
//                   >
//                     {isRoundRoute ? "Round Route" : "Linear Route"}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {selectedBus &&
//         (selectedBus.stops[0].name ===
//         selectedBus.stops[selectedBus.stops.length - 1].name ? (
//           <RoundBusTimeline
//             bus={selectedBus}
//             onClose={() => setSelectedBus(null)}
//           />
//         ) : (
//           <BusTimeline
//             bus={selectedBus}
//             onClose={() => setSelectedBus(null)}
//             stopShape={stopShape}
//             setStopShape={setStopShape}
//           />
//         ))}
//     </div>
//   );
// }

// /* ================= MINI TIMELINE ================= */
// function MiniTimeline({ stops, currentIndex }) {
//   return (
//     <div className="d-flex align-items-center gap-1">
//       {stops.map((_, index) => (
//         <span
//           key={index}
//           className={`rounded-circle ${
//             index < currentIndex
//               ? "bg-dark"
//               : index === currentIndex
//               ? "bg-primary"
//               : "bg-secondary-subtle"
//           }`}
//           style={{ width: 8, height: 8 }}
//         />
//       ))}
//       <i className="ph ph-arrow-right ms-2 text-secondary small"></i>
//     </div>
//   );
// }

// /* ================= SHAPE SELECTOR ================= */
// function ShapeSelector({ stopShape, setStopShape }) {
//   return (
//     <div className="d-flex gap-2">
//       <div
//         onClick={() => setStopShape("circle")}
//         className={`border ${
//           stopShape === "circle" ? "bg-primary" : ""
//         } rounded-circle cursor-pointer`}
//         style={{ width: 18, height: 18 }}
//       />
//       <div
//         onClick={() => setStopShape("square")}
//         className={`border ${
//           stopShape === "square" ? "bg-primary" : ""
//         } cursor-pointer`}
//         style={{ width: 18, height: 18 }}
//       />
//     </div>
//   );
// }
// {selectedBus && <Timeline bus={selectedBus} />}


// /* ================= LINEAR TIMELINE ================= */
// function BusTimeline({ bus, onClose, stopShape, setStopShape }) {
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       setProgress(
//         (bus.currentStopIndex / (bus.stops.length - 1)) * 100
//       );
//     }, 300);
//   }, [bus]);

//   return (
//     <div className="card border-0 shadow mt-5">
//       <div className="card-body">
//         <div className="d-flex justify-content-between mb-4">
//           <div>
//             <h5 className="fw-semibold mb-0">{bus.name}</h5>
//             <small className="text-secondary">
//               {bus.from} → {bus.to}
//             </small>
//           </div>

//           <div className="d-flex gap-3 align-items-center">
//             <ShapeSelector
//               stopShape={stopShape}
//               setStopShape={setStopShape}
//             />
//             <button
//               className="btn btn-sm btn-outline-secondary"
//               onClick={onClose}
//             >
//               ✕
//             </button>
//           </div>
//         </div>

//         <div className="position-relative px-3 py-5">
//           <div className="position-absolute top-50 start-0 end-0 bg-secondary-subtle"
//                style={{ height: 2 }} />

//           <div
//             className="position-absolute top-50 start-0 bg-primary"
//             style={{ height: 2, width: `${progress}%` }}
//           />

//           <i
//             className="ph-bold ph-bus position-absolute top-50 text-warning fs-4"
//             style={{ left: `calc(${progress}% - 15px)` }}
//           ></i>

//           <div className="d-flex justify-content-between">
//             {bus.stops.map((stop, i) => {
//               const active = i === bus.currentStopIndex;

//               return (
//                 <div key={i} className="text-center" style={{ minWidth: 120 }}>
//                   <div
//                     className={`mx-auto ${
//                       stopShape === "circle" ? "rounded-circle" : ""
//                     } ${active ? "bg-primary" : "bg-secondary-subtle"}`}
//                     style={{ width: 14, height: 14 }}
//                   />
//                   <div className="mt-3 small fw-medium">
//                     {stop.name}
//                   </div>
//                   <div className="text-secondary small">{stop.eta}</div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ================= ROUND ================= */
// function RoundBusTimeline({ bus, onClose }) {
//   return (
//     <div className="card border-0 shadow mt-5 p-4">
//       <h5 className="fw-semibold mb-3">
//         Round Route – {bus.name}
//       </h5>
//       <button
//         className="btn btn-sm btn-outline-secondary"
//         onClick={onClose}
//       >
//         ✕ Close
//       </button>
//     </div>
//   );
// }


// import { useState, useEffect } from "react";
// import { buses as initialBuses } from "../../Data/BusDetails/Buses.details";
// import Timeline from "../../Pages/Apps/Timeline";
// import { timeToMinutes } from "../../Data/Time/Time";

// // /* ================= TIME HELPER ================= */
// // function timeToMinutes(time) {
// //   const [t, period] = time.split(" ");
// //   let [h, m] = t.split(":").map(Number);

// //   if (period === "PM" && h !== 12) h += 12;
// //   if (period === "AM" && h === 12) h = 0;

// //   return h * 60 + m;
// // }

// /* ================= MAIN ================= */
// export default function BusDetails() {
//   // 🔴 live buses (acts like backend)
//   const [liveBuses, setLiveBuses] = useState(
//     initialBuses.map((b) => ({ ...b, progress: 0 }))
//   );

//   const [selectedBus, setSelectedBus] = useState(null);
//   const [stopShape, setStopShape] = useState("circle");

//   // 🔴 DEMO CLOCK (virtual time so movement is visible)
//   const [demoTime, setDemoTime] = useState(
//     timeToMinutes("10:12 AM") // start between stops
//   );

//   /* 🔴 ETA-BASED SMOOTH MOVEMENT (VISIBLE) */
//   useEffect(() => {
//     const timer = setInterval(() => {
//       // ⏩ fast-forward demo time (6 seconds per second)
//       setDemoTime((t) => t + 0.1);

//       setLiveBuses((prevBuses) =>
//         prevBuses.map((bus) => {
//           // demo only for BUS_001
//           if (bus.id !== "BUS_001") return bus;

//           const i = bus.currentStopIndex;
//           if (i >= bus.stops.length - 1) return bus;

//           const startTime = timeToMinutes(bus.stops[i].eta);
//           const endTime = timeToMinutes(bus.stops[i + 1].eta);
//           const duration = endTime - startTime;

//           if (duration <= 0) return bus;

//           const elapsed = demoTime - startTime;
//           const progress = Math.min(Math.max(elapsed / duration, 0), 1);

//           // reached next stop
//           if (progress >= 1) {
//             return {
//               ...bus,
//               currentStopIndex: i + 1,
//               progress: 0,
//             };
//           }

//           return {
//             ...bus,
//             progress,
//           };
//         })
//       );
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [demoTime]);

//   return (
//     <div className="container-fluid py-4">
//       <h4 className="fw-semibold mb-4">Bus Details</h4>

//       <div className="row g-4">
//         {liveBuses.map((bus) => {
//           const isRoundRoute =
//             bus.stops[0].name === bus.stops[bus.stops.length - 1].name;

//           return (
//             <div className="col-xl-3 col-lg-4 col-md-6" key={bus.id}>
//               <div
//                 className="card border-0 shadow-sm h-100 cursor-pointer"
//                 onClick={() => setSelectedBus(bus)}
//               >
//                 <div className="card-body">
//                   {/* ICON */}
//                   <div className="d-flex align-items-center gap-3 mb-3">
//                     <div className="h-45 w-45 d-flex-center rounded text-bg-primary">
//                       <i className="ph-bold ph-bus fs-5"></i>
//                     </div>

//                     <div>
//                       <h6 className="mb-0 fw-semibold">{bus.name}</h6>
//                       <small className="text-secondary">{bus.id}</small>
//                     </div>
//                   </div>

//                   {/* ROUTE */}
//                   <p className="small text-secondary mb-3">
//                     {bus.from} → {bus.to}
//                   </p>

//                   {/* MINI TIMELINE */}
//                   <MiniTimeline
//                     stops={bus.stops}
//                     currentIndex={bus.currentStopIndex}
//                   />

//                   {/* TAG */}
//                   <span
//                     className={`badge mt-3 ${
//                       isRoundRoute
//                         ? "bg-warning-subtle text-warning"
//                         : "bg-success-subtle text-success"
//                     }`}
//                   >
//                     {isRoundRoute ? "Round Route" : "Linear Route"}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* MAIN TIMELINE */}
//       {selectedBus && (
//         <Timeline
//           bus={liveBuses.find((b) => b.id === selectedBus.id)}
//           stopShape={stopShape}
//           setStopShape={setStopShape}
//           onClose={() => setSelectedBus(null)}
//         />
//       )}
//     </div>
//   );
// }

// /* ================= MINI TIMELINE ================= */
// function MiniTimeline({ stops, currentIndex }) {
//   return (
//     <div className="d-flex align-items-center gap-1">
//       {stops.map((_, index) => (
//         <span
//           key={index}
//           className={`rounded-circle ${
//             index < currentIndex
//               ? "bg-dark"
//               : index === currentIndex
//               ? "bg-primary"
//               : "bg-secondary-subtle"
//           }`}
//           style={{ width: 8, height: 8 }}
//         />
//       ))}
//       <i className="ph ph-arrow-right ms-2 text-secondary small"></i>
//     </div>
//   );


// import { useState, useEffect } from "react";
// import { buses as initialBuses } from "../../Data/BusDetails/Buses.details";
// import Timeline from "../../Pages/Apps/Timeline";
// import { timeToMinutes } from "../../Data/Time/Time";

// /* ================= ADAPTER (ADDED – DOES NOT TOUCH UI) ================= */
// function getBusView(bus) {
//   // NEW DATA FORMAT
//   if (bus.forwardRoute && bus.returnRoute) {
//     const activeRoute = bus.isReturning
//       ? bus.returnRoute
//       : bus.forwardRoute;

//     return {
//       ...bus,

//       // ⬇️ OLD FORMAT FIELDS (FOR UI COMPATIBILITY)
//       id: bus.busNumber ?? bus.busNumber,
//       stops: activeRoute.stops ?? [],
//       currentStopIndex: activeRoute.currentStopIndex ?? 0,
//       from: activeRoute.from,
//       to: activeRoute.to,
//     };
//   }

//   // OLD FORMAT – return as-is
//   return bus;
// }

// /* ================= MAIN ================= */
// export default function BusDetails() {
//   // 🔴 live buses (acts like backend)
//   const [liveBuses, setLiveBuses] = useState(
//     initialBuses.map((b) => ({
//       ...b,
//       progress: 0,
//       completedTrips: b.completedTrips ?? 2,
//       totalTrips: b.totalTrips ?? 5,
//     }))
//   );

//   const [selectedBus, setSelectedBus] = useState(null);
//   const [stopShape, setStopShape] = useState("circle");

//   // 🔍 SEARCH FILTERS (ADDED)
//   const [searchBusName, setSearchBusName] = useState("");
//   const [searchBusId, setSearchBusId] = useState("");

//   // 🔴 DEMO CLOCK
//   const [demoTime, setDemoTime] = useState(timeToMinutes("10:12 AM"));
  

//   /* 🔴 ETA-BASED SMOOTH MOVEMENT */
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setDemoTime((t) => t + 0.1);

//       setLiveBuses((prevBuses) =>
//         prevBuses.map((rawBus) => {
//           const bus = getBusView(rawBus); // ✅ ADDED (SAFE)

//           if (bus.id !== "BUS_001") return rawBus;

//           const i = bus.currentStopIndex;
//           if (i >= bus.stops.length - 1) return rawBus;

//           const startTime = timeToMinutes(bus.stops[i].eta);
//           const endTime = timeToMinutes(bus.stops[i + 1].eta);
//           const duration = endTime - startTime;

//           if (duration <= 0) return rawBus;

//           const elapsed = demoTime - startTime;
//           const progress = Math.min(Math.max(elapsed / duration, 0), 1);

//           if (progress >= 1) {
//             return {
//               ...rawBus,
//               currentStopIndex: i + 1,
//               progress: 0,
//             };
//           }

//           return {
//             ...rawBus,
//             progress,
//           };
//         })
//       );
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [demoTime]);

//   // 🔍 FILTERED BUSES (ADDED)
//   const filteredBuses = liveBuses.filter((rawBus) => {
//     const bus = getBusView(rawBus); // ✅ ADDED (SAFE)

//     const matchName = bus.name
//       .toLowerCase()
//       .includes(searchBusName.toLowerCase());

//     const matchId =
//       searchBusId === ""
//         ? true
//         : bus.id.toLowerCase().includes(searchBusId.toLowerCase());

//     return matchName && matchId;
//   });

//   return (
//     <div className="row align-items-center mb-4">
//       {/* TITLE */}
//       <div className="col-12 col-md-6 mb-2 mb-md-0">
//         <h4 className="fw-semibold mb-0">Bus Details</h4>
//       </div>

//       {/* SEARCH FILTERS – ALWAYS SIDE BY SIDE */}
//       <div className="col-12 col-md-6">
//         <div className="d-flex gap-2 justify-content-md-end flex-nowrap">
//           <input
//             type="text"
//             className="form-control form-control-sm"
//             placeholder="Bus Name"
//             value={searchBusName}
//             onChange={(e) => setSearchBusName(e.target.value)}
//             style={{ minWidth: 0 }}
//           />

//           <input
//             type="text"
//             className="form-control form-control-sm"
//             placeholder="Bus ID"
//             value={searchBusId}
//             onChange={(e) => setSearchBusId(e.target.value)}
//             style={{ minWidth: 0 }}
//           />

//           <button
//             className="btn btn-outline-secondary btn-sm flex-shrink-0"
//             onClick={() => {
//               setSearchBusName("");
//               setSearchBusId("");
//             }}
//           >
//             Clear
//           </button>
//         </div>
//       </div>

//       {/* ================= TRIP TILE STYLES ================= */}
//       <style>{`
//         /* LIGHT MODE (default) */
//         .trip-tile {
//           width: 55px;
//           height: 45px;
//           border:solid;
//           bg : #ffff;
//           color: var(--bs-primary-text-emphasis);
//           border-radius: 10px;
//           box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           transition: background-color 0.25s ease, color 0.25s ease;
//         }

//         .trip-number {
//           font-size: 15px;
//           font-weight: 700;
//           line-height: 1;
//           color: inherit;
//         }

//         .trip-label {
//           font-size: 10px;
//           font-weight: 600;
//           color: inherit;
//           opacity: 0.7;
//           letter-spacing: 0.5px;
//           margin-top: 4px;
//         }

//         .trip-divider {
//           font-size: 18px;
//           font-weight: 700;
//           color: var(--bs-secondary-color);
//         }

//         .trip-group {
//           flex-shrink: 0;
//           white-space: nowrap;
//         }

//         @media (max-width: 576px) {
//         .route-bottom-row {
//           align-items: center !important;
//         }

//         .trip-number {
//           margin-top: 0 !important;
//           line-height: 1.2 !important;
//         }

//         .trip-group {
//           margin-top: 0;
//         }

//       `}</style>

//       <div className="row g-4">
//         {filteredBuses.map((rawBus) => {
//           const bus = getBusView(rawBus); // ✅ ADDED (SAFE)

//           const isRoundRoute =
//             bus.stops[0].name === bus.stops[bus.stops.length - 1].name;

//           return (
//             <div className="col-xl-4 col-lg-6 col-md-6" key={bus.id}>
//                           <div
//                 className="card eshop-cards border-0 shadow-sm h-100 cursor-pointer "
//                 style={{ borderRadius: 14 }}
//                 onClick={() => setSelectedBus(rawBus)}
//               >
//                 <div className="card-body d-flex flex-column">
//                   <div className="d-flex align-items-center gap-3 mb-3">

//                     {/* ICON – SAME METHOD */}
//                     <span className={`bg-primary h-45 w-45 d-flex-center b-r-15 f-s-18`}>
//                       <i className={`ph-bold ph-bus fs-5`}></i>
//                     </span>

//                     <div>
//                       <h6 className="mb-0 fw-semibold">{bus.name}</h6>
//                       <small className="">{bus.id}</small>
//                     </div>
//                   </div>

//                   {/* ROW 2 – ROUTE */}
//                   <p className="small mb-2">
//                     {bus.from} → {bus.to}
//                   </p>

//                   {/* ROW 3 – MINI TIMELINE */}
//                   <div className="mb-2">
//                     <MiniTimeline
//                       stops={bus.stops}
//                       currentIndex={bus.currentStopIndex}
//                     />
//                   </div>

//                   <div className="w-100 d-flex justify-content-center ">
//                     <h5
//                       className="text-danger fw-bold"
//                       style={{ marginLeft: "120px" }}
//                     >
//                       Trips
//                     </h5>
//                   </div>

//                   {/* ROW 4 – ROUTE TAG || TRIP DETAILS */}
//                   <div className="d-flex align-items-center justify-content-between mt-auto route-bottom-row">
//                     <span
//                       className={`badge ${
//                         isRoundRoute
//                           ? "bg-warning-subtle text-warning"
//                           : "bg-success-subtle text-success"
//                       }`}
//                     >
//                       {isRoundRoute ? "Round Route" : "Linear Route"}
//                     </span>

//                     <div className="d-flex align-items-center gap-1 trip-group">
//                       <div className="trip-tile">
//                         <div className="trip-number">
//                           {bus.completedTrips}
//                         </div>
//                         <div className="trip-label">DONE</div>
//                       </div>

//                       <div className="trip-divider">/</div>

//                       <div className="trip-tile">
//                         <div className="trip-number">
//                           {bus.totalTrips}
//                         </div>
//                         <div className="trip-label">TOTAL</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {selectedBus && (
//         <Timeline
//           bus={getBusView(
//             liveBuses.find((b) => b === selectedBus)
//           )}
//           stopShape={stopShape}
//           setStopShape={setStopShape}
//           onClose={() => setSelectedBus(null)}
//         />
//       )}
//     </div>
//   );
// }

// /* ================= MINI TIMELINE ================= */
// function MiniTimeline({ stops, currentIndex }) {
//   return (
//     <div className="d-flex align-items-center gap-1">
//       {stops.map((_, index) => (
//         <span
//           key={index}
//           className={`rounded-circle ${
//             index < currentIndex
//               ? "bg-dark"
//               : index === currentIndex
//               ? "bg-primary"
//               : "bg-secondary-subtle"
//           }`}
//           style={{ width: 8, height: 8 }}
//         />
//       ))}
//       <i className="ph ph-arrow-right ms-2 text-primary small"></i>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
// import { buses as initialBuses } from "../../Data/BusDetails/LiveBuses.details";
import Timeline from "../../Pages/Apps/Timeline";
import { timeToMinutes } from "../../Data/Time/Time";
import EditBusModal from "../../Components/Modals/EditBusModal"; // Your reusable modal
import "./BusDetails.css";
import { fetchLiveBusesApi } from "../../Services/api/addBus.api";

/* ================= ADAPTER ================= */
function getBusView(bus) {
  if (!bus) return null;

  if (bus.forwardRoute && bus.returnRoute) {
    const activeRoute = bus.isReturning ? bus.returnRoute : bus.forwardRoute;

    return {
      ...bus,
      id: bus.busNumber ?? bus.busId,
      stops: activeRoute.stops ?? [],
      currentStopIndex: activeRoute.currentStopIndex ?? 0,
      from: activeRoute.from,
      to: activeRoute.to,
    };
  }

  return bus;
}

/* ================= MAIN COMPONENT ================= */
export default function BusDetails() {
  // const [liveBuses, setLiveBuses] = useState(
  //   initialBuses.map((b) => ({
  //     ...b,
  //     progress: 0,
  //     completedTrips: b.completedTrips ?? 2,
  //     totalTrips: b.totalTrips ?? 5,
  //   }))
  // );
  const [liveBuses, setLiveBuses] = useState([]);

  const [selectedBus, setSelectedBus] = useState(null);
  const [stopShape, setStopShape] = useState("circle");

  // Search filters
  const [searchBusName, setSearchBusName] = useState("");
  const [searchBusId, setSearchBusId] = useState("");

  // Demo clock
  const [demoTime, setDemoTime] = useState(timeToMinutes("10:12 AM"));

  // Edit modal state
  const [isEditBusModalOpen, setIsEditBusModalOpen] = useState(false);
  const [editBusData, setEditBusData] = useState(null);

  /* ================= FETCH LIVE BUSES ================= */
  useEffect(() => {
    const loadLiveBuses = async () => {
      try {
        const res = await fetchLiveBusesApi();
        const busesData = res?.data || [];

        setLiveBuses(
          busesData.map((b) => ({
            ...b,
            id: b.busNumber || b.busId,
            progress: 0,
            completedTrips: b.completedTrips ?? 0,
            totalTrips: b.totalTrips ?? 0,
          }))
        );
      } catch (err) {
        console.error("Failed to fetch live buses:", err);
      }
    };

    loadLiveBuses();

    const interval = setInterval(loadLiveBuses, 10000);

    return () => clearInterval(interval);
  }, []);


  /* ================= ETA-BASED SMOOTH MOVEMENT ================= */
  useEffect(() => {
    const timer = setInterval(() => {
      setDemoTime((t) => t + 0.1);

      setLiveBuses((prevBuses) =>
        prevBuses.map((rawBus) => {
          const bus = getBusView(rawBus);
          if (!bus) return rawBus;

          if (bus.id !== "BUS_001") return rawBus;

          const i = bus.currentStopIndex;
          if (i >= bus.stops.length - 1) return rawBus;

          const startTime = timeToMinutes(bus.stops[i].eta);
          const endTime = timeToMinutes(bus.stops[i + 1].eta);
          const duration = endTime - startTime;
          if (duration <= 0) return rawBus;

          const elapsed = demoTime - startTime;
          const progress = Math.min(Math.max(elapsed / duration, 0), 1);

          if (progress >= 1) {
            return { ...rawBus, currentStopIndex: i + 1, progress: 0 };
          }

          return { ...rawBus, progress };
        })
      );
    }, 1000);

    return () => clearInterval(timer);
  }, [demoTime]);

  /* ================= FILTERED BUSES ================= */
  const filteredBuses = liveBuses.filter((rawBus) => {
    const bus = getBusView(rawBus);
    if (!bus) return false;

    const matchName = bus.name.toLowerCase().includes(searchBusName.toLowerCase());
    const matchId =
      searchBusId === "" ? true : bus.id.toLowerCase().includes(searchBusId.toLowerCase());

    return matchName && matchId;
  });

  /* ================= SELECTED BUS ================= */
  const selectedBusData = liveBuses.find((b) => getBusView(b)?.id === selectedBus);

  /* ================= BUS TYPE BADGE ================= */
  const getBusTypeBadge = (type) => {
    const busType = type?.trim().toUpperCase();
    const map = {
      AC: { color: "#6c757d", fontSize: "15px" },
      NON_AC: { color: "#6c757d", fontSize: "15px" },
      BLUE: { color: "#1E90FF", fontSize: "15px" },
      PINK: { color: "#FF69B4", fontSize: "15px" },
      RED: { color: "#dc3545", fontSize: "15px" },
    };
    return map[busType] || { color: "#dc3545" };
  };

  /* ================= OPEN/SAVE EDIT MODAL ================= */
  const openEditBusModal = (bus) => {
    setEditBusData({ ...bus });
    setIsEditBusModalOpen(true);
  };

  const saveBusEdit = () => {
    setLiveBuses((prev) =>
      prev.map((b) => (b.id === editBusData.id ? editBusData : b))
    );
    setIsEditBusModalOpen(false);
    if (selectedBus === editBusData.id) setSelectedBus(editBusData.id);
  };

  /* ================= RENDER ================= */
  return (
    <div className="row align-items-center mb-4">
      {/* TITLE */}
      <div className="col-12 col-md-6 mb-2 mb-md-0">
        <h4 className="fw-semibold mb-0">Bus Details</h4>
      </div>

      {/* SEARCH FILTERS */}
      <div className="col-12 col-md-6">
        <div className="d-flex gap-2 justify-content-md-end search-filters">
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="Bus Name"
            value={searchBusName}
            onChange={(e) => setSearchBusName(e.target.value)}
            style={{ minWidth: 0 }}
          />
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="Bus ID"
            value={searchBusId}
            onChange={(e) => setSearchBusId(e.target.value)}
            style={{ minWidth: 0 }}
          />
          <button
            className="btn btn-outline-secondary btn-sm flex-shrink-0"
            onClick={() => {
              setSearchBusName("");
              setSearchBusId("");
            }}
          >
            Clear
          </button>
        </div>
      </div>

      {/* BUS CARDS */}
      <div className="row g-4 mx-auto">
        {filteredBuses.map((rawBus) => {
          const bus = getBusView(rawBus);
          if (!bus) return null;

          const isSelected = selectedBus === bus.id;
          const isRoundRoute = bus.stops[0]?.name === bus.stops[bus.stops.length - 1]?.name;

          return (
            <div className="col-xl-4 col-lg-6 col-md-6" key={bus.id}>
              <div
                className={`card eshop-cards border-0 shadow-sm h-100 cursor-pointer position-relative ${
                  isSelected ? "bus-card-selected" : ""
                }`}
                style={{ borderRadius: 14 }}
                onClick={() =>
                  setSelectedBus((prev) => (prev === bus.id ? null : bus.id))
                }
              >
                {/* EDIT BUTTON TOP-RIGHT */}
                <button
                  className="btn btn-sm bg-primary p-1 d-flex-center"
                  style={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    width: 28,
                    height: 28,
                    zIndex: 2,
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    openEditBusModal(bus);
                  }}
                  title="Edit Bus"
                >
                  <i className="ph ph-pencil"></i>
                </button>

                {/* CARD BODY */}
                <div className="card-body d-flex flex-column">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <span className="bg-primary h-45 w-45 d-flex-center b-r-15 f-s-18">
                      <i className="ph-bold ph-bus fs-5"></i>
                    </span>
                    <div>
                      <h6 className="mb-0 fw-semibold">{bus.name}</h6>
                      <small>{bus.id}</small>
                    </div>
                  </div>

                  <p className="small mb-2">
                    {bus.from} → {bus.to}
                  </p>

                  <div className="mb-2">
                    <MiniTimeline stops={bus.stops} currentIndex={bus.currentStopIndex} />
                  </div>

                  <div className="d-flex align-items-center justify-content-between mt-auto route-bottom-row">
                    <span className="badge" style={getBusTypeBadge(bus.type)}>
                      {bus.type}
                    </span>

                    <span
                      className={`badge ${
                        isRoundRoute
                          ? "bg-white-subtle text-black"
                          : "bg-success-subtle text-black"
                      }`}
                    >
                      {isRoundRoute ? "RR" : "LR"}
                    </span>

                    <div className="d-flex align-items-center gap-1 trip-group">
                      <div className="trip-tile">
                        <div className="trip-number">{bus.completedTrips}</div>
                        <div className="trip-label">T.DONE</div>
                      </div>
                      <div className="trip-divider">/</div>
                      <div className="trip-tile">
                        <div className="trip-number">{bus.totalTrips}</div>
                        <div className="trip-label">TRIPS</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* TIMELINE */}
      {selectedBusData && (
        <Timeline
          bus={getBusView(selectedBusData)}
          stopShape={stopShape}
          setStopShape={setStopShape}
          onClose={() => setSelectedBus(null)}
        />
      )}

      {/* EDIT BUS MODAL */}
      {/* EDIT BUS MODAL */}
{editBusData && (
  <EditBusModal
    isOpen={isEditBusModalOpen}
    toggle={() => setIsEditBusModalOpen(!isEditBusModalOpen)} // toggle open/close
    bus={editBusData}        // 🔑 modal expects `bus`, not `busData`
    onSave={saveBusEdit}     // 🔑 handle save
  />
)}

    </div>
  );
}

/* ================= MINI TIMELINE ================= */
function MiniTimeline({ stops, currentIndex }) {
  return (
    <div className="mini-timeline">
      <div className="d-flex align-items-center gap-1">
        {stops.map((_, index) => (
          <span
            key={index}
            className={`rounded-circle ${
              index < currentIndex
                ? "bg-dark"
                : index === currentIndex
                ? "bg-primary"
                : "bg-secondary-subtle"
            }`}
            style={{ width: 8, height: 8 }}
          />
        ))}
        <i className="ph ph-arrow-right ms-2 text-primary small"></i>
      </div>
    </div>
  );
}
