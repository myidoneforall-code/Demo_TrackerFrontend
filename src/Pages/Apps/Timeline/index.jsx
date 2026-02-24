// import React, {useEffect} from 'react';
// import {Card, CardBody, Col, Container, Row} from "reactstrap";

// const Timeline = ({bus,stopShape,setStopShape,onClose}) => {

//     useEffect(()=>{
//         // console.log(bus,stopShape,setStopShape,onClose);
//         console.log("Bus details",bus)
//         console.log("BUS ID 👉", bus.id);
//         console.log("BUS NAME 👉", bus.name);
//         console.log("FROM 👉", bus.from);
//         console.log("TO 👉", bus.to);
//         console.table(bus.stops);

//         console.log("CURRENT STOP INDEX 👉", bus.currentStopIndex);

//         $('.timeline-horizontal-responsive').slick({
//             slidesToShow: 3,
//             slidesToScroll: 1,
//             responsive: [
//                 {
//                     breakpoint: 1200,
//                     settings: {
//                         slidesToShow: 2,
//                         slidesToScroll: 1,
//                     },
//                 },
//                 {
//                     breakpoint: 1008,
//                     settings: {
//                         slidesToShow: 2,
//                         slidesToScroll: 1,
//                     },
//                 },
//                 {
//                     breakpoint: 768       ,
//                     settings: {
//                         slidesToShow: 1,
//                         slidesToScroll: 1,
//                     },
//                 },
//             ],
//             // autoplay: true,
//             autoplaySpeed: 2000,
//             nextArrow: '<div><i class="fa fa-arrow-right"></i></div>',
//             prevArrow: '<div><i class="fa fa-arrow-left"></i></div>',
//         });
//         $('.timeline-horizontal').slick();
//         $('.timeline-slick').slick({
//             centerMode: true,
//             centerPadding: '60px',
//             slidesToShow: 3,
//             responsive: [
//                 {
//                     breakpoint: 1200,
//                     settings: {
//                         slidesToShow: 2,
//                         slidesToScroll: 1,
//                     },
//                 },
//                 {
//                     breakpoint: 1008,
//                     settings: {
//                         slidesToShow: 1,
//                         slidesToScroll: 1,
//                     },
//                 },
//                 {
//                     breakpoint: 441,
//                     settings: {
//                         slidesToShow: 1,
//                         slidesToScroll: 1,
//                     },
//                 },
//             ],
//         });

//     },[])
//     return (
//         <div>
//             <Container fluid>
//                 <Row className="m-1">
//                     <Col xs={12}>
//                         <h4 className="main-title">Timeline</h4>
//                         <ul className="app-line-breadcrumbs mb-3">
//                             <li className="">
//                                 <a href="#" className="f-s-14 f-w-500">
//                       <span>
//                         <i className="ph-duotone  ph-stack f-s-16"></i> Apps
//                       </span>
//                                 </a>
//                             </li>
//                             <li className="active">
//                                 <a href="#" className="f-s-14 f-w-500">Timeline</a>
//                             </li>
//                         </ul>
//                     </Col>
//                 </Row>
//                 <Row>
//                     <Col lg={6}>
//                         <Card className="equal-card">
//                             <CardBody>
//                                 <ul className="app-timeline-box">

//                                     <li className="timeline-section">
//                                         <div className="timeline-icon">
//                           <span className="text-light-primary h-35 w-35 d-flex-center b-r-50">
//                             <i className="ti ti-circle-check f-s-20"></i>
//                           </span>
//                                         </div>
//                                         <div className="timeline-content bg-light-primary b-1-primary">
//                                             <div
//                                                 className="d-flex justify-content-between align-items-center timeline-flex">
//                                                 <h6 className="mt-2 text-primary">Task finished</h6>
//                                                 <p className="text-dark">10 Min ago</p>
//                                             </div>
//                                             <p className="mt-2 text-dark">The quick, brown fox jumps over a lazy dog.
//                                                 DJs flock by when MTV ax
//                                                 quiz prog.
//                                                 <a href="#" className="text-primary">[more info]</a>
//                                             </p>
//                                         </div>
//                                     </li>
//                                     <li className="timeline-section">
//                                         <div className="timeline-icon">
//                           <span className="text-light-secondary h-35 w-35 d-flex-center b-r-50">
//                             <i className="ti ti-clock f-s-20 "></i>
//                           </span>
//                                         </div>
//                                         <div className="timeline-content bg-light-secondary b-1-secondary">
//                                             <div
//                                                 className="d-flex justify-content-between align-items-center timeline-flex">
//                                                 <h6 className="mt-2 text-secondary">Task Overdue</h6>
//                                                 <span className="color-light">50 Min ago</span>
//                                             </div>
//                                             <p className="mt-2">Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph,
//                                                 for quick jigs vex! Fox nymphs grab quick-jived waltz.
//                                                 <a href="#" className="text-primary">[more info]</a>
//                                             </p>
//                                             <span className="badge bg-primary-900">Design</span>
//                                             <span className="badge bg-primary-900">HTML</span>
//                                         </div>
//                                     </li>
//                                     <li className="timeline-section">
//                                         <div className="timeline-icon">
//                           <span className="text-light-success h-35 w-35 d-flex-center b-r-50">
//                             <i className="ti ti-clipboard-check f-s-20"></i>
//                           </span>
//                                         </div>
//                                         <div className="timeline-content bg-light-success b-1-success">
//                                             <div
//                                                 className="d-flex justify-content-between align-items-center timeline-flex">
//                                                 <h6 className="mt-2 text-success">New Task</h6>
//                                                 <span className="text-dark">10 hours ago</span>
//                                             </div>
//                                             <p className="mt-2 text-dark">Brick quiz whangs jumpy veldt fox. Bright
//                                                 vixens jump; dozy fowl quack. Quick
//                                                 wafting zephyrs vex bold Jim.
//                                                 <a href="#" className="text-primary">[more info]</a>
//                                             </p>
//                                         </div>
//                                     </li>
//                                     <li className="timeline-section">
//                                         <div className="timeline-icon">
//                           <span className="text-light-info h-35 w-35 d-flex-center b-r-50">
//                             <i className="ti ti-message-circle f-s-20"></i>
//                           </span>
//                                         </div>
//                                         <div className="timeline-content bg-light-info b-1-info">
//                                             <div
//                                                 className="d-flex justify-content-between align-items-center timeline-flex">
//                                                 <h6 className="mt-2 text-info">New Comment</h6>
//                                                 <span className="text-dark">Yesterday</span>
//                                             </div>
//                                             <p className="mt-2 text-dark">Quick zephyrs blow, vexing daft Jim.
//                                                 Sex-charged fop blew my junk TV quiz. How
//                                                 quickly daft jumping zebras vex.
//                                                 <a href="#" className="text-primary">[more info]</a>
//                                             </p>

