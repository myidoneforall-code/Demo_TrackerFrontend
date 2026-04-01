// import React from "react";
// import "./LedDisplay.css";

// export default function LedDisplay({ text, color }) {
//   return (
//     <div className="led-frame">
//       <div
//         className="led-text"
//         style={{ color }}
//       >
//         {text}
//       </div>
//     </div>
//   );
// }



// // LedDisplay.jsx
// import React from "react";
// import "./LedDisplay.css";

// /* ===== TIME HELPER ===== */
// function timeToMinutes(timeStr) {
//   if (!timeStr) return null;

//   const [time, meridian] = timeStr.split(" ");
//   let [hours, minutes] = time.split(":").map(Number);

//   if (meridian === "PM" && hours !== 12) hours += 12;
//   if (meridian === "AM" && hours === 12) hours = 0;

//   return hours * 60 + minutes;
// }

// export default function LedDisplay({ stop, buses }) {
//   // ❗ stop illatti nothing to show
//   if (!stop) return null;

//   const hasBuses = Array.isArray(buses) && buses.length > 0;

//   return (
//     <div className="led-frame">
//       {/* ===== FIXED HEADER (ALWAYS SHOW) ===== */}
//       <div className="led-header">
//         {stop.stopName}  -  Display ID{stop.displayId} | lat:{stop.lat}, Lon:{stop.lon} 
//       </div>

//       <div className="led-sub">
//         Direction : {stop.direction}
//         {/* Display ID: {stop.displayId} | {stop.lat}, {stop.lon} */}
//       </div>

//       {/* ===== BUS DATA AVAILABLE ===== */}
//       {hasBuses && (
//         <div className="led-marquee">
//           <div className="led-content">
//             {buses.map((bus, index) => {
//               const { route, stopIndex } = bus;
//               const currentIndex = route.currentStopIndex;

//               let statusText = "";
//               let statusClass = "";

//               /* ================= CORE DISPLAY LOGIC ================= */

//               // 🟢 Bus exactly at this stop
//               if (currentIndex === stopIndex) {
//                 statusText = "ARRIVED";
//                 statusClass = "arrived";
//               }

//               // 🟡 Bus yet to arrive
//               else if (currentIndex < stopIndex) {
//                 const currentStop = route.stops[currentIndex];
//                 const targetStop = route.stops[stopIndex];

//                 // Schedule-based ETA
//                 if (currentStop?.eta && targetStop?.eta) {
//                   const currentMin = timeToMinutes(currentStop.eta);
//                   const targetMin = timeToMinutes(targetStop.eta);
//                   const diff = targetMin - currentMin;

//                   statusText =
//                     diff > 1
//                       ? `IN ${diff} MIN`
//                       : "ARRIVING";
//                 }

//                 // Halt based
//                 else if (targetStop?.halt) {
//                   statusText = `IN ${targetStop.halt}`;
//                 }

//                 // Fallback
//                 else {
//                   const stopsLeft = stopIndex - currentIndex;
//                   statusText = `IN ${stopsLeft * 3} MIN`;
//                 }

//                 statusClass = "will-arrive";
//               }

//               /* ====================================================== */

//               const color =
//                 bus.type === "Red"
//                   ? "#dc3545"
//                   : bus.type === "BLUE"
//                   ? "#0d6efd"
//                   : bus.type === "PINK"
//                   ? "#e83e8c"
//                   : bus.type === "AC"
//                   ? "#198754"
//                   : "#ffffff";

//               return (
//                 <div
//                   key={bus.deviceId}
//                   className="led-bus-row"
//                   style={{ color }}
//                 >
//                   {index + 1}. Bus {bus.name} ({bus.busNumber})
//                   <span className={`led-time ${statusClass}`}>
//                     {" "}
//                     → {statusText}
//                   </span>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       )}

//       {/* ===== NO BUS DATA (JUST DISPLAY INFO) ===== */}
//       {!hasBuses && (
//         <div className="led-marquee">
//           <div className="led-content">
//             {/* intentionally empty – LED ON, no buses */}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }




// import React from "react";
// import "./LedDisplay.css";

