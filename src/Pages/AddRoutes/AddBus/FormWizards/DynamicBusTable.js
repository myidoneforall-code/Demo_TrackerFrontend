// import React, { useState, useMemo } from "react";
// import sampleBusData from "../sampleBusData";
// import EditBusModal from "../../../../Components/Modals/EditBusModal";

// export default function DynamicBusTable({ allData }) {
//   const [data, setData] = useState(
//     sampleBusData.map((row, index) => ({
//       id: row.deviceId ?? index + 1,
//       ...row,
//     }))
//   );

//   const [editingBus, setEditingBus] = useState(null);
//   const [modalOpen, setModalOpen] = useState(false);

//   const [stateFilter, setStateFilter] = useState("");
//   const [districtFilter, setDistrictFilter] = useState("");

//   const toggleModal = () => setModalOpen(!modalOpen);

//   const handleEdit = (bus) => {
//     setEditingBus(bus);
//     setModalOpen(true);
//   };

//   const handleSave = (updatedBus) => {
//     setData((prev) =>
//       prev.map((row) => (row.id === updatedBus.id ? updatedBus : row))
//     );
//     setEditingBus(null);
//   };

//   const handleDelete = (id) => {
//     setData((prev) => prev.filter((row) => row.id !== id));
//   };

//   // Get unique states & districts
//   const states = [...new Set(sampleBusData.map((b) => b.state))];
//   const districts = useMemo(() => {
//     if (!stateFilter) return [...new Set(sampleBusData.map((b) => b.district))];
//     return [
//       ...new Set(
//         sampleBusData.filter((b) => b.state === stateFilter).map((b) => b.district)
//       ),
//     ];
//   }, [stateFilter]);

//   // columns without forwardRoute & returnRoute
//   const columns = Object.keys(data[0]).filter(
//     (key) => key !== "forwardRoute" && key !== "returnRoute"
//   );

//   // Filtered data
//   const filteredData = useMemo(() => {
//     return data.filter((row) => {
//       return (!stateFilter || row.state === stateFilter) &&
//              (!districtFilter || row.district === districtFilter);
//     });
//   }, [data, stateFilter, districtFilter]);

//   // Common styles
//   const selectStyle = {
//     borderRadius: "8px",
//     padding: "6px 10px",
//     border: "1px solid #ccc",
//     outline: "none",
//   };

//   const buttonStyle = {
//     borderRadius: "6px",
//     padding: "4px 10px",
//     border: "none",
//     cursor: "pointer",
//   };

//   const tableStyle = {
//     width: "100%",
//     borderCollapse: "separate",
//     borderSpacing: 0,
//     border: "1px solid #ddd",
//     borderRadius: "10px",
//     overflow: "hidden",
//   };

//   const thTdStyle = {
//     padding: "10px",
//     textAlign: "left",
//     whiteSpace: "nowrap",
//   };

//   return (
//     <div style={{ padding: 10 }}>
//       <div className="d-flex justify-content-between align-items-center mb-3">
//         <h3>Bus Details</h3>
//         {/* Filters */}
//         <div className="d-flex gap-2">
//           <select
//             style={selectStyle}
//             value={stateFilter}
//             onChange={(e) => {
//               setStateFilter(e.target.value);
//               setDistrictFilter(""); // reset district
//             }}
//           >
//             <option value="">All States</option>
//             {states.map((s) => (
//               <option key={s} value={s}>
//                 {s}
//               </option>
//             ))}
//           </select>

//           <select
//             style={selectStyle}
//             value={districtFilter}
//             onChange={(e) => setDistrictFilter(e.target.value)}
//             disabled={!stateFilter}
//           >
//             <option value="">All Districts</option>
//             {districts.map((d) => (
//               <option key={d} value={d}>
//                 {d}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>