//                                         </div>
//                                     </li>
//                                     <li className="timeline-section">
//                                         <div className="timeline-icon">
//                           <span className="text-light-warning h-35 w-35 d-flex-center b-r-50">
//                             <i className="ti ti-message-circle f-s-20"></i>
//                           </span>
//                                         </div>
//                                         <div className="timeline-content bg-light-warning b-1-warning">
//                                             <div className="d-flex justify-content-between align-items-center">
//                                                 <h6 className="mt-2 text-warning">New Task</h6>
//                                                 <span className="text-dark">10 hours ago</span>
//                                             </div>
//                                             <p className="mt-2 text-dark">Brick quiz whangs jumpy veldt fox. Bright
//                                                 vixens jump; dozy fowl quack. Quick
//                                                 wafting zephyrs vex bold Jim.
//                                                 <a href="#" className="text-primary">[more info]</a>
//                                             </p>

//                                         </div>
//                                     </li>
//                                 </ul>
//                             </CardBody>
//                         </Card>
//                     </Col>

//                     <Col lg={6}>
//                         <Card className="equal-card">
//                             <CardBody>
//                                 <ul className="app-side-timeline">
//                                     <li className="side-timeline-section left-side">
//                                         <div className="side-timeline-icon">
//                           <span className="text-light-primary h-25 w-25 d-flex-center b-r-50">
//                             <i className="ti ti-circle-filled f-s-12 rounded-circle animate__animated animate__zoomIn animate__infinite animate__slower"></i>
//                           </span>
//                                         </div>
//                                         <div className="timeline-content ">
//                                             <div>
//                                                 <h6 className="mt-2 text-primary">Task finished</h6>
//                                                 <p className="text-dark">10 Min ago</p>
//                                             </div>
//                                             <p className="mt-2">The quick, brown fox jumps over a lazy dog. DJs flock by
//                                                 when MTV ax
//                                                 quiz prog.
//                                                 <a href="#" className="text-primary">[more info]</a>
//                                             </p>
//                                         </div>
//                                     </li>
//                                     <li className="side-timeline-section right-side">
//                                         <div className="side-timeline-icon">
//                           <span className="text-light-secondary h-25 w-25 d-flex-center b-r-50">
//                             <i className="ti ti-circle-filled f-s-12 rounded-circle animate__animated animate__zoomIn animate__infinite animate__slower"></i>
//                           </span>
//                                         </div>
//                                         <div className="timeline-content ">
//                                             <div>
//                                                 <h6 className="mt-2 text-secondary">Task Overdue</h6>
//                                                 <span className="color-light">50 Min ago</span>
//                                             </div>
//                                             <p className="mt-2">Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph,
//                                                 for quick jigs vex! Fox nymphs grab quick-jived waltz.
//                                                 <a href="#" className="text-primary">[more info]</a>
//                                             </p>
//                                             <span className="badge bg-primary-900">Design</span>
//                                             <span className="badge bg-primary-900">HTML</span>
//                                         </div>
//                                     </li>
//                                     <li className="side-timeline-section left-side">
//                                         <div className="side-timeline-icon">
//                           <span className="text-light-success h-25 w-25 d-flex-center b-r-50">
//                             <i className="ti ti-circle-filled f-s-12 rounded-circle animate__animated animate__zoomIn animate__infinite animate__slower"></i>
//                           </span>
//                                         </div>
//                                         <div className="timeline-content">
//                                             <div>
//                                                 <h6 className="mt-2 text-success">New Task</h6>
//                                                 <span className="text-dark">10 hours ago</span>
//                                             </div>
//                                             <p className="mt-2">Brick quiz whangs jumpy veldt fox. Bright vixens jump;
//                                                 dozy fowl quack. Quick
//                                                 wafting zephyrs vex bold Jim.
//                                                 <a href="#" className="text-primary">[more info]</a>
//                                             </p>

//                                         </div>
//                                     </li>
//                                     <li className="side-timeline-section right-side">
//                                         <div className="side-timeline-icon">
//                           <span className="text-light-info h-25 w-25 d-flex-center b-r-50">
//                            <i className="ti ti-circle-filled f-s-12 rounded-circle animate__animated animate__zoomIn animate__infinite animate__slower"></i>
//                           </span>
//                                         </div>
//                                         <div className="timeline-content">
//                                             <div>
//                                                 <h6 className="mt-2 text-info">New Task</h6>
//                                                 <span className="text-dark">10 hours ago</span>
//                                             </div>
//                                             <p className="mt-2">Brick quiz whangs jumpy veldt fox. Bright vixens jump;
//                                                 dozy fowl quack. Quick
//                                                 wafting zephyrs vex bold Jim.
//                                                 <a href="#" className="text-primary">[more info]</a>
//                                             </p>

//                                         </div>
//                                     </li>
//                                 </ul>
//                             </CardBody>
//                         </Card>
//                     </Col>
    
