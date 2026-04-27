// import React, { useState, useMemo, useRef } from "react";

// import Swal from "sweetalert2";
// import EditStopModal from "../../../../Components/Modals/EditStopModal";
// import { deleteStopApi,updateStopApi } from "../../../../Services/api/addStop.api";
// import { downloadExcel } from "@/utils/excelDownload";

// import * as XLSX from "xlsx";
// import { saveAs } from "file-saver";


// export default function DynamicStopTable({ allData=[], setAllData, onUpdateStop }) {
//   const scrollRef = useRef(null);
//   const isDragging = useRef(false);
//   const startX = useRef(0);
//   const scrollLeft = useRef(0);

  

//   const [editingStop, setEditingStop] = useState(null);
//   const [modalOpen, setModalOpen] = useState(false);

//   const [stateFilter, setStateFilter] = useState("");
//   const [districtFilter, setDistrictFilter] = useState("");
  

// //   const handleDownloadExcel = () => {
// //   if (!filteredData || filteredData.length === 0) return;

// //   const worksheet = XLSX.utils.json_to_sheet(filteredData); // Convert filtered data
// //   const workbook = XLSX.utils.book_new();
// //   XLSX.utils.book_append_sheet(workbook, worksheet, "Stops");

// //   const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
// //   const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
// //   saveAs(blob, "StopTable.xlsx");
// // };
// // const handleDownloadExcel = async () => {
// //   if (!filteredData || filteredData.length === 0) {
// //     Swal.fire("No data", "Nothing to download", "info");
// //     return;
// //   }

// //   // Build checkbox HTML
// //   // const checkboxHTML = columns
// //   //   .map(
// //   //     col => `
// //   //     <div style="text-align:left">
// //   //       <input type="checkbox" id="col-${col}" value="${col}" />
// //   //       <label for="col-${col}" style="margin-left:6px">
// //   //         ${col.replace(/_/g, " ")}
// //   //       </label>
// //   //     </div>`
// //   //   )
// //   //   .join("");
// // const checkboxHTML = `
// //   <div style="
// //     display: grid;
// //     grid-template-columns: repeat(3, 1fr);
// //     gap: 10px;
// //     text-align: left;
// //     max-height: 300px;
// //     overflow-y: auto;
// //     padding: 10px;
// //   ">
// //     ${columns
// //       .map(
// //         col => `
// //         <label style="display:flex; align-items:center; gap:6px;">
// //           <input type="checkbox" id="col-${col}" value="${col}" />
// //           ${col.replace(/_/g, " ")}
// //         </label>`
// //       )
// //       .join("")}
// //   </div>
// // `;


// //   const { isConfirmed } = await Swal.fire({
// //     title: "Select columns to download",
// //     html: checkboxHTML,
// //     confirmButtonText: "Download Excel",
// //     showCancelButton: true,
// //     preConfirm: () => {
// //       const selected = [];
// //       columns.forEach(col => {
// //         const el = document.getElementById(`col-${col}`);
// //         if (el && el.checked) selected.push(col);
// //       });

// //       if (selected.length === 0) {
// //         Swal.showValidationMessage("Select at least one column");
// //         return false;
// //       }

// //       return selected;
// //     }
// //   });

// //   if (!isConfirmed) return;

// // const selectedColumns = Swal.getPopup().querySelectorAll(
// //     "input[type=checkbox]:checked"
// //   );

// //   const cols = Array.from(selectedColumns).map(cb => cb.value);
// //     downloadExcelWithSelectedColumns(cols);
// //   };
// // const downloadExcelWithSelectedColumns = (selectedColumns) => {
// //   const exportData = filteredData.map(row => {
// //     const obj = {};
// //     selectedColumns.forEach(col => {
// //       obj[col.replace(/_/g, " ")] = row[col];
// //     });
// //     return obj;
// //   });

// //   const worksheet = XLSX.utils.json_to_sheet(exportData);
// //   const workbook = XLSX.utils.book_new();
// //   XLSX.utils.book_append_sheet(workbook, worksheet, "Stops");

