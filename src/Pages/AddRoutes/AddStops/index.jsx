// import React, { Suspense } from "react";
// // import BusDetails from "@/Components/Busdetails/BusDetails";
// import StopForm from "../../../Components/AddStops/StopForm";

// const AddStops = () => {
//   return (
//     <Suspense fallback="">
//       <div className="container-fluid">
//         <div className="row">
//           <div className="col-12">
//             <StopForm/>
//           </div>
//         </div>
//       </div>
//     </Suspense>
//   );
// };

// export default AddStops;



// import React, { Suspense, useState } from "react";
// import { Container, Row, Col, Button } from "reactstrap";
// import StopForm from "../../../Components/AddStops/StopForm";

// const AddStops = () => {
//   const [tableVisible, setTableVisible] = useState(true);
//   const toggleTable = () => setTableVisible(prev => !prev);

//   return (
//     <Suspense fallback="">
//       <main>  {/* Added */}
//         <Container fluid>  {/* Changed from div.container-fluid to Container fluid */}
//           {/* Page Header */}
//           <header>
//             <Row className="m-1 align-items-center">
//               <Col xs={12} className="d-flex justify-content-between align-items-center">
//                 <div>
//                   <h4 className="main-title mb-0">Add Stops</h4>
//                   <ul className="app-line-breadcrumbs mb-3">
//                     <li>
//                       <span className="f-s-14 f-w-500">
//                         <i className="ph-duotone ph-hand-heart f-s-16"></i> Ready To Use
//                       </span>
//                     </li>
//                     <li className="active">
//                       <span className="f-s-14 f-w-500">Form Wizards</span>
//                     </li>
//                   </ul>
//                 </div>

//                 {/* Table Toggle Button */}
//                 <Button color={tableVisible ? "danger" : "success"} onClick={toggleTable}>
//                   {tableVisible ? "Hide Records" : "Show Records"}
//                 </Button>
//               </Col>
//             </Row>
//           </header>

//           {/* Stop Form */}
//           <Row className="mt-3">
//             <Col xs={12}>
//               <StopForm />
//             </Col>
//           </Row>
//         </Container>
//       </main>
//     </Suspense>
//   );
// };

// export default AddStops;

// import React, { Suspense, useState, useEffect } from "react";
// import { Container, Row, Col, Button } from "reactstrap";
// import StopForm from "../../../Components/AddStops/StopForm";
// import DynamicStopTable from "../AddStops/DynamicStopTable/DynamicStopTable";
// import { fetchStopsApi } from "../../../Services/api/addStop.api";

// const AddStops = () => {
//   const [tableVisible, setTableVisible] = useState(true);
//   const [allStops, setAllStops] = useState([]);

//   const toggleTable = () => setTableVisible(prev => !prev);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const loadStops = async () => {
//       try {
//         setLoading(true);

//         const res = await fetchStopsApi();
//         const safeData = Array.isArray(res?.data)
//           ? res.data
//           : Array.isArray(res)
//           ? res
//           : [];

//         setAllStops(safeData);

//       } catch (err) {
//         console.error("Failed to fetch stops:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadStops();
//   }, []);



//   /* =========================
//      FETCH STOPS FROM BACKEND
//   ========================= */
//   useEffect(() => {
//     const loadStops = async () => {
//       try {
//         const res = await fetchStopsApi();

//         console.log("API Response:", res);

//         // If backend returns array directly
//         const safeData = Array.isArray(res)
//           ? res
//           : [];

//         setAllStops(safeData);

//       } catch (err) {
//         console.error("Failed to fetch stops:", err);
//         setAllStops([]); // fallback
//       }
//     };

//     loadStops();
//   }, []);


//   return (
//     <Suspense fallback="">
//       <main>
//         <Container fluid>

//           {/* HEADER */}
//           <Row className="m-1 align-items-center">
//             <Col xs={12} className="d-flex justify-content-between align-items-center">
//               <div>
//                 <h4 className="main-title mb-0">Add Stops</h4>
//               </div>

//               <Button
//                 color={tableVisible ? "danger" : "success"}
//                 onClick={toggleTable}
//               >
//                 {tableVisible ? "Hide Records" : "Show Records"}
//               </Button>
//             </Col>
//           </Row>

//           {/* FORM */}
//           <Row className="mt-3">
//             <Col xs={12}>
//               <StopForm allStops={allStops} setAllStops={setAllStops} />
//             </Col>
//           </Row>
//           <hr className="my-5" />

//          {/* ================= TABLE ================= */}
//           <Row className="mt-4">
//             <Col xs={12}>
//               {tableVisible ? (
//                 loading ? (
//                   <div className="text-center p-5">Loading stops...</div>
//                 ) : (
//                   <DynamicStopTable
//                     allData={allStops}
//                     setAllData={setAllStops}
//                   />
//                 )
//               ) : (
//                 <div
//                   className="text-center p-5"
//                   style={{ fontStyle: "italic", color: "#888" }}
//                 >
//                   The stop records table is hidden. Click "Show Records" to view it.
//                 </div>
//               )}
//             </Col>
//           </Row>


//         </Container>
//       </main>
//     </Suspense>
//   );
// };

// export default AddStops;
import React, { Suspense, useState, useEffect } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import StopForm from "../../../Components/AddStops/StopForm";
import DynamicStopTable from "../AddStops/DynamicStopTable/DynamicStopTable";
import { fetchStopsApi } from "../../../Services/api/addStop.api";

const AddStops = () => {
  const [tableVisible, setTableVisible] = useState(true);
  const [allStops, setAllStops] = useState([]);
  const [loading, setLoading] = useState(true);

  const toggleTable = () => setTableVisible((prev) => !prev);

  /* =========================
     FETCH STOPS FROM BACKEND
  ========================= */
  useEffect(() => {
    const loadStops = async () => {
      try {
        setLoading(true);

        const res = await fetchStopsApi();

        // 🔥 Handle both axios and direct array response
        const safeData = Array.isArray(res?.data)
          ? res.data
          : Array.isArray(res)
          ? res
          : [];

        setAllStops(safeData);
      } catch (err) {
        console.error("Failed to fetch stops:", err);
        setAllStops([]);
      } finally {
        setLoading(false);
      }
    };

    loadStops();
  }, []);

  return (
    <Suspense fallback="">
      <main>
        <Container fluid>

          {/* ================= HEADER ================= */}
          <Row className="m-1 align-items-center">
            <Col xs={12} className="d-flex justify-content-between align-items-center">
              <h4 className="main-title mb-0">Add Stops</h4>

              <Button
                color={tableVisible ? "danger" : "success"}
                onClick={toggleTable}
              >
                {tableVisible ? "Hide Records" : "Show Records"}
              </Button>
            </Col>
          </Row>

          {/* ================= FORM ================= */}
          <Row className="mt-3">
            <Col xs={12}>
              <StopForm allStops={allStops} setAllStops={setAllStops} />
            </Col>
          </Row>

          <hr className="my-5" />

          {/* ================= TABLE ================= */}
          <Row className="mt-4">
            <Col xs={12}>
              {tableVisible ? (
                loading ? (
                  <div className="text-center p-5">
                    Loading stops...
                  </div>
                ) : (
                  <DynamicStopTable
                    allData={allStops}
                    setAllData={setAllStops}
                  />
                )
              ) : (
                <div
                  className="text-center p-5"
                  style={{ fontStyle: "italic", color: "#888" }}
                >
                  The stop records table is hidden. Click "Show Records" to view it.
                </div>
              )}
            </Col>
          </Row>

        </Container>
      </main>
    </Suspense>
  );
};

export default AddStops;