//                     <Col xs={12}>
//                         <Card>
//                             <CardBody>
//                                 <Row>
//                                     <Col xs={12}>
//                                         <div className="timeline-horizontal">
//                                             <div className="main-timeline-section">
//                                                 <div className="conference-center-line"></div>
//                                                 <div>
//                                                     <div
//                                                         className="conference-timeline-content slider timeline-horizontal-responsive">
//                                                         <div className="timeline-article">
//                                                             <div className="meta-date border-info">
//                                     <span
//                                         className="text-light-info h-40  w-40 p-3 d-flex-center b-r-50 timline_position">
//                                       <i className="fa-regular fa-comment-dots f-s-20 mg-t-2"></i>
//                                     </span>
//                                                             </div>
//                                                             <div
//                                                                 className="card card-light-info content-box content-box-bottom">
//                                                                 <CardBody>
//                                                                     <div
//                                                                         className="d-flex justify-content-between align-items-center mb-2">
//                                                                         <h6 className="m-0 text-info">New Task</h6>
//                                                                         <span className="text-info">10 hours ago</span>
//                                                                     </div>
//                                                                     <p className="text-secondary timeline-ellipsis"> A
//                                                                         business- and employment-oriented
//                                                                         social
//                                                                         networking service that operates via websites
//                                                                         and nomile apps
//                                                                     </p>
//                                                                 </CardBody>
//                                                             </div>
//                                                         </div>
//                                                         <div className="timeline-article">
//                                                             <div className="meta-date border-success">
//                                     <span
//                                         className="text-light-success h-40  w-40 p-3 d-flex-center b-r-50 timline_position">
//                                       <i className="fa-regular fa-square-check f-s-20 mg-t-2"></i>
//                                     </span>
//                                                             </div>
//                                                             <div
//                                                                 className="card card-light-success content-box content-box-top">
//                                                                 <CardBody>
//                                                                     <div
//                                                                         className="d-flex justify-content-between align-items-center mb-2">
//                                                                         <h6 className="m-0 text-success">New Task</h6>
//                                                                         <span
//                                                                             className="text-success">10 hours ago</span>
//                                                                     </div>
//                                                                     <p className="text-secondary timeline-ellipsis"> An
//                                                                         online social media and social
//                                                                         networking sercice based in menlo park,
//                                                                         califonia.
//                                                                     </p>
//                                                                 </CardBody>
//                                                             </div>
//                                                         </div>
//                                                         <div className="timeline-article">
//                                                             <div className="meta-date border-secondary">
//                                     <span
//                                         className="text-light-secondary h-40  w-40 p-3 d-flex-center b-r-50 timline_position">
//                                       <i className="fa-regular fa-clock f-s-20 mg-t-2"></i>
//                                     </span>
//                                                             </div>
//                                                             <div
//                                                                 className="card card-light-secondary content-box content-box-bottom">
//                                                                 <CardBody>
//                                                                     <div
//                                                                         className="d-flex justify-content-between align-items-center mb-2">
//                                                                         <h6 className="m-0 text-secondary">New Task</h6>
//                                                                         <span
//                                                                             className="text-secondary">10 hours ago</span>
//                                                                     </div>
//                                                                     <p className="text-secondary timeline-ellipsis"> A
//                                                                         service for friends,family, and
//                                                                         coworkers to communcate
//                                                                         and stay connected through the exchange of
//                                                                         quick, frequent messages.
//                                                                     </p>
//                                                                 </CardBody>
//                                                             </div>
//                                                         </div>
//                                                         <div className="timeline-article">
//                                                             <div className="meta-date border-primary">
//                                     <span
//                                         className="text-light-primary h-40  w-40 p-3 d-flex-center b-r-50 timline_position">
//                                       <i className="fa-regular fa-circle-check f-s-20 mg-t-2"></i>
//                                     </span>
//                                                             </div>
//                                                             <Card
//                                                                 className="card-light-primary content-box content-box-top">
//                                                                 <CardBody>
//                                                                     <div
//                                                                         className="d-flex justify-content-between align-items-center mb-2">
//                                                                         <h6 className="m-0 text-primary">New Task</h6>
//                                                                         <span
//                                                                             className="text-primary">10 hours ago</span>
//                                                                     </div>
//                                                                     <p className="text-secondary timeline-ellipsis"> First
//                                                                         large-scale video sharing
//                                                                         website that
//                                                                         makes it easy to watch videos online.
//                                                                     </p>
//                                                                 </CardBody>
//                                                             </Card>
//                                                         </div>
//                                                         <div className="timeline-article">
//                                                             <div className="meta-date border-info">
//                                     <span
//                                         className="text-light-info h-40  w-40 p-3 d-flex-center b-r-50 timline_position">
//                                       <i className="fa-regular fa-comment-dots f-s-20 mg-t-2"></i>
//                                     </span>
//                                                             </div>
//                                                             <div
//                                                                 className="card card-light-info content-box content-box-bottom">
//                                                                 <CardBody>
//                                                                     <div
//                                                                         className="d-flex justify-content-between align-items-center mb-2">
//                                                                         <h6 className="m-0 text-info">New Task</h6>
//                                                                         <span className="text-info">10 hours ago</span>
//                                                                     </div>
//                                                                     <p className="text-secondary timeline-ellipsis"> Lets
//                                                                         you effortlessly share anthing.
//                                                                         Post text,photos
//                                                                         quotes, links,music,and videos from your
//                                                                         browser, phone, desktop, email.
//                                                                     </p>
//                                                                 </CardBody>
//                                                             </div>
//                                                         </div>
//                                                         <div className="timeline-article">
//                                                             <div className="meta-date border-success">
//                                     <span
//                                         className="text-light-success h-40  w-40 p-3 d-flex-center b-r-50 timline_position">
//                                       <i className="fa-regular fa-square-check f-s-20 mg-t-2"></i>
//                                     </span>
//                                                             </div>
//                                                             <div
//                                                                 className="card card-light-success content-box content-box-top">
//                                                                 <CardBody>
//                                                                     <div
//                                                                         className="d-flex justify-content-between align-items-center mb-2">
//                                                                         <h6 className="m-0 text-success">New Task</h6>
//                                                                         <span
//                                                                             className="text-success">10 hours ago</span>
//                                                                     </div>
//                                                                     <p className="text-secondary timeline-ellipsis"> The
//                                                                         home for visual stroytelling
//                                                                         for everyone from celebrities, newsrooms and
//                                                                         newsrooms and brands to teens,
//                                                                         musicians and anyone with a creative passion.
//                                                                     </p>
//                                                                 </CardBody>
//                                                             </div>
//                                                         </div>
//                                                         <div className="timeline-article">
//                                                             <div className="meta-date border-secondary">
//                                     <span
//                                         className="text-light-secondary h-40  w-40 p-3 d-flex-center b-r-50 timline_position">
//                                       <i className="fa-regular fa-clock f-s-20 mg-t-2"></i>
//                                     </span>
//                                                             </div>
//                                                             <div
//                                                                 className="card card-light-secondary content-box content-box-bottom">
//                                                                 <CardBody>
//                                                                     <div
//                                                                         className="d-flex justify-content-between align-items-center mb-2">
//                                                                         <h6 className="m-0 text-secondary">New Task</h6>
//                                                                         <span
//                                                                             className="text-secondary">10 hours ago</span>
//                                                                     </div>
//                                                                     <p className="text-secondary timeline-ellipsis"> A
//                                                                         visual bookmarking tool that helps
//                                                                         you
//                                                                         disscore and save creative ideas.
//                                                                     </p>
//                                                                 </CardBody>
//                                                             </div>
//                                                         </div>
//                                                         <div className="timeline-article">
//                                                             <div className="meta-date border-primary">
//                                     <span
//                                         className="text-light-primary h-40  w-40 p-3 d-flex-center b-r-50 timline_position">
//                                       <i className="fa-solid fa-check f-s-20 mg-t-2"></i>
//                                     </span>
//                                                             </div>
//                                                             <Card
//                                                                 className="card-light-primary content-box content-box-top">
//                                                                 <CardBody>
//                                                                     <div
//                                                                         className="d-flex justify-content-between align-items-center mb-2">
//                                                                         <h6 className="m-0 text-primary">New Task</h6>
//                                                                         <span
//                                                                             className="text-primary">10 hours ago</span>
//                                                                     </div>
//                                                                     <p className="text-secondary timeline-ellipsis"> Lorem
//                                                                         ipsum dolor sit amet,
//                                                                         consectetur adipisicing elit. Quis deserunt
//                                                                         minus ipsa qui minima! Quibusdam
//                                                                         possimus quia quas? Facere ea sint perspiciatis
//                                                                         non odit nihil soluta amet
//                                                                         sapiente deleniti omnis.
//                                                                     </p>
//                                                                 </CardBody>
//                                                             </Card>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </Col>
//                                 </Row>
//                             </CardBody>
//                         </Card>
//                     </Col>
//                 </Row>
//             </Container>
//         </div>
//     );
// };