// //   const excelBuffer = XLSX.write(workbook, {
// //     bookType: "xlsx",
// //     type: "array"
// //   });

// //   const blob = new Blob([excelBuffer], {
// //     type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
// //   });

// //   saveAs(blob, "Stop_Details.xlsx");
// // };



//   const toggleModal = () => setModalOpen(!modalOpen);

//   const handleEdit = (stop) => {
//     console.log("Edit Clicked",stop)
//     setEditingStop(stop);
//     setModalOpen(true);
//   };
// const handleMouseDown = (e) => {
//   isDragging.current = true;
//   startX.current = e.pageX - scrollRef.current.offsetLeft;
//   scrollLeft.current = scrollRef.current.scrollLeft;

//   // Disable text selection while dragging
//   document.body.style.userSelect = "none";

//   scrollRef.current.style.cursor = "grabbing";
// };

// const handleMouseUp = () => {
//   isDragging.current = false;

//   // Re-enable text selection
//   document.body.style.userSelect = "auto";

//   scrollRef.current.style.cursor = "grab";
// };

// const handleMouseLeave = () => {
//   isDragging.current = false;
//   document.body.style.userSelect = "auto";
//   scrollRef.current.style.cursor = "grab";
// };

// const handleMouseMove = (e) => {
//   if (!isDragging.current) return;
//   e.preventDefault();
//   const x = e.pageX - scrollRef.current.offsetLeft;
//   const walk = (x - startX.current) * 1; // scroll-fast multiplier
//   scrollRef.current.scrollLeft = scrollLeft.current - walk;
// };


//   const handleSave = async (updatedStop) => {
//     try {
//         if (!updatedStop?._id) {
//         Swal.fire("Error", "Stop ID missing", "error");
//         return;
//         }

//         // 🔹 Call backend update API
//         const response = await updateStopApi(updatedStop._id, updatedStop);

//         console.log("Update Response:", response);

//         // 🔥 YOUR API RETURNS OBJECT DIRECTLY
//         const updatedFromServer = response;

//         // 🔹 Update table state
//         setAllData(prev =>
//         prev.map(row =>
//             row._id === updatedStop._id ? updatedFromServer : row
//         )
//         );

//         setEditingStop(null);
//         setModalOpen(false);

//         Swal.fire({
//         title: "Saved!",
//         text: `Stop "${updatedFromServer.stopName}" updated successfully.`,
//         icon: "success",
//         timer: 2000,
//         showConfirmButton: false,
//         });

//     } catch (err) {
//         console.error("Update Error:", err);
//         Swal.fire({
//         title: "Error!",
//         text: "Failed to update stop.",
//         icon: "error",
//         });
//     }
//     };



//   const handleDelete = (stop) => {
//     const stopId = stop._id;

//     if (!stopId) {
//       Swal.fire("Error", "Stop ID missing", "error");
//       return;
//     }

//     Swal.fire({
//       title: `Delete Stop "${stop.stopName}"?`,
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonText: "Yes, delete it!",
//     }).then(async (result) => {
//       if (result.isConfirmed) {
//         try {
//           await deleteStopApi(stopId);
//           setAllData(prev => {
//             if (!Array.isArray(prev)) return [];
//             return prev.filter(row => row._id !== stopId);
//             });


//           Swal.fire("Deleted!", "Stop deleted successfully.", "success");
//         } catch (err) {
//           Swal.fire("Error!", "Failed to delete stop.", "error");
//         }
//       }
//     });
//   };

//   /* =========================
//      FILTER LOGIC
//   ========================= */

//   const states = [
//     ...new Set(
//       allData
//         .filter(Boolean)
//         .map(s => s?.state)
//         .filter(Boolean)
//     )
//   ];

//   const districts = useMemo(() => {
//     if (!stateFilter) {
//       return [
//         ...new Set(
//           allData
//             .filter(Boolean)
//             .map(s => s?.district)
//             .filter(Boolean)
//         )
//       ];
//     }

