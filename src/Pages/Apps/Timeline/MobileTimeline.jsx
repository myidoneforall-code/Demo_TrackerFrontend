import React, { useEffect, useMemo, useState } from "react";
import { Card, CardBody, Container } from "reactstrap";
import { timeToMinutes } from "../../../Data/Time/Time";
// import MobileTimeline from "./MobileTimeline";

/* ===== ROUND ROUTE (Circular) – optional, can skip if vertical only) ===== */
const RoundRouteTimeline = ({ bus }) => {
  // Keep original circular timeline if needed
  return null; // you can remove or keep original code here
};

/* ===== VERTICAL TIMELINE COMPONENT ===== */
const MobileTimeline = ({ bus }) => {
  const forwardStops = bus.forwardRoute.stops;
  const forwardIndex = bus.forwardRoute.currentStopIndex;

  const returnStops = bus.returnRoute.stops;
  const returnIndex = bus.returnRoute.currentStopIndex;

  const totalStops = forwardStops.length;
  const totalReturnStops = returnStops.length;

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

  const returnProgressPercent =
    totalReturnStops > 1
      ? ((totalReturnStops - 1 - returnIndex + (bus.progress || 0)) /
          (totalReturnStops - 1)) *
        100
      : 0;

  useEffect(() => {
    const t = setTimeout(() => setAnimatedPercent(progressPercent), 50);
    return () => clearTimeout(t);
  }, [progressPercent]);

  useEffect(() => {
    const t = setTimeout(
      () => setReturnAnimatedPercent(returnProgressPercent),
      50
    );
    return () => clearTimeout(t);
  }, [returnProgressPercent]);

  const nextStopMinutesFromLastReached = useMemo(() => {
    const lastReached = forwardStops[forwardIndex];
    const next = forwardStops[forwardIndex + 1];
    if (!lastReached?.eta || !next?.eta) return null;

    const lastReachedMinutes = timeToMinutes(lastReached.eta);
    const nextMinutes = timeToMinutes(next.eta);

    if (lastReachedMinutes == null || nextMinutes == null) return null;
    return Math.max(nextMinutes - lastReachedMinutes, 0);
  }, [forwardStops, forwardIndex]);

  const nextReturnMinutesFromLastReached = useMemo(() => {
    const lastReached = returnStops[returnIndex];
    const next = returnStops[returnIndex - 1];
    if (!lastReached?.eta || !next?.eta) return null;

    const lastReachedMinutes = timeToMinutes(lastReached.eta);
    const nextMinutes = timeToMinutes(next.eta);

    if (lastReachedMinutes == null || nextMinutes == null) return null;
    return Math.max(nextMinutes - lastReachedMinutes, 0);
  }, [returnStops, returnIndex]);

  const isMobile = window.innerWidth < 768;

  return (
    <Container>
      <Card>
        <CardBody style={{ padding: "10px" }}>
          <div className="container text-center mb-4">
            <div className="row align-items-center">
              <div className="col-12 col-md-4">
                <div className="route-title">Bus Route Timeline</div>
                <div className="route-sub">
                  ⏱ Next Stop:{" "}
                  <span className="text-primary">
                    {forwardStops[forwardIndex + 1]?.name || "Arrived"}
                  </span>
                  {nextStopMinutesFromLastReached !== null && (
                    <span className="ms-2 text-secondary">
                      ({nextStopMinutesFromLastReached} min)
                    </span>
                  )}
                </div>
              </div>

              <div className="col-12 col-md-4">
                <p style={{ fontSize: "15px" }}>
                  🚌 {bus.name}
                  <p style={{ fontSize: "20px" }}>
                    {bus.from} → {bus.to}
                  </p>
                </p>
              </div>

              <div className="col-12 col-md-4 d-flex justify-content-center gap-2">
                <div className="trip-tile">
                  <div className="trip-number">{bus.completedTrips}</div>
                  <div className="trip-label">T.DONE</div>
                </div>
                <div className="trip-divider">/</div>
                <div className="trip-tile">
                  <div className="trip-number">{bus.totalTrips}</div>
                  <div className="trip-label">📊TRIPS</div>
                </div>
              </div>
            </div>
          </div>

          <div className="route-wrapper zoom-center">
            {isMobile ? (
              <MobileTimeline bus={bus} />
            ) : (
              <>
                {/* ===== FORWARD VERTICAL TIMELINE ===== */}
                <div className="route-line vertical text-primary">
                  <div
                    className="route-line-progress vertical"
                    style={{ height: `${animatedPercent}%` }}
                  />
                  {!bus.isReturning && (
                    <div
                      className="bus-icon vertical"
                      style={{ top: `${animatedPercent}%` }}
                    >
                      <i className="fa-solid fa-bus" />
                    </div>
                  )}

                  {forwardStops.map((stop, i) => {
                    const rawTop = (i / (totalStops - 1)) * 100;
                    const isCompleted = i < forwardIndex;
                    const isActive = i === forwardIndex;
                    const isEnd = i === totalStops - 1;

                    return (
                      <React.Fragment key={`fwd-${i}`}>
                        <div
                          className={`stop-point vertical 
                          ${isCompleted ? "completed" : ""} 
                          ${isActive ? "active" : ""} 
                          ${isEnd ? "end" : ""}`}
                          style={{ top: `${rawTop}%` }}
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
                          className={`stop-card vertical 
                          ${isCompleted ? "completed" : ""} 
                          ${isActive ? "active" : ""} 
                          ${isEnd ? "end" : ""}`}
                          style={{ top: `${rawTop}%` }}
                        >
                          <div>{stop.name}</div>
                          <div>{stop.eta}</div>
                          <small>
                            Stop {i + 1} of {totalStops}
                          </small>
                        </div>
                      </React.Fragment>
                    );
                  })}
                </div>

                {/* ===== RETURN / HALT VERTICAL TIMELINE ===== */}
                <div className="route-line vertical text-warning mt-5">
                  <div
                    className="route-line-progress vertical"
                    style={{ height: `${returnAnimatedPercent}%` }}
                  />
                  {bus.isReturning && (
                    <div
                      className="bus-icon vertical"
                      style={{ top: `${returnAnimatedPercent}%` }}
                    >
                      <i className="fa-solid fa-bus" />
                    </div>
                  )}

                  {returnStops.map((stop, i) => {
                    const rawTop =
                      ((totalReturnStops - 1 - i) / (totalReturnStops - 1)) *
                      100;
                    const isCompleted = i > returnIndex;
                    const isActive = i === returnIndex;
                    const isEnd = i === totalReturnStops - 1;

                    return (
                      <React.Fragment key={`return-${i}`}>
                        <div
                          className={`halt-stop-point vertical
                          ${isCompleted ? "completed" : ""} 
                          ${isActive ? "active" : ""} 
                          ${isEnd ? "end" : ""}`}
                          style={{ top: `${rawTop}%` }}
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

                        <div
                          className={`halt-stop-card vertical 
                          ${isCompleted ? "completed" : ""} 
                          ${isActive ? "active" : ""} 
                          ${isEnd ? "end" : ""}`}
                          style={{ top: `${rawTop}%` }}
                        >
                          <div>{stop.name}</div>
                          <div>{stop.halt}</div>
                          <small>
                            Stop {i + 1} of {totalReturnStops}
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
  );
};

export default MobileTimeline;
