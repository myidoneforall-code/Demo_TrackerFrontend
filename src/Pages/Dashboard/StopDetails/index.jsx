import React, { Suspense } from "react";
import StopDetails from "../../../Components/StopDetails/StopDetails";

const StopDetailPage = () => {
  return (
    <Suspense fallback="">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <StopDetails />
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default StopDetailPage;
