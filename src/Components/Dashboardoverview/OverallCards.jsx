// import React, { useEffect, useState } from "react";
// import { getStopsData } from "../../Data/StopDetails/Stops.Details";
// import {fetchBusesApi} from "../../Services/api/addBus.api"
// import DynamicStopTable from "../../Pages/AddRoutes/AddStops/DynamicStopTable/DynamicStopTable";

// /* ================= DARK MODE DETECTOR ================= */

// const isDarkMode = () =>
//   window.matchMedia &&
//   window.matchMedia("(prefers-color-scheme: dark)").matches;

// /* ================= MAIN COMPONENT ================= */

// const OverallCards = () => {
//   // const [stats, setStats] = useState({});
//   const [activeCard, setActiveCard] = useState(null);
//   const [stopsData, setStopsData] = useState([]);
//   const [buses, setBuses] = useState([]);

//   /* ================= FETCH TOTAL BUSES ================= */
//  useEffect(() => {
//   const fetchDashboardData = async () => {
//     try {
//       // Fetch bus count
//       // const res = await fetch("http://localhost:8000/buses/count");
//       // const data = await res.json();
//       const busRes = await fetchBusesApi();
//       const busData = busRes|| [];
//       setBuses(busData);
//       console.log("ggggggg",busData);

//       // Fetch stops from API
//       const stopData = await getStopsData();
//       setStopsData(stopData);

//       // setStats({
//       //   "No. of Bus": data.total || 0,
//       //   "Active Buses": 95,
//       //   "Offline Buses": 25,
//       //   "Alerts": 7,
//       //   "No. of Stops": stopData.length,
//       //   "Active Stops": stopData.length,
//       //   "Offline Stops": 0,
//       //   "No. of Users": 10,
//       // });


//     } catch (err) {
//       console.error("Dashboard fetch failed", err);
//     }
//   };

//   fetchDashboardData();
// }, []);


//   const cards = [
//     { title: "No. of Bus", color: "primary", icon: "ph-bus" },
//     { title: "Active Buses", color: "success", icon: "ph-bus" },
//     { title: "Offline Buses", color: "danger", icon: "ph-warning-circle" },
//     { title: "Alerts", color: "warning", icon: "ph-bell-ringing" },
//     { title: "No. of Stops", color: "info", icon: "ph-monitor" },
//     { title: "Active Stops", color: "secondary", icon: "ph-monitor" },
//     { title: "Offline Stops", color: "dark", icon: "ph-monitor" },
//     { title: "No. of Users", color: "primary", icon: "ph-user" },
//     // { title: "Alerts", color: "danger", icon: "ph-bell-ringing" },
//     // { title: "Live Trips", color: "success", icon: "ph-navigation-arrow" },
//   ];

//   return (
//     <>
//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           gap: 16,
//           paddingTop: 16,
//           paddingBottom: 16,
//         }}
//       >
//         {cards.map((c) => (
//           <StatCard
//             key={c.title}
//             title={c.title}
//             value={c.title === "No. of Stops"? stopsData.length : 0}
//             color={c.color}
//             icon={c.icon}
//             onClick={() => setActiveCard(c.title)}
//           />
//         ))}
//       </div>

//       {activeCard && (
//         <Popup
//           title={activeCard}
//           rows={activeCard === "No. of Stops" ? stopsData : []}
//           onClose={() => setActiveCard(null)}
//         />
//       )}
//     </>
//   );
// };

// export default OverallCards;



// /* ================= CARD ================= */

// const StatCard = ({ title, value, color, icon, onClick }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let start = 0;
//     const step = Math.ceil(value / 25) || 1;

//     const timer = setInterval(() => {
//       start += step;
//       if (start >= value) {
//         setCount(value);
//         clearInterval(timer);
//       } else {
//         setCount(start);
//       }
//     }, 20);

//     return () => clearInterval(timer);
//   }, [value]);

//   return (
//     <div
//       onClick={onClick}
//       style={{
//         flex: "1 1 calc(20% - 16px)",
//         minWidth: 220,
//         cursor: "pointer",
//       }}
//     >
//       <div className="card eshop-cards" style={{ borderRadius: 14 }}>
//         <div className="card-body">
//           <span className={`bg-${color} h-40 w-40 d-flex-center b-r-15 f-s-18`}>
//             <i className={`ph-bold ${icon}`}></i>
//           </span>

