// import React, { Suspense } from "react";
// // import BusDetails from "@/Components/Busdetails/BusDetails";
// import { Col, Container, Row  } from "reactstrap";
// import NumberWizard from "./FormWizards/NumberWizard";
// // import IconWizards from "./FormWizards/IconWizards";
// // import VerticalNumberWizard from "./FormWizards/VerticalNumberWizard";
// // import VerticalIconWizards from "./FormWizards/VerticalIconWizards";

// const AddBus = () => {
//   return (
//     <Suspense fallback="">
//       <div>
//             <Container fluid>

//                 <Row className="m-1">
//                     <Col xs={12} >
//                         <h4 className="main-title">form wizards</h4>
//                         <ul className="app-line-breadcrumbs mb-3">
//                             <li className="">
//                                 <a href="#" className="f-s-14 f-w-500">
//                       <span>
//                         <i className="ph-duotone  ph-hand-heart f-s-16"></i> Ready To Use
//                       </span>
//                                 </a>
//                             </li>
//                             <li className="active">
//                                 <a href="#" className="f-s-14 f-w-500">form wizards</a>
//                             </li>
//                         </ul>
//                     </Col>
//                 </Row>

//                 <Row>
//                     <Col xs={12} lg={6}>
//                         <NumberWizard/>
//                     </Col>
//                     {/* <Col xs={12} lg={6}>
//                         <IconWizards/>
//                     </Col>
//                     <Col xs={12} lg={6}>
//                         <VerticalNumberWizard/>
//                     </Col>
//                     <Col xs={12} lg={6}>
//                         <VerticalIconWizards/>
//                     </Col> */}
//                 </Row>
//             </Container>
//         </div>
//     </Suspense>
//   );
// };

// export default AddBus;



  // import React, { Suspense } from "react";
  // import { Col, Container, Row } from "reactstrap";
  // import NumberWizard from "./FormWizards/NumberWizard";

  // const AddBus = () => {
  //   return (
  //     <Suspense fallback="">
  //       <div>
  //         <Container fluid>

  //           {/* Page Header */}
  //           <Row className="m-1">
  //             <Col xs={12}>
  //               <h4 className="main-title">Form Wizards</h4>
  //               <ul className="app-line-breadcrumbs mb-3">
  //                 <li>
  //                   <a href="#" className="f-s-14 f-w-500">
  //                     <span>
  //                       <i className="ph-duotone ph-hand-heart f-s-16"></i>{" "}
  //                       Ready To Use
  //                     </span>
  //                   </a>
  //                 </li>
  //                 <li className="active">
  //                   <a href="#" className="f-s-14 f-w-500">
  //                     Form Wizards
  //                   </a>
  //                 </li>
  //               </ul>
  //             </Col>
  //           </Row>

  //           {/* Centered Wizard */}
  //           <Row className="justify-content-center mt-3">
  //             <Col xs={12} md={10} lg={8} xl={7}>
  //               <NumberWizard />
  //             </Col>
  //           </Row>

  //         </Container>
  //       </div>
  //     </Suspense>
  //   );
  // };

  // export default AddBus;

// import React, { Suspense, lazy, useState } from "react";
// import { Col, Container, Row, Button } from "reactstrap";
// import sampleBusData from "../AddBus/sampleBusData";

// const NumberWizard = lazy(() => import("./FormWizards/NumberWizard"));
// const DynamicBusTable = lazy(() => import("./FormWizards/DynamicBusTable"));

// const AddBus = () => {

//   const [allData, setAllData] = useState([...sampleBusData]); // <-- move here

//   const [tableVisible, setTableVisible] = useState(true);

//   const toggleTable = () => setTableVisible((prev) => !prev);

//   return (
//     <Suspense
//       fallback={
//         <div
//           className="d-flex justify-content-center align-items-center"
//           style={{ minHeight: "60vh" }}
//         >
//           <span className="loader" />
//         </div>
//       }
//     >
//       <main>
//         <Container fluid>
//           {/* Page Header */}
//           <header>
//             <Row className="m-1 align-items-center">
//               <Col xs={12} className="d-flex justify-content-between align-items-center">
//                 <div>
//                   <h4 className="main-title mb-0">Add Bus</h4>
//                   <ul className="app-line-breadcrumbs mb-3">
//                     <li>
//                       <span className="f-s-14 f-w-500">
//                         <i className="ph-duotone ph-hand-heart f-s-16"></i>{" "}
//                         Ready To Use
//                       </span>
//                     </li>
//                     <li className="active">
//                       <span className="f-s-14 f-w-500">Form Wizards</span>
//                     </li>
//                   </ul>
//                 </div>