// export default Timeline;

// Cuurent working Timeline Journey start
import React, { useEffect, useMemo, useState } from "react";
import { Card, CardBody, Container } from "reactstrap";
import { timeToMinutes } from "../../../Data/Time/Time";


/* ===== ROUND ROUTE (UNCHANGED DESIGN) ===== */
const RoundRouteTimeline = ({ bus }) => {
  
  const totalStops = bus.stops.length;
  const currentIndex = bus.currentStopIndex;

  const radius = 120;
  const center = 150;
  const circumference = 2 * Math.PI * radius;
  const progress =
    ((currentIndex + (bus.progress || 0)) / totalStops) * circumference;

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 40 }}>
      <svg width={300} height={300}>
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="var(--bs-border-color)"
          strokeWidth="4"
        />

        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="var(--bs-primary)"
          strokeWidth="3"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
          transform={`rotate(-90 ${center} ${center})`}
        />

        {bus.stops.map((stop, i) => {
          const angle = (2 * Math.PI * i) / totalStops - Math.PI / 2;
          const x = center + radius * Math.cos(angle);
          const y = center + radius * Math.sin(angle);

          const isActive = i === currentIndex;
          const isCompleted = i < currentIndex;

          return (
            <g key={i}>
              <circle
                cx={x}
                cy={y}
                r={8}
                fill={
                  isActive
                    ? "var(--bs-primary)"
                    : isCompleted
                    ? "var(--bs-success)"
                    : "var(--bs-secondary)"
                }
              />
              <text
                x={x}
                y={y - 14}
                textAnchor="middle"
                fontSize="10"
                fill="var(--bs-body-color)"
              >
                {stop.name}
              </text>
            </g>
          );
        })}

        <text
          x={
            center +
            radius *
              Math.cos(
                (2 * Math.PI * currentIndex) / totalStops - Math.PI / 2
              )
          }
          y={
            center +
            radius *
              Math.sin(
                (2 * Math.PI * currentIndex) / totalStops - Math.PI / 2
              ) +
            6
          }
          textAnchor="middle"
          fontSize="18"
        >
          🚌
        </text>
      </svg>
    </div>
  );
};