//           <div
//             style={{
//               marginTop: 14,
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//             }}
//           >
//             <span className="f-s-14">{title}</span>
//             <strong className={`text-${color}`} style={{ fontSize: 33 }}>
//               {count}
//             </strong>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // /* ================= POPUP + TABLE + EDIT ================= */

// // const Popup = ({ title, rows = [], onClose }) => {
// //   // const [rows, setRows] = useState([]);
// //   const [editingRow, setEditingRow] = useState(null);
// //   const [form, setForm] = useState({});

// //   // useEffect(() => {
// //   //   const fetchDashboardData = async () => {
// //   //     try {
// //   //       // Fetch bus count
// //   //       const res = await fetch("http://localhost:8000/buses/count");
// //   //       const data = await res.json();

// //   //       // Fetch stops
// //   //       const stopData = await getStopsData();

// //   //       setStopsData(stopData);

// //   //       setStats({
// //   //         "No. of Bus": data.total || 0,
// //   //         "Active Buses": 95,
// //   //         "Offline Buses": 25,
// //   //         "Alerts": 7,
// //   //         "No. of Stops": stopData.length,   // 🔥 Dynamic stop count
// //   //         "Active Stops": stopData.length,
// //   //         "Offline Stops": 0,
// //   //         "No. of Users": 10,
// //   //       });

// //   //     } catch (err) {
// //   //       console.error("Dashboard fetch failed", err);
// //   //     }
// //   //   };

// //   //   fetchDashboardData();
// //   // }, []);


// //   const handleEdit = (row) => {
// //     setEditingRow(row);
// //     setForm(row);
// //   };

// //   const handleSave = async () => {
// //     if (title === "Total Buses") {
// //       await fetch(`http://localhost:8000/buses/${form.id}`, {
// //         method: "PUT",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify(form),
// //       });
// //     }

// //     setRows((prev) =>
// //       prev.map((r) => (r.id === form.id ? form : r))
// //     );
// //     setEditingRow(null);
// //   };

// //   const handleDelete = async (row) => {
// //     if (!window.confirm("Delete this item?")) return;

// //     if (title === "Total Buses") {
// //       await fetch(`http://localhost:8000/buses/${row.id}`, {
// //         method: "DELETE",
// //       });
// //     }

// //     // setRows((prev) => prev.filter((r) => r.id !== row.id));
// //   };

// //   return (
// //     <>
// //       <div
// //         style={{
// //           position: "fixed",
// //           inset: 0,
// //           background: "rgba(0,0,0,0.4)",
// //           backdropFilter: "blur(6px)",
// //           display: "flex",
// //           justifyContent: "center",
// //           alignItems: "center",
// //           zIndex: 9999,
// //         }}
// //       >
// //         <div
// //           style={{
// //             width: "90%",
// //             maxWidth: 900,
// //             background: isDarkMode() ? "#0f172a" : "#ffffff",
// //             color: isDarkMode() ? "#e5e7eb" : "#111827",
// //             borderRadius: 16,
// //             padding: 20,
// //           }}
// //         >
// //           <div style={{ display: "flex", justifyContent: "space-between" }}>
// //             <h3 style={{
// //                 color: isDarkMode() ? "#f8fafc" : "#0f172a",
// //             }}>{title}</h3>
// //             <button
// //             onClick={onClose}
// //             style={{
// //                 width: "32px",
// //                 height: "32px",
// //                 borderRadius: "50%",
// //                 display: "flex",
// //                 alignItems: "center",
// //                 justifyContent: "center",
// //                 fontSize: "16px",
// //                 cursor: "pointer",
// //             }}
// //             >
// //             ✖
// //             </button>

// //           </div>

// //           <table style={{ width: "100%", marginTop: 12 }}>
// //             <thead>
// //               <tr>
// //                 <th>Display ID</th>
// //                 <th>Stop Name</th>
// //                 <th>Route</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {rows.map((r) => (
// //                 <tr key={r._id}>
// //                   <td style={td}>{r.displayId}</td>
// //                   <td style={td}>{r.stopName}</td>
// //                   <td style={td}>{r.route}</td>
// //                   <td style={td}>
// //                     <button onClick={() => handleEdit(r)}>✏</button>
// //                     <button
// //                       onClick={() => handleDelete(r)}
// //                       style={{ marginLeft: 8, color: "red" }}
// //                     >
// //                       🗑
// //                     </button>
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>