//     return [
//       ...new Set(
//         allData
//           .filter(s => s?.state === stateFilter)
//           .map(s => s?.district)
//           .filter(Boolean)
//       )
//     ];
//   }, [allData, stateFilter]);

// const columns = useMemo(() => {
//       if (!Array.isArray(allData) || allData.length === 0) return [];

//       const keys = Object.keys(allData[0]);

//       const preferredOrder = [
//         "stopName",
//         "district",
//         "state",
//         "location",
//         "isActive",
//         "stopId",
//         "createdAt",
//         "updatedAt"
//       ];

//       return preferredOrder.filter(k => keys.includes(k));
//     }, [allData]);


//   const filteredData = useMemo(() => {
//     if (!Array.isArray(allData)) return [];

//     return allData
//         .filter(Boolean)
//         .filter(row =>
//         (!stateFilter || row?.state === stateFilter) &&
//         (!districtFilter || row?.district === districtFilter)
//         );
//     }, [allData, stateFilter, districtFilter]);


//   /* =========================
//      STYLES
//   ========================= */

//   const selectStyle = {
//     borderRadius: "8px",
//     padding: "6px 10px",
//     border: "1px solid #ccc"
//   };

//   const buttonStyle = {
//     borderRadius: "6px",
//     padding: "4px 10px",
//     border: "none",
//     cursor: "pointer"
//   };

//   const tableStyle = {
//     width: "100%",
//     borderCollapse: "separate",
//     borderSpacing: 0,
//     border: "1px solid #ddd",
//     borderRadius: "10px",
//     overflow: "hidden"
//   };

//   const thTdStyle = {
//     padding: "10px",
//     textAlign: "left",
//     whiteSpace: "nowrap"
//   };

//   /* =========================
//      UI
//   ========================= */

//   return (
//     <div style={{ padding: 10 }}>

//       {/* HEADER */}
//       <div className="d-flex justify-content-between align-items-center mb-3">
//         <h3>Stop Details</h3>

//         <div className="d-flex gap-2">
//           <select
//             style={selectStyle}
//             value={stateFilter}
//             onChange={(e) => {
//               setStateFilter(e.target.value);
//               setDistrictFilter("");
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
//             {/* <button
//               style={{ ...buttonStyle, background: "#28a745", color: "#fff" }}
//               onClick={handleDownloadExcel}
//             >
//               Download Excel
//             </button> */}
//             <button
//                 className="btn btn-success"
//                 onClick={() =>
//                   downloadExcel({
//                     data: filteredData,
//                     fileName: "Stop_Details.xlsx",
//                     sheetName: "Stops",
//                     hiddenColumns: ["_id", "__v", "updatedAt"],
//                   })
//                 }
//               >
//                 Download Excel
//               </button>

//         </div>
//       </div>

//       {/* TABLE */}
//       <div
//           ref={scrollRef}
//           style={{ width: "100%", overflowX: "auto", minHeight: "250px", cursor: "grab" }}
//           onMouseDown={handleMouseDown}
//           onMouseLeave={handleMouseLeave}
//           onMouseUp={handleMouseUp}
//           onMouseMove={handleMouseMove}
//         >
//         <table style={tableStyle}>
//           <thead style={{ background: "rgba(var(--primary))"}}>
//             <tr>
//               <th style={thTdStyle}>S.No</th>

//               {columns.map((col) => (
//                 <th key={col} style={thTdStyle}>
//                   {col.replace(/_/g, " ")}
//                 </th>
//               ))}

//               <th style={thTdStyle}>Actions</th>
//             </tr>
//           </thead>

//           <tbody>
//             {filteredData.map((row, index) => (
//               <tr key={row._id}>
//                 <td style={thTdStyle}>{index + 1}</td>

//                 {columns.map((col) => (
//                   <td key={col} style={thTdStyle}>
//                     {col === "location"
//                       ? row.location?.coordinates
//                         ? `${row.location.coordinates[1]}, ${row.location.coordinates[0]}`
//                         : "-"
//                       : typeof row[col] === "object"
//                       ? JSON.stringify(row[col])
//                       : row[col]}
//                   </td>
//                 ))}

