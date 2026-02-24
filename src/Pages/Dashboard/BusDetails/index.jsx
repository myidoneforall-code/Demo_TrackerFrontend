import React, { Suspense } from "react";
import BusDetails from "@/Components/Busdetails/BusDetails";

const BusDetailsPage = () => {
  return (
    <Suspense fallback="">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <BusDetails />
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default BusDetailsPage;