//       <div style={{ width: "100%", overflowX: "auto", minWidth: "900px",
//     minHeight: "400px", }}>
//         <table style={tableStyle}>
//           <thead style={{ background: "#f5f5f5" }}>
//             <tr>
//               {columns.map((col, i) => (
//                 <th
//                   key={col}
//                   style={{
//                     ...thTdStyle,
//                     textTransform: "capitalize",
//                     borderBottom: "1px solid #ddd",
//                     ...(i === 0 ? { borderTopLeftRadius: "10px" } : {}),
//                     ...(i === columns.length - 1 ? { borderTopRightRadius: "10px" } : {}),
//                   }}
//                 >
//                   {col.replace(/_/g, " ")}
//                 </th>
//               ))}
//               <th style={{ ...thTdStyle, borderBottom: "1px solid #ddd", borderTopRightRadius: "10px" }}>
//                 Actions
//               </th>
//             </tr>
//           </thead>

//           <tbody>
//             {filteredData.length > 0 ? (
//               filteredData.map((row, rIdx) => (
//                 <tr key={row.id}>
//                   {columns.map((col, i) => (
//                     <td
//                       key={col}
//                       style={{
//                         ...thTdStyle,
//                         borderBottom: rIdx === filteredData.length - 1 ? "none" : "1px solid #ddd",
//                       }}
//                     >
//                       {row[col]}
//                     </td>
//                   ))}
//                   <td style={{ ...thTdStyle, borderBottom: rIdx === filteredData.length - 1 ? "none" : "1px solid #ddd" }}>
//                     <button style={{ ...buttonStyle, background: "#4CAF50", color: "#fff" }} onClick={() => handleEdit(row)}>
//                       Edit
//                     </button>
//                     <button style={{ ...buttonStyle, background: "#f44336", color: "#fff", marginLeft: 6 }} onClick={() => handleDelete(row.id)}>
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan={columns.length + 1} style={{ textAlign: "center", padding: 20 }}>
//                   No records found for the selected state/district.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {editingBus && (
//         <EditBusModal
//           isOpen={modalOpen}
//           toggle={toggleModal}
//           bus={editingBus}
//           onSave={handleSave}
//         />
//       )}
//     </div>
//   );
// }


  // import React, { useState, useMemo,useRef } from "react";
  // import EditBusModal from "../../../../Components/Modals/EditBusModal";
  // import { deleteBusApi } from "../../../../Services/api/addBus.api";
  // import Swal from "sweetalert2";
  // import { downloadExcel } from "../../../../../src/utils/excelDownload";

  // export default function DynamicBusTable({ allData, setAllData,onUpdateBus }) {
  //   const [editingBus, setEditingBus] = useState(null);
  //   const [modalOpen, setModalOpen] = useState(false);

  //   const [stateFilter, setStateFilter] = useState("");
  //   const [districtFilter, setDistrictFilter] = useState("");

  //   const toggleModal = () => setModalOpen(!modalOpen);

  //   const handleEdit = (bus) => {
  //     setEditingBus(bus);
  //     console.log("Edit component payload data :",bus);
  //     setModalOpen(true);
  //   };
  //   const scrollRef = useRef(null);
  //   const isDragging = useRef(false);
  //   const startX = useRef(0);
  //   const scrollLeft = useRef(0);


  //   const handleMouseDown = (e) => {
  //     const tag = e.target.tagName;
  //     if (["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"].includes(tag)) return;

  //     isDragging.current = true;
  //     startX.current = e.pageX - scrollRef.current.offsetLeft;
  //     scrollLeft.current = scrollRef.current.scrollLeft;

  //     document.body.style.userSelect = "none";
  //     scrollRef.current.style.cursor = "grabbing";
  //   };

  //   const handleMouseMove = (e) => {
  //     if (!isDragging.current) return;
  //     e.preventDefault();

  //     const x = e.pageX - scrollRef.current.offsetLeft;
  //     const walk = x - startX.current;
  //     scrollRef.current.scrollLeft = scrollLeft.current - walk;
  //   };

  //   const stopDragging = () => {
  //     isDragging.current = false;
  //     document.body.style.userSelect = "auto";
  //     if (scrollRef.current) {
  //       scrollRef.current.style.cursor = "grab";
  //     }
  //   };



  //   // const handleSave = (updatedBus) => {
  //   //   const newData = allData.map((row) =>
  //   //     (row.deviceId ?? row.id) === (updatedBus.deviceId ?? updatedBus.id)
  //   //       ? updatedBus
  //   //       : row
  //   //   );
  //   //   setAllData(newData);
  //   //   setEditingBus(null);
  //   // };
  //   const handleSave = async (updatedBus) => {
  //     try {

  //       const payload = {
  //         ...updatedBus,

  //         forwardRoute: {
  //           ...updatedBus.forwardRoute,
  //           stops: (updatedBus.forwardRoute?.stops || []).map(s =>
  //             typeof s === "string" ? s : s.name
  //           )
  //         },

  //         returnRoute: {
  //           ...updatedBus.returnRoute,
  //           stops: (updatedBus.returnRoute?.stops || []).map(s =>
  //             typeof s === "string" ? s : s.name
  //           )
  //         }
  //       };

  //       if (onUpdateBus) {
  //         await onUpdateBus(payload);
  //       }

  //       setEditingBus(null);

  //       Swal.fire({
  //         title: "Saved!",
  //         text: `Bus "${updatedBus.name}" has been updated successfully.`,
  //         icon: "success",
  //         timer: 2000,
  //         showConfirmButton: false,
  //       });

  //     } catch (err) {

  //       console.error("Failed to save bus:", err);

  //       Swal.fire({
  //         title: "Error!",
  //         text: `Failed to save bus "${updatedBus.name}". Please try again.`,
  //         icon: "error",
  //       });

  //     }
  //   };


  //   // const handleDelete = (id) => {
  //   //   const newData = allData.filter(
  //   //     (row) => (row.deviceId ?? row.id) !== id
  //   //   );
  //   //   setAllData(newData);
  //   // };
  //   const handleDelete = (bus) => {
  //     const busId = bus._id; // always use MongoDB _id
  //     if (!busId) {
  //       Swal.fire({
  //         title: "Error",
  //         text: "Bus ID is missing. Cannot delete.",
  //         icon: "error"
  //       });
  //       return;
  //     }

  //     Swal.fire({
  //       title: `Delete Bus "${bus.name}"?`,
  //       text: `Bus ID: ${busId}. This cannot be undone!`,
  //       icon: "warning",
  //       showCancelButton: true,
  //       confirmButtonColor: "#3085d6",
  //       cancelButtonColor: "#d33",
  //       confirmButtonText: "Yes, delete it!"
  //     }).then(async (result) => {
  //       if (result.isConfirmed) {
  //         try {
  //           await deleteBusApi(busId);

  //           setAllData(prev => prev.filter(row => row._id !== busId));

  //           Swal.fire({
  //             title: "Deleted!",
  //             text: `Bus "${bus.name}" (ID: ${busId}) has been deleted.`,
  //             icon: "success"
  //           });
  //         } catch (err) {
  //           console.error("Failed to delete bus:", err);
  //           Swal.fire({
  //             title: "Error!",
  //             text: `Failed to delete bus "${bus.name}". Please try again.`,
  //             icon: "error"
  //           });
  //         }
  //       }
  //     });
  //   };





  //   // Get unique states & districts
  //   const states = [...new Set(allData.map((b) => b.state))];
  //   const districts = useMemo(() => {
  //     if (!stateFilter) return [...new Set(allData.map((b) => b.district))];
  //     return [...new Set(allData.filter((b) => b.state === stateFilter).map((b) => b.district))];
  //   }, [allData, stateFilter]);

  //   // Columns without forwardRoute & returnRoute
  //   const columns = allData[0]
  //     ? Object.keys(allData[0]).filter((key) => key !== "forwardRoute" && key !== "returnRoute")
  //     : [];

  //   // Filtered data
  //   const filteredData = useMemo(() => {
  //     return allData
  //       .map((row, index) => ({ id: row.deviceId ?? index + 1, ...row })) // ensure each row has id
  //       .filter(
  //         (row) =>
  //           (!stateFilter || row.state === stateFilter) &&
  //           (!districtFilter || row.district === districtFilter)
  //       );
  //   }, [allData, stateFilter, districtFilter]);

  //   // Common styles
  //   const selectStyle = { borderRadius: "8px", padding: "6px 10px", border: "1px solid #ccc", outline: "none" };
  //   const buttonStyle = { borderRadius: "6px", padding: "4px 10px", border: "none", cursor: "pointer" };
  //   const tableStyle = { width: "100%", borderCollapse: "separate", borderSpacing: 0, border: "1px solid #ddd", borderRadius: "10px", overflow: "hidden" };
  //   const thTdStyle = { padding: "10px", textAlign: "left", whiteSpace: "nowrap" };

  //   return (
  //     <div style={{ padding: 10 }}>
  //       <div className="d-flex justify-content-between align-items-center mb-3">
  //         <h3>Bus Details</h3>
  //         <div className="d-flex gap-2">
  //           <select
  //             style={selectStyle}
  //             value={stateFilter}
  //             onChange={(e) => {
  //               setStateFilter(e.target.value);
  //               setDistrictFilter(""); // reset district
  //             }}
  //           >
  //             <option value="">All States</option>
  //             {states.map((s) => (
  //               <option key={s} value={s}>{s}</option>
  //             ))}
  //           </select>

  //           <select
  //             style={selectStyle}
  //             value={districtFilter}
  //             onChange={(e) => setDistrictFilter(e.target.value)}
  //             disabled={!stateFilter}
  //           >
  //             <option value="">All Districts</option>
  //             {districts.map((d) => (
  //               <option key={d} value={d}>{d}</option>
  //             ))}
  //           </select>
  //           <button
  //               className="btn btn-success"
  //               onClick={() =>
  //                 downloadExcel({
  //                   data: filteredData,
  //                   fileName: "Bus_Details.xlsx",
  //                   sheetName: "Bus",
  //                   hiddenColumns: ["_id", "__v", "updatedAt"],
  //                 })
  //               }
  //             >
  //               Download Excel
  //             </button>
  //         </div>
  //       </div>

  //       {/* <div style={{ width: "100%", overflowX: "auto", minWidth: "900px", minHeight: "250px" }}> */}
  //       <div
  //         ref={scrollRef}
  //         style={{
  //           width: "100%",
  //           overflowX: "auto",
  //           minWidth: "900px",
  //           minHeight: "250px",
  //           cursor: "grab",
  //           touchAction: "pan-y", // ✅ IMPORTANT
  //         }}
  //         onMouseDown={handleMouseDown}
  //         onMouseMove={handleMouseMove}
  //         onMouseUp={stopDragging}
  //         onMouseLeave={stopDragging}
  //       >

  //         <table style={tableStyle}>
  //           {/* <thead style={{ background: "var(--dark)" }}> */}
  //           <thead style={{ background: "rgba(var(--primary))"}}>
  //             <tr>
  //               <th style={thTdStyle}>S.No</th> {/* ✅ ADD THIS */}

  //               {columns.map((col, i) => (
  //                 <th
  //                   key={col}
  //                   style={{
  //                     ...thTdStyle,
  //                     textTransform: "capitalize",
  //                     borderBottom: "1px solid #ddd",
  //                     // color: "black"
  //                   }}
  //                 >
  //                   {col.replace(/_/g, " ")}
  //                 </th>
  //               ))}

  //               <th style={thTdStyle}>Actions</th>
  //             </tr>
  //           </thead>


  //           <tbody>
  //               {filteredData.map((row, rIdx) => (
  //                 <tr key={row._id}>
                    
  //                   {/* ✅ SERIAL NUMBER */}
  //                   <td style={thTdStyle}>{rIdx + 1}</td>

  //                   {/* {columns.map((col) => (
  //                     <td key={col} style={thTdStyle}>
  //                       {row[col]}
  //                     </td>
  //                   ))} */}
  //                   {columns.map((col) => (
  //                       <td key={col} style={thTdStyle}>
  //                         {Array.isArray(row[col])
  //                           ? row[col].map((item, i) => (
  //                               <div key={i}>
  //                                 {item.direction} - {new Date(item.startTime).toLocaleTimeString()}
  //                               </div>
  //                             ))
  //                           : typeof row[col] === "object" && row[col] !== null
  //                           ? row[col].routeName || JSON.stringify(row[col])
  //                           : row[col]}
  //                       </td>
  //                     ))}

  //                   <td style={thTdStyle}>
  //                     <button
  //                       style={{ ...buttonStyle, background: "#4CAF50", color: "#fff" }}
  //                       onClick={() => handleEdit(allData.find(b => b._id === row._id))}
  //                     >
  //                       Edit
  //                     </button>

  //                     <button
  //                       style={{ ...buttonStyle, background: "#f44336", color: "#fff", marginLeft: 6 }}
  //                       onClick={() => handleDelete({ ...row, _id: row._id })} // ensure _id exists
  //                     >
  //                       Delete
  //                     </button>

  //                   </td>
  //                 </tr>
  //               ))}
  //             </tbody>

  //         </table>
  //       </div>

  //       {editingBus && (
  //         <EditBusModal
  //           isOpen={modalOpen}
  //           toggle={toggleModal}
  //           bus={editingBus}
  //           onSave={handleSave}
  //         />
  //       )}
  //     </div>
  //   );
  // }