// //           </table>
// //         </div>
// //       </div>

// //       {/* ================= EDIT MODAL ================= */}
// //       {editingRow && (
// //         <div
// //           style={{
// //             position: "fixed",
// //             inset: 0,
// //             background: "rgba(0,0,0,0.5)",
// //             display: "flex",
// //             justifyContent: "center",
// //             alignItems: "center",
// //             zIndex: 10000,
// //           }}
// //         >
// //           <div
// //             style={{
// //               background: isDarkMode() ? "#020617" : "#ffffff",
// //               color: isDarkMode() ? "#e5e7eb" : "#111827",
// //               padding: 20,
// //               width: 400,
// //               borderRadius: 12,
// //             }}
// //           >
// //             <h3>Edit {title}</h3>

// //             <label>ID</label>
// //             <input value={form.id} disabled style={input} />

// //             <label>Name</label>
// //             <input
// //               value={form.registration_no || form.name || ""}
// //               onChange={(e) =>
// //                 setForm({
// //                   ...form,
// //                   registration_no: e.target.value,
// //                   name: e.target.value,
// //                 })
// //               }
// //               style={input}
// //             />

// //             <div style={{ marginTop: 12 }}>
// //               <button onClick={handleSave}>Save</button>
// //               <button
// //                 onClick={() => setEditingRow(null)}
// //                 style={{ marginLeft: 8 }}
// //               >
// //                 Cancel
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </>
// //   );
// // };

// // const th = {
// //   textAlign: "left",
// //   padding: 12,
// //   borderBottom: "1px solid #e5e7eb",
// //   color: isDarkMode() ? "#cbd5f5" : "#111827",
// // };

// // const td = {
// //   padding: 12,
// //   borderBottom: "1px solid #e5e7eb",
// //   color: isDarkMode() ? "#e5e7eb" : "#111827",
// // };

// // const input = {
// //   width: "100%",
// //   padding: 8,
// //   marginTop: 6,
// //   marginBottom: 10,
// //   background: isDarkMode() ? "#020617" : "#ffffff",
// //   color: isDarkMode() ? "#e5e7eb" : "#111827",
// //   border: "1px solid #334155",
// // };



// const Popup = ({ title, rows = [], onClose }) => {

//   return (
//     <div style={overlayStyle}>
//       <div style={popupStyle}>

//         <div style={{ display: "flex", justifyContent: "space-between" }}>
//           <h3>{title}</h3>
//           <button onClick={onClose}>✖</button>
//         </div>

//         {title === "No. of Stops" && (
//           <DynamicStopTable
//             allData={rows}
//             setAllData={() => {}}
//           />
//         )}

//       </div>
//     </div>
//   );
// };
// const overlayStyle = {
//   position: "fixed",
//   inset: 0,
//   background: "rgba(0,0,0,0.4)",
//   backdropFilter: "blur(6px)",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   zIndex: 1010,
// };

// const popupStyle = {
//   width: "95%",
//   maxWidth: 1100,
//   background: isDarkMode() ? "#0f172a" : "#ffffff",
//   color: isDarkMode() ? "#e5e7eb" : "#111827",
//   borderRadius: 16,
//   padding: 20,
//   maxHeight: "70vh",
//   overflowY: "auto",
// };


import React, { useEffect, useState } from "react";
import { getStopsData } from "../../Data/StopDetails/Stops.Details";
import { fetchBusesApi } from "../../Services/api/addBus.api";
import DynamicStopTable from "../../Pages/AddRoutes/AddStops/DynamicStopTable/DynamicStopTable";
import DynamicBusTable from "../../Pages/AddRoutes/AddBus/FormWizards/DynamicBusTable";

/* ================= SAFE DARK MODE ================= */
const isDarkMode = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;


/* ================= MAIN COMPONENT ================= */