//                 {/* Record Button */}
//                 <Button color={tableVisible ? "danger" : "success"} onClick={toggleTable}>
//                   {tableVisible ? "Hide Records" : "Show Records"}
//                 </Button>
//               </Col>
//             </Row>
//           </header>

//           {/* Wizard */}
//           <Row className="justify-content-center mt-3">
//             <Col xs={12} md={10} lg={8} xl={7}>
//               {/* <NumberWizard /> */}
//               <NumberWizard allData={allData} setAllData={setAllData} />

//             </Col>
//           </Row>

//           <hr className="my-5" />

//           {/* Table Section */}
//           <Row className="mt-5">
//             <Col xs={12}>
//               {tableVisible ? (
//                 <DynamicBusTable allData={allData} setAllData={setAllData} />
//               ) 
//               : (
//                 <div className="text-center p-5" style={{ fontStyle: "italic", color: "#888" }}>
//                   The bus records table is hidden. Click "Show Records" to view it.
//                 </div>
//               )}
//             </Col>
//           </Row>
//         </Container>
//       </main>
//     </Suspense>
//   );
// };

// export default AddBus;

import React, { Suspense, lazy, useState, useEffect } from "react";
import { Col, Container, Row, Button } from "reactstrap";
import { fetchBusesApi, updateBusApi } from "../../../Services/api/addBus.api";
import { DateTime } from "luxon";

const NumberWizard = lazy(() => import("./FormWizards/NumberWizard"));
const DynamicBusTable = lazy(() => import("./FormWizards/DynamicBusTable"));

const AddBus = () => {

  const [allData, setAllData] = useState([]);
  const [tableVisible, setTableVisible] = useState(true);
  const [loading, setLoading] = useState(false);

  const toggleTable = () => setTableVisible((prev) => !prev);

  useEffect(() => {
    loadBuses();
  }, []);

  const updateBus = async (bus) => {
    try {
      await updateBusApi(bus._id, bus);
      await loadBuses();
    } catch (err) {
      console.error("Failed to update bus:", err);
    }
  };

  /* =========================================
     🔥 CONVERT UTC → IST (MAIN FIX)
  ========================================= */
  const convertTripsToIST = (data) => {
    return data.map(bus => ({
      ...bus,
      trips: (bus.trips || []).map(t => ({
        ...t,
        startTimeIST: DateTime.fromISO(t.startTime, { zone: "utc" })
          .setZone("Asia/Kolkata")
          .toFormat("HH:mm")
      }))
    }));
  };

  /* =========================================
     FETCH DATA
  ========================================= */
  const loadBuses = async () => {
    try {
      setLoading(true);

      const res = await fetchBusesApi();

      // 🔥 convert here
      const formatted = convertTripsToIST(res);

      console.log("✅ RAW (UTC):", res);
      console.log("🔥 IST VIEW:", formatted);

      setAllData(formatted);

    } catch (err) {
      console.error("❌ Failed to fetch buses:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Suspense
      fallback={
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "60vh" }}
        >
          <span className="loader" />
        </div>
      }
    >
      <main>
        <Container fluid>

          <header>
            <Row className="m-1 align-items-center">
              <Col xs={12} className="d-flex justify-content-between align-items-center">
                <div>
                  <h4 className="main-title mb-0">Add Bus</h4>
                  <ul className="app-line-breadcrumbs mb-3">
                    <li>
                      <span className="f-s-14 f-w-500">
                        <i className="ph-duotone ph-hand-heart f-s-16"></i>{" "}
                        Ready To Use
                      </span>
                    </li>
                    <li className="active">
                      <span className="f-s-14 f-w-500">Form Wizards</span>
                    </li>
                  </ul>
                </div>

                <Button
                  color={tableVisible ? "danger" : "success"}
                  onClick={toggleTable}
                >
                  {tableVisible ? "Hide Records" : "Show Records"}
                </Button>
              </Col>
            </Row>
          </header>

          <Row className="justify-content-center mt-3">
            <Col xs={12} md={10} lg={8} xl={7}>
              <NumberWizard
                allData={allData}
                setAllData={setAllData}
                reloadBuses={loadBuses}
              />
            </Col>
          </Row>

          <hr className="my-5" />

          <Row className="mt-5">
            <Col xs={12}>
              {tableVisible ? (
                loading ? (
                  <div className="text-center p-5">Loading buses...</div>
                ) : (
                  <DynamicBusTable
                    allData={allData}
                    setAllData={setAllData}
                    onUpdateBus={updateBus}
                  />
                )
              ) : (
                <div
                  className="text-center p-5"
                  style={{ fontStyle: "italic", color: "#888" }}
                >
                  The bus records table is hidden. Click "Show Records" to view it.
                </div>
              )}
            </Col>
          </Row>

        </Container>
      </main>
    </Suspense>
  );
};

export default AddBus;