//                 <td style={thTdStyle}>
//                   <button
//                     style={{ ...buttonStyle, background: "#4CAF50", color: "#fff" }}
//                     onClick={() => handleEdit(row)}
//                   >
//                     Edit
//                   </button>

//                   <button
//                     style={{ ...buttonStyle, background: "#f44336", color: "#fff", marginLeft: 6 }}
//                     onClick={() => handleDelete(row)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>

//         </table>
//       </div>

//       {/* EDIT MODAL */}
//       {editingStop && (
//         <EditStopModal
//           isOpen={modalOpen}
//           toggle={toggleModal}
//           stopData={editingStop}
//           onSave={handleSave}
//         />
//       )}

//     </div>
//   );
// }

import React, { useState, useMemo, useRef } from "react";

import Swal from "sweetalert2";
import EditStopModal from "../../../../Components/Modals/EditStopModal";
import { deleteStopApi, updateStopApi } from "../../../../Services/api/addStop.api";
import { downloadExcel } from "@/utils/excelDownload";

export default function DynamicStopTable({ allData = [], setAllData }) {

  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const [editingStop, setEditingStop] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const [stateFilter, setStateFilter] = useState("");
  const [districtFilter, setDistrictFilter] = useState("");

  const toggleModal = () => setModalOpen(!modalOpen);

  const handleEdit = (stop) => {
    setEditingStop(stop);
    console.log("Edit row data:", stop);
    setModalOpen(true);
  };

  /* =========================
     DRAG SCROLL
  ========================= */

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;

    document.body.style.userSelect = "none";
    scrollRef.current.style.cursor = "grabbing";
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    document.body.style.userSelect = "auto";
    scrollRef.current.style.cursor = "grab";
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    document.body.style.userSelect = "auto";
    scrollRef.current.style.cursor = "grab";
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;

    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX.current;

    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  /* =========================
     UPDATE STOP
  ========================= */

  const handleSave = async (updatedStop) => {
    try {

      if (!updatedStop?._id) {
        Swal.fire("Error", "Stop ID missing", "error");
        return;
      }

      const response = await updateStopApi(updatedStop._id, updatedStop);

      const updatedFromServer = response;

      setAllData(prev =>
        prev.map(row =>
          row._id === updatedStop._id ? updatedFromServer : row
        )
      );

      setEditingStop(null);
      setModalOpen(false);

      Swal.fire({
        title: "Saved!",
        text: `Stop "${updatedFromServer.stopName}" updated successfully.`,
        icon: "success",
        timer: 2000,
        showConfirmButton: false
      });

    } catch (err) {
      console.error("Update Error:", err);

      Swal.fire({
        title: "Error!",
        text: "Failed to update stop.",
        icon: "error"
      });
    }
  };

  /* =========================
     DELETE STOP
  ========================= */

  const handleDelete = (stop) => {

    const stopId = stop._id;

    Swal.fire({
      title: `Delete Stop "${stop.stopName}"?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {

      if (result.isConfirmed) {

        try {

          await deleteStopApi(stopId);

          setAllData(prev =>
            prev.filter(row => row._id !== stopId)
          );

          Swal.fire("Deleted!", "Stop deleted successfully.", "success");

        } catch (err) {

          Swal.fire("Error!", "Failed to delete stop.", "error");

        }
      }
    });
  };

  /* =========================
     FILTERS
  ========================= */

  const states = [
    ...new Set(
      allData
        .filter(Boolean)
        .map(s => s?.state)
        .filter(Boolean)
    )
  ];

  const districts = useMemo(() => {

    if (!stateFilter) {
      return [
        ...new Set(
          allData
            .filter(Boolean)
            .map(s => s?.district)
            .filter(Boolean)
        )
      ];
    }

    return [
      ...new Set(
        allData
          .filter(s => s?.state === stateFilter)
          .map(s => s?.district)
          .filter(Boolean)
      )
    ];

  }, [allData, stateFilter]);

  /* =========================
     COLUMNS
  ========================= */

  const columns = [
    "stopName",
    "route",
    "district",
    "state",
    "latitude",
    "longitude",
    "isActive",
    "stopId",
    "createdAt"
  ];

  /* =========================
     FILTERED DATA
  ========================= */

  const filteredData = useMemo(() => {

    return allData
      .filter(Boolean)
      .filter(row =>
        (!stateFilter || row?.state === stateFilter) &&
        (!districtFilter || row?.district === districtFilter)
      );

  }, [allData, stateFilter, districtFilter]);

  /* =========================
     STYLES
  ========================= */

  const selectStyle = {
    borderRadius: "8px",
    padding: "6px 10px",
    border: "1px solid #ccc"
  };

  const buttonStyle = {
    borderRadius: "6px",
    padding: "4px 10px",
    border: "none",
    cursor: "pointer"
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    border: "1px solid #ddd"
  };

  const thTdStyle = {
    padding: "10px",
    textAlign: "center",
    borderBottom: "1px solid #eee",
    whiteSpace: "nowrap"
  };

  /* =========================
     UI
  ========================= */

  return (

    <div style={{ padding: 10 }}>

      {/* HEADER */}

      <div className="d-flex justify-content-between align-items-center mb-3">

        <h3>Stop Details</h3>

        <div className="d-flex gap-2">

          <select
            style={selectStyle}
            value={stateFilter}
            onChange={(e) => {
              setStateFilter(e.target.value);
              setDistrictFilter("");
            }}
          >
            <option value="">All States</option>

            {states.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}

          </select>

          <select
            style={selectStyle}
            value={districtFilter}
            onChange={(e) => setDistrictFilter(e.target.value)}
            disabled={!stateFilter}
          >

            <option value="">All Districts</option>

            {districts.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}

          </select>

          <button
            className="btn btn-success"
            onClick={() =>
              downloadExcel({
                data: filteredData.map(s => ({
                  stopName: s.stopName,
                  district: s.district,
                  state: s.state,
                  latitude: s.location?.coordinates?.[1],
                  longitude: s.location?.coordinates?.[0],
                  status: s.isActive ? "Active" : "Inactive"
                })),
                fileName: "Stop_Details.xlsx",
                sheetName: "Stops"
              })
            }
          >
            Download Excel
          </button>

        </div>
      </div>

      {/* TABLE */}

      <div
        ref={scrollRef}
        style={{
          width: "100%",
          overflowX: "auto",
          minHeight: "250px",
          cursor: "grab"
        }}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >

        <table style={tableStyle}>

          <thead style={{ background: "rgba(var(--primary))" }}>

            <tr>

              <th style={thTdStyle}>S.No</th>

              {columns.map(col => (
                <th key={col} style={thTdStyle}>
                  {col.charAt(0).toUpperCase() + col.slice(1)}
                </th>
              ))}

              <th style={thTdStyle}>Actions</th>

            </tr>

          </thead>

          <tbody>

            {filteredData.map((row, index) => (

              <tr key={row._id}>

                <td style={thTdStyle}>{index + 1}</td>

                {columns.map(col => (

                  <td key={col} style={thTdStyle}>

                    {col === "latitude"
                      ? row.location?.coordinates?.[1]
                      : col === "longitude"
                      ? row.location?.coordinates?.[0]
                      : col === "isActive"
                      ? row.isActive ? "Active" : "Inactive"
                      : row[col]}

                  </td>

                ))}

                <td style={thTdStyle}>

                  <button
                    style={{ ...buttonStyle, background: "#4CAF50", color: "#fff" }}
                    onClick={() => handleEdit(row)}
                  >
                    Edit
                  </button>

                  <button
                    style={{
                      ...buttonStyle,
                      background: "#f44336",
                      color: "#fff",
                      marginLeft: 6
                    }}
                    onClick={() => handleDelete(row)}
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* MODAL */}

      {editingStop && (

        <EditStopModal
          isOpen={modalOpen}
          toggle={toggleModal}
          stopData={editingStop}
          stops={allData}
          onSave={handleSave}
        />

      )}

    </div>
  );
}