import React, { useState, useMemo, useRef } from "react";
import EditBusModal from "../../../../Components/Modals/EditBusModal";
import { deleteBusApi } from "../../../../Services/api/addBus.api";
import Swal from "sweetalert2";
import { downloadExcel } from "../../../../../src/utils/excelDownload";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

export default function DynamicBusTable({ allData, setAllData, onUpdateBus }) {

  const [editingBus, setEditingBus] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const [viewBus, setViewBus] = useState(null);
  const [viewModalOpen, setViewModalOpen] = useState(false);

  const [stateFilter, setStateFilter] = useState("");
  const [districtFilter, setDistrictFilter] = useState("");

  const scrollRef = useRef(null);

  const toggleModal = () => setModalOpen(!modalOpen);

  const handleEdit = (bus) => {
    console.log("handle edit",bus);
    setEditingBus(bus);
    setModalOpen(true);
  };

  const handleRowClick = (bus) => {
    setViewBus(bus);
    setViewModalOpen(true);
  };

  const handleSave = async (updatedBus) => {
    try {

      console.log("data from edit model",updatedBus);

      const payload = {
        ...updatedBus,
        forwardRoute: {
          ...updatedBus.forwardRoute,
          stops: (updatedBus.forwardRoute?.stops || []).map(s =>
            typeof s === "string"
              ? { stopId: s, stopName: s }
              : s
          )
        },
        returnRoute: {
          ...updatedBus.returnRoute,
          stops: (updatedBus.returnRoute?.stops || []).map(s =>
             typeof s === "string"
              ? { stopId: s, stopName: s }
              : s
          )
        }
      };

      if (onUpdateBus) {
        await onUpdateBus(payload);
      }

      // setAllData(prev =>
      //   prev.map(row =>
      //     row._id.toString() === updatedBus._id.toString()
      //       ? { ...row, ...updatedBus }
      //       : row
      //   )
      // );
      setAllData(prev =>
        prev.map(row => {
          if (row._id.toString() === updatedBus._id.toString()) {
            return {
              ...row,
              busName: updatedBus.name,
              busNumber: updatedBus.busNumber, 
              gpsDeviceId: updatedBus.gpsDeviceId || updatedBus.deviceId,
              type: updatedBus.type,
              state: updatedBus.state,
              district: updatedBus.district,
              registrationNumber: updatedBus.registrationNumber,

              // 🔥 FIXED ROUTE UPDATE
              route: {
                forwardStops: (updatedBus.forwardRoute?.stops || []).map((s, i) => ({
                  sequence: i + 1,
                  stopName: s.stopName || s.stopId || s,
                  stopId: s.stopId || s
                })),
                returnStops: (updatedBus.returnRoute?.stops || []).map((s, i) => ({
                  sequence: i + 1,
                  stopName: s.stopName || s.stopId || s,
                  stopId: s.stopId || s
                }))
              }
            };
          }
          return row;
        })
      );

      setEditingBus(null);

      Swal.fire({
        title: "Saved!",
        text: `Bus "${updatedBus.name}" updated`,
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });

    } catch (err) {

      Swal.fire({
        title: "Error!",
        text: "Failed to update bus",
        icon: "error",
      });

    }
  };

  const handleDelete = (bus) => {

    const busId = bus._id;

    Swal.fire({
      title: `Delete Bus "${bus.busName}"?`,
      icon: "warning",
      showCancelButton: true
    }).then(async (result) => {

      if (!result.isConfirmed) return;

      await deleteBusApi(busId);

      // setAllData(prev => prev.filter(row => row._id !== busId));
      setAllData(prev =>
          prev.filter(row => row._id.toString() !== busId.toString())
      );

      Swal.fire("Deleted!", "", "success");

    });

  };

  const states = [...new Set(allData.map((b) => b.state))];

  const districts = useMemo(() => {
    if (!stateFilter) return [...new Set(allData.map((b) => b.district))];
    return [...new Set(allData.filter((b) => b.state === stateFilter).map((b) => b.district))];
  }, [allData, stateFilter]);

  const filteredData = useMemo(() => {
    return allData.filter(
      (row) =>
        (!stateFilter || row.state === stateFilter) &&
        (!districtFilter || row.district === districtFilter)
    );
  }, [allData, stateFilter, districtFilter]);

  return (

    <div className="container-fluid">

      {/* HEADER */}

      <div className="d-flex justify-content-between align-items-center mb-3">

        <h4 className="fw-bold">Bus Details</h4>

        <div className="d-flex gap-2">

          <select
            className="form-select"
            value={stateFilter}
            onChange={(e) => {
              setStateFilter(e.target.value);
              setDistrictFilter("");
            }}
          >
            <option value="">All States</option>
            {states.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>

          <select
            className="form-select"
            value={districtFilter}
            onChange={(e) => setDistrictFilter(e.target.value)}
          >
            <option value="">All Districts</option>
            {districts.map((d) => (
              <option key={d}>{d}</option>
            ))}
          </select>

          <button
            className="btn btn-success"
            onClick={() =>
              downloadExcel({
                data: allData
                  .filter(
                    (row) =>
                      (!stateFilter || row.state === stateFilter) &&
                      (!districtFilter || row.district === districtFilter)
                  ),
                fileName: "Bus_Details.xlsx",
                sheetName: "Bus",
                hiddenColumns: ["_id", "__v", "updatedAt"],
              })
            }
          >
            Download Excel
          </button>

        </div>
      </div>


      {/* TABLE */}

      <div className="table-responsive">

        <table className="table table-hover table-bordered align-middle">

          <thead className="table-primary text-center">

            <tr>

              <th>S.No</th>
              <th>Bus Name</th>
              <th>State</th>
              <th>District</th>
              <th>Device ID</th>
              <th>Route</th>
              <th>Trips</th>
              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {filteredData.map((bus, index) => {

              const stops = bus.route?.forwardStops || [];
              // const from = stops[0]?.stopId || "-";
              // const to = stops[stops.length - 1]?.stopId || "-";
              const from = stops[0]?.stopName || stops[0]?.stopId || "-";
              const to = stops[stops.length - 1]?.stopName || stops[stops.length - 1]?.stopId || "-";

              return (

                <tr
                  key={bus._id}
                  style={{ cursor: "pointer" }}
                  onClick={() => handleRowClick(bus)}
                >

                  <td className="text-center">{index + 1}</td>

                  <td><strong>{bus.busName}</strong></td>

                  <td>{bus.state}</td>

                  <td>{bus.district}</td>

                  <td>
                    <span className="badge bg-secondary">
                      {bus.gpsDeviceId}
                    </span>
                  </td>

                  <td>
                    <span className="badge bg-info text-dark">{from}</span>
                    <span className="mx-1">→</span>
                    <span className="badge bg-info text-dark">{to}</span>
                  </td>

                  {/* <td>
                    <span className="badge bg-success">
                      {bus.trips?.length || 0}
                    </span>
                  </td> */}
                  <td className="text-center">

                    <span className="badge bg-primary me-1">
                      F: {bus.trips?.filter(t => t.direction === "FORWARD").length || 0}
                    </span>

                    <span className="badge bg-warning text-dark">
                      R: {bus.trips?.filter(t => t.direction === "RETURN").length || 0}
                    </span>

                  </td>

                  <td className="text-center">

                    <button
                      className="btn btn-sm btn-success me-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEdit(bus);
                      }}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-sm btn-danger"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(bus);
                      }}
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              );

            })}

          </tbody>

        </table>

      </div>


      {/* BUS DETAILS POPUP */}

      <Modal isOpen={viewModalOpen} toggle={() => setViewModalOpen(false)} size="lg">

        <ModalHeader toggle={() => setViewModalOpen(false)}>
          Bus Details
        </ModalHeader>

        <ModalBody>

          {viewBus && (

            <div className="row">

              <div className="col-md-6">

                <div className="card mb-3">

                  <div className="card-header bg-primary text-white">
                    Bus Info
                  </div>

                  <div className="card-body">

                    <p><b>Name:</b> {viewBus.busName}</p>
                    <p><b>Device:</b> {viewBus.gpsDeviceId}</p>
                    <p><b>Bus Number:</b> {viewBus.busNumber}</p>
                    <p><b>State:</b> {viewBus.state}</p>
                    <p><b>District:</b> {viewBus.district}</p>
                    <p><b>Type:</b> {viewBus.type}</p>

                  </div>

                </div>

              </div>


              <div className="col-md-6">

                <div className="card mb-3">

                  <div className="card-header bg-success text-white">
                    Trips
                  </div>

                  <ul className="list-group list-group-flush">

                    {viewBus.trips?.map((t, i) => (

                      <li key={i} className="list-group-item">

                        <span className="badge bg-primary me-2">
                          {t.direction}
                        </span>

                        {/* {new Date(t.startTime).toLocaleTimeString()} */}
                        {t.startTime}

                      </li>

                    ))}

                  </ul>

                </div>

              </div>


              <div className="col-md-6">

                <div className="card">

                  <div className="card-header bg-info text-dark">
                    Forward Route
                  </div>

                  <ul className="list-group list-group-flush">

                    {viewBus.route?.forwardStops?.map((s, i) => (

                      <li key={i} className="list-group-item">
                        {s.sequence}. {s.stopName}
                      </li>

                    ))}

                  </ul>

                </div>

              </div>


              <div className="col-md-6">

                <div className="card">

                  <div className="card-header bg-warning">
                    Return Route
                  </div>

                  <ul className="list-group list-group-flush">

                    {viewBus.route?.returnStops?.map((s, i) => (

                      <li key={i} className="list-group-item">
                        {s.sequence}. {s.stopName}
                      </li>

                    ))}

                  </ul>

                </div>

              </div>

            </div>

          )}

        </ModalBody>

      </Modal>


      {/* EDIT MODAL */}

      {editingBus && (

        <EditBusModal
          isOpen={modalOpen}
          toggle={toggleModal}
          bus={editingBus}
          onSave={handleSave}
        />

      )}

    </div>

  );

}