const OverallCards = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [stopsData, setStopsData] = useState([]);
  const [buses, setBuses] = useState([]);


  /* ================= FETCH DATA ================= */
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const busRes = await fetchBusesApi();
        const busData = busRes?.data || busRes || [];
        setBuses(busData);

        const stopData = await getStopsData();
        setStopsData(stopData);
      } catch (err) {
        console.error("Dashboard fetch failed", err);
      }
    };

    fetchDashboardData();
  }, []);

  /* ================= CARD CONFIG ================= */
  const cards = [
    { title: "No. of Bus", color: "primary", icon: "ph-bus" },
    { title: "Active Buses", color: "success", icon: "ph-bus" },
    { title: "Offline Buses", color: "danger", icon: "ph-warning-circle" },
    { title: "Alerts", color: "warning", icon: "ph-bell-ringing" },
    { title: "No. of Stops", color: "info", icon: "ph-monitor" },
    { title: "Active Stops", color: "secondary", icon: "ph-monitor" },
    { title: "Offline Stops", color: "dark", icon: "ph-monitor" },
    { title: "No. of Users", color: "primary", icon: "ph-user" },
  ];

  /* ================= CARD VALUE RESOLVER ================= */
  const getCardValue = (title) => {
    switch (title) {
      case "No. of Bus":
        return buses.length;

      case "Active Buses":
        return Math.floor(buses.length * 0.7); // dummy

      case "Offline Buses":
        return Math.floor(buses.length * 0.3); // dummy

      case "No. of Stops":
        return stopsData.length;

      case "Active Stops":
        return Math.floor(stopsData.length * 0.8); // dummy

      case "Offline Stops":
        return Math.floor(stopsData.length * 0.2); // dummy

      case "Alerts":
        return 5; // dummy

      case "No. of Users":
        return 10; // dummy

      default:
        return 0;
    }
  };

  /* ================= POPUP DATA RESOLVER ================= */
  const getPopupRows = (title) => {
    switch (title) {
      case "No. of Bus":
      case "Active Buses":
      case "Offline Buses":
        return buses;

      case "No. of Stops":
      case "Active Stops":
      case "Offline Stops":
        return stopsData;

      default:
        return [];
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 16,
          paddingTop: 16,
          paddingBottom: 16,
        }}
      >
        {cards.map((c) => (
          <StatCard
            key={c.title}
            title={c.title}
            value={getCardValue(c.title)}
            color={c.color}
            icon={c.icon}
            onClick={() => setActiveCard(c.title)}
          />
        ))}
      </div>

      {activeCard && (
        <Popup
          title={activeCard}
          rows={getPopupRows(activeCard)}
          onClose={() => setActiveCard(null)}
        />
      )}
    </>
  );
};

export default OverallCards;

/* ================= CARD ================= */

const StatCard = ({ title, value, color, icon, onClick }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = Math.max(1, Math.ceil(value / 25));

    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 20);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div
      onClick={onClick}
      style={{
        flex: "1 1 calc(20% - 16px)",
        minWidth: 220,
        cursor: "pointer",
      }}
    >
      <div className="card eshop-cards" style={{ borderRadius: 14 }}>
        <div className="card-body">
          <span className={`bg-${color} h-40 w-40 d-flex-center b-r-15 f-s-18`}>
            <i className={`ph-bold ${icon}`}></i>
          </span>

          <div
            style={{
              marginTop: 14,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span className="f-s-14">{title}</span>
            <strong className={`text-${color}`} style={{ fontSize: 33 }}>
              {count}
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ================= POPUP ================= */

const Popup = ({ title, rows = [], onClose }) => {
  return (
    <div style={overlayStyle}>
      <div className="card eshop-cards w-100" style={{ maxWidth: 1100 }}>
        <div className="card-body" style={{ maxHeight: "70vh", overflowY: "auto" }}>
          
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3 className="mb-0">{title}</h3>
            <button className="btn btn-sm btn-light" onClick={onClose}>✖</button>
          </div>

          {/* STOPS TABLE */}
          {title.includes("Stops") && (
            <DynamicStopTable allData={rows} setAllData={() => {}} />
          )}

          {/* BUS TABLE */}
          {title.includes("Bus") && (
            <DynamicBusTable allData={rows} setAllData={() => {}} />
          )}

        </div>
      </div>
    </div>
  );
};


/* ================= STYLES ================= */


const overlayStyle = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.4)",
  backdropFilter: "blur(6px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1010,
};

const popupStyle = {
  width: "95%",
  maxWidth: 1100,
  background: isDarkMode() ? "#0f172a" : "#ffffff",
  // color: isDarkMode() ? "#e5e7eb" : "#111827",
  borderRadius: 16,
  padding: 20,
  maxHeight: "70vh",
  overflowY: "auto",
};
