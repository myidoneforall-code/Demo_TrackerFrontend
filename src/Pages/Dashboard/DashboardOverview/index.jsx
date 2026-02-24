import React, {Suspense} from "react";
import EcommerceCard from "@/Components/Ecommercedashboard/EcommerceCard";
import GoogleMaps from "../../Map/GoogleMaps";
import OverallCards from "@/Components/Dashboardoverview/OverallCards"
import LeafletMap from "../../Map/LeafletMap"


const DashboardOverview = () => {
    return (
        <Suspense fallback="">
            <div className="container-fluid">
                <div className="row">
                    <OverallCards/>
                     <GoogleMaps/>
                     <LeafletMap/>
                </div>
            </div>
        </Suspense>
    )
}

export default DashboardOverview;