// /* ===== TIME HELPER ===== */
// function timeToMinutes(timeStr) {
//   if (!timeStr) return null;

//   const [time, meridian] = timeStr.split(" ");
//   let [hours, minutes] = time.split(":").map(Number);

//   if (meridian === "PM" && hours !== 12) hours += 12;
//   if (meridian === "AM" && hours === 12) hours = 0;

//   return hours * 60 + minutes;
// }

// export default function LedDisplay({ stop, buses }) {
//   if (!stop) return null;

//   const hasBuses = Array.isArray(buses) && buses.length > 0;

//   return (
//     <div className="led-frame">
//       {/* ===== HEADER ===== */}
//       <div className="led-header">
//         {stop.stopName} - Display ID-{stop.displayId}
//       </div>

//       <div className="led-sub">
//         Direction: {stop.direction}
//       </div>

//       {/* ===== BUS LIST ===== */}
//       {hasBuses && (
//         <div className="led-list">
//           {/* Column Headers */}
//           {/* <div className="led-bus-row led-header-row">
//             <div className="col col-name">Bus Name</div>
//             <div className="col col-route">From → To</div>
//             <div className="col col-status">Arriving Time</div>
//             <div className="col col-number">Bus Number</div>
//           </div> */}

//           {buses.map((bus) => {
//             const { route, stopIndex } = bus;
//             const currentIndex = route.currentStopIndex;

//             let statusText = "";
//             let statusClass = "";

//             /* ===== ETA LOGIC ===== */
//             if (currentIndex === stopIndex) {
//               statusText = "ARRIVED";
//               statusClass = "arrived";
//             } else if (currentIndex < stopIndex) {
//               const currentStop = route.stops[currentIndex];
//               const targetStop = route.stops[stopIndex];

//               if (currentStop?.eta && targetStop?.eta) {
//                 const diff =
//                   timeToMinutes(targetStop.eta) -
//                   timeToMinutes(currentStop.eta);

//                 statusText = diff > 1 ? `IN ${diff} MIN` : "ARRIVING";
//               } else {
//                 statusText = "ON THE WAY";
//               }

//               statusClass = "will-arrive";
//             }

//             return (
//               <div key={bus.deviceId} className="led-bus-row">
//                 <div className="col col-name">{bus.name}</div>
//                 <div className="col col-route">
//                   {/* {route.from} → {route.to} */}
//                   {route.from}
//                 </div>
//                 <div className={`col col-status ${statusClass}`}>
//                   {statusText}
//                 </div>
//                 <div className="col col-number">{bus.busNumber}</div>
//               </div>
//             );
//           })}
//         </div>
//       )}

//       {/* ===== NO BUS DATA ===== */}
//       {!hasBuses && (
//         <div className="led-list">
//           <div className="led-empty">NO BUSES AVAILABLE</div>
//         </div>
//       )}
//     </div>
//   );
// }


import React from "react";
import "./LedDisplay.css";

export default function LedDisplay({ stop, buses }) {
  if (!stop) return null;

  const hasBuses = Array.isArray(buses) && buses.length > 0;

  return (
    <div className="led-frame">
      {/* ===== HEADER ===== */}
      <div className="led-header">
        {stop.stopName} - Display ID-{stop.stopId}
      </div>

      <div className="led-sub">
        Direction: {stop.direction}
      </div>

      {/* ===== BUS LIST ===== */}
      {hasBuses && (
        <div className="led-list">

          {buses.map((bus, index) => (
            <div key={index} className="led-bus-row">

              {/* Bus Name */}
              <div className="col col-name">
                {bus.busNo}
              </div>

              {/* Bus Number */}
              <div className="col col-number">
                {bus.route}
              </div>

              {/* ETA */}
              <div className="col col-status">
                {bus.eta} min
              </div>

            </div>
          ))}

        </div>
      )}

      {/* ===== NO BUS DATA ===== */}
      {!hasBuses && (
        <div className="led-list">
          <div className="led-empty">NO BUSES AVAILABLE</div>
        </div>
      )}
    </div>
  );
}