/* ===== MAIN TIMELINE ===== */
const Timeline = ({ bus }) => {
  /* ===== USE FORWARD / RETURN DATA ===== */
  const forwardStops = bus.forwardRoute.stops;
  const forwardIndex = bus.forwardRoute.currentStopIndex;

  const returnStops = bus.returnRoute.stops;
  const returnIndex = bus.returnRoute.currentStopIndex;

  const totalStops = forwardStops.length;

  const isRoundRoute =
    bus.forwardRoute.from === bus.forwardRoute.to ||
    forwardStops[0]?.name ===
      forwardStops[forwardStops.length - 1]?.name;

  const [animatedPercent, setAnimatedPercent] = useState(0);
  const [returnAnimatedPercent, setReturnAnimatedPercent] = useState(0);

  const progressPercent =
    totalStops > 1
      ? ((forwardIndex + (bus.progress || 0)) / (totalStops - 1)) * 100
      : 0;

  useEffect(() => {
    const t = setTimeout(() => setAnimatedPercent(progressPercent), 50);
    return () => clearTimeout(t);
  }, [progressPercent]);

  useEffect(() => {
    const percent =
      returnStops.length > 1
        ? ((returnIndex + (bus.progress || 0)) /
            (returnStops.length - 1)) * 100
        : 0;

    const t = setTimeout(
      () => setReturnAnimatedPercent(percent), // reverse
      50
    );

    return () => clearTimeout(t);
  }, [returnIndex, returnStops.length, bus.progress]);

  // const nextStopEtaMinutes = useMemo(() => {
  //   const next = forwardStops[forwardIndex + 1];
  //   if (!next?.eta) return null;

  //   const now = new Date();
  //   const nowMinutes = now.getHours() * 60 + now.getMinutes();
  //   const etaMinutes = timeToMinutes(next.eta);

  //   if (etaMinutes == null) return null;
  //   return Math.max(etaMinutes - nowMinutes, 0);
  // }, [forwardStops, forwardIndex]);
  const nextStopMinutesFromLastReached = useMemo(() => {
  const lastReached = forwardStops[forwardIndex];
  const next = forwardStops[forwardIndex + 1];

  if (!lastReached?.eta || !next?.eta) return null;

  const lastReachedMinutes = timeToMinutes(lastReached.eta);
  const nextMinutes = timeToMinutes(next.eta);

  if (lastReachedMinutes == null || nextMinutes == null) return null;

  return Math.max(nextMinutes - lastReachedMinutes, 0);
}, [forwardStops, forwardIndex]);


  // const nextReturnEtaMinutes = useMemo(() => {
  //   // since return route is reverse
  //   const next = returnStops[returnIndex - 1];
  //   if (!next?.eta) return null;

  //   const now = new Date();
  //   const nowMinutes = now.getHours() * 60 + now.getMinutes();
  //   const etaMinutes = timeToMinutes(next.eta);

  //   if (etaMinutes == null) return null;
  //   return Math.max(etaMinutes - nowMinutes, 0);
  // }, [returnStops, returnIndex]);

  const nextReturnMinutesFromLastReached = useMemo(() => {
  // last reached stop on return route
  const lastReached = returnStops[returnIndex];
  // next stop in reverse direction
  const next = returnStops[returnIndex - 1];

  if (!lastReached?.eta || !next?.eta) return null;

  const lastReachedMinutes = timeToMinutes(lastReached.eta);
  const nextMinutes = timeToMinutes(next.eta);

  if (lastReachedMinutes == null || nextMinutes == null) return null;

  return Math.max(nextMinutes - lastReachedMinutes, 0);
}, [returnStops, returnIndex]);


  return (
    <>
      {/* ===== CSS – ORIGINAL 100% UNCHANGED ===== */}
      <style>{`
        .route-wrapper {
          background: var(--bs-body-bg);
          border-radius: 18px;
          padding: 26px 18px 160px;
          box-shadow: var(--bs-box-shadow-sm);
          overflow: hidden;
          // background : black;
        }
        .route-title {
          text-align: center;
          font-size: 24px;
          font-weight: 700;
          // margin-bottom: 14px;
        }
        .route-sub {
          text-align: center;
          font-weight: 600;
          margin-bottom: 10px;
          color: var(--bs-secondary-color);
        }
        .route-line {
          position: relative;
          height: 2px;
          background: var(--bs-border-color);
          // margin: 40px auto;
          margin: 120px auto 0 auto; 
/* top:50px, right:auto, bottom:0, left:auto */

          width: 95%;   
        }
        .route-line-progress {
          position: absolute;
          left: 0;
          top: 0;
          height: 2px;
          background-color: currentColor;
          transition: width 1s linear;
        }
        .stop-point {
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: var(--bs-secondary-bg);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 3;
          color: var(--bs-secondary-color);
        }
        .stop-point.completed {
          background: var(--bs-success-bg-subtle);
          color: var(--bs-success);
        }
        .stop-point.active {
          background: var(--bs-primary);
          color: var(--bs-light);
          box-shadow: 0 0 0 4px rgba(var(--bs-primary-rgb), .25);
          animation: pulse 1.6s infinite;
        }
        .stop-point.end {
          background: var(--bs-danger-bg-subtle);
          color: var(--bs-danger);
        }
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(var(--bs-primary-rgb), .4); }
          70% { box-shadow: 0 0 0 10px rgba(var(--bs-primary-rgb), 0); }
          100% { box-shadow: 0 0 0 0 rgba(var(--bs-primary-rgb), 0); }
        }
        .bus-icon {
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
          background: var(--bs-body-bg);
          border-radius: 50%;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid var(--bs-primary);
          z-index: 4;
          transition: left 1s linear;
        }
        .stop-card {
          position: absolute;
          max-width: 200px;
          padding: 10px 12px;
          background: var(--bs-primary-bg);
          border-radius: 12px;
          text-align: center;
          font-weight: 600;
          font-size: 10px;
          color: var(--bs-primary);
        }
        .stop-card.completed {
          background: var(--bs-success-bg-subtle);
          color: var(--bs-success);
        }
        .stop-card.active {
          background: var(--bs-primary-bg-subtle);
          color: var(--bs-primary);
        }
        .stop-card.end {
          background: var(--bs-danger-bg-subtle);
          color: var(--bs-danger);
        }
        .stop-card.top { bottom: 25px; }
        .stop-card.bottom { top: 25px; }
        .route-line.halt {
          margin: 180px 0;
        }

        /* ================= HALT TIMELINE ================= */

        /* Halt line base */
        .route-line.halt {
          position: relative;
          height: 2px;
          background: var(--bs-border-color);
          margin: 160px 0px auto 20px;
          opacity: 0.9;
          width:95%;
        }

        /* Halt stop point */
        .halt-stop-point {
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: var(--bs-warning-bg-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 3;
          color: var(--bs-warning);
          font-size: 12px;
        }

        /* Completed halt */
        .halt-stop-point.completed {
          background: var(--bs-success-bg-subtle);
          color: var(--bs-success);
        }

        /* Active halt (NO pulse, NO animation) */
        .halt-stop-point.active {
           background: var(--bs-primary);
          color: var(--bs-light);
          box-shadow: 0 0 0 4px rgba(var(--bs-primary-rgb), .25);
          animation: pulse 1.6s infinite;
        }

        /* End halt */
        .halt-stop-point.end {
          background: var(--bs-danger-bg-subtle);
          color: var(--bs-danger);
        }

        /* Halt card */
        .halt-stop-card {
          // position: absolute;
          // max-width: 170px;
          // padding: 8px 12px;
          // background: var(--bs-warning-bg-subtle);
          // border-radius: 12px;
          // text-align: center;
          // font-weight: 600;
          // font-size: 12px;
          // color: var(--bs-warning);
          // // border: 1px dashed rgba(var(--bs-warning-rgb), 0.4);
          position: absolute;
          max-width: 200px;
          padding: 10px 12px;
          background: var(--bs-primary-bg);
          border-radius: 12px;
          text-align: center;
          font-weight: 600;
          font-size: 10px;
          color: var(--bs-primary);
        }

        /* Completed halt card */
        .halt-stop-card.completed {
           background: var(--bs-success-bg-subtle);
          color: var(--bs-success);
        }

        /* Active halt card */
        .halt-stop-card.active {
          background: var(--bs-primary-bg-subtle);
          color: var(--bs-primary);
        }

        /* End halt card */
        .halt-stop-card.end {
          background: rgba(var(--bs-danger-rgb), 0.12);
          color: var(--bs-danger);
        }

        /* Position helpers */
        .halt-stop-card.top {
          bottom: 25px;
        }

        .halt-stop-card.bottom {
          top: 25px;
        }
        .halt-progress {
        position: absolute;
        right: 0;
      }

        .route-line-progress.halt-progress {
        transition: transform 1s linear;
      }



      /* ===== HALT INFO – CORNER BOXES ===== */
      .halt-info-wrapper {
        position: relative;
        height: 80px;
        margin: 0px  0px;
      }

      .halt-info-box {
        position: absolute;
        top:100px;
        padding: 5px;
        border-radius: 10px;
        background: var(--bs-dark-bg-subtle);
        color: var(--bs-dark);
        font-weight: 600;
        font-size: 13px;
        box-shadow: var(--bs-box-shadow-sm);
        min-width: 80px;
        text-align: center;
      }

      .halt-info-box.start {
        left: -20px;            /* 👈 LEFT CORNER */
      }

      .halt-info-box.end {
        right: -20px;           /* 👉 RIGHT CORNER */
      }

      .halt-info-box strong {
        display: block;
        font-size: 14px;
      }

      .zoom-center {
          transform: scale(0.95);                 /* 90% zoom out */
          transform-origin: center center;       /* keep center */
          transition: transform 0.25s ease;
        }

          
      `}</style>

      <Container>
        <Card>
          <CardBody style={{ padding: "10px" }}>
            <div class="container text-center">
                <div class="row">
                  <div class="col-12 col-md-4">
                    <div className="route-title">Bus Route Timeline</div>
                    <div className="route-sub">
                    ⏱ Next Stop:{" "}
                    <span className="text-primary">
                      {forwardStops[forwardIndex + 1]?.name || "Arrived"}
                    </span>
                    {/* {nextStopEtaMinutes !== null && (
                      <span className="ms-2 text-secondary">
                        (in {nextStopEtaMinutes} min)
                      </span>
                    )} */}
                    {nextStopMinutesFromLastReached !== null && (
                      <span className="ms-2 text-secondary">
                        ({nextStopMinutesFromLastReached} min)
                      </span>
                    )}

                    {/* <span className="ms-2 text-secondary">
                    {forwardStops[forwardIndex + 1]?.eta
                      ? `(${forwardStops[forwardIndex + 1].eta})`
                      : ""}
                  </span> */}
                  </div>
                  </div>
                  <div class="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
                    <p style={{ fontSize: "15px" }}>
                        🚌 {bus.name} - {bus.busNumber}
                        <p style={{ fontSize: "20px" }}>
                          {bus.from} → {bus.to}
                        </p>    
                      </p>
                    
                  </div>
                  <div class="col-12 col-md-4 d-flex justify-content-center justify-content-md">
                    <div className="d-flex align-items-center gap-1 trip-group">
                          <div className="trip-tile">
                            <div className="trip-number">
                              {bus.completedTrips}
                            </div>
                            <div className="trip-label">T.DONE</div>
                          </div>

                          <div className="trip-divider">/</div>

                          <div className="trip-tile">
                            <div className="trip-number">
                              {bus.totalTrips}
                            </div>
                            <div className="trip-label">📊TRIPS</div>
                          </div>
                        </div>
                  </div>
                </div>
              </div>
            <div className="route-wrapper zoom-center">
              {/* <div className="route-title">Bus Route Timeline</div> */}

              {/* <div className="route-sub">
                Next Stop:{" "}
                <span className="text-primary">
                  {forwardStops[forwardIndex + 1]?.name || "Arrived"}
                </span> */}
                {/* {nextStopEtaMinutes !== null && (
                  <span className="ms-2 text-secondary">
                    (in {nextStopEtaMinutes} min)
                  </span>
                )} */}
                {/* {nextStopMinutesFromLastReached !== null && (
                  <span className="ms-2 text-secondary">
                    ({nextStopMinutesFromLastReached} min)
                  </span>
                )} */}

                {/* <span className="ms-2 text-secondary">
                {forwardStops[forwardIndex + 1]?.eta
                  ? `(${forwardStops[forwardIndex + 1].eta})`
                  : ""}
              </span> */}
              {/* </div> */}
              

              {isRoundRoute ? (
                <RoundRouteTimeline
                  bus={{
                    stops: forwardStops,
                    currentStopIndex: forwardIndex,
                    progress: bus.progress
                  }}
                />
              ) : (
                <>
                  {/* ===== FORWARD TIMELINE ===== */}
                  <div className="route-line text-primary">
                    {!bus.isReturning &&(
                       <div
                      className="route-line-progress"
                      style={{ width: `${animatedPercent}%` }}
                    />

                    )}
                    {!bus.isReturning && (
                         <div
                      className="bus-icon"
                      style={{ left: `${animatedPercent}%` }}
                    >
                      <i className="fa-solid fa-bus" />
                    </div>
                    )}
                    {forwardStops.map((stop, i) => {
                      // console.log("Forward timeline",stop);
                      const rawLeft = (i / (totalStops - 1)) * 100;
                      const left = Math.min(Math.max(rawLeft, 5), 95);
                      const pos = i % 2 === 0 ? "top" : "bottom";

                      const isCompleted = i < forwardIndex;
                      const isActive = i === forwardIndex;
                      const isEnd = i === totalStops - 1;
                      const noHighlight = bus.isReturning;

                      return (
                        <React.Fragment key={i}>
                          <div
                            className={`stop-point
                              ${!noHighlight && isCompleted ? "completed" : ""}
                              ${!noHighlight && isActive ? "active" : ""}
                              ${!noHighlight && isEnd ? "end" : ""}
                            `}
                            style={{ left: `${rawLeft}%` }}
                          >
                            <i
                              className={`fa-solid ${
                                i === 0
                                  ? "fa-play"
                                  : isEnd
                                  ? "fa-flag-checkered"
                                  : "fa-location-dot"
                              }`}
                            />
                          </div>

                          <div
                            className={`stop-card ${pos}
                              ${!noHighlight && isCompleted ? "completed" : ""}
                              ${!noHighlight && isActive ? "active" : ""}
                              ${!noHighlight && isEnd ? "end" : ""}
                            `}
                            style={{ left: `calc(${left}% - 85px)` }}
                          >
                            {i === 0 && "START – "}
                            <div className="justify-center">{stop.name}</div>
                            <div className="justify-center">{stop.eta}</div>
                             {/* {stop.eta} */}
                            <small>
                              Stop {i + 1} of {totalStops}
                            </small>
                          </div>
                        </React.Fragment>
                      );
                    })}
                  </div>

                  {/* ===== HALT TIME (CORNER BOXES) ===== */}
                  <div className="halt-info-wrapper">
                    <div className="halt-info-box start">
                      <strong>Halt Start</strong>
                      {returnStops[0]?.eta || "--"}
                    </div>

                    <div className="halt-info-box end">
                      <strong>Halt End</strong>
                      {returnStops[returnStops.length - 1]?.eta || "--"}
                    </div>
                  </div>

                  {/* ===== RETURN / HALT TIMELINE ===== */}

                
                  
                  {/* <div className="route-sub">
                    Next Stop:{" "}
                    <span className="text-primary">
                      {returnStops[returnIndex - 1]?.name || "Arrived"}
                    </span>
                    {nextReturnEtaMinutes !== null && (
                      <span className="ms-2 text-secondary">
                        (in {nextReturnEtaMinutes} min)
                      </span>
                    )}
                  </div> */}
                  <div className="route-line halt text-warning">
                    {/* 🔵 reverse progress line */}
                    {bus.isReturning && (
                       <div
                      className="route-line-progress halt-progress"
                       style={{
                        width: `${returnAnimatedPercent}%`,
                        right: 0,
                        left: "auto"
                      }}
                    />
                    )}
                    {/* 🚌 reverse moving bus */}
                    {bus.isReturning && (
                       <div
                      className="bus-icon"
                      style={{
                        left: `${100- returnAnimatedPercent}%`,   
                        
                      }}
                    >
                      <i className="fa-solid fa-bus" />
                    </div>
                      
                    )}
                   

                    {returnStops.map((stop, i) => {
                      console.log("halttime line", stop);
                      const rawLeft =((returnStops.length - 1 - i) / (returnStops.length - 1)) * 100;
                      const left = Math.min(Math.max(rawLeft, 5), 95);
                      const pos = i % 2 === 0 ? "top" : "bottom";

                      const isCompleted = i > returnIndex;
                      const isActive = i === returnIndex;
                      const isEnd = i === returnStops.length - 1;
                      const noHighlight = !bus.isReturning;


                      return (
                        <React.Fragment key={`halt-${i}`}>
                          {/* ⏸ halt stop point */}
                          <div
                            className={`halt-stop-point
                              ${!noHighlight && isCompleted ? "completed" : ""}
                              ${!noHighlight && isActive ? "active" : ""}
                              ${!noHighlight && isEnd ? "end" : ""}
                            `}
                            style={{ left: `${rawLeft}%` }}
                          >
                            <i
                              className={`fa-solid ${
                                i === 0
                                  ? "fa-flag-checkered"
                                  : isEnd
                                  ? "fa-play"
                                  : "fa-location-dot"
                              }`}
                            />
                          </div>

                          {/* 🏷 halt card */}
                          <div
                            className={`halt-stop-card ${pos}
                              ${!noHighlight && isCompleted ? "completed" : ""}
                              ${!noHighlight && isActive ? "active" : ""}
                              ${!noHighlight && isEnd ? "end" : ""}
                            `}
                            style={{ left: `calc(${left}% - 85px)` }}
                          >
                            <div>{stop.name}</div>
                            <div>{stop.halt}</div>
                            
                            <small>
                              Stop {i + 1} of {returnStops.length}
                            </small>
                          </div>
                        </React.Fragment>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default Timeline;




// import React, { useEffect, useMemo, useState } from "react";
// import { Card, CardBody, Container } from "reactstrap";
// import { timeToMinutes } from "../../../Data/Time/Time";

// /* ===== ROUND ROUTE (UNCHANGED) ===== */
// const RoundRouteTimeline = ({ bus }) => {
//   const totalStops = bus.stops.length;
//   const currentIndex = bus.currentStopIndex;

//   const radius = 120;
//   const center = 150;
//   const circumference = 2 * Math.PI * radius;
//   const progress =
//     ((currentIndex + (bus.progress || 0)) / totalStops) * circumference;

//   return (
//     <div style={{ display: "flex", justifyContent: "center", marginTop: 40 }}>
//       <svg width={300} height={300}>
//         <circle
//           cx={center}
//           cy={center}
//           r={radius}
//           fill="none"
//           stroke="var(--bs-border-color)"
//           strokeWidth="4"
//         />
//         <circle
//           cx={center}
//           cy={center}
//           r={radius}
//           fill="none"
//           stroke="var(--bs-primary)"
//           strokeWidth="3"
//           strokeDasharray={circumference}
//           strokeDashoffset={circumference - progress}
//           strokeLinecap="round"
//           transform={`rotate(-90 ${center} ${center})`}
//         />
//       </svg>
//     </div>
//   );
// };

// /* ===== MAIN TIMELINE ===== */
// const Timeline = ({ bus }) => {
//   const totalStops = bus.stops.length;
//   const currentIndex = bus.currentStopIndex;

//   const isRoundRoute =
//     bus.from === bus.to ||
//     bus.stops[0]?.name === bus.stops[bus.stops.length - 1]?.name;

//   const [animatedPercent, setAnimatedPercent] = useState(0);

//   const progressPercent =
//     totalStops > 1
//       ? ((currentIndex + (bus.progress || 0)) / (totalStops - 1)) * 100
//       : 0;

//   useEffect(() => {
//     const t = setTimeout(() => setAnimatedPercent(progressPercent), 50);
//     return () => clearTimeout(t);
//   }, [progressPercent]);

//   const nextStopEtaMinutes = useMemo(() => {
//     const next = bus.stops[currentIndex + 1];
//     if (!next?.eta) return null;

//     const now = new Date();
//     const nowMinutes = now.getHours() * 60 + now.getMinutes();
//     const etaMinutes = timeToMinutes(next.eta);

//     return Math.max(etaMinutes - nowMinutes, 0);
//   }, [bus, currentIndex]);

//   return (
//     <>
//       <style>{`
//         .route-wrapper {
//           background: var(--bs-body-bg);
//           border-radius: 18px;
//           padding: 26px 18px 110px;
//           box-shadow: var(--bs-box-shadow-sm);
//           overflow: hidden;
//         }

//         .route-line {
//           position: relative;
//           height: 4px;
//           margin: 40px 0 60px;
//         }

//         .line-base {
//           position: absolute;
//           width: 100%;
//           height: 4px;
//           background: var(--bs-border-color);
//           top: 50%;
//           transform: translateY(-50%);
//         }

//         .line-completed {
//           position: absolute;
//           height: 4px;
//           background: #b39cff;
//           top: 50%;
//           transform: translateY(-50%);
//           transition: width 1s linear;
//         }

//         .line-upcoming {
//           position: absolute;
//           height: 4px;
//           width: 100%;
//           border-top: 4px dotted #b39cff;
//           top: 50%;
//           transform: translateY(-50%);
//         }

//         .stop-point {
//           position: absolute;
//           top: 50%;
//           transform: translate(-50%, -50%);
//           width: 22px;
//           height: 22px;
//           border-radius: 50%;
//           background: #b39cff;
//           border: 4px solid white;
//           z-index: 3;
//         }

//         .bus-icon {
//           position: absolute;
//           top: 50%;
//           transform: translate(-50%, -50%);
//           background: white;
//           border-radius: 50%;
//           width: 34px;
//           height: 34px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           color: #6f5cff;
//           border: 2px solid #6f5cff;
//           z-index: 4;
//         }
//       `}</style>

//       <Container>
//         <Card>
//           <CardBody>
//             <div className="route-wrapper">
//               <h4 className="text-center fw-bold">Bus Route Timeline</h4>

//               <div className="text-center fw-semibold mb-5">
//                 Next Stop:{" "}
//                 <span className="text-primary">
//                   {bus.stops[currentIndex + 1]?.name || "Arrived"}
//                 </span>
//                 {nextStopEtaMinutes !== null && (
//                   <span className="ms-2 text-secondary">
//                     ({nextStopEtaMinutes} min)
//                   </span>
//                 )}
//               </div>

//               {isRoundRoute ? (
//                 <RoundRouteTimeline bus={bus} />
//               ) : (
//                 <div className="route-line">
//                   <div className="line-base" />
//                   <div className="line-upcoming" />
//                   <div
//                     className="line-completed"
//                     style={{ width: `${animatedPercent}%` }}
//                   />

//                   <div
//                     className="bus-icon"
//                     style={{ left: `${animatedPercent}%` }}
//                   >
//                     🚌
//                   </div>

//                   {bus.stops.map((_, i) => {
//                     const left = (i / (totalStops - 1)) * 100;
//                     return (
//                       <div
//                         key={i}
//                         className="stop-point"
//                         style={{ left: `${left}%` }}
//                       />
//                     );
//                   })}
//                 </div>
//               )}
//             </div>
//           </CardBody>
//         </Card>
//       </Container>
//     </>
//   );
// };

// export default Timeline;
